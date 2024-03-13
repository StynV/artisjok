import { StructuredTextDocument } from 'datocms-structured-text-to-dom-nodes';

export interface Achtergrond {
    url: string,
    alt: string,
    height: number,
    width: number
}

export interface HomePagina {
    titel: string,
    infoTekst: {
        value: StructuredTextDocument
    }
    achtergrond: Achtergrond
}