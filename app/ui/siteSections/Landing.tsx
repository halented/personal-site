import Image from "next/image";
import camping from '@/app/assets/camping.png'
import hal from '@/app/assets/hal.jpeg';
import { buttonStyle, childContainerStyle } from "@/app/lib/styles";
import Divider from "../common/Divider";
import Header from "../common/Header";
import Link from "next/link";
import Bubble from "../common/Bubble";

const imgStyle = {
  borderRadius: '3rem',
  border: '1px solid #fff',
  minWidth: '25vh',
}

function Landing() {
  const title = "I'm Hal Friday!";

  return (
    <>
      <Divider style='ml-64' />
      <div className="flex flex-col items-center">
        <div className={`${childContainerStyle}`}>
          <div className="z-1 pt-12">
            {/* intro block */}
            <div className="flex flex-col font-mono">
              <div className="flex flex-row">
                <div className="text-2xl">Hello,</div>
              </div>
              <Header title={title} emphasisWord="HALFRIDAY" flexRight={false} />
              <div className="uppercase mt-2">A frontend focused, full stack developer.</div>
            </div>
            {/* buttons block */}
            <div className="flex flex-row">
              <Link className={`cursor-alias ${buttonStyle}`} key='resume' href='https://www.canva.com/design/DAFxvDRoFaY/LnAoxx9CURUUYoggEphxrA/edit' rel="noopener noreferrer" target="_blank">See Resume</Link>
              <Link className={buttonStyle} href='/#contact' key='contact'>Contact Me</Link>
            </div>
          </div>
          {/* image 1 */}
          <div className="z-1 relative hidden md:block">
            <Image src={hal} alt='Hal facing the camera, outside at a park with sunglasses and a backwards hat on, smiling slightly.' width={146.2} height={194.8} style={imgStyle}></Image>
          </div>
        </div>
        <div className={`pt-12 ${childContainerStyle}`}>
          {/* image 2 */}
          <div className="z-1 hidden md:block">
            <Image src={camping} alt='Hal sitting in a camping chair next to a small black dog, the two of them are flanked by a wooden picnic table to the left and a camping tent to the right.' width={147.2} height={192.6} style={imgStyle}></Image>
          </div>
          {/* blurb block */}
          <div className="flex items-center relative">
            <div className="z-[1] text-right">Stand-in blurb here. Should be somewhere between 300 and 600 characters. Should encapsulate Hal as a developer first and a person second since that{`'`}s probably what job people are looking for. Should be light hearted but believable, professional, engaging. Should lead you to the next page action.</div>
            <Bubble tailwindHeight='h-40' tailwindWidth='w-40' style='left-6' />
            <Bubble tailwindHeight='h-40' tailwindWidth='w-40' style='hidden sm:block left-20 bottom-6' />
            <Bubble tailwindHeight='h-20' tailwindWidth='w-20' style='right-10 top-6' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;