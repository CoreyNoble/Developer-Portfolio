import React from "react";

import Ability from './Ability/Ability';

// Icons
import { FaReact,
         FaGitAlt,
         FaUniversalAccess,
         FaChrome,
         FaFirefox,
         FaWindows,
         FaLinux,
         FaFigma,
         FaSketch
       } from 'react-icons/fa';

import { SiJavascript,
         SiHtml5,
         SiCss3,
         SiSass,
         SiBitbucket,
         SiJira,
         SiMaterialUi,
         SiBootstrap,
         SiWebpack,
         SiNodeDotJs,
         SiDocker,
         SiGraphql,
         SiVisualstudiocode,
         SiJest,
         SiElectron
        } from 'react-icons/si';

import { DiPhotoshop } from 'react-icons/di';

export const PrimaryAbilities = () => {
  const abilitiesData = [
    {
      title: 'React',
      subTitle: 'JavaScript Framework',
      icon: <FaReact className="Icon RotateIconForward" />,
    },
    {
      title: 'JavaScript',
      subTitle: 'Programming Language',
      icon: <SiJavascript className="Icon" />,
    },
    {
      title: 'HTML',
      subTitle: 'Semantic Markup Language',
      icon: <SiHtml5 className="Icon" />,
    },
    {
      title: 'CSS',
      subTitle: 'Style Language',
      icon: <SiCss3 className="Icon" />,
    },
    {
      title: 'Sass',
      subTitle: 'CSS Extension Language',
      icon: <SiSass className="Icon" />,
    },
    {
      title: 'Git',
      subTitle: 'Version Control',
      icon: <FaGitAlt className="Icon" />,
    },
    {
      title: 'Bitbucket',
      subTitle: 'Git Code Management Tool',
      icon: <SiBitbucket className="Icon" />,
    },
    {
      title: 'Jira',
      subTitle: 'Software Development Tool (Agile)',
      icon: <SiJira className="Icon" />,
    },
    {
      title: 'WCAG 2.0',
      subTitle: 'Web Accessibility',
      icon: <FaUniversalAccess className="Icon" />,
    },
    {
      title: 'Photoshop',
      subTitle: 'Design Tool',
      icon: <DiPhotoshop className="Icon" />,
    }
  ];

  return (
    <React.Fragment>
      {abilitiesData.map(abilityData => (      
        <Ability
          key             = { abilityData.title }
          abilityTitle    = { abilityData.title }
          abilitySubTitle = { abilityData.subTitle }
          abilityIcon     = { abilityData.icon }
          abilityPriority = { 1 }
        />
      ))}
    </React.Fragment>
  );
};

export const SecondaryAbilities = () => {
  const abilitiesData = [
    {
      title: 'Material UI',
      subTitle: 'User Interface Framework',
      icon: <SiMaterialUi className="Icon" />,
    },
    {
      title: 'Bootstrap',
      subTitle: 'User Interface Framework',
      icon: <SiBootstrap className="Icon" />,
    },
    {
      title: 'GraphQL',
      subTitle: 'API Query Language',
      icon: <SiGraphql className="Icon" />,
    },
    {
      title: 'Node JS',
      subTitle: 'JavaScript Runtime',
      icon: <SiNodeDotJs className="Icon" />,
    },
    {
      title: 'Jest',
      subTitle: 'JavaScript Testing Framework',
      icon: <SiJest className="Icon" />,
    },
    {
      title: 'Electron',
      subTitle: 'Cross-Platform Desktop Applications',
      icon: <SiElectron className="Icon RotateIconBackward" />,
    },
    {
      title: 'Webpack',
      subTitle: 'Module Buldler',
      icon: <SiWebpack className="Icon" />,
    },
    {
      title: 'Docker',
      subTitle: 'Project Containerization',
      icon: <SiDocker className="Icon" />,
    }
  ];

  return (
    <React.Fragment>
      {abilitiesData.map(abilityData => (      
        <Ability
          key             = { abilityData.title }
          abilityTitle    = { abilityData.title }
          abilitySubTitle = { abilityData.subTitle }
          abilityIcon     = { abilityData.icon }
          abilityPriority = { 2 }
        />
      ))}
    </React.Fragment>
  );
};

export const PreferredTools = () => {
  const abilitiesData = [
    {
      title: 'Windows',
      subTitle: 'Operating System',
      icon: <FaWindows className="Icon" />,
    },
    {
      title: 'Linux',
      subTitle: 'Operating System',
      icon: <FaLinux className="Icon" />,
    },
    {
      title: 'Visual Studio Code',
      subTitle: 'Integrated Development Environment',
      icon: <SiVisualstudiocode className="Icon" />,
    },
    {
      title: 'Chrome',
      subTitle: 'Web Browser',
      icon: <FaChrome className="Icon RotateIconBackward" />,
    },
    {
      title: 'Firefox',
      subTitle: 'Web Browser',
      icon: <FaFirefox className="Icon" />,
    },
    {
      title: 'Sketch',
      subTitle: 'Design prototyping tool',
      icon: <FaSketch className="Icon" />,
    },
    {
      title: 'Figma',
      subTitle: 'Design prototyping tool',
      icon: <FaFigma className="Icon" />,
    }
  ];

  return (
    <React.Fragment>
      {abilitiesData.map(abilityData => (      
        <Ability
          key             = { abilityData.title }
          abilityTitle    = { abilityData.title }
          abilitySubTitle = { abilityData.subTitle }
          abilityIcon     = { abilityData.icon }
          abilityPriority = { 3 }
        />
      ))}
    </React.Fragment>
  );
};