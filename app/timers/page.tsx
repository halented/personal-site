'use client'
import { useState } from "react";
import TimerForm from "@/app/ui/timers/TimerForm";
import { TimerType } from "../lib/types";
import Timer from "../ui/timers/Timer";

function Timers() {
    const [timers, setTimers] = useState<TimerType[]>([]);
    const updateTimers = (timer: TimerType) => {
        setTimers([...timers, timer])
    };

    const deleteTimer = (timer: TimerType) => {
        const newTimers = timers.slice();
        const findTimer = (tmr: TimerType) => tmr.title === timer.title;
        const index = newTimers.findIndex(findTimer);
        newTimers.splice(index, 1);
        setTimers(newTimers);
    }

    return (
        <div className="h-full">
            <TimerForm updateTimers={updateTimers} />
            <div className="flex justify-center flex-wrap">
                {timers.map(t => <Timer timer={t} key={t.title} deleteTimer={deleteTimer} />)}
            </div>
        </div>
    );
}

export default Timers;