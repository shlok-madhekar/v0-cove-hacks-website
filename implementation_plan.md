# Implementation Plan - Fake Backend Transformation

**Goal**: Convert the application to use a completely fake, in-memory backend to allow running the demo without `.env` files, API keys, or external dependencies (Supabase, Resend).

## Proposed Changes

### Data Layer
- [NEW] `lib/mock-data.ts`
    - Create TypeScript interfaces for `Application` and `OTP`.
    - Implement an in-memory `applicationsStore` (Array) initialized with realistic mock data.
    - Implement an in-memory `otpStore` (Map) for handling verification flows.
    - Define a list of allowed admin emails (`MOCK_ADMIN_EMAILS`).

### Supabase Abstraction
- [MODIFY] `lib/supabase/client.ts`
    - Replace the real Supabase client with a dummy object that mimics the expected interface (auth, from, select, etc.) but does nothing or returns null.
- [MODIFY] `lib/supabase/server.ts`
    - Replace server-side client with a dummy implementation.
    - Ensure it still imports `cookies` to satisfy Next.js async component requirements, but mocks the actual DB calls.
- [MODIFY] `lib/supabase/middleware.ts`
    - Remove actual Supabase auth checks.
    - Pass through requests or implement simple cookie presence checks for admin routes if necessary.

### API Routes (Mock Implementation)
- [MODIFY] `app/api/admin/login/route.ts`
    - Validate against `MOCK_ADMIN_EMAILS`.
    - Generate fake OTP (e.g., fixed "123456" or console logged) instead of emailing.
    - Set a simple cookie session.
- [MODIFY] `app/api/admin/applications/route.ts`
    - `GET`: Return data from `applicationsStore`.
    - `PATCH`: Update status in `applicationsStore`.
- [MODIFY] `app/api/apply/send-otp/route.ts`
    - Store OTP in `otpStore`.
    - Log OTP to console for user visibility.
- [MODIFY] `app/api/apply/verify-otp/route.ts`
    - Validate against `otpStore`.
- [MODIFY] `app/api/apply/submit/route.ts`
    - Push new application to `applicationsStore`.
    - Handle duplicate email checks against the in-memory store.

## Verification Plan

### Automated Verification
- Run `bun run build` to ensure type safety with the new mock interfaces.
- Run `bun run lint` to check for any unused imports or errors.

### Manual Verification Scenarios
1. **Admin Login**:
   - Go to `/admin`.
   - Login with `admin@covehacks.org`.
   - Check server console for OTP (should be "123456" or logged).
   - Verify dashboard loads with mock data.
2. **Application Flow**:
   - Go to `/apply`.
   - Enter email.
   - Check console for OTP.
   - Complete form.
   - Submit.
3. **Admin Update**:
   - Refresh admin dashboard.
   - Verify new application appears.
   - Accept/Reject the application and verify status change.