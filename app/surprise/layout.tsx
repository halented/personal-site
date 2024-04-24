import Image from 'next/image';
import grass from '@/app/assets/surprise/landing/grass.png'
import './layout.css'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='surprise-container h-full overflow-auto'>
            <div>{children}</div>
            <Image
                src={grass}
                alt="clickable image"
                className="sticky bottom-0 w-full pointer-events-none"
                width={300}
                height={100}
            />
        </div>
    );
}