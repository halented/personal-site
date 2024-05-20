import Image from "next/image";
import { surprisePageContainer } from "@/app/lib/styles";
import storyHeader from '@/app/assets/surprise/landing/storyHeader.png';

const descriptionContainerStyle = 'flex flex-col items-center justify-center p-4';

function Page() {
    return (
        <div className={surprisePageContainer}>
            <Image
                src={storyHeader}
                alt="text which says 'the story'"
                width={300}
                height={100}
            />
            <div className="flex flex-col md:flex-row justify-between mt-8">
                <div className={descriptionContainerStyle}><div className="text-lg font-bold italic">MAR 2016</div>
We met while working together at a dog daycare! Hal was the first person Olivia saw after walking into the building (though it was more like stumbling in after misunderstanding the entry gate mechanism) for her interview. Both of us later shared that we felt something special in that moment. <div className="italic">Hal stepping in here to add: felt immediately at ease, felt like laughing. :shrug:</div> </div>
                <Image
                    src={storyHeader}
                    alt="temporary image"
                    width={300}
                    height={100}
                />
            </div>
            <div className="flex flex-col-reverse md:flex-row justify-between mt-8">
                <Image
                    src={storyHeader}
                    alt="temporary image"
                    width={300}
                    height={100}
                />
                <div className={descriptionContainerStyle}>Further words to describe something about what we have done in our lives go here and it is all very interesting.</div>
            </div>
            <div className="flex flex-col md:flex-row justify-between mt-8">
                <div className={descriptionContainerStyle}>Finally, this is a description of something that we have done in our lives and people will find that worth reading so they are more interested in our well-being and good fortune moving forward.</div>
                <Image
                    src={storyHeader}
                    alt="temporary image"
                    width={300}
                    height={100}
                />
            </div>
        </div>
    );
}

export default Page;
