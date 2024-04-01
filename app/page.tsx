import Page from "@/components/Page/Page";
import { performRequest } from "@/datocms/performRequest";
import { Feedback } from "@/models/feedback";
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

const FEEDBACK_QUERY = `
query MyQuery {
  allFeedbacks {
    naam
    opmerking
    id
  }
}
`

export default async function Home() {
  const { data: { homePagina } } = await performRequest<{ data: { homePagina: HomePagina } }>({query: PAGE_CONTENT_QUERY})
  const { data: { allFeedbacks } } = await performRequest<{ data: { allFeedbacks: Feedback[] } }>({query: FEEDBACK_QUERY})

  return (
    <main>
      <Page homePagina={homePagina} allFeedbacks={allFeedbacks} />
    </main>
  );
}
