import { useContext, useEffect, useState } from "react";
import { MilestoneContext } from "../contexts/";
import { TMilestoneContext } from "../contexts/MilestoneContext";
import TimerRing from "./TimerRing";

export default function Timer(){
  const { dueDate, setVal, val, setCompleted } = useContext(MilestoneContext) as TMilestoneContext;
  const [newTime, setNewTime] = useState<number>(0);

  useEffect(() => {
    setInterval(() => {
      const now = new Date().getTime();
      const dueTime = dueDate.getTime();
      let diff = dueTime - now;

      if(diff <= 0) {
        diff = 0;
        setCompleted(true);
        const updated = [...val];
        updated[0].completed = true;

        setVal(updated);
      }
      
      setNewTime(diff);
    }, 1000);
  }, [dueDate, setCompleted, val, setVal])

  return (
    <h2 className="flex items-center justify-center w-full">
    <TimerRing
      timeLeft={Math.floor(newTime / (1000 * 60 * 60 * 24))}
      totalTime={30}
      label={"DAYS"}
    />
    <TimerRing
      timeLeft={Math.floor((newTime / (1000 * 60 * 60)) % 24)}
      totalTime={24}
      label={"HOURS"}
    />
    <TimerRing
      timeLeft={Math.floor((newTime / (1000 * 60)) % 60)}
      totalTime={60}
      label={"MINS"}
    />
    <TimerRing
      timeLeft={Math.floor((newTime / 1000) % 60)}
      totalTime={60}
      label={"SECS"}
    />
   </h2>
  ); 
}
