import { ModeToggles } from "@/components/ThemeToggle";
import { TimerForm } from "@/components/TimerForm";

export default function Home() {
  return (
    <>
      <h1 className={"text-3xl font-bold"}>Timer</h1>
      <ModeToggles></ModeToggles>
      <TimerForm></TimerForm>
    </>
  );
}
