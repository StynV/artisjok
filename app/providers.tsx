'use client'

import { FeedbackSubmittedProvider } from '@/context/feedback'

export function Providers({ children }: any) {
  return <FeedbackSubmittedProvider>{children}</FeedbackSubmittedProvider>
}
