import type { NextPage } from "next";
import React from "react";
import Box from "@mui/material/Box";

import { TOP_BAR_HEIGHT, NAV_BAR_WIDTH } from "config";

interface Props {
  children: React.ReactNode;
}
const Container: NextPage<Props> = ({ children }) => {
  return (
    <Box
      id="container"
      sx={{
        border: "1px solid black",
        marginTop: `${TOP_BAR_HEIGHT}px`,
        marginLeft: `${NAV_BAR_WIDTH}px`,
      }}
    >
      {children}
    </Box>
  );
};

export default Container;
