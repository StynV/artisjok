"use client";

import { HomePagina } from "@/models/homePagina";
import styles from "./ygwys.module.scss";
import { useEffect } from "react";

const YGWYS = ({ homePagina }: { homePagina: HomePagina }) => {
  useEffect(() => {
    document
      .querySelectorAll('div[style*="text-align: center;"]')
      .forEach(function (div) {
        div.classList.add(styles.centeredText);
      });
  }, []);

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
};

export default YGWYS;
