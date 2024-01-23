export type Work = {
    img: string,
    description: string
}

export type PortfolioSectionType = {
    title: string;
    dates?: {
        start: Date;
        end?: Date;
    },
    works: Work[]
}

export const sections: PortfolioSectionType[] = [
    {
        title: 'Classkick',
        dates: {
            start: new Date('October 2021'),
            end: new Date('October 2023')
        },
        works: [
            {
                img: 'signupForm',
                description: 'MULTI-PAGE SIGN UP FORM. Project Lead / Full Responsibility'
            },
            {
                img: 'verificationForm',
                description: 'SCHOOL VERIFICATION FORM. Project Lead / Full Responsibility'
            },
            {
                img: 'somethin',
                description: 'heres a third, i want to see how the boxes behave.'
            }
        ]
    },
    {
        title: 'Qualtrics',
        dates: {
            start: new Date('February 2021'),
            end: new Date('October 2021')
        },
        works: [
            {
                img: 'imgTitle',
                description: 'words about the image you are seeing and work i did'
            },
            {
                img: 'secondImgTitle',
                description: 'this work was challenging in other ways'
            },
            {
                img: 'somethin',
                description: 'heres a third, i want to see how the boxes behave.'
            }
        ]
    },
    {
        title: 'Flatiron',
        dates: {
            start: new Date('July 2019'),
            end: new Date('January 2021')
        },
        works: [
            {
                img: 'imgTitle',
                description: 'words about the image you are seeing and work i did'
            },
            {
                img: 'secondImgTitle',
                description: 'this work was challenging in other ways'
            },
            {
                img: 'somethin',
                description: 'heres a third, i want to see how the boxes behave.'
            }
        ]
    },
    {
        title: 'Personal Projects',
        works: [
            {
                img: 'imgTitle',
                description: 'words about the image you are seeing and work i did'
            },
            {
                img: 'secondImgTitle',
                description: 'this work was challenging in other ways'
            },
            {
                img: 'somethin',
                description: 'heres a third, i want to see how the boxes behave.'
            }
        ]
    },

]

export const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']