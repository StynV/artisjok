// app/lib/actions.ts
'use server'

import { buildClient } from '@datocms/cma-client-node'
import { z } from 'zod'

const FormSchema = z.object({
  naam: z.string().min(1, 'Naam is verplicht.'),
  opmerking: z.string().min(1, 'Opmerking is verplicht.'),
  likes: z.number().optional(),
})

const PostFeedback = FormSchema.omit({})

export type State = {
  errors: {
    naam?: string[]
    opmerking?: string[]
    likes?: string[]
  }
  message: string | null
  succes: boolean
  data?: {
    naam?: string
    opmerking?: string
  }
}

export const submitForm = async (
  state: State | undefined,
  formData: FormData
) => {
  const validatedFields = PostFeedback.safeParse({
    naam: formData.get('naam'),
    opmerking: formData.get('opmerking'),
    likes: 0,
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to post feedback.',
      succes: false,
    }
  }

  const { naam, opmerking } = validatedFields.data

  try {
    const client = buildClient({
      apiToken: process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN ?? '',
    })

    await client.items.create({
      item_type: { type: 'item_type', id: 'X-TC4MkLRPO0dvmH_7JmrQ' },
      naam,
      opmerking,
    })

    return {
      errors: {},
      message: 'Success!',
      succes: true,
      data: { naam, opmerking },
    }
  } catch (error) {
    console.error('Form submission failed:', error)
    return {
      errors: {},
      message: 'An error occurred while submitting the form.',
      succes: false,
    }
  }
}
