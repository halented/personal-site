'use client'
import Image from "next/image";
import Link from 'next/link';
import AFheader from '@/app/assets/surprise/landing/AFheader.png'
import story from '@/app/assets/surprise/landing/story.png';
import gallery from '@/app/assets/surprise/landing/gallery.png';
import playlist from '@/app/assets/surprise/landing/playlist.png';
import registry from '@/app/assets/surprise/landing/registry.png';
import proposal from '@/app/assets/surprise/landing/proposal.png';
/**
 beige: #D4BC8C
 gold: #D7A84A
 green: #747444
 blue: #40545C
 purple: #6E494B
 red: #A02424
 */
const imageContainer = 'hover:cursor-pointer flex justify-center items-center';

function Page() {
    return (

        <div className='flex flex-col p-8 text-center bg-gradient-to-b from-cyan-500 to-blue-500'>
            <div className='flex self-center max-h-80'>
                <Image src={AFheader} alt='Hal facing the camera, outside at a park with sunglasses and a backwards hat on, smiling slightly.' width={783} height={474} style={{ maxWidth: "max-content" }}></Image>
            </div>
            {/* story, gallery links */}
            <div className='flex flex-col self-center w-4/5 md:flex-row md:w-1/2'>
                <Link href='/surprise/story'>
                    <div className={imageContainer}>
                        <Image
                            src={story}
                            alt="clickable image"
                            className="hover:opacity-80"
                            width={300}
                            height={100}
                        />
                    </div>
                </Link>
                <Link href='/surprise/gallery'>
                    <div className={imageContainer}>
                        <Image
                            src={gallery}
                            alt="clickable image"
                            className="hover:opacity-80"
                            width={300}
                            height={100}
                        />
                    </div>
                </Link>
            </div>
            {/* playlist, registry, proposal links */}
            <div className='flex flex-col self-center w-4/5 md:flex-row md:w-1/2'>
                <div className='flex flex-col self-center'>
                    <Link href='/surprise/playlist'>
                        <div className={imageContainer}>
                            <Image
                                src={playlist}
                                alt="clickable image"
                                className="hover:opacity-80"
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
                                className="hover:opacity-80"
                                width={300}
                                height={100}
                            />
                        </div>
                    </Link>
                </div>
                <Link href='/surprise/us'>
                    <div className={imageContainer}>
                        <Image
                            src={proposal}
                            alt="clickable image"
                            className="hover:opacity-80"
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
