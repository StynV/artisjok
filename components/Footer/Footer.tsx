'use client'

import { useMediaQuery } from 'react-responsive'
import Image from 'next/image'
import Link from 'next/link'

import { Image as ImageModel } from '@/models/image'

import Icon from '../Icon/Icon'

interface props {
  fixed: boolean
  logo: ImageModel
  facebook: string
  facebookLogo: ImageModel
  instagram: string
  instagramLogo: ImageModel
  linkedin: string
  linkedinLogo: ImageModel
  className?: string
}

const Footer = ({
  fixed,
  logo,
  facebook,
  facebookLogo,
  instagram,
  instagramLogo,
  linkedin,
  linkedinLogo,
  className,
}: props) => {
  const currentYear = new Date().getFullYear()
  const isMobile = useMediaQuery({ maxWidth: 768 })

  return (
    <footer
      className={`${fixed && !isMobile && 'fixed'} bottom-0 left-0 right-0 flex 2xl:flex-row flex-col items-center justify-between 2xl:pl-80 pl-10 2xl:pr-80 pr-10 py-6 bg-gray-100`}
    >
      <div className="text-black 2xl:text-xl flex flex-col justify-center 2xl:items-start items-center w-full">
        <Image
          src={logo.url}
          alt={logo.alt}
          height={logo.height / 8}
          width={logo.width / 8}
          priority
          className="pb-4"
        />
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
      <div className="text-black 2xl:text-xl flex xl:flex-row flex-col gap-5 items-center justify-center w-full">
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
