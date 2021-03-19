import * as React from "react";
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const MenuItem = ({ linkTitle, linkText, link, target, rel, icon }) => {
  let linkElement;

  if (icon) {
    linkElement = (
      <Link 
        to={`${process.env.PUBLIC_URL}${link}`}
        title={linkTitle}
        target={target}
        rel={rel}
      >
        {icon}
      </Link>
    );
  } else {
    linkElement = (
      <Link 
        to={`${process.env.PUBLIC_URL}${link}`}
        title={linkTitle}
        target={target}
        rel={rel}
      >
        <Typography variant="h6" component="p" gutterBottom>
          {linkText}
        </Typography>
      </Link>
    );
  }

  return (
    <React.Fragment>
      {linkElement}
    </React.Fragment>
  );
};
