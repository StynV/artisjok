import { Image } from "./image";

export interface HomePagina {
  logo: Image;
  iamTitel: string;
  feedbackTitel: string;
  covers: Image[];
  contactLogo: Image;
  titel: string;
  email: string;
  straat: string;
  huisnummer: number;
  gemeente: string;
  postcode: number;
  facebook: string;
  facebookLogo: Image;
  instagram: string;
  instagramLogo: Image;
  linkedin: string;
  linkedinLogo: Image;
  text: string;
}
