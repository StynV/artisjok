import Page from "@/components/Page/Page";
import { performRequest } from "@/datocms/performRequest";
import { KALENDER_CONTENT_QUERY, PAGE_CONTENT_QUERY } from "@/datocms/queries";
import { AllKalenders } from "@/models/allKalenders";
import { HomePagina } from "@/models/homePagina";

export default async function Home() {
  const { data: { homePagina } } = await performRequest<{ data: { homePagina: HomePagina } }>({ query: PAGE_CONTENT_QUERY })
  const { data: { allKalenders } } = await performRequest<{ data: { allKalenders: AllKalenders[] } }>({ query: KALENDER_CONTENT_QUERY })

  return (
    <main>
      <Page homePagina={homePagina} allKalenders={allKalenders} />
    </main>
  );
}
