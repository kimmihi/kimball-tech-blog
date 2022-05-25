import type { NextPage } from "next";
import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import NavItem from "./NavItem";
import { TOP_BAR_HEIGHT, NAV_BAR_WIDTH } from "config";
import { colors } from "theme";
const Navbar: NextPage = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${NAV_BAR_WIDTH}px`,
        height: "100vh",
        backgroundColor: colors.dark,
        padding: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Link href="/">
        <a>
          <Typography
            sx={{
              color: "#a31aff",
              fontSize: "24px",
            }}
          >
            {"Kimball's"}
          </Typography>
        </a>
      </Link>
      <NavItem />
      <Box>github</Box>
    </Box>
  );
};

export default Navbar;
