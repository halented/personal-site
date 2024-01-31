import { PortfolioSectionType, infoCardsDataType } from "./types";

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
                size: {
                    width: 1278,
                    height: 1360
                },
                description: `<b>Multi-Page Signup Form</b> <br /> Project Lead / Full Responsibility`
            },
            {
                img: 'verificationForm',
                size: {
                    width: 1191,
                    height: 1388
                },
                description: `<b>School Verification Form</b> <br /> Project Lead / Full Responsibility`
            },
            {
                img: 'studentDashboard',
                size: {
                    width: 1718,
                    height: 1398
                },
                description: `<b>Student Dashboard Updates</b> <br /> Contributor / Partial Responsibility`
            },
            {
                img: 'textToSpeech',
                size: {
                    width: 1568,
                    height: 1086
                },
                description: `<b>Text to Speech Implementation</b> <br /> Contributor / Partial Responsibility`
            },
            {
                img: 'bugs',
                size: {
                    width: 1716,
                    height: 1586
                },
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
                size: {
                    width: 2156,
                    height: 1746
                },
                description: '<b>Workflows Documentation</b> <br /> Contributor / Partial Responsibility'
            },
            {
                img: 'pluginShowcase',
                size: {
                    width: 1438,
                    height: 1408
                },
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
                size: {
                    width: 2058,
                    height: 2002
                },
                description: '<b>JavaScript/React Lectures</b> <br /> Functional Programming, Data Flow'
            },
            {
                img: 'flatiron2',
                size: {
                    width: 1280,
                    height: 848
                },
                description: '<b>Algorithm Lectures</b> <br /> Introduction to Data Structures'
            },
            {
                img: 'codeReview',
                size: {
                    width: 1488,
                    height: 1548
                },
                description: '<b>Deep Code Critique</b> <br /> For Tests, Coursework and Final Projects'
            }
        ]
    },
    {
        title: 'Personal Projects',
        works: [
            {
                img: 'personalSite',
                size: {
                    width: 708,
                    height: 514
                },
                description: '<b>This website!</b> <br /> Check out the <a href="https://github.com/halented/personal-site" rel="noopener noreferrer" target="_blank" style="color:blue;cursor:pointer;">codebase</a>'
            },
            {
                img: 'b3',
                size: {
                    width: 1436,
                    height: 1446
                },
                description: '<b>Better Book Base</b> <br /> In planning phase. Check out the <a href="https://observant-methane-45b.notion.site/Better-Book-Base-f562e81435914d629612c02eb907f7d3" rel="noopener noreferrer" target="_blank" style="color:blue;cursor:pointer;">design doc</a>'
            }
        ]
    },

]

export const contactMethods = [{ title: 'github', detail: 'Poke around my personal projects!', resource: 'https://github.com/halented' }, { title: 'linkedin', detail: 'Connect with me!', resource: 'https://www.linkedin.com/in/halented/' }, { title: 'blog', detail: 'Check out my latest posts!', resource: 'https://www.dev.to/halented' }, { title: 'email', detail: 'Drop a message in my inbox!', resource: 'heyhalfriday@gmail.com' }, { title: 'phone', detail: 'Send me a text! Or call if you must.', resource: '206-551-5709' }];

export const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']


export const infoCardsData: infoCardsDataType = {
    'signupForm': `<div style="margin:5px;">- bullet point one <br/> - bullet point one </div>`,
    'verificationForm': '<div style="margin:5px;">- bullet point one <br/> - bullet point one </div>',
    'studentDashboard': '<div style="margin:5px;">- bullet point one <br/> - bullet point one </div>',
    'textToSpeech': '<div style="margin:5px;">- bullet point one <br/> - bullet point one </div>',
    'bugs': '<div style="margin:5px;">- bullet point one <br/> - bullet point one </div>',
    'documentation': '<div style="margin:5px;">- bullet point one <br/> - bullet point one </div>',
    'pluginShowcase': '<div style="margin:5px;">- bullet point one <br/> - bullet point one </div>',
    'flatiron1': '<div style="margin:5px;">- bullet point one <br/> - bullet point one </div>',
    'flatiron2': '<div style="margin:5px;">- bullet point one <br/> - bullet point one </div>',
    'codeReview': '<div style="margin:5px;">- bullet point one <br/> - bullet point one </div>',
}