import CustomLink from "./CustomLink";

const navLinks = ['home', 'portfolio', 'contact', 'blog']

function Nav() {
    return (
        <div className='[&>*]:p-2 flex flex-row justify-between'>
            <div className='font-mono text-5xl'>HF</div>
            <div className='[&>*]:p-2'>
            {navLinks.map(x => {
                return <CustomLink key={x} title={x} />
            })}
            </div>
        </div>
    );
}

export default Nav;