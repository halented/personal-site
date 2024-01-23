import { Work } from "../lib/data";
import { classkickForm, verificationForm, studentDashboard, textToSpeech, documentation, bugs, pluginShowcase, flatiron1, flatiron2, codeReview, personalSite, b3 } from '../assets/works/imageBundler';
import Image from "next/image";

function PortfolioItemDetail({ work }: { work: Work }) {

  const getImageSrc = (img: string) => {
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

  return (
    <div className="m-1 p-1 flex flex-col min-w-64 max-h-96 md:min-w-80 md:max-h-max">
      <div>
        <Image src={getImageSrc(work.img)} width={124.6} height={117.2} alt={`${work.description}`} className="m-1 p-1 min-h-64 w-auto md:min-h-80 object-cover border border-sky-200 rounded-md" quality={100} />
      </div>
      <div className="text-center" dangerouslySetInnerHTML={{ __html: work.description }}>
      </div>
    </div>
  );
}

export default PortfolioItemDetail;
/**
 * 
 */