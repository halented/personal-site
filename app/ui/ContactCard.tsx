'use client';
import Image from "next/image";
import Link from "next/link";
import toast from 'react-simple-toasts';
import 'react-simple-toasts/dist/theme/dark.css';

type ContactMethod = {
    title: string;
    detail: string;
    resource: string;
};

function ContactCard({ method }: { method: ContactMethod }) {

    const formatMethodTitle = () => {
        return method.title === 'phone' ? 'Phone number' : 'Email';
    }

    const handleClick = () => {
        navigator.clipboard.writeText(method.resource);
        toast(`${formatMethodTitle()} copied to clipboard!`, { theme: 'dark' })
    }

    const renderCardInner = () => {
        return (
            <div className='w-52 h-40 sm:h-52 sm:w-80 shadow shadow-black border border-sky-400 flex items-center flex-col p-4 justify-center [&>*]:m-2 rounded-md'>
                <div>
                    <Image src={`/socials/${method.title}.png`} alt={`${method.title} icon`} width={70} height={70} />
                </div>
                <div className="text-center">
                    {method.detail}
                </div>
            </div>
        )
    }

    return (
        <>
            {method.resource.startsWith('http') ?
                <Link href={method.resource} target="_blank"> {renderCardInner()} </Link>
                :
                <div onClick={handleClick} className="cursor-copy"> {renderCardInner()} </div>
            }

        </>
    );
}

export default ContactCard;
