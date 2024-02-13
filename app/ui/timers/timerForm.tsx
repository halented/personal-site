'use client'
import React from 'react';

function TimerForm({ updateTimers }: { updateTimers: (ev: React.FormEvent<HTMLFormElement>) => void }) {
    return (
        <form className='flex flex-col items-center' onSubmit={(ev) => updateTimers(ev)}>
            <label>Title</label>
            <input name='title' className='border border-teal-400 bg-gray-400 text-black'></input>
            <label>Length</label>
            <input name='length' type='number' className='border border-teal-400 bg-gray-400 text-black'></input>
            <button type='submit' className='hover:bg-gray-600 rounded-md m-2 p-2 shadow shadow-black border border-teal-400 bg-gray-800'>Create</button>
        </form>
    );
}

export default TimerForm;
