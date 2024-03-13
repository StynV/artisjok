import YGWYS from "@/components/YGWYS/YGWYS";
import { performRequest } from "@/datocms";
import { HomePagina } from "@/models/homePagina";
import { render as dastRender } from 'datocms-structured-text-to-dom-nodes';

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

  const nodes = dastRender(homePagina.infoTekst.value)

  return (
    <main>
      <header className='bg-no-repeat bg-cover bg-center md:pt-96' style={{ backgroundImage: `url(${homePagina.achtergrond.url})` }}>
        <h1 className="md:text-6xl text-4xl pt-96 pb-48 md:pl-40 pl-10 text-white">{homePagina.titel}</h1>
      </header>
      
      <section>
        <article className="mt-20 mb-20 md:pl-40 pl-10 pr-10 md:w-1/2 text-xl">
          {nodes?.map(node => <YGWYS key={node.id} html={node.outerHTML} />)} 
        </article>
      </section>

      <footer className="flex flex-col text-center">
        <p>{homePagina.adres}</p>
        <p>{homePagina.telefoonNummer}</p>
      </footer>

    </main>
  );
}
