import { ReactNode, createContext, useContext, useState } from 'react'

interface FeedbackSubmittedData {
  feedbackSubmitted: boolean
  reSetchSubmittedFeedbacks: () => void
}

const FeedbackSubmittedContext = createContext<
  FeedbackSubmittedData | undefined
>(undefined)

export const useFeedbackSubmittedContext = () => {
  const context = useContext(FeedbackSubmittedContext)

  if (!context) {
    throw new Error('useFeedbackSubmittedContext must be provided')
  }

  return context
}

interface FeedbackSubmittedProviderProps {
  children: ReactNode
}

export const FeedbackSubmittedProvider: React.FC<
  FeedbackSubmittedProviderProps
> = ({ children }) => {
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false)

  const reSetchSubmittedFeedbacks = () => {
    setFeedbackSubmitted(prev => !prev)
  }

  return (
    <FeedbackSubmittedContext.Provider
      value={{ feedbackSubmitted, reSetchSubmittedFeedbacks }}
    >
      {children}
    </FeedbackSubmittedContext.Provider>
  )
}
