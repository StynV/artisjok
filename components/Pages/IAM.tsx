import Form from '../Form/Form';
import { Feedback } from '@/models/feedback';
import { Image as ImageModel } from '@/models/image';
import Image from 'next/image';
import Link from 'next/link';

const IAM = ({ title, covers, allFeedbacks }: { title: string, covers: ImageModel[], allFeedbacks: Feedback[] }) => (
    <section className='min-h-screen md:pt-40 pt-24 md:pl-40 pl-10 md:pr-40 pr-10'>
        <section className='mb-4'>
            <h1 className='md:text-9xl lg:text-4xl text-2xl text-center md:mb-10 mb-4'>{title}</h1>
            <div className='wrapper flex justify-center md:mb-10'>
                <div className='flex flex-row justify-start gap-10 overflow-x-scroll' style={{ width: `${(80 * 17) + (10 * 3)}px` }}>
                    {covers.map((image) => (
                        <Link key={image.id} href={image.title ?? ''}>
                            <div className="md:w-80 lg:w-48 w-32">
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

export default IAM