import { useQuery } from '@tanstack/react-query'

import { performRequest } from '@/datocms/performRequest'
import { FEEDBACK_QUERY } from '@/datocms/queries'
import { Feedback as FeedbackModel } from '@/models/feedback'

export const useGetFeedbacks = () => {
  return useQuery({
    queryKey: ['feedbacks'],
    queryFn: async () => {
      const {
        data: { allFeedbacks },
      } = await performRequest<{ data: { allFeedbacks: FeedbackModel[] } }>({
        query: FEEDBACK_QUERY,
      })
      return allFeedbacks
    },
  })
}
