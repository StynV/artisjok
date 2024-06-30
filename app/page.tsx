import YGWYS from "@/components/YGWYS/YGWYS";
import { performRequest } from "@/datocms/performRequest";
import { HOME_PAGE_CONTENT_QUERY } from "@/datocms/queries";
import { HomePagina } from "@/models/homePagina";
import Image from "next/image";

export default async function Home() {
  const {
    data: { homePagina },
  } = await performRequest<{ data: { homePagina: HomePagina } }>({
    query: HOME_PAGE_CONTENT_QUERY,
  });

  return (
    <main>
      <header
        className={"bg-white min-h-screen flex flex-col justify-center pt-40"}
      >
        <Image
          src={homePagina.logo.url}
          alt={homePagina.logo.alt}
          height={homePagina.logo.height}
          width={homePagina.logo.width}
          priority
          className="mb-20 self-center"
        />

        <YGWYS text={homePagina.text} className="md:w-10/12" />
      </header>
    </main>
  );
}
