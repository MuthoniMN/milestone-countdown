import { useContext } from "react";
import { MilestoneContext } from "../contexts/";
import { TMilestoneContext } from "../contexts/MilestoneContext";

export default function Milestone(){
  const { title, description, next, dueDate } = useContext(MilestoneContext) as TMilestoneContext;

  return (
      <div className="w-full md:w-1/3 bg-[#8b67a9] text-[#fafafa] px-4 py-6 space-y-2 rounded-lg">
        <h3 className="text-xl">Current Milestone: </h3>
        <h4 className="font-bold text-lg text-[#3d016f]">{title}</h4>
        <p>{description}</p>
        <p>Due on: {dueDate.toDateString()}</p>
        <p className="font-bold underline">{ next ? `Next: ${next}` : "The End!"} </p>
      </div>
  )
}
