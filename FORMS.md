# Forms

Every form on the site (Contact, Support, Community) is the same component, `src/components/forms/ContactForm.tsx`. The site is a static website with no server of its own, so the form validates in the browser and sends straight to Formspree, which emails the submission to the recipient inbox.

```
ContactForm  ->  validate (zod, src/lib/contactSchema.ts)  ->  sendContact() (src/lib/sendContact.ts)  ->  Formspree  ->  email
```

## What the email contains

Subject: `[Tetradapt] – <reason> – <hospital or home> – <product>`

Fields: name, email (also the reply-to, so the recipient can reply directly), reason, who it is for, facility type or "for a family member", product, phone, organization, source page, then the message.

## The Formspree form

- Form ID: `xnpnvrby` (endpoint `https://formspree.io/f/xnpnvrby`). It lives in `src/content/site.ts` as `contacts.formspreeFormId`. It is not secret; Formspree form IDs are public by design.
- Free plan: 50 submissions a month, multiple recipients, a dashboard with submission history. Paid plans start at $15 a month for 200 submissions.
- In the form's Settings, reCAPTCHA must stay off (the site posts JSON, and a captcha would block it). Spam filtering stays on.

### Changing who receives leads

Open the form in Formspree, go to Settings, and change or add the recipient email. The new address gets one confirmation email that someone must click. Nothing on the website changes.

### Handing the form to the client

Formspree can transfer a form to another account from the form's Settings. Alternatively the client creates their own form and the new ID replaces `formspreeFormId` in `src/content/site.ts`, followed by a push to `main`.

## Local testing

`.env.local` sets `NEXT_PUBLIC_CONTACT_DRY_RUN=1`, which logs each submission to the browser console instead of sending it. Remove that line to send real submissions from your machine. The live site is built on DigitalOcean without `.env.local`, so it always sends for real.

## Spam

The form has a hidden `website` field that people never see and bots fill in. Submissions with it filled show a success message and are never sent. Formspree adds its own filtering on top.
