import Image from 'next/image';
import AFheader from '@/app/assets/surprise/landing/AFheader.png'
import './layout.css'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='surprise-container h-full overflow-auto'>
            <div className='flex self-center justify-center mt-10'>
                <Image src={AFheader} alt='Half circle in clay red with the words Auter-Friday Forever around the top and June 6, 2024 along the bottom' width={783} height={474} style={{ maxWidth: '80%' }} priority={true}></Image>
            </div>
            <div>{children}</div>
            {/* grass div below */}
            <div className="bg-repeat-x bg-grass bg-contain min-w-full min-h-20 absolute bottom-0 md:min-h-40">           
            </div>
        </div>
    );
}