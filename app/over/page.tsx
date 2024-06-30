import YGWYS from "@/components/YGWYS/YGWYS";
import { performRequest } from "@/datocms/performRequest";
import { OVER_PAGE_CONTENT_QUERY } from "@/datocms/queries";
import { HomePagina } from "@/models/homePagina";

export default async function Over() {
  const {
    data: { homePagina },
  } = await performRequest<{ data: { homePagina: HomePagina } }>({
    query: OVER_PAGE_CONTENT_QUERY,
  });

  return <YGWYS homePagina={homePagina} />;
}
