import type { FC } from "react";
import Chip from "@mui/material/Chip";

interface StrongProps {
  text: string;
  color: string;
}

const Strong: FC<StrongProps> = ({ text, color = "#ffcccc" }) => {
  return (
    <Chip
      label={text}
      sx={{
        backgroundColor: color,
      }}
      size="small"
    />
  );
};

export default Strong;
