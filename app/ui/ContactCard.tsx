import Image from "next/image";
import Link from "next/link";

type ContactMethod = {
    title: string;
    detail: string;
    resource: string;
};

function ContactCard({ method }: { method: ContactMethod }) {
    return (
        <div className='h-52 w-80 shadow shadow-black border border-sky-400 flex items-center flex-col p-4 justify-center [&>*]:m-2'>
            <div>
                <Image src={`/socials/${method.title}.png`} alt={`${method.title} icon`} width={70} height={70} />
            </div>
            <div>
                {method.detail}
            </div>
            <div>
                {method.resource}
            </div>
        </div>
    );
}

export default ContactCard;
