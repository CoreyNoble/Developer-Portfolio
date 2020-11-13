import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const MenuList = () => (
  <motion.ul variants={variants}>
    {items.map(item => (
      <MenuItem
        key    = { item.id }
        linkText  = { item.linkText }
        linkTitle  = { item.linkTitle }
        link   = { item.link }
        target = { item.target }
        rel    = { item.rel }
        icon   = { item.icon }
        style  = { item.style }
      />
    ))}
  </motion.ul>
);

const iconSize = '2rem';

const items = [
  {
    id: 1,
    linkText: 'Home',
    linkTitle: 'Visit My Homepage',
    link: '/'
  },
  // {
  //   id: 2,
  //   linkText: 'Portfolio',
  //   linkTitle: 'View My Portfolo',
  //   link: '/portfolio'
  // },
  {
    id: 3,
    linkText: 'About',
    linkTitle: 'Learn More About Me',
    link: '/about'
  },
  {
    id: 4,
    linkText: 'Blog',
    linkTitle: 'Visit My Blog',
    link: '/blog'
  },
  {
    id: 5,
    linkText: 'Contact',
    linkTitle: 'Contact Me',
    link: '/contact'
  },
  {
    id: 6,
    linkTitle: 'Visit My GitHub',
    link: '//github.com/CoreyNoble',
    target: '_blank', 
    rel: "noopener noreferrer",
    icon: <FaGithub size={iconSize} />,
    style: {
      display: "inline-block",
      marginRight: "1rem"
    }
  },
  {
    id: 7,
    linkTitle: 'View My LinkedIn Profile',
    link: '//ca.linkedin.com/in/corey-noble',
    target: '_blank', 
    rel: "noopener noreferrer",
    icon: <FaLinkedin size={iconSize}/>,
    style: {
      display: "inline-block",
    }
  }
];
