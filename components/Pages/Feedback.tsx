'use client'

import { useEffect, useState } from 'react'

import { useFeedbackSubmittedContext } from '@/context/feedback'
import { performRequest } from '@/datocms/performRequest'
import { FEEDBACK_QUERY } from '@/datocms/queries'
import { Feedback as FeedbackModel } from '@/models/feedback'
import { Image } from '@/models/image'

import Footer from '../Footer/Footer'
import Form from '../Form/Form'
import LikeButton from '../LikeButton/LikeButton'

const Feedback = ({
  title,
  logo,
  facebook,
  facebookLogo,
  instagram,
  instagramLogo,
  linkedin,
  linkedinLogo,
}: {
  title: string
  logo: Image
  facebook: string
  facebookLogo: Image
  instagram: string
  instagramLogo: Image
  linkedin: string
  linkedinLogo: Image
}) => {
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
    <>
      <section className="md:min-h-screen bg-white pt-24 md:pt-0 md:pl-40 pl-10 md:pr-40 pr-10 flex flex-col justify-center">
        <section className="mb-4">
          <h1 className="lg:text-4xl text-2xl text-center md:mb-10 mb-6 text-black">
            {title}
          </h1>
        </section>
        <section className="lg:grid lg:grid-cols-5 xl:ml-40 xl:pr-40">
          <section className="lg:col-span-2">
            <article>
              <Form />
            </article>
          </section>
          <section className="lg:col-span-3 lg:grid overflow-y-scroll md:h-80 pb-10 md:pb-0">
            {allFeedbacks.map(feedback => (
              <div className="flex gap-4 items-center" key={feedback.id}>
                <div className="flex flex-row border-b-2 mb-2 pb-2 text-black w-full">
                  <p className="font-bold text-black min-w-24">
                    {feedback.naam}
                  </p>
                  <p>{feedback.opmerking}</p>
                </div>

                <LikeButton likes={feedback.likes} id={feedback.id} />
              </div>
            ))}
          </section>
        </section>
      </section>

      <Footer
        fixed={true}
        logo={logo}
        facebook={facebook}
        facebookLogo={facebookLogo}
        instagram={instagram}
        instagramLogo={instagramLogo}
        linkedin={linkedin}
        linkedinLogo={linkedinLogo}
      />
    </>
  )
}

export default Feedback
