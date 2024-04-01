'use client'
import { HomePagina } from '@/models/homePagina';
import ReactPageScroller from 'react-page-scroller';
import { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Image from 'next/image';
import IAM from '../Pages/IAM';

const Page = ({homePagina}: {homePagina: HomePagina}) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(0)


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
          className={`${section} flex justify-center items-center`}
        >
          <Image
            src={homePagina.logo.url}
            alt={homePagina.logo.alt}
            height={homePagina.logo.height}
            width={homePagina.logo.width}
            priority
          />
        </header>

        <section
          className={section}
        >
          <IAM value={homePagina.infoTekst.value} />
        </section>

        <section
          className={section}
        >
          <p className={text}>kalenderpagina</p>
        </section>

        <section
          className={`flex flex-col text-center text-xl ${section}`}
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