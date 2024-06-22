export interface CatalogRequestType {
    page?: string
    search?: string
}

export interface CatalogResponseType{
    totalPages: number
    totalElementsInPage: number
    content: ShowCatalogType[]
}

export interface ShowCatalogType{
    title: string
    poster: string
    url: string
}