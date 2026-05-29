// Config for the site-wide announcement bar (the P2P Learning Beta promo).
//
// Intentionally NOT tied to the events lifecycle: the beta test runs
// independently of any single event — the event is just the kickoff, and
// testing continues afterward. So the bar shows until you turn it off here.
//
// To manage it:
//   - Stop showing it:      set `enabled: false`
//   - Auto-hide on a date:  set `expiresAt` to an ISO datetime (else leave null)
//   - Re-show after edits:  bump `id` (a dismissed bar reappears for everyone)
export interface AnnouncementConfig {
  enabled: boolean;
  id: string;
  /** Optional ISO datetime (with timezone) to auto-hide the bar. null = no expiry. */
  expiresAt: string | null;
}

export const announcement: AnnouncementConfig = {
  enabled: true,
  id: 'p2p-beta-2026',
  expiresAt: null,
};

export const isAnnouncementActive = (now: number = Date.now()): boolean => {
  if (!announcement.enabled) return false;
  if (announcement.expiresAt) {
    const expiry = new Date(announcement.expiresAt).getTime();
    if (!Number.isNaN(expiry) && now > expiry) return false;
  }
  return true;
};
