import IAM from '@/components/Pages/IAM'
import { performRequest } from '@/datocms/performRequest'
import { IAM_PAGE_CONTENT_QUERY } from '@/datocms/queries'
import { HomePagina } from '@/models/homePagina'

export default async function IAMPage() {
  const {
    data: { homePagina },
  } = await performRequest<{ data: { homePagina: HomePagina } }>({
    query: IAM_PAGE_CONTENT_QUERY,
  })

  return (
    <IAM
      title={homePagina.iamTitel}
      covers={homePagina.covers}
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
