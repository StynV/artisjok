import Feedback from '@/components/Pages/Feedback'
import { performRequest } from '@/datocms/performRequest'
import { FEEDBACK_PAGE_CONTENT_QUERY } from '@/datocms/queries'
import { HomePagina } from '@/models/homePagina'

export default async function FeedbackPage() {
  const {
    data: { homePagina },
  } = await performRequest<{ data: { homePagina: HomePagina } }>({
    query: FEEDBACK_PAGE_CONTENT_QUERY,
  })

  return (
    <Feedback
      title={homePagina.feedbackTitel}
      logo={homePagina.logo}
      facebook={homePagina.facebook}
      facebookLogo={homePagina.facebookLogo}
      instagram={homePagina.instagram}
      instagramLogo={homePagina.instagramLogo}
      linkedin={homePagina.linkedin}
      linkedinLogo={homePagina.linkedinLogo}
    />
  )
}
