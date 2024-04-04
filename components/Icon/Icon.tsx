import Link from "next/link"
import Image from 'next/image';

const Icon = ({ href, src, alt }: { href: string, src: string, alt: string }) => (
    <Link href={href}>
        <Image
            src={src}
            alt={alt}
            height={200}
            width={200}
        />
  </Link>
)

export default Icon