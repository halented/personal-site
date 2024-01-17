import Image from "next/image";
import camping from '../assets/camping.png';
import hal from '../assets/hal.jpeg';
import { buttonStyle } from "../lib/styles";
import Divider from "./Divider";

const imgStyle = {
  borderRadius: '3rem',
  border: '1px solid #fff',
  minWidth: '25vh',
}

function Landing() {
  const childContainerStyle = '[&>*]:m-2 flex justify-between w-4/5'

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
              <div className="relative">
                <div className="text-4xl h-14 flex items-center">
                  I'm Hal Friday!
                </div>
                <div className="absolute top-0 -z-1 text-7xl opacity-10 font-bold">
                  HALFRIDAY
                </div>
              </div>
              <div className="uppercase mt-2">A frontend focused, full stack developer.</div>
            </div>
            <div className="flex flex-row">
              <p className={buttonStyle}>See Resume</p>
              <p className={buttonStyle}>Contact Me</p>
            </div>
          </div>
          <div className="z-1 relative">
            <Image src={hal} alt='Hal facing the camera, outside at a park with sunglasses and a backwards hat on, smiling slightly.' width={146.2} height={194.8} style={imgStyle}></Image>
          </div>
        </div>
        <div className={`pt-12 ${childContainerStyle}`}>
          <div className="z-1">
            <Image src={camping} alt='Hal sitting in a camping chair next to a small black dog, the two of them are flanked by a wooden picnic table to the left and a camping tent to the right.' width={147.2} height={192.6} style={imgStyle}></Image>
          </div>
          <div className="z-1 flex items-center">Stand-in blurb here. Should be somewhere between 300 and 600 characters. Should encapsulate Hal as a developer first and a person second since that's probably what job people are looking for. Should be light hearted but believable, professional, engaging. Should lead you to the next page action.</div>
        </div>
      </div>
    </>
  );
}

export default Landing;