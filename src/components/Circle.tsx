import { CircularProgress } from "@mui/joy";

export const Circle = ({ children, time }) => {
  return (
    <CircularProgress
      sx={{
        "--CircularProgress-size": "100px",
        "--CircularProgress-trackThickness": "2px",
        "--CircularProgress-progressThickness": "2px",
      }}
      color="success"
      determinate
      value={time}
    >
      {children}
    </CircularProgress>
  );
};
