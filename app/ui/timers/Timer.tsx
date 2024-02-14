import { TimerType } from "@/app/lib/types";
import { useState } from "react";

const inactiveSegment = 'h-4 w-24 border-teal-400 border';
const activeSegment = inactiveSegment + ' bg-teal-400';
const counterButton = 'border border-teal-400 rounded-full h-6 w-6 text-center leading-5 hover:bg-gray-600 hover:cursor-pointer'

function Timer({ timer }: { timer: TimerType }) {
    const [fill, setFill] = useState<number>(1)
    const [error, setError] = useState(false);

    const handleClick = (increase: boolean) => {
        if (increase) {
            fill < timer.length ? setFill(fill + 1) : showError();
        }
        else {
            fill > 0 ? setFill(fill - 1) : showError();
        }
    };

    const showError = () => {
        setError(true);
        setTimeout(() => {
            removeError()
        }, 1800);
    }

    const removeError = () => {
        setError(false);
    }

    const renderSegments = () => {
        return Array.from(new Array(timer.length)).map((x, i) => <div className={i < (timer.length - fill) ? inactiveSegment : activeSegment} key={i}></div>)
    }

    const bubbleBackground = () => {
        return error ? 'bg-red-600' : 'bg-black';
    }

    return (
        <div className="flex border-x-2 border-violet-600 rounded-3xl m-2 px-1">
            <div className={"h-2 w-2 rounded-full m-2 animate-pulse " + bubbleBackground()}></div>
            <div className="flex flex-col items-center m-2 justify-center">
                <div className="text-lg">{timer.title}</div>
                <div className="flex flex-col [&>*]:mb-1">
                    {renderSegments()}
                </div>
            </div>
            <div className="flex flex-col justify-center [&>*]:m-1">
                <div className={counterButton} onClick={() => handleClick(true)}>+</div>
                <div className={counterButton} onClick={() => handleClick(false)}>-</div>
            </div>
        </div>
    );
}

export default Timer;