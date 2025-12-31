/**
 * Centralized app URL utilities for consistent external app links.
 * Uses NEXT_PUBLIC_APP_URL environment variable with production fallback.
 */

export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || 'https://app.brokle.com'

export const APP_ROUTES = {
  SIGNUP: '/signup',
  SIGNIN: '/signin',
  DASHBOARD: '/',
} as const

/**
 * Get the full signup URL, optionally with a plan parameter.
 */
export function getSignupUrl(plan?: string): string {
  const base = `${APP_URL}${APP_ROUTES.SIGNUP}`
  return plan ? `${base}?plan=${plan}` : base
}

/**
 * Get the full signin URL.
 */
export function getSigninUrl(): string {
  return `${APP_URL}${APP_ROUTES.SIGNIN}`
}

/**
 * Get the dashboard URL.
 */
export function getDashboardUrl(): string {
  return APP_URL
}
