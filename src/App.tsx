import Header from "./components/Header";
import MilestoneContextProvider from "./contexts/MilestoneContext";
import CountdownSection from "./components/CountdownSection";
import Tasks from "./components/Tasks";
import Milestone from "./components/Milestone";

function App() {
  return (
    <main className="flex flex-col items-center w-[100vw] h-full md:h-[100vh] gap-6 m-0 p-0">
      <Header />
      <section className="h-full w-full px-4 md:px-8 m-0 flex flex-col gap-4">
        <MilestoneContextProvider>
            <CountdownSection />
            <section className="flex flex-col md:flex-row gap-6 justify-between items-center w-full md:items-start">
              <Tasks />
              <Milestone />
            </section>
        </MilestoneContextProvider>
      </section>
    </main>
  )
}

export default App
