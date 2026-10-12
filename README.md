# Moonletter

An original interactive gift builder inspired by the idea of turning personal messages into shareable digital surprises. It includes six occasion themes, a guided editor, optional compressed photos, a recipient reveal, and browser-local gift history.

## Run locally

```bash
npm install
npm run dev
```

Build with `npm run build`. Vercel should use the Vite preset, `npm run build`, and the `dist` output directory.

## Current storage and payment model

No payment gateway is connected. Gifts can be created and shared for free. Drafts and history are kept in browser local storage. Gift details, including any selected photos, are compressed into the share URL itself. Anyone with that URL can read the gift; links have no server-side expiry or access control. Keep the full URL, because clearing browser storage removes the local history.

Before using this as a paid production service, add authenticated durable storage, short share IDs, privacy controls, a real contact channel, reviewed legal terms, and the payment provider.
