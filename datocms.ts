export const performRequest = async ({ query, variables = {}, includeDrafts = false }) => {
    const response = await fetch("https://graphql.datocms.com/", {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
        ...(includeDrafts ? { "X-Include-Drafts": "true" } : {}),
      },
      method: "POST",
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 10 }
    });
    
    const responseBody = await response.json();
    console.log(responseBody)
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}: ${JSON.stringify(responseBody)}`);
    }
    
    return responseBody;
}