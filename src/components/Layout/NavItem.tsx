import type { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { TAGS } from "config";
import type { TagsKey } from "types/nav";

const NavItem: FC = () => {
  const router = useRouter();
  const itemTitles = Object.keys(TAGS);
  const [curPath, setCurPath] = useState<string>("");

  useEffect(() => {
    const curPathList = router.asPath.split("/");
    curPathList && setCurPath(curPathList[curPathList.length - 1]);
  }, [router.asPath]);
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
          <Link key={title} href={`/category/${TAGS[title as TagsKey]}`}>
            <a>
              <Typography
                sx={{
                  color:
                    curPath === TAGS[title as TagsKey] ? "#b366ff" : "#f2f2f2",
                  fontSize: "20px",
                  "&:hover": { color: "#b366ff" },
                }}
              >
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
