export type PortfolioSectionType = {
    title: string;
    dates?: {
        start: Date;
        end?: Date;
    }
}
export const sections: PortfolioSectionType[] = [
    {
        title: 'Classkick',
        dates: {
            start: new Date('October 2021'),
            end: new Date('October 2023')
        }
    },
    {
        title: 'Qualtrics',
        dates: {
            start: new Date('February 2021'),
            end: new Date('October 2021')
        }
    },
    {
        title: 'Flatiron',
        dates: {
            start: new Date('July 2019'),
            end: new Date('January 2021')
        }
    },
    {
        title: 'Personal Projects'
    },

]