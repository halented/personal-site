import { monthNames } from '../lib/data'

function PortfolioItemHeader({ title, dates }: { title: string, dates?: { start: Date, end?: Date } }) {

    /**
     * 
     * @param dates - Start and end date for one portfolio item
     * @returns string, formatted date range. Ex: "Jan 1970 - Dec 1970"
     */
    const formatDateRange = (dates: { start: Date, end?: Date }) => {
        let formatted = `${monthNames[dates.start.getMonth()]} ${dates.start.getFullYear()} - ${dates.end ? `${monthNames[dates.end.getMonth()]} ${dates.end.getFullYear()}` : 'present'}`
        return formatted;
    }

    return (
        <div className="font-mono m-0">
            <div className='flex flex-col items-center md:flex-row'>
                <div className='mr-2'>
                    {title}:
                </div>
                <div>{dates ? formatDateRange(dates) : 'Ongoing'}</div>
            </div>
        </div>
    );
}

export default PortfolioItemHeader;
