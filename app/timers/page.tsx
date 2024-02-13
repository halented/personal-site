'use client'
import { useState } from "react";
import TimerForm from "../ui/timers/TimerForm";
import { TimerType } from "../lib/types";
import Timer from "../ui/timers/Timer";

function Timers() {
    const [timers, setTimers] = useState<TimerType[]>([]);
    const updateTimers = (timer: TimerType) => {
        setTimers([...timers, timer])
    };

    return (
        <div className="h-full">
            <TimerForm updateTimers={updateTimers} />
            <div className="flex justify-center flex-wrap">
                {timers.map(t => <Timer timer={t} key={t.title} />)}
            </div>
        </div>
    );
}

export default Timers;