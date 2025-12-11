import { ReactNode, useState } from "react";
import {
  IconFlame,
  IconUsersPlus,
  IconGauge,
  IconMenu2,
  IconSettings,
  IconHelp,
} from "@tabler/icons-react";
import { Tooltip, UnstyledButton } from "@mantine/core";
import classes from "./Navbar.module.css";
import { NavLink, useLocation } from "react-router";

const mainLinksMockdata = [
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
      { icon: IconMenu2, label: "Novo Usuário", url: "/cadastrar/novo" },
      { icon: IconMenu2, label: "Listar", url: "/cadastrar/listar" },
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

const mainLinksMockdataUnder = [
  { icon: IconHelp, label: "Help" },
  { icon: IconSettings, label: "Settings" },
];

const mainLinksSub = [
  { icon: IconHelp, label: "Help", url: "/" },
  { icon: IconSettings, label: "Settings", url: "/" },
];

const Navbar = () => {
  const location = useLocation();
  const activeRoute =
    mainLinksMockdata.find((item) => location.pathname.startsWith(item.url))
      ?.label || "/";

  const active = activeRoute;

  const [activeLink, setActiveLink] = useState("");

  const mainLinks = mainLinksMockdata.map((link) => (
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

  const mainLinksUnder = mainLinksMockdataUnder.map((link) => (
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
    <NavLink
      key={link.label}
      to={link.url}
      className={classes.link}
      data-active={activeLink === link.label || undefined}
      onClick={() => setActiveLink(link.label)}
    >
      <link.icon size={20} />
      {link.label}
    </NavLink>
  ));

  const activeSublink = mainLinksMockdata.find((item) => item.label === active);
  console.log(activeSublink);
  const subLinks = activeSublink?.sublinks?.map((sub) => (
    <NavLink
      key={sub.label}
      to={sub.url}
      className={classes.link}
      data-active={activeLink === sub.label || undefined}
      onClick={() => setActiveLink(sub.label)}
    >
      <sub.icon size={20} />
      {sub.label}
    </NavLink>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.wrapper}>
        <div className={classes.aside}>
          <div className={classes.topItems}>{mainLinks}</div>
          <div className={classes.bottomItems}>{mainLinksUnder}</div>
        </div>

        <div className={classes.main}>
          {active !== "/" ? subLinks : subLinksMain}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
