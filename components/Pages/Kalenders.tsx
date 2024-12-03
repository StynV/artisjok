'use client'

import { useState } from 'react'

import KalenderItem from '@/components/KalenderItem/KalenderItem'
import getEmptyKalender from '@/helpers/getEmptyKalender'
import shuffleArray from '@/helpers/shuffleArray'
import { AllKalenders } from '@/models/allKalenders'

const KalendersPage = ({ allKalenders }: { allKalenders: AllKalenders[] }) => {
  const [kalenders, setKalenders] = useState(() => {
    const randomSpots = new Array(6).fill(null).map(getEmptyKalender)
    const combined = allKalenders.concat(randomSpots)
    return shuffleArray(combined)
  })

  return (
    <section
      className={
        'mt-auto grid grid-cols-4 grid-rows-3 gap-5 h-screen mb-16 lg:mb-0 pt-40 lg:pr-40 pr-10 pb-20 lg:pl-40 pl-10'
      }
    >
      {kalenders.map((kalenderItem, index) => (
        <KalenderItem kalenderItem={kalenderItem} key={index} />
      ))}
    </section>
  )
}

export default KalendersPage
