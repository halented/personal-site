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
    'signupForm':
        `<div style="margin:5px;">
        • Autocompletes school search with asynchronous db matching <br/>
        • Branching form structure dynamically shows proper UI <br/>
        • Custom style & icons for input fields, dropdowns <br/>
        • Form data validations <br/>
        • Play with this live on <a href="https://app.classkick.com/#/signup/choice" rel="noopener noreferrer" target="_blank" style="color:blue;cursor:pointer;">Classkick!</a> </div>`,
    'verificationForm':
        `<div style="margin:5px;overflow:scroll;">
        • Integrates with maps<br/>
        • Autocomplete searches for addresses<br/>
        • Autofills existing address data if possible<br/>
        • Custom error handling & messages<br/>
        • Custom metrics functions monitor usage & abandon rates<br/>
        • UI auto updates after form completes</div>`,
    'studentDashboard':
        `<div style="margin:5px;">
        • Added nested folder structure allowing students to archive old assignments <br/>
        • Added colorized folder indications for accesibility & ease of use  <br/>
        • Allowed sorting by assignment name
        </div>`,
    'textToSpeech':
        `<div style="margin:5px;">
        • Implemented SpeechSynthesis from the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API" rel="noopener noreferrer" target="_blank" style="color:blue;cursor:pointer;">Web Speech API</a> <br/>
        • Allows play & stop <br/>
        • Allows users to toggle feature on/off<br/>
        • Language determined by user browser language<br/>
        • Play with this live on <a href="https://app.classkick.com/#" rel="noopener noreferrer" target="_blank" style="color:blue;cursor:pointer;">Classkick!</a> (To get to this feature, create a free teacher account and assignment then add a text box.)</div>`,
    'bugs':
        `<div style="margin:5px;">
        • Solved large data loading issue by implementing pagination system on the assignment library<br/>
        • Solved something else </div>`,
    'documentation':
        `<div style="margin:5px;">
        • Wrote SDK documentation for Qualtrics products (Task workflow) <br/>
        • Followed <a href="https://github.com/DavidAnson/markdownlint" rel="noopener noreferrer" target="_blank" style="color:blue;cursor:pointer;">markdownlint</a> guidelines <br/>
        • Collaborated closely with team to provide snappy feedback updates and add/improve use case scenarios</div>`,
    'pluginShowcase':
        `<div style="margin:5px;">
        • Task workflow built in React<br/>
        • Used custom hooks <br/>
        • Showcased every feature of Task workflow <br/>
        • Dynamically rendered user data</div>`,
    'flatiron1':
        `<div style="margin:5px;">
        • Taught basic JavaScript concepts including variable types, scope, data types and common methods (like Array methods or String methods), mental models<br/>
        • Taught medium JavaScript concepts including closures, classes and inheritance, this, async behavior, IFFEs, DOM manipulation<br/>
        • Taught basic React concepts including virtual DOM, functional components, state & props, JSX usage<br/>
        • Taught medium React concepts including lifecycle methods, hooks & custom hooks, Context, Redux pattern, async behavior </div>`,
    'flatiron2':
        `<div style="margin:5px;">
        • Taught algorithms by introducing concepts, then asking students to complete coding puzzles which could be done with those concepts <br/>
        • For example: spent one lecture on recursion, then the next lecture working through the Nth Fibonacci Sequence problem <br/>
        • Other concepts included use of stacks, sorting algorithms (insertion, bubble, selection), use of trees and nodes, breadth first vs depth first searching </div>`,
    'codeReview':
        `<div style="margin:5px;">
        • Taught Git - repo creation, branching, merging, PR creation, reverting, rebasing, and whatever else came up really<br/>
        • Dove into code submission PR's and provided high level detail feedback for code improvement on projects written in JavaScript, React, and Ruby on Rails<br/>
        • Provided feedback in various formats; 1:1 meetings, written documents, PR comments. Required a lot of flexibility in my communication style to help material click for students </div>`,
}