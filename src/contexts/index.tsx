import { createContext } from "react";
import { TMilestoneContext } from "./MilestoneContext";

export const MilestoneContext = createContext<TMilestoneContext | null >(null)

