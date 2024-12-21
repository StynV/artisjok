import Image from 'next/image'
import Link from 'next/link'

const Icon = ({
  href,
  src,
  alt,
  grayscale,
  small,
}: {
  href: string
  src: string
  alt: string
  grayscale: boolean
  small?: boolean
}) => (
  <Link href={href} target="_blank">
    <Image
      src={src}
      alt={alt}
      height={small ? 40 : 50}
      width={small ? 40 : 50}
      className={`${grayscale && 'grayscale'}`}
    />
  </Link>
)

export default Icon
