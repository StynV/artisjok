import { Image } from './image';

export interface HomePagina {
    logo: Image,
    iamTitel: string,
    covers: Image[],
    titel: string,
    email: string,
    straat: string,
    huisnummer: number,
    gemeente: string,
    postcode: number,
    facebook: string,
    facebookLogo: Image,
    instagram: string,
    instagramLogo: Image,
    linkedin: string
    linkedinLogo: Image,
}