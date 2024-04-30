import Image from "next/image";
import { surprisePageContainer } from "@/app/lib/styles";
import galleryHeader from '@/app/assets/surprise/landing/galleryHeader.png';

function Page() {
    return (
        <div className={surprisePageContainer}>
            <Image
                src={galleryHeader}
                alt="text which says 'the gallery'"
                width={300}
                height={100}
            />
            <div></div>
        </div>
    );
}

export default Page;
