import Divider from "./Divider";
import Header from "./Header";
export default function Contact() {
    return (
        <div id='contact'>
            <Divider style='ml-64' />
            <div className="flex flex-col items-center">
                <Header title="Contact" emphasisWord="CONTACT" flexRight={false} />
            </div>
            <div className="[&>*]:w-24 [&>*]:pb-10 flex flex-col items-center text-left">
                <div className='pl-2'>Github</div>
                <div className='pl-10'>LinkedIn</div>
                <div className='pl-24'>Email</div>
                <div className='pl-10'>Phone</div>
                <div className='pl-2'>Blog</div>
            </div>
        </div>
    );
}
