'use client'
import Image from "next/image";
import Link from 'next/link';
import { surpriseLandingPageContainer } from "../lib/styles";
import story from '@/app/assets/surprise/landing/story.png';
import gallery from '@/app/assets/surprise/landing/gallery.png';
import playlist from '@/app/assets/surprise/landing/playlist.png';
import registry from '@/app/assets/surprise/landing/registry.png';
import guestbook from '@/app/assets/surprise/landing/guestbook.png';
/**
 beige: #D4BC8C
 gold: #D7A84A
 green: #747444
 blue: #40545C
 purple: #6E494B
 red: #A02424
 */
const imageContainer = 'hover:cursor-pointer flex justify-center items-center';
const linkImage = 'hover:opacity-80 max-w-7/10 md:max-w-full'

function Page() {
    return (

        <div className={surpriseLandingPageContainer}>
            {/* story, gallery links */}
            <div className='flex flex-col self-center justify-center'>
                <Link href='/surprise/story'>
                    <div className={imageContainer}>
                        <Image
                            src={story}
                            alt="clickable image"
                            className={linkImage}
                            width={300}
                            height={100}
                        />
                    </div>
                </Link>
                <div className='flex flex-col self-center'>
                    <Link href='/surprise/playlist'>
                        <div className={imageContainer}>
                            <Image
                                src={playlist}
                                alt="clickable image"
                                className={linkImage}
                                width={300}
                                height={100}
                            />
                        </div>
                    </Link>
                    <Link href='/surprise/registry'>
                        <div className={imageContainer}>
                            <Image
                                src={registry}
                                alt="clickable image"
                                className={linkImage}
                                width={300}
                                height={100}
                            />
                        </div>
                    </Link>
                </div>
            </div>
            {/* playlist, registry, guestbook links */}
            <div className='flex flex-col self-center justify-center'>
                <Link href='/surprise/gallery'>
                    <div className={imageContainer}>
                        <Image
                            src={gallery}
                            alt="clickable image"
                            className={linkImage}
                            width={300}
                            height={100}
                        />
                    </div>
                </Link>
                <Link href='/surprise/guestbook'>
                    <div className={imageContainer}>
                        <Image
                            src={guestbook}
                            alt="clickable image"
                            className={linkImage}
                            width={300}
                            height={100}
                        />
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Page;
