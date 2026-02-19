'use server'

import { z } from 'zod'
import { Resend } from 'resend'

const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

export type NewsletterState = {
  success?: boolean
  message?: string
  errors?: {
    email?: string[]
  }
}

export async function subscribeToNewsletter(
  prevState: NewsletterState,
  formData: FormData
): Promise<NewsletterState> {
  try {
    const validatedFields = newsletterSchema.safeParse({
      email: formData.get('email'),
    })

    if (!validatedFields.success) {
      return {
        success: false,
        errors: validatedFields.error.flatten().fieldErrors,
      }
    }

    const { email } = validatedFields.data

    const apiKey = process.env.RESEND_API_KEY
    const audienceId = process.env.RESEND_AUDIENCE_ID

    if (!apiKey || !audienceId) {
      console.error('Newsletter: RESEND_API_KEY or RESEND_AUDIENCE_ID not configured')
      return {
        success: false,
        message: 'Newsletter subscription is not available at this time. Please try again later.',
      }
    }

    const resend = new Resend(apiKey)

    const { error } = await resend.contacts.create({
      email,
      audienceId,
      unsubscribed: false,
    })

    if (error) {
      // Resend returns a specific error for duplicate contacts
      if (error.message?.toLowerCase().includes('already exists')) {
        return {
          success: true,
          message: "You're already subscribed! Thanks for your interest.",
        }
      }

      console.error('Newsletter subscription error:', error)
      return {
        success: false,
        message: 'Failed to subscribe. Please try again.',
      }
    }

    return {
      success: true,
      message: "You're subscribed! We'll keep you posted.",
    }
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return {
      success: false,
      message: 'Sorry, something went wrong. Please try again.',
    }
  }
}
