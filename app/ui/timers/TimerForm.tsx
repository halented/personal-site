'use client'
import { postTimer } from '@/app/lib/databaseActions';
import { useFormState } from "react-dom";


const formFieldStyle = 'border border-lightTeal bg-gray text-white w-32 text-center rounded-md'

function TimerForm() {
    const beginPostTimer = async (prevState: { message: string; }, formData: FormData) => {
        const postData = { userId: '', title: formData.get('title') as string, length: parseInt(formData.get('length') as string), fill: 1 }
        const result = await postTimer(postData);
        return result
    }

    const initialState = {
        message: 'pending'
    };

    const [state, formAction] = useFormState(beginPostTimer, initialState);

    return (
        <form className='flex flex-col items-center' action={formAction}>
            <label>Title</label>
            <input required name='title' className={formFieldStyle}></input>
            <label>Length</label>
            <input required min='1' max='20' name='length' type='number' className={formFieldStyle}></input>
            <button type='submit' className='hover:bg-lightGray rounded-md m-2 p-2 shadow shadow-black border border-lightTeal bg-gray'>Create</button>
        </form>
    );
}

export default TimerForm;
