import * as React from "react";
import { motion } from "framer-motion";
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

export const MenuItem = ({ linkTitle, linkText, link, target, rel, icon, style }) => {
  let linkElement;

  if (icon) {
    linkElement = (
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={style}
      >
        <a 
          href={link}
          title={linkTitle}
          target={target}
          rel={rel}
        >
          {icon}
        </a>
      </motion.li>
    );
  } else {
    linkElement = (
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <a 
          href={link} 
          title={linkTitle}
          target={target}
          rel={rel}
        >
          <Typography variant="h6" component="body1" gutterBottom>
            {linkText}
          </Typography>
        </a>
      </motion.li>
    );
  }

  return (
    <React.Fragment>
      {linkElement}
    </React.Fragment>
  );
};
