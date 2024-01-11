import CustomLink from "./CustomLink";

const navLinks = ['home', 'portfolio', 'contact', 'blog']

function Nav() {
    
    return (
        <div className='[&>*]:p-4 flex flex-row'>
            <div className='font-mono text-5xl'>HF</div>
            {navLinks.map(x => {
                return <CustomLink key={x} title={x} />
                // make an exception for the blog link -- it should link to a new tab and the cursor should be an outlink icon
            })}
        </div>
    );
}

export default Nav;
// const path = usePathname();
// 'use client'
// import { usePathname } from 'next/navigation';