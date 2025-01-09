import React, {  useState, useEffect, Dispatch, SetStateAction } from "react";
import { MilestoneContext } from "./index";
import { milestones } from "../data/";

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
  completed: boolean,
  next: string | null,
  tasks: TTask[],
  val: typeof milestones,
  prev: string | null,
  setVal: Dispatch<SetStateAction<typeof milestones>>,
  setTasks: Dispatch<SetStateAction<TTask[]>>,
  setTitle: Dispatch<SetStateAction<string>>,
  setDescription: Dispatch<SetStateAction<string>>,
  setDueDate: Dispatch<SetStateAction<Date>>,
  setStarted: Dispatch<SetStateAction<boolean>>,
  setCompleted: Dispatch<SetStateAction<boolean>>,
  setNext: Dispatch<SetStateAction<string|null>>,
  setPrev: Dispatch<SetStateAction<string|null>>
}

const MilestoneContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [val, setVal] = useState(milestones);
   const [title, setTitle] = useState(val[0].title); 
   const [description, setDescription] = useState(val[0].description);
   const [dueDate, setDueDate] = useState(val[0].dueDate);
   const [next, setNext] = useState<string | null>(val[1].title);
   const [prev, setPrev] = useState<string | null>(null);
   const [started, setStarted] = useState(true);
   const [completed, setCompleted] = useState(false);
   const [tasks, setTasks] = useState<TTask[]>(val[0].tasks);

   useEffect(() => {
    if(val[0].completed){
      setTitle(val[1].title);
      setDescription(val[1].description);
      setDueDate(val[1].dueDate);
      setStarted(true);
      setCompleted(false);
      setTasks(val[1].tasks);
      setNext(null);
      setPrev(val[0].title);
    }
   }, [completed, val])
   return (
    <MilestoneContext.Provider value={{ title, description, dueDate, started, completed, tasks, next, val, prev, setPrev, setNext, setVal, setTasks, setCompleted, setStarted, setDueDate, setDescription, setTitle }}>
      { children }
    </MilestoneContext.Provider>
   )
}

export default MilestoneContextProvider;
