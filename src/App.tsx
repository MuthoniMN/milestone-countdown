import Header from "./components/Header";
import MilestoneContextProvider from "./contexts/MilestoneContext";
import CountdownSection from "./components/CountdownSection";
import Milestone from "./components/Milestone";

function App() {
  return (
    <main className="flex flex-col items-center w-[100vw] h-[100vh] gap-6 m-0 p-0">
      <Header />
      <section className="h-full w-full px-4 md:px-8 m-0 flex flex-col md:flex-row-reverse gap-4 items-center md:justify-center">
        <MilestoneContextProvider>
            <CountdownSection />
            <Milestone />
        </MilestoneContextProvider>
      </section>
    </main>
  )
}

export default App
