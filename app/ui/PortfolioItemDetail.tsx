import { Work } from "../lib/data";
import { classkickForm, verificationForm } from '../assets/works/imageBundler';
import Image from "next/image";

function PortfolioItemDetail({ work }: { work: Work }) {

  const getImageSrc = (img: string) => {
    switch(img) {
      case 'verificationForm':
        return verificationForm;
      case 'classkickForm':
        return classkickForm;
      default:
        return classkickForm;
    }
  }

  return (
    <div className="m-1 p-1 flex flex-col min-w-64 max-h-80 md:min-w-80 md:max-h-max">
      <Image src={getImageSrc(work.img)} width={124.6} height={117.2} alt={`${work.description}`} className="p-1 min-h-64 w-auto md:min-h-80" quality={100} />
      <div className="text-center">
        {work.description}
      </div>
    </div>
  );
}

export default PortfolioItemDetail;
// dangerouslySetInnerHTML={{__html: work.descriptionHTML}}