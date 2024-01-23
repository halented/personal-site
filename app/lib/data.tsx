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
                description: `<b>Multi-Page Signup Form</b> <br /> Project Lead / Full Responsibility`
            },
            {
                img: 'verificationForm',
                description: `<b>School Verification Form</b> <br /> Project Lead / Full Responsibility`
            },
            {
                img: 'studentDashboard',
                description: `<b>Student Dashboard Updates</b> <br /> Contributor / Partial Responsibility`
            },
            {
                img: 'textToSpeech',
                description: `<b>Text to Speech Implementation</b> <br /> Contributor / Partial Responsibility`
            },
            {
                img: 'bugs',
                description: `<b>Bughunter Extraordinaire</b> <br /> Contributor / Partial Responsibility`
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
                img: 'documentation',
                description: '<b>Workflows Documentation</b> <br /> Contributor / Partial Responsibility'
            },
            {
                img: 'pluginShowcase',
                description: '<b>Plugin Showcase Builder</b> <br /> Contributor / Majority Responsibility'
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
                img: 'flatiron1',
                description: '<b>JavaScript/React Lectures</b> <br /> Functional Programming, Data Flow'
            },
            {
                img: 'flatiron2',
                description: '<b>Algorithm Lectures</b> <br /> Introduction to Data Structures'
            },
            {
                img: 'codeReview',
                description: '<b>Deep Code Critique</b> <br /> For Tests, Coursework and Final Projects'
            }
        ]
    },
    {
        title: 'Personal Projects',
        works: [
            {
                img: 'personalSite',
                description: '<b>This website!</b> <br /> Check out the <a href="https://github.com/halented/personal-site" rel="noopener noreferrer" target="_blank" style="color:blue;cursor:pointer;">codebase</a>'
            },
            {
                img: 'b3',
                description: '<b>Better Book Base</b> <br /> In planning phase. Check out the <a href="https://observant-methane-45b.notion.site/Better-Book-Base-f562e81435914d629612c02eb907f7d3" rel="noopener noreferrer" target="_blank" style="color:blue;cursor:pointer;">design doc</a>'
            }
        ]
    },

]

export const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']