import { AllKalenders } from "@/models/allKalenders"
import Link from "next/link"
import Image from 'next/image';
import getRandomColor from "@/helpers/getRandomColor";

const KalenderItem = ({ kalenderItem }: { kalenderItem: AllKalenders | undefined }) => {
  if (kalenderItem && kalenderItem?.id !== '') {
    return (
      <Link
          href={kalenderItem.link}
          className='relative flipper'
          target='_blank'
      >
          <div className='front lg:h-full h-1/3 w-full'>
            <Image
              src={kalenderItem.foto?.url ?? ''}
              alt={kalenderItem.foto?.alt ?? ''}
              width={kalenderItem.foto?.width}
              height={kalenderItem.foto?.height}
              className='h-full w-full object-cover'
            />
          </div>
          <div className='back absolute inset-0 flex items-center justify-center'>
            <p className="text-black text-xl">{kalenderItem.naam}</p>
          </div>
      </Link>    
    )    
  } else {
    return (
      <div className={`flipper ${getRandomColor()}`}>
        <div className='front'></div>
        <div className='back absolute inset-0 flex items-center justify-center bg-white'>
          <p className="text-black text-xl">Contacteer ons als u hier bij wilt staan.</p>
        </div>
      </div>
    )
  }
}

export default KalenderItem