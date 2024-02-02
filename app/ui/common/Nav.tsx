import CustomLink from "./CustomLink";
import styles from './nav.module.css'
const navLinks = ['home', 'portfolio', 'contact', 'blog']

function Nav() {
    return (
        <div className='flex flex-row sticky top-0 bg-white bg-opacity-85 z-50 w-full md:w-full justify-between'>
            <div className={'font-mono text-6xl ' + styles.gradient}>HF</div>
            <div className='self-center'>
            {navLinks.map(x => {
                return <CustomLink key={x} title={x} />
            })}
            </div>
        </div>
    );
}

export default Nav;