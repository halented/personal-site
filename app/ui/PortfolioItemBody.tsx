import { WorkType } from "../lib/types";
import PortfolioItemDetail from "./PortfolioItemDetail";


function PortfolioItemBody({ title, works }: { title: string, works: WorkType[]}) {

    return (
        <div className="w-full p-4 flex flex-nowrap overflow-x-scroll" >
            {works.map(w => <PortfolioItemDetail key={title} work={w} />)}
        </div>
    );
}

export default PortfolioItemBody;
