# Managing Events with the CMS

Events are managed through **Decap CMS** running locally. Because the site is
hosted on **GitHub Pages (a static host)**, content can't live in a database the
live site queries — it has to be **baked into the build**. So the workflow is:

```
edit in the CMS (local)  →  it writes JSON + image into the repo  →  commit  →  build + deploy
```

Every event feature on the site (the **Featured** hero card, the home-page
**notice modal**, and the navbar **badge**) is derived automatically from this
data. The moment a featured, upcoming event exists, all three appear; when it
ends, they disappear and the event moves to **Past Events** + the sliding banner.

## Where the data lives

- **Event content:** `src/content/events/<slug>.json` — one file per event.
- **Images:** `public/events/<file>` (referenced in JSON as `/events/<file>`).
- **Loader:** `src/data/events.ts` bundles every JSON file at build time
  (`import.meta.glob`). The filename is the event's `slug`.

You normally never edit these by hand — the CMS does it.

## Editing events locally

1. **Terminal A** — start the local CMS proxy (reads/writes your local files):
   ```bash
   npm run cms        # = npx decap-server  (listens on :8081)
   ```
2. **Terminal B** — start the site:
   ```bash
   npm run dev
   ```
3. Open the CMS: **http://localhost:5173/admin/**
4. Add or edit an event, upload its image, fill the fields, and **Publish**.
   This writes `src/content/events/<slug>.json` and saves the image into
   `public/events/`.
5. Verify on the site (http://localhost:5173/ and `/events`).
6. Ship it:
   ```bash
   git add -A
   git commit -m "Update events via CMS"
   npm run deploy     # builds and pushes to GitHub Pages
   ```

> `local_backend: true` in `public/admin/config.yml` is what lets the CMS edit
> local files with no login. Online (in-browser, no laptop) editing would need a
> GitHub OAuth provider, which is **not** set up here.

## Key fields

| Field | Effect |
|---|---|
| **Featured?** | Includes the event in the Featured section. |
| **Primary featured?** | Makes it *the* hero card + drives the navbar badge and the home-page notice modal. Only one upcoming event should have this. |
| **Starts at** | Date + start time. The **displayed date and time are derived from this** (and *Ends at*), so you only set the timing in one place. Also used for ordering. |
| **Ends at** | When the event finishes. The featured card, navbar badge, and notice all disappear — and the event moves to Past — **exactly** at this moment. Use the event's timezone (Ireland = `+01:00` summer, `+00:00` winter). |
| **Time override** | Optional. Only for special cases like `All Day`; overrides the derived time text. |
| **Date / Time (legacy)** | Free-text fallback for older events that don't use *Starts at / Ends at*. Leave blank when using the datetime fields. |

> Prefer **Starts at / Ends at** for new events — editing them updates the
> displayed date/time **and** the expiry together, so they can never drift.

## Notes & limits

- The featured/past cutover is computed from the **visitor's device clock**.
  `Ends at` is timezone-anchored so it flips at the event's true instant.
- Only the **navbar badge** updates live on an open tab (it has a timer); the
  Events page reflects changes on its next load/navigation.
- The `/admin` page is harmless in production (it can't save without OAuth), but
  it is only useful locally.
