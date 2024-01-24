import { StaticImageData } from 'next/image';
import { classkickForm, verificationForm, studentDashboard, textToSpeech, documentation, bugs, pluginShowcase, flatiron1, flatiron2, codeReview, personalSite, b3 } from '../assets/works/imageBundler';

/**
 * 
 * @param {string} title which actually appears in the nav bar
 * @returns string
 */
export const getHref = (title: string): string => {
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

/**
 * 
 * @param img - name of the image to retrieve 
 * @returns image asset
 */
export const getImageSrc = (img: string): StaticImageData => {
    switch (img) {
        case 'verificationForm':
          return verificationForm;
        case 'classkickForm':
          return classkickForm;
        case 'studentDashboard':
          return studentDashboard;
        case 'textToSpeech':
          return textToSpeech;
        case 'documentation':
          return documentation;
        case 'bugs':
          return bugs;
        case 'pluginShowcase':
          return pluginShowcase;
        case 'flatiron1':
          return flatiron1;
        case 'flatiron2':
          return flatiron2;
        case 'codeReview':
          return codeReview;
        case 'personalSite':
          return personalSite;
        case 'b3':
          return b3;
        default:
          return classkickForm;
      }
}
