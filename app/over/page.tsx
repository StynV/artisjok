import { performRequest } from "@/datocms/performRequest";
import { OVER_PAGE_CONTENT_QUERY } from "@/datocms/queries";
import { HomePagina } from "@/models/homePagina";
import styles from "./page.module.scss";

export default async function Over() {
  const {
    data: { homePagina },
  } = await performRequest<{ data: { homePagina: HomePagina } }>({
    query: OVER_PAGE_CONTENT_QUERY,
  });

  return (
    <section
      className={
        "flex flex-col text-xl bg-white min-h-screen pt-40 lg:pr-40 pr-10 lg:pl-40 pl-10"
      }
    >
      <div
        className={styles.body}
        dangerouslySetInnerHTML={{ __html: homePagina.text }}
      />
    </section>
  );
}
