import Link from 'next/link';
import styles from './nav.module.css'
const navLinks = ['story', 'gallery', 'registry', 'playlist', 'us']

function SurpriseNav() {
    return (
        <div className='flex flex-row sticky top-0 bg-opacity-85 z-50 w-full md:w-full justify-between'>
            <div className={'font-mono text-6xl p-2 ' + styles.surpriseGradient}>AF</div>
            <div className='self-center'>
                {navLinks.map(link => <Link href={`/surprise/${link}`} key={link}> {link} </Link>)}
            </div>
        </div>
    );
}

export default SurpriseNav;