'use client'
import { HomePagina } from '@/models/homePagina';
import ReactPageScroller from 'react-page-scroller';
import YGWYS from '@/components/YGWYS/YGWYS';
import { render as dastRender } from 'datocms-structured-text-to-dom-nodes';
import getUniqueId from '@/helpers/getUniqueId';

const Page = ({homePagina}: {homePagina: HomePagina}) => {
    const nodes = dastRender(homePagina.infoTekst.value)

    const error = console.error;
    console.error = (...args: any) => {
        if (/defaultProps/.test(args[0])) return;
        error(...args);
    };

    const text = 'pt-20 md:pl-40 pl-10 text-xl'
    const section = 'bg-white min-h-screen'

    return (
        <ReactPageScroller>
          <section>
            <header className='bg-no-repeat bg-cover bg-center md:pt-96 min-h-screen' style={{ backgroundImage: `url(${homePagina.achtergrond.url})` }}>
              <h1 className='md:text-6xl text-4xl md:w-1/2 pt-96 pb-48 md:pl-40 pl-10 text-white'>{homePagina.titel}</h1>
            </header>
          </section>

          <section className={section}>
            <article className={`${text} mb-20 pr-10 md:w-1/2`}>
              {nodes?.map(node => <YGWYS key={getUniqueId()} html={node.outerHTML} />)} 
            </article>
          </section>

          <section className={section}>
            <p className={text}>kalenderpagina</p>
          </section>

          <section className={`flex flex-col text-center text-xl ${section}`}>
            <p className='pt-20 text-xl'>{homePagina.naam}</p>
            <p className='text-xl'>{homePagina.email}</p>
            <p className='text-xl'>{homePagina.telefoonNummer}</p>            
          </section>
        </ReactPageScroller>
    )
}

export default Page