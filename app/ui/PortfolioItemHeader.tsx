import { PortfolioSectionType } from "../lib/data";

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

function PortfolioItemHeader({ section }: { section: PortfolioSectionType }) {

    /**
     * 
     * @param dates - Start and end date for one portfolio item
     * @returns string
     */
    const formatDateRange = (dates: { start: Date, end?: Date }) => {
        let formatted = `${monthNames[dates.start.getMonth()]} ${dates.start.getFullYear()} - ${dates.end ? `${monthNames[dates.end.getMonth()]} ${dates.end.getFullYear()}` : 'present'}`
        return formatted;
    }

    return (
        <div className="italic font-bold">
            <div>{section.title} • {section.dates ? formatDateRange(section.dates) : 'Ongoing'}</div>
        </div>
    );
}

export default PortfolioItemHeader;
