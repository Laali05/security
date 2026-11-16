# A Little Message — safe security demo

A static, GitHub Pages-ready interaction demo. It displays a personal-message-style landing page, a loading transition, and a clear explanation that no account was accessed.

## What it does
- Shows an “I miss you” landing page and a Next button.
- Plays a short loading animation.
- Displays local-only visit and button-click counters.
- Links to the official Google and Instagram sign-in pages.

## What it does NOT do
- It does not imitate provider login pages.
- It does not collect passwords, verification codes, cookies, or session tokens.
- It does not sign anyone in or access any account.
- It does not transmit analytics to a server. Counters stay in the visitor's browser.

## Publish with GitHub Pages
1. Create a new GitHub repository.
2. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. Wait for GitHub Pages to publish and use the URL shown in the Pages settings.

## Testing
Open the published URL on your own device, press **Next**, and confirm that the demo result appears. The counters are stored in that browser only; they are not a cross-device visitor dashboard.

## About real account authentication
Real Google or Instagram authentication requires a registered developer application, configured redirect URLs, and the provider's official OAuth flow. A static GitHub Pages site cannot securely hold a client secret. Never put client secrets in browser JavaScript. Use the provider's official developer documentation and a secure backend for any real OAuth integration.
