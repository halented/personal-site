'use client'
import { infoCardsData } from "../lib/data";
import TextComponent from "./common/TextComponent";
import { portfolioCardStyle } from "../lib/styles";

function PortfolioItemInfoCard({ keyName, handleExitClick }: { keyName: string, handleExitClick: () => void }) {

    return (
        <div>
            <div className={portfolioCardStyle}>
                <span className="text-xl cursor-pointer flex justify-end p-2" onClick={handleExitClick}>✖</span>
                <TextComponent innerHTML={infoCardsData[keyName]} />
            </div>
        </div>
    );
}

export default PortfolioItemInfoCard;
