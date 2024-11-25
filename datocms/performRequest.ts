type PerformRequestParams = {
  query: string
  variables?: { [key: string]: any }
  includeDrafts?: boolean
}

export const performRequest = async <T>({
  query,
  variables = {},
  includeDrafts = false,
}: PerformRequestParams): Promise<T> => {
  const response = await fetch('https://graphql.datocms.com/', {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN}`,
      ...(includeDrafts ? { 'X-Include-Drafts': 'true' } : {}),
    },
    method: 'POST',
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 10 },
  })

  const responseBody = await response.json()

  if (!response.ok) {
    throw new Error(
      `${response.status} ${response.statusText}: ${JSON.stringify(responseBody)}`
    )
  }

  return responseBody
}
