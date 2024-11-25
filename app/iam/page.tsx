import { performRequest } from '@/datocms/performRequest'
import { IAM_PAGE_CONTENT_QUERY } from '@/datocms/queries'
import { HomePagina } from '@/models/homePagina'
import IAM from '@/components/Pages/IAM'

export default async function IAMPage() {
  const {
    data: { homePagina },
  } = await performRequest<{ data: { homePagina: HomePagina } }>({
    query: IAM_PAGE_CONTENT_QUERY,
  })

  return <IAM title={homePagina.iamTitel} covers={homePagina.covers} />
}
