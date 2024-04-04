import { HomePagina } from '@/models/homePagina';
import Image from 'next/image';

const HomePage = ({ section, homePagina }: { section: string, homePagina: HomePagina }) => (
    <header
        className={`${section} flex justify-center items-center`}
    >
        <Image
        src={homePagina.logo.url}
        alt={homePagina.logo.alt}
        height={homePagina.logo.height}
        width={homePagina.logo.width}
        priority
        />
  </header>
)

export default HomePage