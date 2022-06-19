import type { FC } from "react";
import type { SxProps } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";

import { TOP_BAR_HEIGHT, NAV_BAR_WIDTH } from "src/config";

interface ContainerProps {
  sx?: SxProps;
  children: React.ReactNode;
}
const Container: FC<ContainerProps> = ({ sx, children }) => {
  return (
    <Box
      id="container"
      sx={{
        marginTop: `${TOP_BAR_HEIGHT}px`,
        marginLeft: `${NAV_BAR_WIDTH}px`,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default Container;
