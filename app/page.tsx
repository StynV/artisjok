import Page from "@/components/Page/Page";
import { performRequest } from "@/datocms/performRequest";
import { HomePagina } from "@/models/homePagina";

const PAGE_CONTENT_QUERY = `
query MyQuery {
  homePagina {
    logo {
      url
      alt
      height
      width
    }
    infoTekst {
      value
    }
    telefoonNummer
    naam
    email
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
