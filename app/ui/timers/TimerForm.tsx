'use client'
import { postTimer } from '@/app/lib/databaseActions';
import { RawTimerType, TimerType } from '@/app/lib/types';
import { useFormState } from "react-dom";


const formFieldStyle = 'border border-teal-400 bg-gray-800 text-white w-32 text-center rounded-md'

function TimerForm() {
    const initialState = {
        message: 'pending'
    };
    const [state, formAction] = useFormState(postTimer, initialState);

    return (
        <form className='flex flex-col items-center' action={formAction}>
            <label>Title</label>
            <input required name='title' className={formFieldStyle}></input>
            <label>Length</label>
            <input required min='1' max='20' name='length' type='number' className={formFieldStyle}></input>
            <button type='submit' className='hover:bg-gray-600 rounded-md m-2 p-2 shadow shadow-black border border-teal-400 bg-gray-800'>Create</button>
        </form>
    );
}

export default TimerForm;
