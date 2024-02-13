import { TimerType } from '@/app/lib/types';

function TimerForm({ updateTimers }: { updateTimers: (ev: TimerType) => void }) {
    const handleEvent = (ev: React.SyntheticEvent) => {
        ev.preventDefault();
        const target = ev.target as typeof ev.target & {
            title: { value: string };
            length: { value: string };
        };
        const title = target.title.value;
        const length = parseInt(target.length.value);
        const timer: TimerType = { title, length };
        updateTimers(timer);
    }
    return (
        <form className='flex flex-col items-center' onSubmit={(ev: React.SyntheticEvent) => handleEvent(ev)}>
            <label>Title</label>
            <input name='title' className='border border-teal-400 bg-gray-400 text-black'></input>
            <label>Length</label>
            <input name='length' type='number' className='border border-teal-400 bg-gray-400 text-black'></input>
            <button type='submit' className='hover:bg-gray-600 rounded-md m-2 p-2 shadow shadow-black border border-teal-400 bg-gray-800'>Create</button>
        </form>
    );
}

export default TimerForm;
