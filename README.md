# PRAVAH — Contemplative Living Companion

Pravah is a premium, beautifully-designed contemplative companion web application featuring 22 meditative rooms, ambient soundscapes, habit trackers, streak rewiring, and daily reading sparks. 

---

## 🚀 Cloud Setup & Migration (Vercel + Firebase)

The application has been migrated from local SQLite and a local Express server to a cloud-native architecture powered by **Next.js Serverless API routes**, **Firebase Authentication**, and **Firebase Firestore**.

### 1. Local Prerequisites & Installation

```bash
pnpm install
```

### 2. Configure Firebase Environment Variables

Create a `.env.local` file in the root of the project and populate it with your Firebase configurations:

```env
# Firebase Client SDK Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id

# Firebase Admin SDK Configuration (for Serverless API Routes)
FIREBASE_ADMIN_PROJECT_ID=your-project-id
FIREBASE_ADMIN_CLIENT_EMAIL=firebase-adminsdk-xxxxx@your-project-id.iam.gserviceaccount.com
FIREBASE_ADMIN_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n"
```

> [!IMPORTANT]
> The `FIREBASE_ADMIN_PRIVATE_KEY` must have literal `\n` characters preserved. When adding this to Vercel, wrap the entire private key in double quotes in Vercel's UI dashboard.

### 3. Seed Firestore Database

> [!WARNING]
> Run `pnpm seed` **once** after setting up your Firebase credentials and `.env.local` file. 
> Without seeding, all 22 rooms will show empty content on first launch.

```bash
pnpm seed
```
This script populates the static collections inside Firestore with pre-defined content items using batch writes (capped at 500 documents per batch to avoid Firestore limits).

### 4. Running the Development Server

To start the Next.js development server locally:

```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### 5. Verified Sender Domain for Reset Emails

> [!IMPORTANT]
> For the Forgot Password feature (`sendPasswordResetEmail()`) to deliver emails reliably to users, the Firebase sender domain needs to be verified in the **Firebase Console** → **Authentication** → **Templates** (select Password reset, edit templates, and follow instructions to customize/verify your sender domain).

---

## ☁️ Deployment on Vercel

### Step 1: Push Code to Git
Make sure that the static assets are pushed to your repository:
- **Critical:** Ensure `public/paintings/` is committed to Git and NOT listed in `.gitignore`. These are required for displaying paintings in the gallery rooms on live deployments.
- Verify tracking with: `git status public/paintings/`

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and import your Git repository.
2. Under **Project Settings** → **Environment Variables**, add all configurations:
   - Add all `NEXT_PUBLIC_FIREBASE_*` variables.
   - Add all `FIREBASE_ADMIN_*` variables.
   - Set them for all three environments: **Production**, **Preview**, and **Development**.
   - Make sure to paste `FIREBASE_ADMIN_PRIVATE_KEY` with literal `\n` characters preserved (wrap the entire value in double quotes in Vercel's input field).
3. Click **Deploy**.

---

## 🛠️ Architecture Overview

- **Frontend:** Next.js (App Router) + Framer Motion + Vanilla CSS design tokens.
- **Database:** Firebase Firestore (syncs moods, habits, journal entry, and sankalps in real-time between devices).
- **Authentication:** Passwordless guest / email login returning Firebase Custom Tokens for securing client sockets.
- **PWA support:** Configured via `next-pwa` for offline assets caching and browser installer settings.
