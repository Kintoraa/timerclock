export const totalTime = (hours: string, minutes: string, seconds: string) => {
  return Number(
    parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds),
  );
};
