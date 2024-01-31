import PortfolioItemHeader from "./PortfolioItemHeader";
import { PortfolioSectionType } from "../lib/types";
import PortfolioItemBody from "./PortfolioItemBody";

function PortfolioItem({ section }: { section: PortfolioSectionType }) {

    return (
        <>
            <PortfolioItemHeader title={section.title} dates={section.dates} />
            <PortfolioItemBody title={section.title} works={section.works} />

        </>
    );
}

export default PortfolioItem;
