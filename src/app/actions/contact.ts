'use server'

import { z } from 'zod'
import { revalidatePath } from 'next/cache'

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  inquiryType: z.string().optional(),
})

export type ContactFormState = {
  success?: boolean
  message?: string
  errors?: {
    name?: string[]
    email?: string[]
    company?: string[]
    subject?: string[]
    message?: string[]
    inquiryType?: string[]
  }
}

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  try {
    const validatedFields = contactFormSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      inquiryType: formData.get('inquiryType'),
    })

    if (!validatedFields.success) {
      return {
        success: false,
        errors: validatedFields.error.flatten().fieldErrors,
      }
    }

    const { name, email, company, subject, message, inquiryType } = validatedFields.data

    // TODO: Implement actual email sending logic
    // For now, we'll simulate the form submission
    console.log('Contact form submission:', {
      name,
      email,
      company,
      subject,
      message,
      inquiryType,
      timestamp: new Date().toISOString(),
    })

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    revalidatePath('/contact')

    return {
      success: true,
      message: 'Thank you for your message! We\'ll get back to you soon.',
    }
  } catch (error) {
    console.error('Contact form error:', error)
    return {
      success: false,
      message: 'Sorry, there was an error sending your message. Please try again.',
    }
  }
}