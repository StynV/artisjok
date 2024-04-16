'use client'

import Form from '../Form/Form';
import { Feedback } from '@/models/feedback';
import { Image as ImageModel } from '@/models/image';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import LikeButton from '../LikeButton/LikeButton';
import { useFeedbackSubmittedContext } from '@/context/feedback';
import { performRequest } from '@/datocms/performRequest';
import { FEEDBACK_QUERY } from '@/datocms/queries';

const IAM = ({ title, covers }: { title: string, covers: ImageModel[] }) => {
    const containerRef = useRef<HTMLDivElement>(null)

    const [scrollAtStart, setScrollAtStart] = useState(true)
    const [scrollAtEnd, setScrollAtEnd] = useState(false)

    const isMobile = useMediaQuery({ maxWidth: 768 })

    const [allFeedbacks, setAllFeedbacks] = useState<Feedback[]>([])
    const { feedbackSubmitted } = useFeedbackSubmittedContext()

    useEffect(() => {
        async function fetchFeedbacks() {
            const { data: { allFeedbacks } } = await performRequest<{ data: { allFeedbacks: Feedback[] } }>({ query: FEEDBACK_QUERY })
            setAllFeedbacks(allFeedbacks)
        }

        fetchFeedbacks()
    }, [feedbackSubmitted])

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                setScrollAtStart(containerRef.current.scrollLeft === 0)
                setScrollAtEnd(
                    containerRef.current.scrollLeft + containerRef.current.clientWidth ===
                    containerRef.current.scrollWidth
                );
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
                    left: -150,
                    behavior: 'smooth'
                })
            } else {
                containerRef.current.scrollBy({
                    left: -350,
                    behavior: 'smooth'
                })
            }
        }
    }

    const handleNextClick = () => {
        if (containerRef.current) {
            if (isMobile) {
                containerRef.current.scrollBy({
                    left: 150,
                    behavior: 'smooth'
                })
            } else {
                containerRef.current.scrollBy({
                    left: 350,
                    behavior: 'smooth'
                })
            }
        }
    }

    const handleWheel = (event: any) => {
        const div = containerRef.current;

        if (div && event.deltaX !== 0 && Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
            event.stopPropagation();
        }
    };

    const btnStyling = 'p-2 pl-4 pr-4 border-gray-500 border-2 rounded-full w-10 h-10 flex justify-center items-center'

    return (
        <section className='min-h-screen bg-white pt-28 md:pl-40 pl-10 md:pr-40 pr-10 pb-28'>
            <section className='mb-4'>
                <h1 className='md:text-9xl lg:text-4xl text-2xl text-center md:mb-10 mb-4 text-black'>{title}</h1>
                <div className='wrapper flex justify-center mb-2'>
                    <div
                        className='flex flex-row justify-start gap-10 overflow-x-scroll overflow-y-hidden'
                        style={{ width: `${(80 * 17) + (10 * 3)}px` }}
                        ref={containerRef}
                        onWheel={handleWheel}
                    >
                        {covers.map((image, index) => (
                            <Link key={index} href={image.title ?? ''}>
                                <div className="lg:w-36 xl:w-80 w-24">
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
                <div className='flex justify-end pr-4'>
                    <button
                        className={`${btnStyling} mr-2 ${scrollAtStart && 'border-gray-100 text-gray-200'}`}
                        onClick={handleBackClick}
                        disabled={scrollAtStart}
                    >
                        <p className='text-black'>{`<`}</p>
                    </button>
                    <button
                        className={`${btnStyling} ${scrollAtEnd && 'border-gray-100 text-gray-200'}`}
                        onClick={handleNextClick}
                        disabled={scrollAtEnd}
                    >
                        <p className='text-black'>{`>`}</p>
                    </button>
                </div>
            </section>
            <section className='lg:grid lg:grid-cols-3 xl:ml-40 xl:pr-40'>
                <section className='lg:col-span-1'>
                    <article>
                        <Form />
                    </article>
                </section>
                <section className='lg:col-span-2 lg:grid lg:grid-cols-2 overflow-y-scroll h-60'>
                    {allFeedbacks.map(feedback =>
                        <div className='flex mr-4 items-center' key={feedback.id}>
                            <div
                                className='flex flex-col justify-center mb-4 border-b-2 text-black w-full'
                            >
                                <p className='font-bold text-black'>{feedback.naam}</p>
                                <p>{feedback.opmerking}</p>
                            </div>

                            <LikeButton likes={feedback.likes} id={feedback.id} />
                        </div>
                    )}
                </section>
            </section>
        </section>
    )
}

export default IAM