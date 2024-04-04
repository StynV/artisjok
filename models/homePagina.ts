import { StructuredTextDocument } from 'datocms-structured-text-to-dom-nodes';
import { Achtergrond } from './achtergrond';

export interface HomePagina {
    infoTekst: {
        value: StructuredTextDocument
    }
    logo: Achtergrond,
    naam: string,
    email: string,
    telefoonNummer: string,
}