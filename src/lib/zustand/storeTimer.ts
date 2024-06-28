import create from "zustand";
import { toast } from "sonner";
import { totalTime } from "@/app/totalTime";

let audio;
if (typeof window !== "undefined") {
  audio = new Audio("/minuteur.mp3");
}

export const useTimersStore = create((set, get) => ({
  timers: [],

  addTimer: (
    hours: string,
    minutes: string,
    seconds: string,
    name?: string,
  ) => {
    const timeStart = totalTime(hours, minutes, seconds);
    set((state) => ({
      timers: [
        ...state.timers,
        { hours, minutes, seconds, name, isRunning: true, timeStart },
      ],
    }));
    toast.success("Timer ajouté", {
      duration: 1000,
    });
  },

  removeTimer: (index) => {
    const timer = get().timers;
    toast.error(
      `Vous avez supprimer ${
        timer[index].name ? `le timer ${timer[index].name}` : "un timer"
      }`,
      {
        duration: 1000,
        icon: "🗑️",
      },
    );
    set((state) => ({
      timers: state.timers.filter((_, i) => i !== index),
    }));
  },

  startTimer: (index) =>
    set((state) => ({
      timers: state.timers.map((timer, i) =>
        i === index ? { ...timer, isRunning: true } : timer,
      ),
    })),

  stopTimer: (index) => {
    set((state) => ({
      timers: state.timers.map((timer, i) =>
        i === index ? { ...timer, isRunning: false } : timer,
      ),
    }));
  },

  tickTimer: (index) =>
    set((state) => ({
      timers: state.timers.map((timer, i) => {
        if (i !== index || !timer.isRunning) return timer;

        let { hours, minutes, seconds } = timer;
        seconds--;
        if (seconds <= 0 && minutes <= 0 && hours <= 0) {
          const timer = get().timers;
          toast.error(
            `Alert fin du timer ${
              timer[index].name ? `${timer[index].name}` : ""
            } !`,
            {
              duration: 2000,
              icon: "⏰",
            },
          );
          audio.play();
          return {
            ...timer,
            hours: "00",
            minutes: "00",
            seconds: "00",
            isRunning: false,
          };
        }
        if (seconds <= 0) {
          seconds = 59;
          minutes--;
          if (minutes <= 0) {
            minutes = 59;
            hours--;
          }
        }
        return { ...timer, hours, minutes, seconds };
      }),
    })),
}));
