'use client'

import Link from 'next/link';
import { sunCurve } from '../assets/curve';
/**
 beige: #D4BC8C
 gold: #D7A84A
 green: #747444
 blue: #40545C
 purple: #6E494B
 red: #A02424
 */
const divStyle = 'h-15 w-15 p-4 m-4 content-center'

function Page() {
    return (
        
        <div className='flex flex-col p-8 text-center bg-gradient-to-b from-cyan-500 to-blue-500'>
            <div className='max-h-80'>
                {sunCurve}
            </div>
            <div className='text-center text-blue text-3xl mt-4'>June 6th 2024</div>
            <div className='flex flex-col'>
                <Link href='/surprise/story' className={`${divStyle} bg-gold`}>The Story</Link>
                <Link href='/surprise/gallery' className={`${divStyle} bg-green`}>The Gallery</Link>
                <Link href='/surprise/playlist' className={`${divStyle} bg-blue`}>The Playlist</Link>
                <Link href='/surprise/registry' className={`${divStyle} bg-red`}>The Registry</Link>
                <Link href='/surprise/us' className={`${divStyle} bg-gold`}>The Couple</Link>
            </div>
        </div>
    );
}

export default Page;
