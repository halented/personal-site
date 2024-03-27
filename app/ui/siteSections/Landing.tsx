import Image from "next/image";
import camping from '@/app/assets/camping.png'
import hal from '@/app/assets/hal-headshot.png';
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
      <Divider id='home' />
      <div className="flex flex-col items-center">
        <div className={`${childContainerStyle}`}>
          <div className="text-2xl font-mono">Hi,</div>
        </div>
        <Header title={title} emphasisWord="HALFRIDAY" flexRight={false} />
        <div className={`${childContainerStyle}`}>
          <div className="uppercase mt-2 font-mono">A frontend focused, full stack engineer.</div>
        </div>
        <div className={`${childContainerStyle}`}>
          <div className="flex flex-row h-fit">
            <Link className={`cursor-alias ${buttonStyle}`} key='resume' href='https://www.canva.com/design/DAFvj4cE_ro/qFwN1uddGXTbTJkKMqIntw/edit' rel="noopener noreferrer" target="_blank">See Resume</Link>
            <Link className={buttonStyle} href='/#contact' key='contact'>Contact Me</Link>
          </div>
          {/* image 1 */}
          <div className="z-1 relative hidden md:block">
            <Image src={hal} alt='Hal standing in front of a leafy green bush, facing the camera, smiling.' width={146.2} height={194.8} style={imgStyle}></Image>
          </div>
        </div>
        <div className={`pt-12 ${childContainerStyle}`}>
          {/* image 2 */}
          <div className="z-1 hidden md:block">
            <Image src={camping} alt='Hal sitting in a camping chair next to a small black dog, the two of them are flanked by a wooden picnic table to the left and a camping tent to the right.' width={147.2} height={192.6} style={imgStyle}></Image>
          </div>
          {/* blurb block */}
          <div className="flex items-center relative">
            <div className="z-[1] text-right">My developer journey started in 2019, lecturing and mentoring students through the Flatiron School curriculum in React & Ruby on Rails. Since then I've had the good fortune to apply myself in a variety of engineering settings — I{`'`}ve written template React components and SDK documentation for Qualtrics, built a number of responsive, accessible forms and dialogs in JavaScript and AngularJS for ClassKick, worked on joint personal projects using TypeScript and NextJS, and explored the strengths and pitfalls of using databases like RTDB's and relational databases on a production scale of millions of interactions per day. In my spare time, when I{`'`}m not working on something technical, you can usually find me walking a dog, reading some fantasy book, or getting out into the elements on a camping trip somewhere. If you{`'`}d like to check out some previous work, head down to the <Link href='/#portfolio' key='portfolio' className='text-sky-400 drop-shadow-lg'>portfolio</Link> section below. Or,  <Link href='/#contact' key='contact' className='text-sky-400 drop-shadow-lg'>feel free to drop a line</Link> and say hey!</div>
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


