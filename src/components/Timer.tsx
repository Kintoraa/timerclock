import { Card, CardTitle } from "@/components/ui/card";
import React, { useEffect } from "react";
import { useTimersStore } from "@/lib/zustand/storeTimer";
import { OctagonX, Pause, Play } from "lucide-react";

export const Timer = ({ hours, minute, second }) => {
  const { timers, removeTimer, startTimer, stopTimer, tickTimer } =
    useTimersStore();
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const svgStyle = { transform: "rotate(-90deg)" };

  useEffect(() => {
    const interval = setInterval(() => {
      timers.forEach((timer, index) => {
        if (timer.isRunning) {
          tickTimer(index);
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timers, tickTimer]);

  return (
    <div
      className={
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center"
      }
    >
      {timers.map((timer, index) => (
        <Card
          key={index}
          className={
            "text-center size-40 p-3 rounded-lg flex flex-col h-full relative"
          }
        >
          <CardTitle>{timer.name}</CardTitle>
          {`${timer.hours.toString().padStart(2, "0")}:${timer.minutes
            .toString()
            .padStart(2, "0")}:${timer.seconds.toString().padStart(2, "0")}`}
          {/*<CircularProgress*/}
          {/*  color="success"*/}
          {/*  determinate*/}
          {/*  value={totalTime(timer.hours, timer.minutes, timer.seconds)}*/}
          {/*/>*/}
          <div>
            <div className={"absolute bottom-1 right-1"}>
              <button onClick={() => removeTimer(index)}>
                <OctagonX className={"size-4 text-red-600"} />
              </button>
            </div>
            <div className={"absolute bottom-1 left-1"}>
              {timer.isRunning && (
                <button onClick={() => stopTimer(index)}>
                  <Pause className={"size-4 text-orange-300"} />
                </button>
              )}
              {!timer.isRunning && (
                <button className={"size-2"} onClick={() => startTimer(index)}>
                  <Play className={"size-4 text-green-400"}></Play>
                </button>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
