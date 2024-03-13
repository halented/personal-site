import TimerForm from "@/app/ui/timers/TimerForm";
import Timer from "../ui/timers/Timer";
import { fetchTimers } from "../lib/databaseActions";


export default async function Timers() {
    let timers = await fetchTimers();
    timers = timers.sort((a,b) => {
        if (a.title > b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        else {
            return 1;
        }
    })

    return (
        <div className="h-full">
            <TimerForm />
            <div className="flex justify-center flex-wrap">
                {timers.map(t => <Timer timer={t} key={`timer ${t.title}`}/>)}
            </div>
        </div>
    );
}