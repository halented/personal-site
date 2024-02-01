'use client'
import { infoCardsData } from "../lib/data";
import TextComponent from "./common/TextComponent";
import { portfolioCardStyle } from "../lib/styles";

function PortfolioItemInfoCard({ keyName, handleExitClick }: { keyName: string, handleExitClick: () => void }) {

    return (
        <div>
            <div className={portfolioCardStyle + " overflow-scroll pl-3 pt-0"}>
                <span className="text-xl cursor-pointer flex p-2 hover:text-sky-400 sticky bg-white bg-opacity-85 top-0" onClick={handleExitClick}>⏎</span>
                <TextComponent innerHTML={infoCardsData[keyName]} style="text-left"/>
            </div>
        </div>
    );
}

export default PortfolioItemInfoCard;
