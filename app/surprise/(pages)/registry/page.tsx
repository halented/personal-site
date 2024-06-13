import halVenmo from '@/app/assets/surprise/registry/halVenmo.png';
import oliviaVenmo from '@/app/assets/surprise/registry/oliviaVenmo.png';
import Image from 'next/image';
// leaving paypal off for now
// import halPayPal from '@/app/assets/surprise/registry/halPayPal.png';
{/* <Image src={halPayPal} alt="qr code for hal's PayPal" className='rounded-xl w-72 h-72'></Image> */ }

function Page() {
    return (
        <div className='flex flex-col p-8 text-center'>
            <div>
                <div>
                    Here's another surprise for you - <span className='text-gold bg-gray rounded-md'>we don't actually have a registry!</span>
                </div>
                <div>
                    We are extremely fortunate to have all the things we could need, but we do have <span className='text-blue  bg-gold rounded-md'><span className='font-bold'>one big goal,</span> and it’s one that we'd graciously accept help with: buying a house.</span>
                </div>
                <div>
                    As unconventional as it is, if you'd like to contribute to our registry, we ask that you donate any amount to one of our Venmo or Paypal accounts using <span className='text-lg font-mono rounded-md border border-green p-1'>#AUTERFRIDAYFOREVER</span> in the comment box so we can drop it into our house savings account.
                </div>
                <div className='text-lg text-green font-bold'>And wish us luck! ;)</div>
            </div>
            <div className='flex flex-col md:flex-row justify-center'>
                <div className='m-4'>
                    Scan Hal's QR:
                    <Image src={halVenmo} alt="qr code for hal's Venmo" className='rounded-xl w-72'></Image>
                    Or <a href="https://venmo.com/u/halented" className='text-red contents cursor-alias' target="_blank">visit Hal's Venmo profile</a>
                </div>
                <div className='m-4 mb-4'>
                    Scan Olivia's QR:
                    <Image src={oliviaVenmo} alt="qr code for olivia's Venmo" className='rounded-xl w-72'></Image>
                    Or <a href="https://venmo.com/u/halented" className='text-red contents cursor-alias' target="_blank">visit Olivia's Venmo profile</a>
                </div>
            </div>
        </div>
    );
}

export default Page;
