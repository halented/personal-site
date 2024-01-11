import Image from "next/image";
import camping from '../assets/camping.png';
import dashpoint from '../assets/dashpoint.png';
import hal from '../assets/hal.jpeg';
import { buttonStyle } from "../lib/styles";

function Landing() {
  const childContainerStyle = '[&>*]:m-2 flex flex-row border-2 border-teal-600'

  return (
    <div className="[&>*]:m-2 flex flex-col">
      <div className={childContainerStyle}>
        <div className={`[&>button]:${buttonStyle}`}>
          Hello! I'm Hal Friday. Links here:
          <p className={buttonStyle}>See my resume</p>
          <p >Contact me</p>
        </div>
        <Image src={hal} alt='Hal facing the camera, outside at a park with sunglasses and a backwards hat on, smiling slightly.' width={100} height={100}></Image>
      </div>
      <div className={childContainerStyle}>
        <Image src={camping} alt='Hal sitting in a camping chair next to a small black dog, the two of them are flanked by a wooden picnic table to the left and a camping tent to the right.' width={100} height={100}></Image>
        <div>Stand-in blurb here. Should be somewhere between 400 and 600 words. Should encapsulate Hal as a developer first and a person second since that's probably what job people are looking for. Should be light hearted but believable, professional, engaging. Should lead you to the next page action.</div>
      </div>
    </div>
  );
}

export default Landing;
// /Users/halfriday/Documents/dev/personal-site/app/assets/dashpoint.png
// app/assets/dashpoint.png