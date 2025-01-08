import { useContext, useEffect, useState } from "react";
import { MilestoneContext } from "../contexts/";
import { TMilestoneContext } from "../contexts/MilestoneContext";

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
    <h2 className="flex gap-4 items-center justify-center">
      <p className="flex flex-col gap-2 items-center">
        <span className="text-6xl">{Math.floor(newTime / (1000 * 60 * 60 * 24))}</span>
        <span className="text-lg md:text-xl">DAYS</span>
      </p>
      <p className="text-6xl">:</p>
      <p className="flex flex-col gap-2 items-center">
        <span className="text-6xl">{Math.floor((newTime / (1000 * 60 * 60)) % 24)}</span>
        <span className="text-lg md:text-xl">HOURS</span>
      </p>
      <p className="text-6xl">:</p>
      <p className="flex flex-col gap-2 items-center">
        <span className="text-6xl">{Math.floor((newTime / (1000 * 60)) % 60)}</span>
        <span className="text-lg md:text-xl">MINS</span>
      </p>
      <p className="text-6xl">:</p>
      <p className="flex flex-col gap-2 items-center">
        <span className="text-6xl">{Math.floor((newTime / 1000) % 60)}</span>
        <span className="text-lg md:text-xl">SEC</span>
      </p>

    </h2>
  ); 
}
