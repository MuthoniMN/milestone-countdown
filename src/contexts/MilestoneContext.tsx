import React, {  useState, Dispatch, SetStateAction } from "react";
import { MilestoneContext } from "./index";

export type TTask = {
  title: string,
  description: string,
  deliverables: string,
  skillset: string
}

export type TMilestoneContext = {
  title: string,
  description: string,
  dueDate: Date,
  started: boolean,
  completed: boolean
  tasks: TTask[],
  setTasks: Dispatch<SetStateAction<TTask[]>>,
  setTitle: Dispatch<SetStateAction<string>>,
  setDescription: Dispatch<SetStateAction<string>>,
  setDueDate: Dispatch<SetStateAction<Date>>,
  setStarted: Dispatch<SetStateAction<boolean>>,
  setCompleted: Dispatch<SetStateAction<boolean>>,
}

const MilestoneContextProvider = ({ children }: { children: React.ReactNode }) => {
   const [title, setTitle] = useState(""); 
   const [description, setDescription] = useState("");
   const [dueDate, setDueDate] = useState(new Date());
   const [started, setStarted] = useState(false);
   const [completed, setCompleted] = useState(false);
   const [tasks, setTasks] = useState<TTask[]>([]);

   return (
    <MilestoneContext.Provider value={{ title, description, dueDate, started, completed, tasks, setTasks, setCompleted, setStarted, setDueDate, setDescription, setTitle }}>
      { children }
    </MilestoneContext.Provider>
   )
}

export default MilestoneContextProvider;
