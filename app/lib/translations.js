const NavLinksEn = ['home', 'portfolio', 'blog', 'contact']
const NavLinksEs = ['inicio', 'cartera', 'blog', 'contacto']
const NavLinksFr = ['acceuil', 'portfolio', 'blog', 'coordonnées']

const links = function NavLinks() {
    if (process.env.LANG) {
        switch (process.env.LANG) {
            case 'EN':
                return NavLinksEn
            case 'ES':
                return NavLinksEs
            case 'FR':
                return NavLinksFr
            default:
                return NavLinksEn
        }
    }
    else return ['l o a d i n g . . . ']
}()

export default links