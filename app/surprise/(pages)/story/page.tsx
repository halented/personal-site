import Image from "next/image";
import { surprisePageContainer } from "@/app/lib/styles";
import storyHeader from '@/app/assets/surprise/landing/storyHeader.png';
import sections from '@/app/assets/surprise/story/storyBundler'

const descriptionContainerStyle = 'flex flex-col items-center justify-center p-4';
const segmentAStyle = 'flex flex-col md:flex-row justify-between mt-8';
const segmentBStyle = 'flex flex-col md:flex-row-reverse justify-between mt-8';

function Page() {
    return (
        <div className={surprisePageContainer}>
            <Image
                src={storyHeader}
                alt="text which says 'the story'"
                width={300}
                height={100}
            />
            {sections.map((item, index) =>
                <div className={index % 2 === 0 ? segmentAStyle : segmentBStyle} key={index}>
                    <div className={descriptionContainerStyle}>
                        <Image src={item.header} alt={`story header number ${index}`} className="w-full"></Image>
                        {item.copy}
                    </div>
                    <Image src={item.image} alt={`story photo number ${index}`} className="w-full"></Image>
                </div>
            )}
        </div>
    );
}

export default Page;
