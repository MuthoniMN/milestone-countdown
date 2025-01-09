import { useContext } from "react";
import { MilestoneContext } from "../contexts/";
import { TMilestoneContext } from "../contexts/MilestoneContext";

export default function Milestone(){
  const { title, description, next, prev, dueDate } = useContext(MilestoneContext) as TMilestoneContext;

  return (
      <div className="w-full md:w-1/3 min-w-[250px] text-black px-4 py-6 space-y-2 rounded-lg">
        <h3 className="text-sm">Current Milestone: </h3>
        <h4 className="font-bold text-2xl text-[#3d016f]">{title}</h4>
        <p>{description}</p>
        <p>Due on: {dueDate.toDateString()}</p>
        <p className="font-bold underline">{ next ? `Next: ${next}` : prev ? `Prev: ${prev}` :"The End!"} </p>
      </div>
  )
}
