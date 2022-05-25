import type { NextPage } from "next";
import Box from "@mui/material/Box";

import { TOP_BAR_HEIGHT, NAV_BAR_WIDTH } from "config";
import { colors } from "theme";

const Header: NextPage = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: `${NAV_BAR_WIDTH}px`,
        width: "100vw",
        height: `${TOP_BAR_HEIGHT}px`,
        backgroundColor: "#f1f1f1",
        padding: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    ></Box>
  );
};

export default Header;
