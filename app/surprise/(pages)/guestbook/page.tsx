import Image from "next/image";
import { surprisePageContainer } from "@/app/lib/styles";
import guestbookHeader from '@/app/assets/surprise/landing/guestbookHeader.png';
import { GuestbookForm } from "@/app/ui/surprise/guestbookForm";
import { GuestbookContent } from "@/app/ui/surprise/guestbookContent";

function Page() {
    return (
        <div className={surprisePageContainer}>
            <Image
                src={guestbookHeader}
                alt="text which says 'the guest book'"
                width={300}
                height={100}
            />
            <GuestbookContent />
        </div>
    );
}

export default Page;
