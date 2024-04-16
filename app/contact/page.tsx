import Icon from "@/components/Icon/Icon";
import { performRequest } from "@/datocms/performRequest";
import { PAGE_CONTENT_QUERY } from "@/datocms/queries";
import { HomePagina } from "@/models/homePagina";
import Image from 'next/image';
import Link from 'next/link';

export default async function Contact() {
    const { data: { homePagina } } = await performRequest<{ data: { homePagina: HomePagina } }>({ query: PAGE_CONTENT_QUERY })

    return (
        <section
            className={'flex flex-col items-center justify-center text-xl bg-white min-h-screen lg:pr-40 pr-10 lg:pl-40 pl-10'}
        >
            <Image
                src={homePagina.iamLogo.url}
                alt={homePagina.iamLogo.alt}
                height={homePagina.iamLogo.height}
                width={homePagina.iamLogo.width}
                priority
            />

            <div className='flex flex-row gap-5 items-center'>
                <Icon href={homePagina.facebook} src={homePagina.facebookLogo.url} alt={homePagina.facebookLogo.alt} />
                <Icon href={homePagina.instagram} src={homePagina.instagramLogo.url} alt={homePagina.instagramLogo.alt} />
                <Icon href={homePagina.linkedin} src={homePagina.linkedinLogo.url} alt={homePagina.linkedinLogo.alt} />
            </div>

            <div className='flex flex-col items-center pt-10'>
                <Link
                    href={`mailto:${homePagina.email}`}
                    className='text-xl text-black'
                >
                    {homePagina.email}
                </Link>
                <Link
                    className='text-center text-xl text-black'
                    href={`http://maps.google.com/maps?q=${homePagina.straat}+${homePagina.huisnummer}+${homePagina.postcode}+${homePagina.gemeente}`}
                    target='_blank'
                >
                    <p>{homePagina.straat} {homePagina.huisnummer}</p>
                    <p>{homePagina.gemeente} {homePagina.postcode}</p>
                </Link>
            </div>
        </section>
    )
}
