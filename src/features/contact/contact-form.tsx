'use client'

import { useActionState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { submitContactForm, type ContactFormState } from '@/app/actions/contact'
import { toast } from 'sonner'

const contactFormSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  subject: z.string().min(1, 'Please select a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactFormSchema>

const initialState: ContactFormState = {
  success: undefined,
  message: undefined,
  errors: undefined,
}

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  )

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      subject: '',
      message: '',
    },
  })

  // Handle server action response
  useEffect(() => {
    if (state.success === true) {
      toast.success(state.message || 'Message sent successfully!')
      reset()
    } else if (state.success === false && state.message) {
      toast.error(state.message)
    }
  }, [state, reset])

  const onSubmit = async (data: ContactFormData) => {
    const formData = new FormData()
    formData.append('name', `${data.firstName} ${data.lastName}`)
    formData.append('email', data.email)
    formData.append('company', data.company || '')
    formData.append('subject', data.subject)
    formData.append('message', data.message)

    formAction(formData)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">
            First name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="firstName"
            placeholder="John"
            {...register('firstName')}
            aria-invalid={errors.firstName ? 'true' : 'false'}
            disabled={isPending}
          />
          {errors.firstName && (
            <p className="text-sm text-destructive" role="alert">
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">
            Last name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="lastName"
            placeholder="Doe"
            {...register('lastName')}
            aria-invalid={errors.lastName ? 'true' : 'false'}
            disabled={isPending}
          />
          {errors.lastName && (
            <p className="text-sm text-destructive" role="alert">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">
          Email <span className="text-destructive">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="john.doe@company.com"
          {...register('email')}
          aria-invalid={errors.email ? 'true' : 'false'}
          disabled={isPending}
        />
        {errors.email && (
          <p className="text-sm text-destructive" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company</Label>
        <Input
          id="company"
          placeholder="Acme Inc."
          {...register('company')}
          disabled={isPending}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">
          Subject <span className="text-destructive">*</span>
        </Label>
        <Controller
          name="subject"
          control={control}
          render={({ field }) => (
            <Select
              value={field.value}
              onValueChange={field.onChange}
              disabled={isPending}
            >
              <SelectTrigger id="subject" aria-invalid={errors.subject ? 'true' : 'false'}>
                <SelectValue placeholder="Select a subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="product">Product Information</SelectItem>
                <SelectItem value="support">Technical Support</SelectItem>
                <SelectItem value="sales">Sales Inquiry</SelectItem>
                <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {errors.subject && (
          <p className="text-sm text-destructive" role="alert">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">
          Message <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="message"
          placeholder="How can we help you?"
          rows={5}
          {...register('message')}
          aria-invalid={errors.message ? 'true' : 'false'}
          disabled={isPending}
        />
        {errors.message && (
          <p className="text-sm text-destructive" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? 'Sending...' : 'Send Message'}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        By submitting this form, you agree to our{' '}
        <a
          href="/privacy"
          className="underline underline-offset-2 hover:text-primary"
        >
          Privacy Policy
        </a>
        .
      </p>
    </form>
  )
}
