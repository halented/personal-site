import Divider from "./Divider";
import Header from "./Header";
import ContactCard from "./ContactCard";
import { childContainerStyle } from "../lib/styles";

const contactMethods = [{ title: 'github', detail: 'Poke around my personal projects!', resource: 'https://github.com/halented' }, { title: 'linkedin', detail: 'Connect with me!', resource: 'https://www.linkedin.com/in/halented/' }, { title: 'blog', detail: 'Check out my latest posts!', resource: 'https://www.dev.to/halented' }, { title: 'email', detail: 'Drop a message in my inbox!', resource: 'heyhalfriday@gmail.com' }, { title: 'phone', detail: 'Send me a text! Or call if you must.', resource: '206-551-5709' }];

export default function Contact() {
    return (
        <div id='contact'>
            <Divider style='ml-64' />
            <div className="flex flex-col items-center">
                <Header title="Contact" emphasisWord="CONTACT" flexRight={false} />
                <div className={`flex flex-col sm:flex-row ${childContainerStyle} justify-evenly flex-wrap items-center`}>
                    {contactMethods.map(method => <ContactCard method={method} key={method.title} />)}
                </div>
            </div>
        </div>
    );
}
