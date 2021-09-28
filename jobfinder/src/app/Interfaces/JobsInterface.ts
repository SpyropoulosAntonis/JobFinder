export interface Company {
    
        name: string
        slug: string
        logoUrl:string
        websiteUrl:string
    
}

export interface City {
    
        name: string
        slug: string
        country: Country
    
}

export interface Country {
    
    name: string
    slug: string
    isoCode:string

}

export interface Tag{
    id:string
    name:string
}

export interface Job {
    id: string
    title: string
    slug: string
    tags:Tag[]
    applyUrl:string
    description:string
    locationNames: string[]
    company: Company
    cities: City[] 
    country: Country[]

}

export interface JobInput {
    type: string
    slug: string
}

export interface JobsResponse {
    jobs: Job[]
}