export const totalTime = (hours: string, minutes: string, seconds: string) => {
  return Number(hours * 3600 + minutes * 60 + seconds);
};
