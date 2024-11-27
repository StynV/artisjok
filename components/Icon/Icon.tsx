import Image from 'next/image'
import Link from 'next/link'

const Icon = ({
  href,
  src,
  alt,
}: {
  href: string
  src: string
  alt: string
}) => (
  <Link href={href} target="_blank">
    <Image src={src} alt={alt} height={50} width={50} className="grayscale" />
  </Link>
)

export default Icon
