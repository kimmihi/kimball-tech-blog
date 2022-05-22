import type { NextPage } from "next";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { TOP_BAR_HEIGHT } from "config";
import { colors } from "theme";

const Header: NextPage = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        width: "100vw",
        height: `${TOP_BAR_HEIGHT}px`,
        backgroundColor: colors.main,
        padding: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: "#ff6600",
        }}
      >
        {"Kimball's Tech Blog"}
      </Typography>
    </Box>
  );
};

export default Header;
