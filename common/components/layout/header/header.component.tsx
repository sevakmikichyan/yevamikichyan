"use client";

import React from "react";
import Container from "../container/container.component";
import { useTheme } from "@/context/theme.context";
import { applyBgColor } from "@/common/utils";
import classNames from "classnames";
import { Dropdown } from "../../ui";
import Link from "next/link";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const appliedBgColor = applyBgColor(resolvedTheme);
  let armenianTheme;
  switch (theme) {
    case "light":
      armenianTheme = "Լույս";
      break;
    case "dark":
      armenianTheme = "Մութ";
      break;
    case "auto":
      armenianTheme = "Ավտոմատ";
      break;
  }

  return (
    <motion.header
      className={classNames("w-full py-md", appliedBgColor)}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Container className="flex items-center justify-between">
        <Link href="/" className="md:text-xl sm:text-lg text-md font-adamathuz">
          Գլխավոր էջ
        </Link>
        <Dropdown>
          <Dropdown.Toggle>
            {armenianTheme}
            <Dropdown.Icon />
          </Dropdown.Toggle>

          <Dropdown.Menu fullWidth absolute>
            <Dropdown.Item onClick={() => setTheme("light")}>
              Լույս
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setTheme("dark")}>
              Մութ
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setTheme("auto")}>
              Ավտոմատ
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </motion.header>
  );
};

export default Header;
