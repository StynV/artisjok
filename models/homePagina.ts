import { StructuredTextDocument } from 'datocms-structured-text-to-dom-nodes';
import { Image } from './image';

export interface HomePagina {
    logo: Image,
    iamTitel: string,
    covers: Image[],
    titel: string,
    adres: {
        value: StructuredTextDocument
    },
    email: string,
    facebook: string,
    facebookLogo: Image,
    instagram: string,
    instagramLogo: Image,
    linkedin: string
    linkedinLogo: Image,
}