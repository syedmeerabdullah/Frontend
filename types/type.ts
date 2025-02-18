export interface Property {
    id: string
    location: string
    title: string
    image: string
    specs: {
      sqft: number
      bedrooms: number
      bathrooms: number
      parking: number
    }
  }
  
  export interface FeaturedProperty {
    id: string
    title: string
    location: string
    image: string
    purchaseType: string
  }
  
  export interface Article {
    id: number
    type: "Resources" | "News" | "Article"
    image: string
    title: string
    date: string
    slug: string
  }