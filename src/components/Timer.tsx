import { Card, CardTitle } from "@/components/ui/card";
import React, { useEffect } from "react";
import { useTimersStore } from "@/lib/zustand/storeTimer";
import { BellDot, OctagonX, Pause, Play } from "lucide-react";
import {
  calculatedEndTimer,
  calculatedTime,
  secondFormatHours,
} from "@/app/calculatedTime";
import { Circle } from "@/components/Circle";
import { toast } from "sonner";

type TimerStore = {
  timers: any;
  removeTimer: (index: number) => void;
  startTimer: (index: number) => void;
  stopTimer: (index: number) => void;
  tickTimer: (index: number) => void;
};

export const Timer = () => {
  const { timers, removeTimer, startTimer, stopTimer, tickTimer } =
    useTimersStore() as TimerStore;

  useEffect(() => {
    const interval = setInterval(() => {
      timers.forEach((timer: any, index: number) => {
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
      {timers.map((timer: any, index: number) => {
        const totalTimeInSeconds = calculatedTime(
          timer.hours,
          timer.minutes,
          timer.seconds,
          timer.timeStart,
        );

        return (
          <Card
            key={index}
            className={
              "text-center size-40 p-3 rounded-lg flex flex-col h-full relative items-center animate-fadeIn"
            }
          >
            <BellDot
              className={"absolute top-2 left-2 size-4 cursor-pointer"}
              onClick={() => {
                toast.info(
                  `Le minuteur sonnera a ${calculatedEndTimer(
                    timer.hours,
                    timer.minutes,
                    timer.seconds,
                  )}  `,
                );
              }}
            />
            <CardTitle className={" p-3"}>{timer.name}</CardTitle>
            <Circle time={totalTimeInSeconds}>
              <div className={"flex flex-col"}>
                <p className={" dark:text-white text-sm"}>
                  {`${timer.hours.toString().padStart(2, "0")}:${timer.minutes
                    .toString()
                    .padStart(2, "0")}:${timer.seconds
                    .toString()
                    .padStart(2, "0")}`}
                </p>
                <p className={"text-xs text-gray-600"}>
                  {secondFormatHours(timer.timeStart)}
                </p>
              </div>
            </Circle>
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
                  <button
                    className={"size-2 focus:animate-fadeOutLeft"}
                    onClick={() => startTimer(index)}
                  >
                    <Play className={"size-4 text-green-400"}></Play>
                  </button>
                )}
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};
