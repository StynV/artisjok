import { StructuredTextDocument } from 'datocms-structured-text-to-dom-nodes';
import { Image } from './image';

export interface HomePagina {
    infoTekst: {
        value: StructuredTextDocument
    }
    logo: Image,
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