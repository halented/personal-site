import Divider from "./Divider";

function Portfolio() {
    const childContainerStyle = '[&>*]:m-2 flex justify-between w-4/5'

    return (
        <div id='portfolio'>
            <Divider style='mr-64' />
            <div className="flex flex-col items-center">
                <div className={`${childContainerStyle} flex-row-reverse`}>
                    <div className="relative">
                        <div className="text-4xl h-14 flex items-center">
                            Portfolio
                        </div>
                        <div className="absolute top-0 right-2 -z-1 text-7xl opacity-10 font-bold">
                            PORTFOLIO
                        </div>
                    </div>
                </div>
                <div className={childContainerStyle}>
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
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
