type PostFeedbackRequestParams = {
  naam: string;
  opmerking: string;
  likes: number;
};

export const postFeedbackRequest = async <T>({ naam, opmerking }: PostFeedbackRequestParams): Promise<T> => {
    const response = await fetch("/api/postFeedback", {
      headers: {
        'Content-Type': 'application/json',
      },
      method: "POST",
      body: JSON.stringify({naam: naam, opmerking: opmerking}),
  });
    
    const responseBody = await response.json();

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}: ${JSON.stringify(responseBody)}`);
    }
    
    return responseBody;
}