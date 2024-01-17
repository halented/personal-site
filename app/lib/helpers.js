/**
 * 
 * @param {string} title 
 * @returns string
 */
export const getHref = (title) => {
    switch (title) {
        case 'home':
            return '/'
        case 'portfolio':
            return '/#portfolio'
        case 'blog':
            return 'https://dev.to/halented'
        case 'contact':
            return '/#contact'
        default:
            return '/'
    }
}
