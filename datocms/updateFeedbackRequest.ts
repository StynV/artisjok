type PostFeedbackRequestParams = {
  likes: number
  id: string
}

interface FeedbackResponse {
  likes: number
}

export const updateFeedbackRequest = async <T>({
  likes,
  id,
}: PostFeedbackRequestParams): Promise<FeedbackResponse> => {
  const response = await fetch('/api/updateFeedback', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify({ likes: likes, id: id }),
  })

  const responseBody = await response.json()

  if (!response.ok) {
    throw new Error(
      `${response.status} ${response.statusText}: ${JSON.stringify(responseBody)}`
    )
  }

  return responseBody
}
