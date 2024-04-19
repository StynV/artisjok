export interface Attributes {
    name?: string,
    property?: string,
    content: string
}

export interface MetaTag {
    attributes: Attributes | null,
    content: string | null,
    tag: string
}

export interface Layout {
    "_seoMetaTags": MetaTag[],
    keywords: string
}