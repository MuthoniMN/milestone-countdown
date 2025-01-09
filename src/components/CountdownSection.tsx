import Timer from "./Timer";

export default function CountdownSection(){
  return (
    <section className="w-[100%] text-center md:px-4 py-2 rounded-lg space-y-6">
      <Timer />
    </section>
  );
}
