import { performRequest } from "@/datocms/performRequest";
import { FEEDBACK_PAGE_CONTENT_QUERY } from "@/datocms/queries";
import { HomePagina } from "@/models/homePagina";
import Feedback from "@/components/Pages/Feedback";

export default async function FeedbackPage() {
    const { data: { homePagina } } = await performRequest<{ data: { homePagina: HomePagina } }>({ query: FEEDBACK_PAGE_CONTENT_QUERY })

    return (
        <Feedback title={homePagina.feedbackTitel} />
    )
}