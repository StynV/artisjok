'use client'
import { HomePagina } from '@/models/homePagina';
import ReactPageScroller from 'react-page-scroller';
import { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import IAM from '../Pages/IAM';
import { Feedback } from '@/models/feedback';
import { useFeedbackSubmittedContext } from '@/context/feedback';
import { performRequest } from '@/datocms/performRequest';
import { AllKalenders } from '@/models/allKalenders';
import { FEEDBACK_QUERY } from '@/datocms/queries';
import KalenderItem from '../KalenderItem/KalenderItem';
import HomePage from '../Pages/HomePage';
import Image from 'next/image';
import YGWYS from '../YGWYS/YGWYS';
import { render as dastRender } from 'datocms-structured-text-to-dom-nodes';
import getUniqueId from '@/helpers/getUniqueId';
import Link from 'next/link';
import Icon from '../Icon/Icon';

const Page = ({ homePagina, allKalenders }: { homePagina: HomePagina, allKalenders: AllKalenders[] }) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(0)

  const handleSectionChange = (number: number) => {
    setCurrentPageNumber(number)
  }

  const handleNavBarClick = (index: number) => {
    setCurrentPageNumber(index)
  }

  const [allFeedbacks, setAllFeedbacks] = useState<Feedback[]>([])
  const { feedbackSubmitted } = useFeedbackSubmittedContext()
  
  useEffect(() => {
    async function fetchFeedbacks() {
      const { data: { allFeedbacks } } = await performRequest<{ data: { allFeedbacks: Feedback[] } }>({ query: FEEDBACK_QUERY })
      setAllFeedbacks(allFeedbacks)
    }

    fetchFeedbacks()
  }, [feedbackSubmitted])

  const error = console.error;
  console.error = (...args: any) => {
      if (/defaultProps/.test(args[0])) return;
      error(...args);
  };

  const section = 'bg-white min-h-screen'

  const nodes = dastRender(homePagina.adres.value)

  return (
    <>
      <NavBar handleNavBarClick={handleNavBarClick} />

      <ReactPageScroller
        customPageNumber={currentPageNumber}
        pageOnChange={handleSectionChange}
      >
        <HomePage section={section} homePagina={homePagina} />

        <section
          className={section}
        >
          <IAM value={homePagina.infoTekst.value} allFeedbacks={allFeedbacks} />
        </section>

        <section
          className={`${section} grid grid-cols-5 grid-rows-4 gap-5 h-screen pt-40 lg:pr-40 pr-10 lg:pb-40 pb-20 lg:pl-40 pl-10`}
        >
          {allKalenders.map(kalenderItem => (
            <KalenderItem kalenderItem={kalenderItem} key={kalenderItem.id} />
          ))}
        </section>

        <section
          className={`flex flex-col items-center text-xl ${section} md:pt-40`}
        >
          <Image
            src={homePagina.logo.url}
            alt={homePagina.logo.alt}
            height={homePagina.logo.height}
            width={homePagina.logo.width}
            priority
          />
          <div className='flex flex-row w-full'>
            <div className='md:flex-1 flex flex-col items-center'>
              <p className='pt-20 text-xl text-black'>{homePagina.titel}</p>
              {nodes?.map(node => <YGWYS className='text-xl text-black' key={getUniqueId()} html={node.outerHTML} />)}
              <p className='text-xl text-black'>{homePagina.email}</p>
            </div>
            <div className='md:flex-1 flex flex-row gap-5 items-center'>
              <Icon href={homePagina.facebook} src={homePagina.facebookLogo.url} alt={homePagina.facebookLogo.alt} />
              <Icon href={homePagina.instagram} src={homePagina.instagramLogo.url} alt={homePagina.instagramLogo.alt} />
              <Icon href={homePagina.linkedin} src={homePagina.linkedinLogo.url} alt={homePagina.linkedinLogo.alt} />
            </div>
          </div> 
        </section>
      </ReactPageScroller>
    </>
  )
}

export default Page