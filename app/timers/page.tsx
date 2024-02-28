// 'use client'
// import { useState } from "react";
import TimerForm from "@/app/ui/timers/TimerForm";
import { TimerType } from "../lib/types";
import Timer from "../ui/timers/Timer";
import { fetchTimers } from "../lib/databaseActions";

// needs to be async 
async function Timers() {
    let timers = await fetchTimers();
    // const [timers, setTimers] = useState<TimerType[]>([]);
    const updateTimers = (timer: TimerType) => {
        console.log('running update timer');
        // setTimers([...timers, timer])
        timers = [...timers, timer]
    };

    

    const deleteTimer = (timer: TimerType) => {
        console.log('running delete timer');
        // const newTimers = timers.slice();
        // const findTimer = (t: TimerType) => t.title === timer.title;
        // const index = newTimers.findIndex(findTimer);
        // newTimers.splice(index, 1);
        // setTimers(newTimers);
    }
    //  deleteTimer={deleteTimer} 

    return (
        <div className="h-full">
            <TimerForm updateTimers={updateTimers} />
            <div className="flex justify-center flex-wrap">
                {timers.map(t => <Timer timer={t} key={`timer ${t.title}`}/>)}
            </div>
        </div>
    );
}

export default Timers;