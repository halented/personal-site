'use client'
import React from 'react';
import { sunCurve } from '../assets/curve';
/**
 beige: #D4BC8C
 gold: #D7A84A
 green: #747444
 blue: #40545C
 purple: #6E494B
 red: #A02424
 */
const divStyle = 'h-15 w-15 p-4 m-4 content-center'

function Page() {
    return (
        <div className='flex flex-col p-8 text-center bg-gradient-to-b from-cyan-500 to-blue-500'>
            <div className='max-h-96'>
                {sunCurve}
            </div>
            <div>
                <div className={`${divStyle} bg-gold`}>1</div>
                <div className={`${divStyle} bg-green`}>2</div>
                <div className={`${divStyle} bg-blue`}>3</div>
                <div className={`${divStyle} bg-red`}>4</div>
            </div>
        </div>
    );
}

export default Page;
