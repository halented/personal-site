import Divider from "../common/Divider";
import Header from "../common/Header";
import { childContainerStyle } from "../../lib/styles";
import PortfolioItem from "../PortfolioItem";
import { sections } from '../../lib/data';

function Portfolio() {

    return (
        <div id='portfolio'>
            <Divider style='mr-64' />
            <div className="flex flex-col items-center">
            scroll snap snap-center
                <Header title='Portfolio' emphasisWord='PORTFOLIO' flexRight={true} />
                <div className={`${childContainerStyle} flex-col items-center`}>
                    {sections.map(s => <PortfolioItem section={s} key={s.title}/>)}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;