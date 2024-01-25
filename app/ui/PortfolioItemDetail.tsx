import { WorkType } from "../lib/data";
import Image from "next/image";
import { getImageSrc } from "../lib/helpers";

function PortfolioItemDetail({ work }: { work: WorkType }) {
  return (
    <div className="m-1 p-1 flex flex-col min-w-64 max-h-96 md:min-w-80 md:max-h-max">
      <div>
        <Image src={getImageSrc(work.img)} width={work.size.width} height={work.size.height} alt={`${work.description}`} className="m-1 p-1 min-h-64 w-auto md:min-h-80 object-cover border border-sky-200 rounded-md max-h-80" quality={100} />
      </div>
      <div className="text-center" dangerouslySetInnerHTML={{ __html: work.description }}>
      </div>
    </div>
  );
}

export default PortfolioItemDetail;