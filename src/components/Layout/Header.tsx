import type { FC } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";

import { TOP_BAR_HEIGHT, NAV_BAR_WIDTH } from "config";
import { colors } from "theme";

const Header: FC = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: `${NAV_BAR_WIDTH}px`,
        width: `calc(100vw - ${NAV_BAR_WIDTH}px)`,
        height: `${TOP_BAR_HEIGHT}px`,
        backgroundColor: "#f1f1f1",
        padding: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box></Box>
      <a href="https://github.com/4kimball">
        <Image src="/images/github-mark.png" width="35" height="35" />
      </a>
    </Box>
  );
};

export default Header;
