import halVenmo from '@/app/assets/surprise/registry/halVenmo.png';
import oliviaVenmo from '@/app/assets/surprise/registry/oliviaVenmo.png';
// leaving paypal off for now
// import halPayPal from '@/app/assets/surprise/registry/halPayPal.png';
{/* <Image src={halPayPal} alt="qr code for hal's PayPal" className='rounded-xl w-72 h-72'></Image> */ }

import Image from 'next/image';
function Page() {
    return (
        <div className='flex flex-col p-8 text-center'>
            <div>
                <span className='text-gold bg-gray rounded-md'>"What's this?"</span> <span className='text-black'>I hear you saying.</span> <span className='text-gold bg-gray rounded-md'>"This isn't a registry."</span>
                <div>And you're right! While we were talking about this whole wedding idea, we realized that we don't really <span className='italic'>need</span> more things. Our big goal, the one thing we need help with, is <span className='font-bold'>buying a house</span>. So, as unconventional as it is, we ask that if you really want to contribute to our registry, <span className='text-blue font-bold bg-gold rounded-md'>please donate any amount to one of our Venmo accounts using the description <span className='text-lg'>#AUTERFRIDAYFOREVER</span> so we can drop it into our house savings account.</span> And wish us luck!</div>
            </div>
            <div className='flex flex-col md:flex-row justify-center'>
                <div className='m-4'>
                    Scan Hal's QR:
                    <Image src={halVenmo} alt="qr code for hal's Venmo" className='rounded-xl w-72'></Image>
                    Or <a href="https://venmo.com/u/halented" className='text-red contents cursor-alias' target="_blank">visit Hal's Venmo profile</a>
                </div>
                <div className='m-4'>
                    Scan Olivia's QR:
                    <Image src={oliviaVenmo} alt="qr code for olivia's Venmo" className='rounded-xl w-72'></Image>
                    Or <a href="https://venmo.com/u/halented" className='text-red contents cursor-alias' target="_blank">visit Olivia's Venmo profile</a>
                </div>
            </div>
            <div>
                Some other words to bump the links above the grass
            </div>
        </div>
    );
}

export default Page;
