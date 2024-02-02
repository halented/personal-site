import Divider from "../common/Divider";
import Header from "../common/Header";
import ContactCard from "../ContactCard";
import { childContainerStyle } from "../../lib/styles";
import { contactMethods } from "@/app/lib/data";


export default function Contact() {
    return (
        <div>
            <Divider style='justify-end' id='contact'/>
            <div className="flex flex-col items-center">
                <Header title="Contact" emphasisWord="CONTACT" flexRight={false} />
                <div className={`flex flex-col sm:flex-row ${childContainerStyle} justify-evenly flex-wrap items-center`}>
                    {contactMethods.map(method => <ContactCard method={method} key={method.title} />)}
                </div>
            </div>
        </div>
    );
}
