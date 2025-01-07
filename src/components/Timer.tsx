import { useContext } from "react";
import { MilestoneContext } from "../contexts/";

export default function Timer(){
  const { dueDate, completed } = useContext(MilestoneContext);
  return (
    <h2 className="flex gap-4 items-center justify-center">
      <p className="flex flex-col gap-2 items-center">
        <span className="text-6xl">0</span>
        <span className="text-lg md:text-xl">DAYS</span>
      </p>
      <p className="text-6xl">:</p>
      <p className="flex flex-col gap-2 items-center">
        <span className="text-6xl">0</span>
        <span className="text-lg md:text-xl">HOURS</span>
      </p>
      <p className="text-6xl">:</p>
      <p className="flex flex-col gap-2 items-center">
        <span className="text-6xl">0</span>
        <span className="text-lg md:text-xl">MINS</span>
      </p>
      <p className="text-6xl">:</p>
      <p className="flex flex-col gap-2 items-center">
        <span className="text-6xl">0</span>
        <span className="text-lg md:text-xl">SEC</span>
      </p>

    </h2>
  ); 
}
