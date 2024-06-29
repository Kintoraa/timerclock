export const calculatedTime = (
  hours: string,
  minutes: string,
  seconds: string,
  timeStart: Number,
) => {
  const total = Number(
    parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds),
  );

  return (total / timeStart) * 100;
};

export const totalTime = (hours: string, minutes: string, seconds: string) => {
  return parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
};

export const secondFormatHours = (totalSeconds: number) => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds - hours * 3600) / 60);
  const seconds = totalSeconds - hours * 3600 - minutes * 60;

  if (hours > 0) {
    return `${hours}h${minutes.toString().padStart(2, "0")}m`;
  } else if (minutes > 0) {
    return `${minutes}m${seconds.toString().padStart(2, "0")}s`;
  } else {
    return `${seconds}s`;
  }
};

export const calculatedEndTimer = (
  hours: string,
  minutes: string,
  seconds: string,
) => {
  const timerClock = totalTime(hours, minutes, seconds);
  const time = new Date().getTime() + timerClock * 1000;
  return (
    new Date(time).getHours() +
    "h" +
    new Date(time).getMinutes().toString().padStart(2, "0")
  );
};
