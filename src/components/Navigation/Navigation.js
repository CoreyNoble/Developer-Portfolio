import * as React from "react";
import { Link } from "react-router-dom";
import { SkipNavLink } from "@reach/skip-nav";
import { MenuList } from "./MenuList";
import Typography from '@material-ui/core/Typography';
import './Navigation.scss';

export const Navigation = () => {
  return (
    <React.Fragment>
      <SkipNavLink />
      <nav>
        <Link 
          to="/"
          id="logo"
        >
          <Typography component="span" variant="h4">‹ corey-noble /›</Typography>
        </Link>

        <MenuList />
      </nav>
    </React.Fragment>
  );
};
