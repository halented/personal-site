import Link from 'next/link';
import styles from './nav.module.css'
// const navLinks = ['story', 'gallery', 'registry', 'playlist', 'us']
import Image from 'next/image';
import story from '@/app/assets/surprise/landing/story.png';

function SurpriseNav() {
    return (
        <div className='flex flex-row absolute top-0 bg-opacity-85 z-50 w-full md:w-full justify-end'>
            <div className='self-center mr-8 mt-4'>
                <Link href='/surprise'>
                    <div>
                        <Image
                            src={story}
                            alt="clickable image"
                            className='hover:opacity-80'
                            width={100}
                            height={100}
                        />
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default SurpriseNav;