import { Work } from "../lib/data";
import Bubble from "./common/Bubble";
import PortfolioItemDetail from "./PortfolioItemDetail";

function PortfolioItemBody({ title, works }: { title: string, works: Work[] }) {
    return (
        <div className="w-full p-4 flex flex-nowrap overflow-x-scroll">
            {works.map(w => <PortfolioItemDetail key={title} work={w}/>)}
        </div>
    );
}

export default PortfolioItemBody;
