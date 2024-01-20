import { childContainerStyle } from '../../lib/styles'

function Header({ title, emphasisWord, flexRight }: { title: string, emphasisWord: string, flexRight: boolean }) {
    return (
        <div className={`${childContainerStyle} ${flexRight ? 'flex-row-reverse' : ''}`}>
            <div className="relative">
                <div className="text-4xl h-14 flex items-center w-max">
                    {title}
                </div>
                <div className={`absolute top-0 -z-1 text-6xl md:text-7xl opacity-10 font-bold ${flexRight ? 'right-2' : ''}`}>
                    {emphasisWord}
                </div>
            </div>
        </div>
    );
}

export default Header;
