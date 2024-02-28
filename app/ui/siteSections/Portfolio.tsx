import Divider from "../common/Divider";
import Header from "../common/Header";
import { childContainerStyle } from "../../lib/styles";
import PortfolioItem from "../PortfolioItem";
import { sections } from '../../lib/data';

function Portfolio() {

    return (
        <div>
            <Divider style='justify-center' id='portfolio'/>
            <div className="flex flex-col items-center">
                <Header title='Portfolio' emphasisWord='PORTFOLIO' flexRight={false} />
                <div className={`${childContainerStyle} flex-col items-center`}>
                    {sections.map(s => <PortfolioItem section={s} key={`portfolio ${s.title}`}/>)}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;