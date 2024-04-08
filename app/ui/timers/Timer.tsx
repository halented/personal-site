'use client'
import { TimerType } from "@/app/lib/types";
import { useState } from "react";
import { useFormState } from "react-dom";
import { deleteTimer, updateTimer } from "@/app/lib/databaseActions";
import toast from 'react-simple-toasts';
import './timer.css'

const inactiveSegment = 'h-4 w-24 border-teal border';
const activeSegment = inactiveSegment + ' bg-teal';
const counterButton = 'border border-teal rounded-full h-6 w-6 text-center leading-5 hover:bg-gray hover:cursor-pointer'

function Timer({ timer }: { timer: TimerType }) {
    const [error, setError] = useState(false);
    const [del, setDel] = useState(false);

    const updateFill = async (previousState: { fill: number }, formData: FormData) => {     
        if ((formData.get('+') && previousState.fill < timer.length) || (formData.get('-') && previousState.fill > 0)) {
            // if change is valid
            const newFill = formData.get('+') ? previousState.fill + 1 : previousState.fill - 1;
            await updateTimer({ ...timer, fill: newFill });
            return { fill: newFill }
        }
        else {
            showError();
            return { fill: previousState.fill }
        }
    }

    const initialState = {
        fill: timer.fill
    };

    const [state, fillAction] = useFormState(updateFill, initialState);


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
        return Array.from(new Array(timer.length)).map((x, i) => <div className={i < (timer.length - state.fill) ? inactiveSegment : activeSegment} key={i}></div>)
    }

    const bubbleBackground = () => {
        return error ? 'bg-primaryRed' : 'bg-black';
    }

    const confirmDelete = () => {
        if (del) {
            deleteTimer(timer.id);
            console.log('delete timer: ', timer);
        }
        else {
            toast('Click X again to delete', { theme: 'tealToast' })
            setDel(true);
            resetDeleteConfirm()
        }
    }
    const deleteColor = () => {
        return del ? ' bg-lightPrimaryRed text-black hover:bg-medPrimaryRed' : ''
    }
    const resetDeleteConfirm = () => {
        setTimeout(() => {
            setDel(false)
        }, 5000);
    }

    return (
        <div className="flex border-x-2 border-violet rounded-3xl m-2 px-1">
            <div className={"h-2 w-2 rounded-full m-2 animate-pulse " + bubbleBackground()}></div>
            <div className="flex flex-col items-center m-2 justify-center">
                <div className="text-lg">{timer.title}</div>
                <div className="flex flex-col [&>*]:mb-1">
                    {renderSegments()}
                </div>
            </div>
            <div className="flex flex-col justify-center [&>*]:m-1">
                <form action={fillAction}>
                    <button className={counterButton} type="submit" value="submit" name='+'>+</button>
                </form>
                <form action={fillAction}>
                    <button className={counterButton} type="submit" value="submit" name='-'>-</button>
                </form>
                <div className={counterButton + deleteColor()} onClick={confirmDelete}>x</div>
            </div>
        </div>
    );
}

export default Timer;