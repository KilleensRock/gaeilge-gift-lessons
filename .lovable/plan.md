

# Codebase Cleanup Plan

Based on the image you shared, here is the plan to remove unused files and simplify the codebase.

## What will be removed

| Item | Reason | Impact |
|------|--------|--------|
| `src/contexts/AuthContext.tsx` | No auth needed | Remove file |
| `src/pages/Auth.tsx` | No login page needed | Remove file |
| `src/pages/ResetPassword.tsx` | No passwords | Remove file |
| `src/components/StPatricksOffer.tsx` | Outdated seasonal | Remove file |
| `src/components/GiftSection.tsx` | Simplify for now | Remove file |
| `src/App.css` | Pure boilerplate | Remove file |
| Navbar login button | No auth | Simplify Navbar |
| `supabase/` edge functions | Replaced by Stripe | Remove payment functions |
| `@tanstack/react-query` | No async data fetching needed | Remove from package.json + App.tsx |

## Changes to existing files

1. **`src/App.tsx`** — Remove `AuthProvider` wrapper, `QueryClientProvider`, imports for Auth/ResetPassword pages, those routes, and the `App.css` import. Keep payment success/canceled routes and basic structure.

2. **`src/components/Navbar.tsx`** — Remove auth dependency. Show just the brand name, no sign-in/sign-out button.

3. **`src/pages/Index.tsx`** — Remove `StPatricksOffer` and `GiftSection` imports and usage.

4. **`src/components/PricingSection.tsx`** — Remove `useAuth` and auth-gated purchase flow. The buy button can link directly to Stripe or remain as-is without auth check.

5. **`src/components/HeroSection.tsx`** — Already uses Supabase directly for newsletter (no auth dependency), so no changes needed here.

6. **`package.json`** — Remove `@tanstack/react-query` dependency.

## Files deleted (7 files)
- `src/contexts/AuthContext.tsx`
- `src/pages/Auth.tsx`
- `src/pages/ResetPassword.tsx`
- `src/components/StPatricksOffer.tsx`
- `src/components/GiftSection.tsx`
- `src/App.css`
- `supabase/functions/create-payment/index.ts`
- `supabase/functions/create-stpatricks-payment/index.ts`

## What stays
- Newsletter subscription (HeroSection + database table)
- Stripe payment success/canceled pages
- All UI components, styling, and remaining sections

