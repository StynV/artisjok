'use client'

import { useState } from 'react'

import KalenderItem from '@/components/KalenderItem/KalenderItem'
import getEmptyKalender from '@/helpers/getEmptyKalender'
import shuffleArray from '@/helpers/shuffleArray'
import { AllKalenders } from '@/models/allKalenders'
import { Image } from '@/models/image'

import Footer from '../Footer/Footer'

const KalendersPage = ({
  allKalenders,
  logo,
  facebook,
  facebookLogo,
  instagram,
  instagramLogo,
  linkedin,
  linkedinLogo,
}: {
  allKalenders: AllKalenders[]
  logo: Image
  facebook: string
  facebookLogo: Image
  instagram: string
  instagramLogo: Image
  linkedin: string
  linkedinLogo: Image
}) => {
  const [kalenders, setKalenders] = useState(() => {
    const randomSpots = new Array(6).fill(null).map(getEmptyKalender)
    const combined = allKalenders.concat(randomSpots)
    return shuffleArray(combined)
  })

  return (
    <>
      <section
        className={
          'bg-white min-h-screen grid grid-cols-4 grid-rows-3 gap-5 h-screen pt-40 lg:pr-40 pr-10 pb-20 lg:pl-40 pl-10'
        }
      >
        {kalenders.map((kalenderItem, index) => (
          <KalenderItem kalenderItem={kalenderItem} key={index} />
        ))}
      </section>
      <Footer
        fixed={false}
        logo={logo}
        facebook={facebook}
        facebookLogo={facebookLogo}
        instagram={instagram}
        instagramLogo={instagramLogo}
        linkedin={linkedin}
        linkedinLogo={linkedinLogo}
      />
    </>
  )
}

export default KalendersPage
