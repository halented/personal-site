export type WorkType = {
    img: string,
    size: {
        width: number,
        height: number
    }
    description: string
}

export type PortfolioSectionType = {
    title: string;
    dates?: {
        start: Date;
        end?: Date;
    },
    works: WorkType[]
}


export type infoCardsDataType = {
    [key: string]: string
}