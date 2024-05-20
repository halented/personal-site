'use client';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import camping from '@/app/assets/camping.png';
import dashpoint from '@/app/assets/dashpoint.png';
import hal from '@/app/assets/hal.jpeg';
import './carousel.css';

export function Carousel() {
    const [emblaRef] = useEmblaCarousel()

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide">
                    <Image src={camping} alt='Hal sitting in a camping chair next to a small black dog, the two of them are flanked by a wooden picnic table to the left and a camping tent to the right.' width={147.2} height={192.6} className="w-full md:w-1/2"></Image>
                </div>
                <div className="embla__slide">
                    <Image src={dashpoint} alt='Hal sitting in a camping chair next to a small black dog, the two of them are flanked by a wooden picnic table to the left and a camping tent to the right.' width={226.4} height={181.2} className="w-full md:w-1/2"></Image>
                </div>
                <div className="embla__slide">
                    <Image src={hal} alt='Hal sitting in a camping chair next to a small black dog, the two of them are flanked by a wooden picnic table to the left and a camping tent to the right.' width={147.2} height={192.6} className="w-full md:w-1/2"></Image>
                </div>
            </div>
        </div>
    )
}