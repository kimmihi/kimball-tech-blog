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
              color: colors.purple,
              fontSize: "24px",
            }}
          >
            {"Kim"}
          </Typography>
        </a>
      </Link>
      <NavItem />
      <Box></Box>
    </Box>
  );
};

export default Navbar;
