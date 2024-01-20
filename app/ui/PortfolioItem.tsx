import PortfolioItemHeader from "./PortfolioItemHeader";
import { PortfolioSectionType } from "../lib/data";
import PortfolioItemDetail from "./PortfolioItemDetail";

function PortfolioItem({ section }: { section: PortfolioSectionType }) {
    return (
        <>
            <PortfolioItemHeader section={section} />
            <PortfolioItemDetail />
        </>
    );
}

export default PortfolioItem;
