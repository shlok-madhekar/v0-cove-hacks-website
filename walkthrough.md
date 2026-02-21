# Walkthrough - Fake Backend Transformation

## Summary
The application has been successfully transformed to use a completely in-memory, fake backend. This allows the project to be run and demonstrated without any external dependencies (Supabase, Resend), environment variables, or API keys.

All data is now stored in mutable in-memory arrays and maps within `lib/mock-data.ts`. This data resets whenever the server restarts.

## Changes Implemented

### 1. Mock Data Layer (`lib/mock-data.ts`)
- Created `applicationsStore` with 8 realistic initial applications.
- Created `otpStore` to handle the verification flow for logging in and applying.
- Defined `MOCK_ADMIN_EMAILS` to restrict admin access to specific email addresses.
- Added support for `checked_in` status and QR code linking in `applicationsStore`.

### 2. New Pages & Features
- **Prospectus (`/prospectus`)**: Redesigned to match the brand identity with a clean comparison table for tiers. Now uses **native PDF generation** (`@react-pdf/renderer`) for a high-quality, dark-mode downloadable document. Fixed font loading issues by using standard fonts and updated logo background to Sky Blue (`#7BA4D9`).
- **Admin Check-In**: Added a "Check In" tab to the admin dashboard. Supports searching by name, email, or "scanning" a QR code (simulated by typing the ID).
- **Discord Flow**: Refined to match the site's blue theme (`#6B9BD2`), removing jarring third-party colors while keeping the recognizable logo. Simulates a bot verifying the code automatically.
- **Phone Validation**: The application form now enforces (XXX) XXX-XXXX formatting for phone numbers.

### 3. Supabase Abstraction
- **Client (`lib/supabase/client.ts`)**: Replaced with a dummy object that returns null/empty responses to prevent errors in client-side components.
- **Server (`lib/supabase/server.ts`)**: Replaced with a dummy object for server-side operations.
- **Middleware (`lib/supabase/middleware.ts`)**: Removed actual auth checks; the middleware now simply passes the request through. Authentication logic is handled purely by the API routes checking for the presence of a mock session cookie.

### 3. API Routes
- **Admin Login**:
  - Accepts emails defined in `MOCK_ADMIN_EMAILS` (e.g., `admin@covehacks.org`).
  - "Sends" an OTP by logging it to the server console.
  - **Hardcoded OTP**: You can use `123456` to log in immediately without checking the console.
- **Applications**:
  - `GET`: Fetches from the in-memory store.
  - `PATCH`: Updates status in the in-memory store.
- **Check-In**:
  - `POST /api/admin/check-in`: Marks an accepted applicant as checked in.
- **Apply Flow**:
  - `send-otp`: Generates a code and logs it to the console (and stores it in memory).
  - `verify-otp`: Validates the code against the in-memory store. Also accepts `123456` as a universal test code if the flow gets stuck.
  - `submit`: Saves the new application to the in-memory store.

## How to Test

### Admin Dashboard
1. Navigate to `/admin`.
2. Enter email: `admin@covehacks.org`.
3. Click "Send login code".
4. Enter code: `123456`.
5. You should see the dashboard with mock data.
6. **Check-In**: Click the "Check In" tab in the header.
   - Search for `David Kim` (an accepted applicant in mock data) or use their email.
   - Click "Check In Attendee".
   - Verify their status updates to "Checked In".

### Application Form
1. Navigate to `/apply`.
2. Enter any valid email address.
3. Click "Send code".
4. Check your server terminal for the code (e.g., `[MOCK OTP] Code for ...: 582931`) OR just use `123456` if you are lazy.
5. Complete the form (try entering a phone number to see formatting).
6. Submit and see the new Discord verification flow (it will auto-verify after ~8 seconds).

### Sponsorship Prospectus
1. Navigate to `/prospectus`.
2. View the sponsorship tiers and updated stats (200+ projects, $25k+ prizes).
3. Click the floating "Download PDF" button to generate a native PDF document.

## Verification
- **Build**: `bun run build` completed successfully, confirming the application compiles with the new mock structures.