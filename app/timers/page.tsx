'use client'
import { useState } from "react";
import TimerForm from "../ui/timers/timerForm";

function Timers() {
    const [timers, setTimers] = useState(['a','e'])
    const updateTimers = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('updatein timers', event.target);
    }
  return (
    <div>
      <TimerForm updateTimers={updateTimers}/>
      {timers.map(t => <div key={t}>timer</div>)}
    </div>
  );
}

export default Timers;
