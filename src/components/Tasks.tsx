import { useContext, useState } from "react";
import { MilestoneContext } from "../contexts/";
import { TTask, TMilestoneContext } from "../contexts/MilestoneContext";
import parse from "html-react-parser";

export default function Tasks(){
  const { tasks } = useContext(MilestoneContext) as TMilestoneContext;
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const handleClick = (index: number) => {
    if(index === activeTab) {
      setActiveTab(null);
      return;
    }
    setActiveTab(index);
    return;
  };
  
  return (
    <section className="w-full h-[60vh] overflow-y-auto md:h-full md:overflow-hidden md:w-2/3 py-6 px-4 bg-[#d8cce2]/80 space-y-4 rounded-md">
      <h3 className="text-3xl">Milestone Tasks: </h3>
      <ul className="flex flex-col space-y-2 divide-y-2 divide-[#3d016f]">
        { tasks.map((task: TTask,index: number) => (
          <li key={index} onClick={()=> handleClick(index)} className="flex flex-col py-[2px] w-full gap-2 items-start task">
            <h4 className="text-md">{task.title}</h4>
            <p className="text-white text-xs bg-[#3d016f] w-auto px-4 py-0 rounded-full self-end">{task.skillset}</p>
            <div className={`${activeTab === index ? "block" : "hidden"} w-full`}>
            <p className="font-bold">Instructions</p>
            <div className="mb-2">{parse(task.description)}</div>
            <p className="font-bold underline text-[#3d016f]">Deliverables: {task.deliverables}</p>
            </div>
          </li>
        )) 
        } 
      </ul>
    </section>
  )
}
