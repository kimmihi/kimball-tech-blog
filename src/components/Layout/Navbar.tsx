import type { NextPage } from "next";
import Link from "next/link";
import Box from "@mui/material/Box";

import { TOP_BAR_HEIGHT, NAV_BAR_WIDTH } from "config";

const Navbar: NextPage = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: `${TOP_BAR_HEIGHT}px`,
        left: 0,
        width: `${NAV_BAR_WIDTH}px`,
        height: "100vh",
        backgroundColor: "#f2f2f2",
        padding: 3,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Link href="/">
        <a>Home</a>
      </Link>
    </Box>
  );
};

export default Navbar;
