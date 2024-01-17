import Divider from "./Divider";
export default function Contact() {
    const childContainerStyle = '[&>*]:m-2 flex justify-between w-4/5'
    return (
        <div id='contact'>
            <Divider style='ml-64' />
            <div className="flex flex-col items-center">
                <div className={childContainerStyle}>
                    <div className="relative">
                        <div className="text-4xl h-14 flex items-center">
                            Contact
                        </div>
                        <div className="absolute top-0 -z-1 text-7xl opacity-10 font-bold">
                            CONTACT
                        </div>
                    </div>
                </div>
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
