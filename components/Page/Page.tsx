'use client'
import { HomePagina } from '@/models/homePagina';
import ReactPageScroller from 'react-page-scroller';
import YGWYS from "@/components/YGWYS/YGWYS";
import { render as dastRender } from 'datocms-structured-text-to-dom-nodes';
import getUniqueId from '@/helpers/getUniqueId';

const Page = ({homePagina}: {homePagina: HomePagina}) => {
    const nodes = dastRender(homePagina.infoTekst.value)

    const error = console.error;
    console.error = (...args: any) => {
        if (/defaultProps/.test(args[0])) return;
        error(...args);
    };

    return (
        <ReactPageScroller>
          <section>
            <header className='bg-no-repeat bg-cover bg-center md:pt-96 min-h-screen' style={{ backgroundImage: `url(${homePagina.achtergrond.url})` }}>
              <h1 className="md:text-6xl text-4xl md:w-1/2 pt-96 pb-48 md:pl-40 pl-10 text-white">{homePagina.titel}</h1>
            </header>
          </section>

          <section>
            <article className="mt-20 mb-20 md:pl-40 pl-10 pr-10 md:w-1/2 text-xl">
              {nodes?.map(node => <YGWYS key={getUniqueId()} html={node.outerHTML} />)} 
            </article>
          </section>

          <footer className="flex flex-col text-center">
            <p>{homePagina.adres}</p>
            <p>{homePagina.telefoonNummer}</p>
          </footer>
        </ReactPageScroller>
    )
}

export default Page