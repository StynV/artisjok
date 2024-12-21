'use client'

import Link from 'next/link'

import { Image as ImageModel } from '@/models/image'

import Icon from '../Icon/Icon'

interface props {
  facebook: string
  facebookLogo: ImageModel
  instagram: string
  instagramLogo: ImageModel
  linkedin: string
  linkedinLogo: ImageModel
}

const Footer = ({
  facebook,
  facebookLogo,
  instagram,
  instagramLogo,
  linkedin,
  linkedinLogo,
}: props) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto bottom-0 left-0 right-0 flex lg:flex-row flex-col items-center justify-between pl-10 xl:pl-80 pr-10 xl:pr-80 py-6 bg-gray-100">
      <div className="text-black lg:text-xl flex flex-col justify-center xl:items-start items-center w-full">
        <p className="text-center">
          Copyright {currentYear} - Independent Art Magazine
        </p>
        <Link
          className="hover:text-blue-700 cursor-pointer"
          target="_blank"
          href="https://cv-styn-vercauteren.vercel.app/"
        >
          Site by Styn Vercauteren
        </Link>
      </div>
      <div className="text-black lg:text-xl flex 3xl:flex-row flex-col gap-5 items-center justify-center w-full">
        <div className="flex flex-row gap-4 mt-4">
          <Icon
            href={facebook}
            src={facebookLogo.url}
            alt={facebookLogo.alt}
            grayscale={false}
          />
          <Icon
            href={instagram}
            src={instagramLogo.url}
            alt={instagramLogo.alt}
            grayscale={false}
          />
          <Icon
            href={linkedin}
            src={linkedinLogo.url}
            alt={linkedinLogo.alt}
            grayscale={false}
          />
        </div>

        <a href="mailto:independentartmagazine@gmail.com">
          independentartmagazine@gmail.com
        </a>
      </div>
    </footer>
  )
}

export default Footer
