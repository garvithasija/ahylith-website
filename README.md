# Ahylith Bid Intelligence — GC Pilot

Static HTML, CSS, and JavaScript website. No build step or server runtime is required.

The website invites general contractor estimating and preconstruction teams to discuss the Bid Intelligence pilot. Product copy reflects the platform README, bid comparison frontend, bid intelligence types, and bid leveling routes. The comparison shown on the page is fictional illustrative data, not customer data or live analysis.

Pilot inquiries use an embedded, published Google Form linked to a Google Sheets response spreadsheet owned by ahylith@gmail.com. Required fields: full name, company name, work email, role. Optional: phone number and biggest bid-review challenge. Responders do not need to sign in; response summaries are disabled. Email remains a fallback. The static website does not store submissions itself.

The website files are in `dist/`. GitHub Actions publishes this directory to GitHub Pages on pushes to `main`, or when manually dispatched. In the GitHub repository, select **Settings → Pages → Source → GitHub Actions**.

The existing custom domain `www.ahylith.ai` is preserved in `dist/CNAME`.
