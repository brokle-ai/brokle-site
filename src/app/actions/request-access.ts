'use server'

import { z } from 'zod'
import { revalidatePath } from 'next/cache'

const requestAccessSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(2, 'Company name is required'),
  jobTitle: z.string().min(2, 'Job title is required'),
  companySize: z.string().min(1, 'Please select company size'),
  useCase: z.string().min(10, 'Please describe your use case (minimum 10 characters)'),
})

export type RequestAccessState = {
  success?: boolean
  message?: string
  errors?: {
    name?: string[]
    email?: string[]
    company?: string[]
    jobTitle?: string[]
    companySize?: string[]
    useCase?: string[]
  }
}

export async function submitRequestAccess(
  prevState: RequestAccessState,
  formData: FormData
): Promise<RequestAccessState> {
  try {
    const validatedFields = requestAccessSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      jobTitle: formData.get('jobTitle'),
      companySize: formData.get('companySize'),
      useCase: formData.get('useCase'),
    })

    if (!validatedFields.success) {
      return {
        success: false,
        errors: validatedFields.error.flatten().fieldErrors,
      }
    }

    const { name, email, company, jobTitle, companySize, useCase } = validatedFields.data

    // TODO: Implement actual database storage and email notification
    console.log('Request access submission:', {
      name,
      email,
      company,
      jobTitle,
      companySize,
      useCase,
      timestamp: new Date().toISOString(),
    })

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    revalidatePath('/request-access')

    return {
      success: true,
      message: 'Thanks for your interest! We\'ve added you to our early access list and will contact you soon.',
    }
  } catch (error) {
    console.error('Request access error:', error)
    return {
      success: false,
      message: 'Sorry, there was an error processing your request. Please try again.',
    }
  }
}