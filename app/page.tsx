import { performRequest } from "@/datocms/performRequest";
import { HOME_PAGE_CONTENT_QUERY } from "@/datocms/queries";
import { HomePagina } from "@/models/homePagina";
import Image from 'next/image';

export default async function Home() {
  const { data: { homePagina } } = await performRequest<{ data: { homePagina: HomePagina } }>({ query: HOME_PAGE_CONTENT_QUERY })

  return (
    <main>
      <header
        className={'bg-white min-h-screen flex justify-center items-center'}
      >
        <Image
          src={homePagina.logo.url}
          alt={homePagina.logo.alt}
          height={homePagina.logo.height}
          width={homePagina.logo.width}
          priority
        />
      </header>
    </main>
  );
}
