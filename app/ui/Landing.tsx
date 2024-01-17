import Image from "next/image";
import camping from '../assets/camping.png';
import hal from '../assets/hal.jpeg';
import { buttonStyle, childContainerStyle } from "../lib/styles";
import Divider from "./Divider";
import Header from "./Header";
import Link from "next/link";

const imgStyle = {
  borderRadius: '3rem',
  border: '1px solid #fff',
  minWidth: '25vh',
}

function Landing() {
  const title = "I'm Hal Friday!";

  return (
    <>
      <Divider style='ml-64'/>
      <div className="flex flex-col items-center">
        <div className={`${childContainerStyle}`}>
          <div className="z-1 pt-12">
            <div className="flex flex-col font-mono ml-">
              <div className="flex flex-row">
                <div className="text-2xl">Hello,</div>
              </div>
              <Header title={title} emphasisWord="HALFRIDAY" flexRight={false}/>
              <div className="uppercase mt-2">A frontend focused, full stack developer.</div>
            </div>
            <div className="flex flex-row">
              <Link className={`cursor-alias ${buttonStyle}`} key='resume' href='https://www.canva.com/design/DAFxvDRoFaY/LnAoxx9CURUUYoggEphxrA/edit' rel="noopener noreferrer" target="_blank">See Resume</Link>
              <Link className={buttonStyle} href='/#contact' key='contact'>Contact Me</Link>
            </div>
          </div>
          <div className="z-1 relative">
            <Image src={hal} alt='Hal facing the camera, outside at a park with sunglasses and a backwards hat on, smiling slightly.' width={146.2} height={194.8} style={imgStyle}></Image>
          </div>
        </div>
        <div className={`pt-12 ${childContainerStyle}`}>
          <div className="z-1 hidden md:block">
            <Image src={camping} alt='Hal sitting in a camping chair next to a small black dog, the two of them are flanked by a wooden picnic table to the left and a camping tent to the right.' width={147.2} height={192.6} style={imgStyle}></Image>
          </div>
          <div className="z-1 flex items-center">Stand-in blurb here. Should be somewhere between 300 and 600 characters. Should encapsulate Hal as a developer first and a person second since that{`'`}s probably what job people are looking for. Should be light hearted but believable, professional, engaging. Should lead you to the next page action.</div>
        </div>
      </div>
    </>
  );
}

export default Landing;