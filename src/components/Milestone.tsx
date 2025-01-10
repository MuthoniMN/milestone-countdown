import { useContext, useState } from "react";
import { MilestoneContext } from "../contexts/";
import { TMilestoneContext } from "../contexts/MilestoneContext";

export default function Milestone(){
  const { title, description, next, prev, dueDate, val } = useContext(MilestoneContext) as TMilestoneContext;
  const [open, setOpen] = useState(false);

  return (
      <div className="w-full md:w-1/3 min-w-[250px] text-black px-4 py-6 space-y-2 rounded-lg">
        <h3 className="text-sm">Current Milestone: </h3>
        <h4 className="font-bold text-2xl text-[#3d016f]">{title}</h4>
        <p>{description}</p>
        <p>Due on: {dueDate.toDateString()}</p>
        { next ? (
          <p className="font-bold underline relative cursor-pointer" onClick={() => setOpen(open => !open)}>
            Next: {next}
            <span className={`popuptext ${open && 'show'}`}>{val[1].description}</span>
          </p>
        ) 
          : prev ?(
          <p className="font-bold underline relative cursor-pointer" onClick={() => setOpen(open => !open)}>
            Prev: {prev}
            <span className={`popuptext ${open && 'show'}`}>{val[0].description}</span>
          </p>
        )  :"The End!"}

      </div>
  )
}
