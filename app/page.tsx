import Page from "@/components/Page/Page";
import { performRequest } from "@/datocms";
import { HomePagina } from "@/models/homePagina";

const PAGE_CONTENT_QUERY = `
query MyQuery {
  homePagina {
    titel
    infoTekst {
      value
    }
    achtergrond {
      url
      alt
      height
      width
    }
    telefoonNummer
    adres
  }
}
`;

export default async function Home() {
  const { data: { homePagina } } = await performRequest<{ data: { homePagina: HomePagina } }>({query: PAGE_CONTENT_QUERY})

  return (
    <main>
      <Page homePagina={homePagina} />
    </main>
  );
}
