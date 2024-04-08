import Form from '../Form/Form';
import { Feedback } from '@/models/feedback';
import { Image as ImageModel } from '@/models/image';
import Image from 'next/image';
import Link from 'next/link';

const IAM = ({ title, covers, allFeedbacks }: { title: string, covers: ImageModel[], allFeedbacks: Feedback[] }) => (
    <section className='min-h-screen pt-40 md:pl-40 md:pr-40'>
        <section>
            <h1 className='text-9xl text-center mb-10'>{title}</h1>
            <div className='wrapper flex justify-center md:mb-10'>
                <div className='flex flex-row justify-start gap-10 overflow-x-scroll' style={{ width: `${(80 * 17) + (10 * 3)}px` }}>
                    {covers.map((image) => (
                        <Link key={image.id} href={image.title ?? ''}>
                            <div className="w-80">
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