export const PAGE_CONTENT_QUERY = `
query MyQuery {
  homePagina {
    logo {
      url
      alt
      height
      width
    }
    iamTitel
    covers {
      url
      alt
      height
      width
      title
    }
    iamLogo {
      url
      alt
      height
      width
    }
    email
    straat
    huisnummer
    gemeente
    postcode
    facebook
    facebookLogo {
      url
      alt
      height
      width
    }
    instagram
    instagramLogo {
      url
      alt
      height
      width
    }
    linkedin
    linkedinLogo {
      url
      alt
      height
      width
    }
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
    likes
  }
}
`