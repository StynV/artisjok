import Image from 'next/image'
import Link from 'next/link'

const Icon = ({
  href,
  src,
  alt,
  grayscale,
}: {
  href: string
  src: string
  alt: string
  grayscale: boolean
}) => (
  <Link href={href} target="_blank">
    <Image
      src={src}
      alt={alt}
      height={50}
      width={50}
      className={`${grayscale && 'grayscale'}`}
    />
  </Link>
)

export default Icon
