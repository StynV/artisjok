import YGWYS from '@/components/YGWYS/YGWYS';
import getUniqueId from '@/helpers/getUniqueId';
import { render as dastRender } from 'datocms-structured-text-to-dom-nodes';
import { StructuredTextDocument } from 'datocms-structured-text-to-dom-nodes';
import Form from '../Form/Form';
import { Feedback } from '@/models/feedback';

const IAM = ({ value, allFeedbacks }: { value: StructuredTextDocument, allFeedbacks: Feedback[] }) => {
    const nodes = dastRender(value)

    return (
        <section className='min-h-screen flex md:flex-row flex-col items-center justify-center md:pl-40 md:pr-40'>
            <section className='md:flex-1'>
                <article className='mb-4'>
                    {nodes?.map(node => <YGWYS key={getUniqueId()} html={node.outerHTML} />)}
                </article>
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
    )
}

export default IAM