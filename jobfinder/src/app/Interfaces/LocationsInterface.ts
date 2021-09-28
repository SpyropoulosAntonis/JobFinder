export interface Location {
    name: string
    slug: string
    type: string
}

export interface LocationsResponse {
    locations: Location[]
}