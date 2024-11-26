'use client'

import { Image as ImageModel } from '@/models/image'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import Footer from '../Footer/Footer'

const IAM = ({ title, covers }: { title: string; covers: ImageModel[] }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const [scrollAtStart, setScrollAtStart] = useState(true)
  const [scrollAtEnd, setScrollAtEnd] = useState(false)

  const isMobile = useMediaQuery({ maxWidth: 768 })

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        setScrollAtStart(containerRef.current.scrollLeft === 0)
        setScrollAtEnd(
          containerRef.current.scrollLeft + containerRef.current.clientWidth ===
            containerRef.current.scrollWidth
        )
      }
    }

    containerRef.current?.addEventListener('scroll', handleScroll)

    return () => {
      containerRef.current?.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleBackClick = () => {
    if (containerRef.current) {
      if (isMobile) {
        containerRef.current.scrollBy({
          left: -320,
          behavior: 'smooth',
        })
      } else {
        containerRef.current.scrollBy({
          left: -350,
          behavior: 'smooth',
        })
      }
    }
  }

  const handleNextClick = () => {
    if (containerRef.current) {
      if (isMobile) {
        containerRef.current.scrollBy({
          left: 320,
          behavior: 'smooth',
        })
      } else {
        containerRef.current.scrollBy({
          left: 350,
          behavior: 'smooth',
        })
      }
    }
  }

  const handleWheel = (event: any) => {
    const div = containerRef.current

    if (
      div &&
      event.deltaX !== 0 &&
      Math.abs(event.deltaX) > Math.abs(event.deltaY)
    ) {
      event.stopPropagation()
    }
  }

  const btnStyling =
    'p-2 pl-4 pr-4 border-gray-500 border-2 rounded-full w-10 h-10 flex justify-center items-center'

  return (
    <>
      <section className="min-h-screen bg-white md:pl-40 pl-10 md:pr-40 pr-10 flex flex-col justify-center">
        <section className="mb-4">
          <h1 className="md:text-9xl lg:text-4xl text-2xl text-center md:mb-10 mb-6 text-black">
            {title}
          </h1>
          <div className="wrapper flex justify-center mb-2">
            <div
              className="flex flex-row justify-start gap-10 overflow-x-scroll overflow-y-hidden"
              style={{ width: `${80 * 17 + 10 * 3}px` }}
              ref={containerRef}
              onWheel={handleWheel}
            >
              {covers.map((image, index) => (
                <Link key={index} href={image.title ?? ''}>
                  <div className="lg:w-36 xl:w-80 w-72">
                    <Image
                      src={image.url}
                      alt={image.alt}
                      height={image.height}
                      width={image.width}
                      priority
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex justify-end pr-4">
            <button
              className={`${btnStyling} mr-2 ${
                scrollAtStart && 'border-gray-100 text-gray-200'
              }`}
              onClick={handleBackClick}
              disabled={scrollAtStart}
            >
              <p className="text-black">{`<`}</p>
            </button>
            <button
              className={`${btnStyling} ${
                scrollAtEnd && 'border-gray-100 text-gray-200'
              }`}
              onClick={handleNextClick}
              disabled={scrollAtEnd}
            >
              <p className="text-black">{`>`}</p>
            </button>
          </div>
        </section>
      </section>

      <Footer fixed={true} />
    </>
  )
}

export default IAM
