import Link from "next/link"
import Image from 'next/image';

const Icon = ({ href, src, alt }: { href: string, src: string, alt: string }) => (
    <Link href={href}>
        <Image
            src={src}
            alt={alt}
            height={50}
            width={50}
            className="grayscale"
        />
    </Link>
)

export default Icon