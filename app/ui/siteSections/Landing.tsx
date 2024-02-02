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
      <Divider style='mt-14' id='home' />
      <div className="flex flex-col items-center">
        <div className={`${childContainerStyle}`}>
          <div className="text-2xl font-mono">Hello,</div>
        </div>
        <Header title={title} emphasisWord="HALFRIDAY" flexRight={false} />
        <div className={`${childContainerStyle}`}>
          <div className="uppercase mt-2 font-mono">A frontend focused, full stack developer.</div>
        </div>
        <div className={`${childContainerStyle}`}>
          <div className="flex flex-row h-fit">
            <Link className={`cursor-alias ${buttonStyle}`} key='resume' href='https://www.canva.com/design/DAFxvDRoFaY/LnAoxx9CURUUYoggEphxrA/edit' rel="noopener noreferrer" target="_blank">See Resume</Link>
            <Link className={buttonStyle} href='/#contact' key='contact'>Contact Me</Link>
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
            <div className="z-[1] text-right">For the past two years, I{`'`}ve worked professionally with JavaScript and AngularJS, and I love using React + TypeScript for my personal projects. I enjoy exploring new tools for the job as well -- just this year I rebuilt this website in NextJS to see what all the fuss was about! In my spare time, you can usually find me walking a dog, reading some fantasy book, or getting out into the elements on a camping trip or Tough Mudder course. If you{`'`}d like to check out some previous work, head down to the <Link href='/#portfolio' key='portfolio' className='text-sky-400 drop-shadow-lg'>portfolio</Link> section below. Or,  <Link href='/#contact' key='contact' className='text-sky-400 drop-shadow-lg'>feel free to drop a line</Link>. I{`'`}d love to set up a chat!</div>
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


