import halVenmo from '@/app/assets/surprise/registry/halVenmo.png';
import oliviaVenmo from '@/app/assets/surprise/registry/oliviaVenmo.png';
import halPayPal from '@/app/assets/surprise/registry/halPayPal.png';

import Image from 'next/image';
function Page() {
    return (
        <div className='flex flex-col md:flex-row p-8 text-center'>
            <Image src={halVenmo} alt="qr code for hal's Venmo" className='rounded-xl w-72'></Image>
            <Image src={oliviaVenmo} alt="qr code for olivia's Venmo" className='rounded-xl w-72'></Image>
            <Image src={halPayPal} alt="qr code for hal's PayPal" className='rounded-xl w-72 h-72'></Image>
        </div>
    );
}

export default Page;
