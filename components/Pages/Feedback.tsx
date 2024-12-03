'use client'

import { useEffect, useState } from 'react'

import { useFeedbackSubmittedContext } from '@/context/feedback'
import { performRequest } from '@/datocms/performRequest'
import { FEEDBACK_QUERY } from '@/datocms/queries'
import { Feedback as FeedbackModel } from '@/models/feedback'

import Form from '../Form/Form'
import LikeButton from '../LikeButton/LikeButton'

const Feedback = ({ title }: { title: string }) => {
  const [allFeedbacks, setAllFeedbacks] = useState<FeedbackModel[]>([])
  const { feedbackSubmitted } = useFeedbackSubmittedContext()

  useEffect(() => {
    async function fetchFeedbacks() {
      const {
        data: { allFeedbacks },
      } = await performRequest<{ data: { allFeedbacks: FeedbackModel[] } }>({
        query: FEEDBACK_QUERY,
      })
      setAllFeedbacks(allFeedbacks)
    }

    fetchFeedbacks()
  }, [feedbackSubmitted])

  return (
    <section className="mt-auto flex flex-col justify-center mb-16 lg:mb-0 lg:pl-40 pl-10 lg:pr-40 pr-10 pt-8 md:pt-16">
      <section className="mb-4">
        <h1 className="lg:text-4xl text-2xl text-center lg:mb-10 mb-6 text-black">
          {title}
        </h1>
      </section>
      <section className="lg:grid lg:grid-cols-5 xl:ml-40 xl:pr-40">
        <section className="lg:col-span-2">
          <article>
            <Form />
          </article>
        </section>
        <section className="lg:col-span-3 lg:grid overflow-y-scroll lg:h-80 pb-10 lg:pb-0">
          {allFeedbacks.map(feedback => (
            <div className="flex gap-4 items-center" key={feedback.id}>
              <div className="flex flex-row border-b-2 mb-2 pb-2 text-black w-full">
                <p className="font-bold text-black min-w-24">{feedback.naam}</p>
                <p>{feedback.opmerking}</p>
              </div>

              <LikeButton likes={feedback.likes} id={feedback.id} />
            </div>
          ))}
        </section>
      </section>
    </section>
  )
}

export default Feedback
