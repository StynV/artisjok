'use client'

import KalenderItem from '@/components/KalenderItem/KalenderItem'
import getEmptyKalender from '@/helpers/getEmptyKalender'
import shuffleArray from '@/helpers/shuffleArray'
import { AllKalenders } from '@/models/allKalenders'
import { useState } from 'react'

const KalendersPage = ({ allKalenders }: { allKalenders: AllKalenders[] }) => {
  const [kalenders, setKalenders] = useState(() => {
    const randomSpots = new Array(6).fill(null).map(getEmptyKalender)
    const combined = allKalenders.concat(randomSpots)
    return shuffleArray(combined)
  })

  return (
    <section
      className={
        'bg-white min-h-screen grid grid-cols-4 grid-rows-3 gap-5 h-screen pt-40 lg:pr-40 pr-10 pb-20 lg:pl-40 pl-10'
      }
    >
      {kalenders.map((kalenderItem, index) => (
        <KalenderItem kalenderItem={kalenderItem} key={index} />
      ))}
    </section>
  )
}

export default KalendersPage
