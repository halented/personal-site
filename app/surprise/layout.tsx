import Image from 'next/image';
import SurpriseNav from '@/app/ui/common/SurpriseNav';
import AFheader from '@/app/assets/surprise/landing/AFheader.png'
import grass from '@/app/assets/surprise/landing/grass.png'
import './layout.css'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='surprise-container h-full overflow-auto'>
            <div className='flex self-center justify-center mt-10'>
                <Image src={AFheader} alt='Half circle in clay red with the words Auter-Friday Forever around the top and June 6, 2024 along the bottom' width={783} height={474} style={{ maxWidth: '80%' }} priority={true}></Image>
            </div>
            <div>{children}</div>
            <Image
                src={grass}
                alt="clickable image"
                className="absolute bottom-0 w-full pointer-events-none"
                width={300}
                height={100}
            />
        </div>
    );
}