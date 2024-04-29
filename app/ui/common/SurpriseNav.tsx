import Link from 'next/link';
import styles from './nav.module.css'
// const navLinks = ['story', 'gallery', 'registry', 'playlist', 'us']
import Image from 'next/image';
import back from '@/app/assets/surprise/landing/back.png';

function SurpriseNav() {
    return (
        <div className='flex flex-row absolute top-0 bg-opacity-85 z-50 w-full md:w-full justify-end'>
            <div className='self-center mr-8 mt-4'>
                <Link href='/surprise'>
                    <div>
                        <Image
                            src={back}
                            alt="left point arrow (back button)"
                            className='hover:opacity-80'
                            width={50}
                            height={50}
                        />
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default SurpriseNav;