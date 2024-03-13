import { performRequest } from "@/datocms";
import { HomePagina } from "@/models/homePagina";

const PAGE_CONTENT_QUERY = `
query MyQuery {
  homePagina {
    titel
    achtergrond {
      url
      alt
      height
      width
    }
  }
}
`;

export default async function Home() {
  const { data: { homePagina } } = await performRequest<{ data: { homePagina: HomePagina } }>({query: PAGE_CONTENT_QUERY})

  return (
    <main>
      <header className='bg-no-repeat bg-cover bg-center pt-96' style={{ backgroundImage: `url(${homePagina.achtergrond.url})` }}>
        <h1 className="text-6xl pt-96 pb-48 pl-40 text-white">{homePagina.titel}</h1>
      </header>
    </main>
  );
}
