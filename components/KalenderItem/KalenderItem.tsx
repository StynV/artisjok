import { AllKalenders } from "@/models/allKalenders"
import Link from "next/link"
import Image from 'next/image';

const KalenderItem = ({ kalenderItem }: { kalenderItem: AllKalenders }) => (
    <Link
        href={kalenderItem.link}
        className='relative flipper'
        target='_blank'
    >
        <div className='front lg:h-full h-1/3 w-full lg:full'>
          <Image
            src={kalenderItem.foto.url}
            alt={kalenderItem.foto.alt}
            width={kalenderItem.foto.width}
            height={kalenderItem.foto.height}
            className='h-full w-full object-cover'
          />

          <div className="absolute inset-0 flex items-center justify-center h-full w-full">
            <span className="text-white text-center text-2xl font-bold">{kalenderItem.naam}</span>
          </div>
        </div>
        <div className='back absolute inset-0 flex items-center justify-center'>
          <p>test</p>
        </div>
    </Link>
)

export default KalenderItem