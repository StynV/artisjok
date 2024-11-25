export const LAYOUT_CONTENT_QUERY = `
query MyQuery {
  homePagina {
    _seoMetaTags(locale: nl) {
      attributes
      content
      tag
    },
    keywords
  }
}
`;

export const HOME_PAGE_CONTENT_QUERY = `
query MyQuery {
  homePagina {
    logo {
      url
      alt
      height
      width
    }
    text
  }
}
`;

export const IAM_PAGE_CONTENT_QUERY = `
query MyQuery {
  homePagina {
    iamTitel
    covers {
      url
      alt
      height
      width
      title
    }
  }
}
`;

export const FEEDBACK_PAGE_CONTENT_QUERY = `
query MyQuery {
  homePagina {
    feedbackTitel
  }
}
`;

export const FEEDBACK_QUERY = `
query MyQuery {
  allFeedbacks {
    naam
    opmerking
    id
    likes
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

export const CONTACT_PAGE_CONTENT_QUERY = `
query MyQuery {
  homePagina {
    contactLogo {
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

export const EVENT_FOTOS_CONTENT_QUERY = `
query MyQuery {
  allEventFotos {
    eventTitel
    instagramLink
    id
    fotos {
      alt
      height
      width
      url
      id
    }
  }
}
`;
