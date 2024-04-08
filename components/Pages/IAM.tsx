import Form from '../Form/Form';
import { Feedback } from '@/models/feedback';
import { Image as ImageModel } from '@/models/image';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const IAM = ({ title, covers, allFeedbacks }: { title: string, covers: ImageModel[], allFeedbacks: Feedback[] }) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const [scrollAtStart, setScrollAtStart] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                setScrollAtStart(containerRef.current.scrollLeft === 0)
            }            
        }

        containerRef.current?.addEventListener('scroll', handleScroll)

        return () => {
            containerRef.current?.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleBackClick = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: -350,
                behavior: 'smooth'
            })
        }
    }

    const handleNextClick = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: 350,
                behavior: 'smooth'
            })
        }
    }

    const btnStyling = 'p-2 pl-4 pr-4 border-gray-500 border-2 rounded-full w-10 h-10 flex justify-center items-center'

    return (
        <section className='min-h-screen md:pt-40 pt-24 md:pl-40 pl-10 md:pr-40 pr-10'>
            <section className='mb-4'>
                <h1 className='md:text-9xl lg:text-4xl text-2xl text-center md:mb-10 mb-4 text-black'>{title}</h1>
                <div className='wrapper flex justify-center md:mb-2'>
                    <div
                        className='flex flex-row justify-start gap-10 overflow-x-scroll'
                        style={{ width: `${(80 * 17) + (10 * 3)}px` }}
                        ref={containerRef}
                    >
                        {covers.map((image, ) => (
                            <Link key={image.id} href={image.title ?? ''}>
                                <div className="lg:w-48 xl:w-80 w-32">
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
                <div className='flex justify-end md:pr-96 md:mr-10 pr-10'>
                    <button
                        className={`${btnStyling} mr-2 ${scrollAtStart && 'border-gray-200 text-gray-200'}`}
                        onClick={handleBackClick}
                        disabled={scrollAtStart}
                    >
                        {`<`}
                    </button>
                    <button
                        className={`${btnStyling} ${!scrollAtStart && 'border-gray-200 text-gray-200'}`}
                        onClick={handleNextClick}
                        disabled={!scrollAtStart}
                    >
                        {`>`}
                    </button>
                </div>
            </section>
            <section className='flex md:flex-row flex-col items-center justify-center'>
                <section className='md:flex-1'>
                    <article className='md:mt-10'>
                        <Form />
                    </article>
                </section>
                <section className='md:flex-1'>
                    {allFeedbacks.map(feedback => 
                        <div
                            className='bg-blue-200 md:mb-10 mb-4 rounded-md md:p-4'
                            key={feedback.id}
                        >
                            <p className='text-xl'>{feedback.naam}</p>
                            <p>{feedback.opmerking}</p>
                        </div>
                    )}
                </section>
            </section>
        </section>
    )
}

export default IAM