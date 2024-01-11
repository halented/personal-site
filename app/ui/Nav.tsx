import links from '../lib/translations';

function Nav() {
    return (
        <div>
            {links.map(x => {
                return <div key={x}>{x}</div>
            })}
        </div>
    );
}

export default Nav;
