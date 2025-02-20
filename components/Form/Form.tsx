'use client'

import { useActionState } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import emailjs from 'emailjs-com'

import { State, submitForm } from '@/app/lib/actions'

const Form = () => {
  const initialState: State = { message: null, errors: {}, succes: false }

  const queryClient = useQueryClient()

  const [state, formAction] = useActionState<State, FormData>(
    async (prevState: State, formData: FormData) => {
      const response = await submitForm(prevState, formData)

      if (response.succes) {
        try {
          await emailjs.send(
            'service_ux0vih8',
            'template_ppfwqkl',
            {
              to_name: 'independentartmagazine@gmail.com',
              from_name: 'independentartmagazine@gmail.com',
              form_name: response?.data?.naam,
              message: response?.data?.opmerking,
            },
            'yZ0JwXzFm2XsODp6Q'
          )
        } catch (emailError) {
          console.error('Email sending failed:', emailError)
        }
      }

      await queryClient.invalidateQueries({ queryKey: ['feedbacks'] })

      return response
    },
    initialState
  )

  return (
    <form action={formAction} className="md:mr-10 mb-4">
      {state?.succes && (
        <div className="bg-green-500 p-4 mb-4 text-white">
          <p>Dankjewel voor jouw feedback.</p>
        </div>
      )}

      <section className="flex flex-col mb-2">
        <label className="mb-2 flex flex-row">
          <p className="text-black">Naam</p>
          <p className="text-red-600">*</p>
        </label>
        <input
          type="text"
          name="naam"
          className="border border-slate-300 mb-2 rounded-md p-2 text-black"
          aria-describedby="naam-error"
        />
      </section>

      <section id="naam-error" aria-live="polite" aria-atomic="true">
        {state?.errors?.naam &&
          state.errors.naam.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </section>

      <section className="flex flex-col mb-2">
        <label className="mb-2 flex flex-row">
          <p className="text-black">Opmerking</p>
          <p className="text-red-600">*</p>
        </label>
        <textarea
          name="opmerking"
          className="border border-slate-300 mb-2 rounded-md xl:p-2 lg:p-0 md:p-2 text-black"
          aria-describedby="opmerking-error"
        />
      </section>
      <section id="opmerking-error" aria-live="polite" aria-atomic="true">
        {state?.errors?.opmerking &&
          state.errors.opmerking.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </section>

      <button
        type="submit"
        className="bg-blue-500 text-white md:py-2 py-1 w-full rounded-md"
      >
        Verzend
      </button>
    </form>
  )
}

export default Form
