# Ahylith Bid Intelligence — GC Pilot

Static HTML, CSS, and JavaScript website. No build step or server runtime is required.

The website invites general contractor estimating and preconstruction teams to discuss the Bid Intelligence pilot. Product copy reflects the platform README, bid comparison frontend, bid intelligence types, and bid leveling routes. The comparison shown on the page is fictional illustrative data, not customer data or live analysis.

The About Us section introduces the two co-founders with links to their LinkedIn profiles and notes the family background in the construction industry. It deliberately leaves out the names of their current or former employers.

Pilot inquiries use a native modal form styled to match the site. On submit, `app.js` posts the fields directly to the published Google Form's response endpoint, so submissions land in the Google Sheets response spreadsheet owned by ahylith@gmail.com without a backend. Required fields: full name, company name, work email, role. Optional: phone number and biggest bid-review challenge. The field names in `dist/index.html` (`entry.<id>`) map to the Google Form questions; if questions are added, removed, or recreated in the Forms editor, update those IDs. The browser cannot read Google's response (the request is sent without CORS), so the success message confirms the request was sent, not that Google recorded it. A direct link to the Google Form and an email address remain as fallbacks. The static website does not store submissions itself.

The website files are in `dist/`. GitHub Actions publishes this directory to GitHub Pages on pushes to `main`, or when manually dispatched. In the GitHub repository, select **Settings → Pages → Source → GitHub Actions**.

The existing custom domain `www.ahylith.ai` is preserved in `dist/CNAME`.
