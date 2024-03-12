import { performRequest } from "@/datocms";

const PAGE_CONTENT_QUERY = `
query MyQuery {
  homePagina {
    title
  }
}`;

export default async function Home() {
  const { data: { homePagina } } = await performRequest({query: PAGE_CONTENT_QUERY})

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>{homePagina.title}</p>
    </main>
  );
}
