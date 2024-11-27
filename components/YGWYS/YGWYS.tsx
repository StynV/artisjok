'use client'

import { useEffect } from 'react'

import styles from './ygwys.module.scss'

const YGWYS = ({ text, className }: { text: string; className: string }) => {
  useEffect(() => {
    document
      .querySelectorAll('div[style*="text-align: center;"]')
      .forEach(function (div) {
        div.classList.add(styles.centeredText)
      })

    const paragraphs = document.querySelectorAll('p')
    paragraphs.forEach(p => {
      if (p.textContent === 'Team IAM') {
        p.classList.add(styles.teamIAM)
      }
    })
  }, [])

  return (
    <section
      className={`${className} flex flex-col text-xl bg-white min-h-screen lg:pr-40 pr-10 lg:pl-40 pl-10`}
    >
      <div className={styles.body} dangerouslySetInnerHTML={{ __html: text }} />
    </section>
  )
}

export default YGWYS
