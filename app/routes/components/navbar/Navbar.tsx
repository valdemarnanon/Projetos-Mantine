import { useState } from "react";
import {
  IconFlame,
  IconUsersPlus,
  IconGauge,
  IconMenu2,
  IconSettings,
  IconHelp,
} from "@tabler/icons-react";
import { Title, Tooltip, UnstyledButton } from "@mantine/core";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./Navbar.module.css";

import { NavLink } from "react-router";

const mainLinksMockdata = [
  { icon: IconMenu2, label: "Menu", url: "/menu" },
  { icon: IconFlame, label: "Sinistro", url: "/sinistro" },
  { icon: IconUsersPlus, label: "Cadastrar Usuários", url: "/cadastrar" },
  { icon: IconGauge, label: "Dashboard", url: "/dashboard" },
];

const mainLinksMockdataUnder = [
  { icon: IconHelp, label: "Help" },
  { icon: IconSettings, label: "Settings" },
];

export async function loader() {
  return null;
}

const Navbar = ({ linksMockdata }) => {
  const [active, setActive] = useState("Releases");
  const [activeLink, setActiveLink] = useState("Settings");

  const mainLinks = mainLinksMockdata.map((link) => {
    if (link.label !== "Settings") {
      return (
        <NavLink key={link.label} to={link.url}>
          <Tooltip
            label={link.label}
            position="right"
            withArrow
            transitionProps={{ duration: 0 }}
          >
            <UnstyledButton
              onClick={() => setActive(link.label)}
              className={classes.mainLink}
              data-active={link.label === active || undefined}
            >
              <link.icon size={30} stroke={1.5} />
            </UnstyledButton>
          </Tooltip>
        </NavLink>
      );
    }
  });

  const links = linksMockdata.map((link) => (
    <a
      className={classes.link}
      data-active={activeLink === link || undefined}
      href="#"
      onClick={(event) => {
        event.preventDefault();
        setActiveLink(link);
      }}
      key={link}
    >
      <link.icon size={25} stroke={1.5} />
      {link.label}
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.wrapper}>
        <div className={classes.aside}>
          <div className={classes.logo}>
            <MantineLogo type="mark" size={30} />
          </div>
          <div className={classes.topItems}>{mainLinks}</div>
          <div className={classes.bottomItems}>
            {mainLinksMockdataUnder.map((link) => (
              <Tooltip
                label={link.label}
                position="right"
                withArrow
                transitionProps={{ duration: 0 }}
                key={link.label}
              >
                <UnstyledButton
                  onClick={() => setActive(link.label)}
                  className={classes.mainLink}
                  data-active={link.label === active || undefined}
                >
                  <link.icon size={30} stroke={1.5} />
                </UnstyledButton>
              </Tooltip>
            ))}
          </div>
        </div>

        <div className={classes.main}>
          <Title order={4} className={classes.title}>
            {active}
          </Title>

          {links}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
