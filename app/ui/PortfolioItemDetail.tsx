'use client';
import { WorkType } from "../lib/types";
import Image from "next/image";
import { getImageSrc } from "../lib/helpers";
import { useState } from "react";
import PortfolioItemInfoCard from "./PortfolioItemInfoCard";
import TextComponent from "./common/TextComponent";
import { portfolioCardStyle } from "../lib/styles";

function PortfolioItemDetail({ work }: { work: WorkType }) {
  const [showInfo, setShowInfo] = useState(false);

  const handleCardClick = () => {
    showInfo ? null : setShowInfo(!showInfo);
  }

  const handleExitClick = () => {
    setShowInfo(!showInfo);
  }

  return (
    <div className="m-1 p-1 flex flex-col min-w-64 max-w-64 max-h-96 md:min-w-80 md:max-h-max" onClick={handleCardClick}>
      <>
        <div>
          {showInfo ?
            <PortfolioItemInfoCard keyName={work.img} handleExitClick={handleExitClick} />
            :
            <Image src={getImageSrc(work.img)} width={work.size.width} height={work.size.height} alt={`${work.description}`} className={portfolioCardStyle + ' object-cover cursor-pointer'} quality={100} />
          }
        </div>
        <TextComponent innerHTML={work.description} style='text-center'/>
      </>
    </div>
  );
}

export default PortfolioItemDetail;