import { useContext } from "react";
import { MilestoneContext } from "../contexts";
import { TMilestoneContext } from "../contexts/MilestoneContext";
import Timer from "./Timer";

export default function CountdownSection(){
  const { next } = useContext(MilestoneContext) as TMilestoneContext;
  return (
    <section className="w-[100%] text-center px-4 py-2 bg-white/60 rounded-lg space-y-6">
      <Timer />
      <h2 className="text-md sm:text-lg"><span className="font-bold underline">{ next ? `Next: ${next}` : "The End!"} </span></h2>
    </section>
  );
}
