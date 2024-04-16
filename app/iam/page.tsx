import { performRequest } from "@/datocms/performRequest";
import { PAGE_CONTENT_QUERY } from "@/datocms/queries";
import { HomePagina } from "@/models/homePagina";
import IAM from "@/components/Pages/IAM";

export default async function IAMPage() {
    const { data: { homePagina } } = await performRequest<{ data: { homePagina: HomePagina } }>({ query: PAGE_CONTENT_QUERY })

    return (
        <IAM title={homePagina.iamTitel} covers={homePagina.covers} />
    )
}