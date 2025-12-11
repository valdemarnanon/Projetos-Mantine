import { useState } from "react";
import {
  IconFlame,
  IconUsersPlus,
  IconGauge,
  IconMenu2,
  IconSettings,
  IconHelp,
  IconUserPlus,
  IconUserMinus,
  IconUserSquare,
} from "@tabler/icons-react";

import { Tooltip, UnstyledButton } from "@mantine/core";
import classes from "./Navbar.module.css";
import { NavLink, useLocation } from "react-router";

// Links Navbar principal
const mainLinks = [
  {
    icon: IconMenu2,
    label: "Menu",
    url: "/menu",
    sublinks: [
      { icon: IconMenu2, label: "A fazer", url: "/menu/a-fazer" },
      { icon: IconMenu2, label: "Outra ação", url: "/menu/acao" },
    ],
  },
  {
    icon: IconFlame,
    label: "Sinistro",
    url: "/sinistro",
    sublinks: [
      { icon: IconMenu2, label: "Novo", url: "/sinistro/novo" },
      { icon: IconMenu2, label: "Histórico", url: "/sinistro/historico" },
    ],
  },
  {
    icon: IconUsersPlus,
    label: "Cadastrar Usuários",
    url: "/cadastrar",
    sublinks: [
      {
        icon: IconUserPlus,
        label: "Cadastrar usuário",
        url: "/cadastrar/register-user",
      },
      {
        icon: IconUserMinus,
        label: "Remover usuário",
        url: "/cadastrar/delete-user",
      },
      {
        icon: IconUserSquare,
        label: "Lista de usuário",
        url: "/cadastrar/list-user",
      },
    ],
  },
  {
    icon: IconGauge,
    label: "Dashboard",
    url: "/dashboard",
    sublinks: [
      { icon: IconMenu2, label: "Resumo", url: "/dashboard/resumo" },
      { icon: IconMenu2, label: "Analytics", url: "/dashboard/analytics" },
    ],
  },
];

// Links Navbar principal - baixo
const mainLinksBottom = [
  { icon: IconHelp, label: "Help" },
  { icon: IconSettings, label: "Settings" },
];

// Linsk Sub nav principal
const mainLinksSub = [
  { icon: IconHelp, label: "Help", url: "/" },
  { icon: IconSettings, label: "Settings", url: "/" },
];

const Navbar = () => {
  const location = useLocation();
  const activeRoute =
    mainLinks.find((item) => location.pathname.startsWith(item.url))?.label ||
    "/";

  const active = activeRoute;

  const links = mainLinks.map((link) => (
    <NavLink key={link.label} to={link.url}>
      <Tooltip
        label={link.label}
        position="right"
        withArrow
        transitionProps={{ duration: 0 }}
      >
        <UnstyledButton
          className={classes.mainLink}
          data-active={link.label === active || undefined}
        >
          <link.icon size={30} stroke={1.5} />
        </UnstyledButton>
      </Tooltip>
    </NavLink>
  ));

  const linksBottom = mainLinksBottom.map((link) => (
    <Tooltip
      key={link.label}
      label={link.label}
      position="right"
      withArrow
      transitionProps={{ duration: 0 }}
    >
      <UnstyledButton
        className={classes.mainLink}
        data-active={link.label === active || undefined}
      >
        <link.icon size={30} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  ));

  const subLinksMain = mainLinksSub.map((link) => (
    <NavLink key={link.label} to={link.url} className={classes.link}>
      <link.icon size={20} />
      {link.label}
    </NavLink>
  ));

  const activeSublink = mainLinks.find((item) => item.label === active);

  const subLinks = activeSublink?.sublinks?.map((sub) => (
    <NavLink key={sub.label} to={sub.url} className={classes.link}>
      <sub.icon size={20} />
      {sub.label}
    </NavLink>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.wrapper}>
        <div className={classes.aside}>
          <div className={classes.topItems}>{links}</div>
          <div className={classes.bottomItems}>{linksBottom}</div>
        </div>

        <div className={classes.main}>
          {active !== "/" ? subLinks : subLinksMain}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
