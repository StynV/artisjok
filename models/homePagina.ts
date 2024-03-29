import { StructuredTextDocument } from 'datocms-structured-text-to-dom-nodes';

export interface Achtergrond {
    url: string,
    alt: string,
    height: number,
    width: number
}

export interface HomePagina {
    infoTekst: {
        value: StructuredTextDocument
    }
    logo: Achtergrond,
    naam: string,
    email: string,
    telefoonNummer: string,
}