export interface EventItem {
  /** Stable identifier, derived from the content filename (set by the CMS). */
  slug: string;
  title: string;
  category: string;
  // Resolved display strings. The loader fills these from startsAt/endsAt when
  // present, otherwise from the legacy free-text fields below.
  date: string;
  time: string;
  // Machine-readable timing (ISO 8601 with timezone offset). When set, these are
  // the single source of truth: the display date/time are derived from them and
  // the "is this event over" cutover is exact to the minute.
  startsAt?: string;
  endsAt?: string;
  /** Optional display override for the time, e.g. "All Day". */
  timeOverride?: string;
  location: string;
  description: string;
  fullDescription?: string;
  image: string;
  emoji?: string;
  attendees: number;
  target: number;
  raised: number;
  featured: boolean;
  primaryFeatured?: boolean;
  highlights?: string[];
  audience?: string;
  fundedBy?: string;
  contact?: string;
  social?: {
    facebook?: string;
  };
  theme?: string;
}

// Shape of the raw JSON authored in the CMS: date/time may be absent when
// startsAt/endsAt are used instead.
type RawEventData = Omit<EventItem, 'slug' | 'date' | 'time'> & {
  date?: string;
  time?: string;
};

// --- Display formatting from ISO datetimes -------------------------------
// The ISO strings carry the event's local wall-clock time and its offset
// (e.g. "2026-05-30T15:00:00+01:00"). We format the *displayed* date/time from
// the wall-clock parts directly, so they read the same for every visitor
// regardless of their own timezone. Absolute instants (for cutover/sorting)
// still go through `new Date(...)`, which honours the offset.

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

interface IsoParts {
  year: number;
  month: number; // 1-12
  day: number;
  hour: number;
  minute: number;
}

const parseIsoParts = (iso: string): IsoParts | null => {
  const m = iso.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/);
  if (!m) return null;
  return { year: +m[1], month: +m[2], day: +m[3], hour: +m[4], minute: +m[5] };
};

const formatDisplayDate = (iso: string): string => {
  const p = parseIsoParts(iso);
  if (!p) return '';
  const weekday = WEEKDAYS[new Date(Date.UTC(p.year, p.month - 1, p.day)).getUTCDay()];
  return `${weekday} ${p.day} ${MONTHS[p.month - 1]} ${p.year}`;
};

const formatClock = (p: IsoParts): string => {
  const period = p.hour >= 12 ? 'PM' : 'AM';
  const hour12 = p.hour % 12 === 0 ? 12 : p.hour % 12;
  const minute = p.minute.toString().padStart(2, '0');
  return `${hour12}:${minute} ${period}`;
};

const formatDisplayTime = (startIso: string, endIso?: string): string => {
  const start = parseIsoParts(startIso);
  if (!start) return '';
  if (!endIso) return formatClock(start);
  const end = parseIsoParts(endIso);
  return end ? `${formatClock(start)} – ${formatClock(end)}` : formatClock(start);
};

// --- Load + normalize content --------------------------------------------
// Events are authored via Decap CMS (see public/admin) as one JSON file per
// event under src/content/events/. Vite bundles them at build time, so editing/
// adding a file and rebuilding is all that's needed — the filename is the slug.
const modules = import.meta.glob<{ default: RawEventData }>(
  '../content/events/*.json',
  { eager: true }
);

export const events: EventItem[] = Object.entries(modules).map(([path, mod]) => {
  const slug = path.split('/').pop()!.replace(/\.json$/, '');
  const raw = mod.default;

  const date = raw.startsAt ? formatDisplayDate(raw.startsAt) : (raw.date ?? '');
  const time = raw.timeOverride
    ?? (raw.startsAt ? formatDisplayTime(raw.startsAt, raw.endsAt) : (raw.time ?? ''));

  return { ...raw, slug, date, time };
});

export const parseEventDate = (dateString: string): Date | null => {
  const normalizedDate = dateString.trim();
  // "Sat 1 Nov 2025" format
  const format1 = /^(\w{3})\s+(\d{1,2})\s+(\w{3})\s+(\d{4})$/;
  // "November 20, 2024" or "October 17, 2025" format
  const format2 = /^(\w+)\s+(\d{1,2}),?\s+(\d{4})$/;

  let match = normalizedDate.match(format1);
  if (match) {
    const [, , day, month, year] = match;
    const monthNames = {
      'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
      'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
    };
    const monthIndex = monthNames[month as keyof typeof monthNames];
    if (monthIndex !== undefined) {
      return new Date(parseInt(year), monthIndex, parseInt(day));
    }
  }

  match = normalizedDate.match(format2);
  if (match) {
    const [, month, day, year] = match;
    const monthNames = {
      'January': 0, 'February': 1, 'March': 2, 'April': 3, 'May': 4, 'June': 5,
      'July': 6, 'August': 7, 'September': 8, 'October': 9, 'November': 10, 'December': 11
    };
    const monthIndex = monthNames[month as keyof typeof monthNames];
    if (monthIndex !== undefined) {
      return new Date(parseInt(year), monthIndex, parseInt(day));
    }
  }

  const fallbackDate = new Date(normalizedDate);
  return Number.isNaN(fallbackDate.getTime()) ? null : fallbackDate;
};

const getEventTimestamp = (event: EventItem): number | null => {
  // Prefer the precise start instant when available.
  if (event.startsAt) {
    const t = new Date(event.startsAt).getTime();
    if (!Number.isNaN(t)) return t;
  }
  const parsedDate = parseEventDate(event.date);
  return parsedDate ? parsedDate.getTime() : null;
};

export const isEventPast = (event: EventItem): boolean => {
  // When a precise end datetime is set, the event is "past" the moment it ends.
  if (event.endsAt) {
    const ends = new Date(event.endsAt);
    if (!Number.isNaN(ends.getTime())) {
      return Date.now() > ends.getTime();
    }
  }

  // Otherwise fall back to date-only granularity (past once the day is over).
  const eventDate = parseEventDate(event.date);
  if (!eventDate) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset time to start of day for comparison
  return eventDate < today;
};

const compareByDate = (a: EventItem, b: EventItem, direction: 'asc' | 'desc'): number => {
  const timeA = getEventTimestamp(a);
  const timeB = getEventTimestamp(b);

  if (timeA === null && timeB === null) return 0;
  if (timeA === null) return 1;
  if (timeB === null) return -1;

  return direction === 'asc' ? timeA - timeB : timeB - timeA;
};

export const getUpcomingEvents = (): EventItem[] =>
  events.filter(event => !isEventPast(event)).sort((a, b) => compareByDate(a, b, 'asc'));

export const getPastEvents = (): EventItem[] =>
  events.filter(event => isEventPast(event)).sort((a, b) => compareByDate(a, b, 'desc'));

// The single featured event used by the navbar badge and the home-page notice
// modal: the soonest upcoming event flagged primaryFeatured, otherwise the
// soonest upcoming event flagged featured, otherwise null.
export const getPrimaryFeaturedEvent = (): EventItem | null => {
  const upcoming = getUpcomingEvents();
  return (
    upcoming.find(event => event.primaryFeatured) ||
    upcoming.find(event => event.featured) ||
    null
  );
};
