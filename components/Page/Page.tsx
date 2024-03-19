'use client'
import { HomePagina } from '@/models/homePagina';
import ReactPageScroller from 'react-page-scroller';
import YGWYS from '@/components/YGWYS/YGWYS';
import { render as dastRender } from 'datocms-structured-text-to-dom-nodes';
import getUniqueId from '@/helpers/getUniqueId';
import { useState } from 'react';
import NavBar from '../NavBar/NavBar';

const Page = ({homePagina}: {homePagina: HomePagina}) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(0)

  const nodes = dastRender(homePagina.infoTekst.value)

  const error = console.error;
  console.error = (...args: any) => {
      if (/defaultProps/.test(args[0])) return;
      error(...args);
  };

  const text = 'md:pl-40 pl-10 text-xl text-black min-h-screen flex flex-col justify-center pr-10 md:w-1/2'
  const section = 'bg-white min-h-screen'

  const handleSectionChange = (number: number) => {
    setCurrentPageNumber(number)
  }

  const handleNavBarClick = (index: number) => {
    setCurrentPageNumber(index)
  }

  return (
    <>
      <NavBar handleNavBarClick={handleNavBarClick} />

      <ReactPageScroller
        customPageNumber={currentPageNumber}
        pageOnChange={handleSectionChange}
      >
        <header
          className='bg-no-repeat bg-cover bg-center md:pt-96 min-h-screen'
          style={{ backgroundImage: `url(${homePagina.achtergrond.url})` }}
        >
          <h1 className='md:text-6xl text-4xl md:w-1/2 pt-96 pb-48 md:pl-40 pl-10 text-white'>{homePagina.titel}</h1>
        </header>

        <section
          className={section}
          id="welcome"
        >
          <article className={text}>
            {nodes?.map(node => <YGWYS key={getUniqueId()} html={node.outerHTML} />)} 
          </article>
        </section>

        <section
          className={section}
          id="calendar"
        >
          <p className={text}>kalenderpagina</p>
        </section>

        <section
          className={`flex flex-col text-center text-xl ${section}`}
          id="contact"
        >
          <p className='pt-20 text-xl text-black'>{homePagina.naam}</p>
          <p className='text-xl text-black'>{homePagina.email}</p>
          <p className='text-xl text-black'>{homePagina.telefoonNummer}</p>            
        </section>
      </ReactPageScroller>
    </>
  )
}

export default Page