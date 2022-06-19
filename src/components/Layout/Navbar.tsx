import type { FC } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import NavItem from "./NavItem";
import { NAV_BAR_WIDTH } from "src/config";
import { colors } from "src/theme";

const Navbar: FC = () => {
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
            {"min.dev"}
          </Typography>
        </a>
      </Link>
      <NavItem />
      <Box></Box>
    </Box>
  );
};

export default Navbar;
