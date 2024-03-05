import TimerForm from "@/app/ui/timers/TimerForm";
import Timer from "../ui/timers/Timer";
import { fetchTimers } from "../lib/databaseActions";


export default async function Timers() {
    let timers = await fetchTimers();

    return (
        <div className="h-full">
            <TimerForm />
            <div className="flex justify-center flex-wrap">
                {timers.map(t => <Timer timer={t} key={`timer ${t.title}`}/>)}
            </div>
        </div>
    );
}