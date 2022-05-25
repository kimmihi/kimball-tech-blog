import type { NextPage } from "next";
import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { TAGS } from "config";

const NavItem: NextPage = () => {
  const itemTitles = Object.keys(TAGS);
  return (
    <Box
      sx={{
        height: "50%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      {itemTitles.map((title) => {
        return (
          <Link key={title} href={`category/${TAGS[title]}`}>
            <a>
              <Typography sx={{ color: "#f2f2f2", fontSize: "20px" }}>
                {title}
              </Typography>
            </a>
          </Link>
        );
      })}
    </Box>
  );
};

export default NavItem;
