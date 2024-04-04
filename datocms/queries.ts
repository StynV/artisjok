export const PAGE_CONTENT_QUERY = `
query MyQuery {
  homePagina {
    logo {
      url
      alt
      height
      width
    }
    infoTekst {
      value
    }
    telefoonNummer
    naam
    email
  }
}
`;

export const KALENDER_CONTENT_QUERY = `
query MyQuery {
  allKalenders (orderBy: naam_ASC) {
    foto {
      height
      width
      alt
      url
    }
    id
    link
    naam
  }
}
`;

export const FEEDBACK_QUERY = `
query MyQuery {
  allFeedbacks(first: 4) {
    naam
    opmerking
    id
  }
}
`