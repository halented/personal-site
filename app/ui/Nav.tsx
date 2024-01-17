import CustomLink from "./CustomLink";

const navLinks = ['home', 'portfolio', 'contact', 'blog']

function Nav() {
    return (
        <div className='[&>*]:p-2 flex flex-row justify-between fixed top-0 bg-white bg-opacity-85 z-50 w-full'>
            <div className='font-mono text-4xl'>HF</div>
            <div className='[&>*]:p-2 self-center'>
            {navLinks.map(x => {
                return <CustomLink key={x} title={x} />
            })}
            </div>
        </div>
    );
}

export default Nav;