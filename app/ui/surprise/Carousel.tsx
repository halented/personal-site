'use client';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import './carousel.css';
import { weddingImages } from '@/app/assets/surprise/gallery/imageBundler.js';

export function Carousel() {
    const [emblaRef] = useEmblaCarousel()

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                {weddingImages.map((photo, index) =>
                    <div className="embla__slide" key={index}>
                        <Image src={photo} alt={`Hal & Olivia wedding photo ${index}`} className="w-full"></Image>
                    </div>
                )}
            </div>
        </div>
    )
}