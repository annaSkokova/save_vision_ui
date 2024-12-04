// import React from 'react';
import { Link } from "react-router-dom";
import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import HomeIcon from '@mui/icons-material/Home';
import ListItemIcon from '@mui/material/ListItemIcon';
import SummarizeIcon from '@mui/icons-material/Summarize';
import SettingsIcon from '@mui/icons-material/Settings';
import BackHandIcon from '@mui/icons-material/BackHand';
import Logo from './logo';

import styles from './Menu.module.scss';

const Menu = () => {
  return (
    <>
      <Paper class={styles.menu} sx={{ width: 320 }}>
        <Link to="/" className={styles.logo}>
          <Logo/>
        </Link>
        <MenuList dense className={styles.menuList}>
          <Link to="/" className={styles.menuItem}>
            <ListItemIcon className={styles.icon}>
              <HomeIcon fontSize="small" />
            </ListItemIcon>
            Home</Link>
          <Link to="/violations" className={styles.menuItem}>
            <ListItemIcon className={styles.icon}>
              <BackHandIcon fontSize="small" />
            </ListItemIcon>
            Violations
          </Link>
          <Link to="/reports" className={styles.menuItem}>
            <ListItemIcon className={styles.icon}>
              <SummarizeIcon fontSize="small" />
            </ListItemIcon>
            Reports
          </Link>
          <Link to="/setting" className={styles.menuItem}>
            <ListItemIcon className={styles.icon}>
              <SettingsIcon fontSize="small" />
            </ListItemIcon>
            Settings
          </Link>
        </MenuList>
      </Paper>
    {/*<nav>*/}
    {/*  <ul>*/}
    {/*    <li>*/}
    {/*      <Link to="/">Home</Link>*/}
    {/*    </li>*/}
    {/*    <li>*/}
    {/*      <Link to="/reports">Reports</Link>*/}
    {/*    </li>*/}
    {/*    <li>*/}
    {/*      <Link to="/setting">Setting</Link>*/}
    {/*    </li>*/}
    {/*    <li>*/}
    {/*      <Link to="/violations">Violations</Link>*/}
    {/*    </li>*/}
    {/*  </ul>*/}
    {/*</nav>*/}
    </>
  );
}

export default Menu