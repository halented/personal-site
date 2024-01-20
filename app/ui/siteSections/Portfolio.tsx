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
                <Header title='Portfolio' emphasisWord='PORTFOLIO' flexRight={true} />
                <div className={`${childContainerStyle} flex-col items-center`}>
                    {sections.map(s => <PortfolioItem section={s} key={s.title}/>)}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;


/**
    •	classkick: can i get gifs of work I did? can i make them on their app still?
    <br />
    {`>    >   >`}	the school verification form
    <br />
    {`>    >   >`}	the contributor history feature
    <br />
    •	qualtrics: work description, maybe i can make a flow chart for data?
    <br />
    •	flatiron: picture of me with students, work description
    <br />
    •	This website you{`'`}re lookin at! written in nextjs, react, typescript, & tailwind
    <br />
    •	better book base: teaser with link to design doc
 */