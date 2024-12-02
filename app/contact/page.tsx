import Image from 'next/image'
import Link from 'next/link'

import Footer from '@/components/Footer/Footer'
import Icon from '@/components/Icon/Icon'
import { performRequest } from '@/datocms/performRequest'
import { CONTACT_PAGE_CONTENT_QUERY } from '@/datocms/queries'
import { HomePagina } from '@/models/homePagina'

export default async function Contact() {
  const {
    data: { homePagina },
  } = await performRequest<{ data: { homePagina: HomePagina } }>({
    query: CONTACT_PAGE_CONTENT_QUERY,
  })

  return (
    <div className="min-h-screen flex flex-col">
      <section
        className={
          'flex flex-col flex-grow items-center md:justify-center text-xl bg-white pt-44 md:pt-0 lg:pr-40 pr-10 lg:pl-40 pl-10'
        }
      >
        <Image
          src={homePagina.contactLogo.url}
          alt={homePagina.contactLogo.alt}
          height={homePagina.contactLogo.height}
          width={homePagina.contactLogo.width}
          priority
          className="w-3/5"
        />

        <div className="flex flex-row gap-5 items-center">
          <Icon
            href={homePagina.facebook}
            src={homePagina.facebookLogo.url}
            alt={homePagina.facebookLogo.alt}
            grayscale
          />
          <Icon
            href={homePagina.instagram}
            src={homePagina.instagramLogo.url}
            alt={homePagina.instagramLogo.alt}
            grayscale
          />
          <Icon
            href={homePagina.linkedin}
            src={homePagina.linkedinLogo.url}
            alt={homePagina.linkedinLogo.alt}
            grayscale
          />
        </div>

        <div className="flex flex-col items-center pt-10">
          <Link
            href={`mailto:${homePagina.email}`}
            className="text-xl text-black"
          >
            {homePagina.email}
          </Link>
          <div className="text-center text-xl text-black">
            <p>
              {homePagina.straat} {homePagina.huisnummer}
            </p>
            <p>
              {homePagina.gemeente} {homePagina.postcode}
            </p>
          </div>
        </div>
      </section>

      <Footer
        fixed={true}
        logo={homePagina.logo}
        facebook={homePagina.facebook}
        facebookLogo={homePagina.facebookLogo}
        instagram={homePagina.instagram}
        instagramLogo={homePagina.instagramLogo}
        linkedin={homePagina.linkedin}
        linkedinLogo={homePagina.linkedinLogo}
        className="fixed"
      />
    </div>
  )
}
