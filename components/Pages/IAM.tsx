import YGWYS from '@/components/YGWYS/YGWYS';
import getUniqueId from '@/helpers/getUniqueId';
import { render as dastRender } from 'datocms-structured-text-to-dom-nodes';
import { StructuredTextDocument } from 'datocms-structured-text-to-dom-nodes';
import Form from '../Form/Form';
import { Feedback } from '@/models/feedback';

const IAM = ({ value, allFeedbacks }: { value: StructuredTextDocument, allFeedbacks: Feedback[] }) => {
    const nodes = dastRender(value)

    return (
        <section className='min-h-screen flex md:flex-row flex-col items-center md:pl-40 md:pr-40'>
            <section className='md:flex-1'>
                <article>
                    {nodes?.map(node => <YGWYS key={getUniqueId()} html={node.outerHTML} />)}
                </article>
                <article className='md:mt-10'>
                    <Form />
                </article>
            </section>
            <section className='md:flex-1'>
                {allFeedbacks.map(feedback => 
                    <div
                        className='bg-blue-200 mb-10'
                        key={feedback.id}
                    >
                        <p>{feedback.naam}</p>
                        <p>{feedback.opmerking}</p>
                    </div>
                )}
            </section>
        </section>
    )
}

export default IAM