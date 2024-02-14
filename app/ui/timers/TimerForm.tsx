import { RawTimerType, TimerType } from '@/app/lib/types';

const formFieldStyle = 'border border-teal-400 bg-gray-800 text-white w-32 text-center rounded-md'

function TimerForm({ updateTimers }: { updateTimers: (ev: TimerType) => void }) {
    const handleEvent = (ev: React.SyntheticEvent) => {
        ev.preventDefault();
        const target = ev.target as typeof ev.target & {
            title: { value: string };
            length: { value: string };
        };
        const title = target.title.value;
        const length = parseInt(target.length.value);
        const tempTimer: RawTimerType = { title, length, fill: 1 };
        // POST request here, which should return with an id
        const timer: TimerType = {...tempTimer, id: '11111'}
        updateTimers(timer);
    }
    return (
        <form className='flex flex-col items-center' onSubmit={handleEvent}>
            <label>Title</label>
            <input required name='title' className={formFieldStyle}></input>
            <label>Length</label>
            <input required min='1' max='20' name='length' type='number' className={formFieldStyle}></input>
            <button type='submit' className='hover:bg-gray-600 rounded-md m-2 p-2 shadow shadow-black border border-teal-400 bg-gray-800'>Create</button>
        </form>
    );
}

export default TimerForm;
