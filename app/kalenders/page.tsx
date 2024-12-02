import Kalenders from '@/components/Pages/Kalenders'
import { performRequest } from '@/datocms/performRequest'
import { KALENDER_CONTENT_QUERY, ONLY_LOGO_QUERY } from '@/datocms/queries'
import { AllKalenders } from '@/models/allKalenders'
import { HomePagina } from '@/models/homePagina'

export default async function KalendersPage() {
  const {
    data: { allKalenders },
  } = await performRequest<{ data: { allKalenders: AllKalenders[] } }>({
    query: KALENDER_CONTENT_QUERY,
  })

  const {
    data: { homePagina },
  } = await performRequest<{ data: { homePagina: HomePagina } }>({
    query: ONLY_LOGO_QUERY,
  })

  return (
    <Kalenders
      allKalenders={allKalenders}
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
