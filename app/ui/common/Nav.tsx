import CustomLink from "./CustomLink";

const navLinks = ['home', 'portfolio', 'contact', 'blog']

function Nav() {
    return (
        <div className='flex flex-row fixed top-0 bg-white bg-opacity-85 z-50 w-full md:w-full'>
            <div className='font-mono text-4xl'>HF</div>
            <div className='self-center'>
            {navLinks.map(x => {
                return <CustomLink key={x} title={x} />
            })}
            </div>
        </div>
    );
}

export default Nav;