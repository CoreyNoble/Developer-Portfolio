import React from 'react';

// Material UI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Icons
import IconBGGold from '../../assets/img/icon-badge-background-gold.svg';
import IconBGSilver from '../../assets/img/icon-badge-background-silver.svg';
import IconBGTools from '../../assets/img/icon-badge-background-tools.svg';

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

// Stylesheet
import './About.scss';

export default function About() {
  return (
    <React.Fragment>
      <Container className="AboutSection" component="main" maxWidth="lg">
        <Grid container spacing={5}>
          {/* Title */}
          <Grid item xs={12}>
            <Typography variant="h3" align="center">
              Abilities
            </Typography>

            <Typography variant="h4">
              Primary
            </Typography>

            <Grid container item spacing={2}>

              <Grid item xs={6} md={4} lg={3}>
                <Grid className="Skill" container item spacing={2} alignItems="center">
                  <Grid item xs={12} sm={4}>
                    <div className="IconContainer">
                      <FaReact className="Icon RotateIconForward"/>
                      <img className="IconBG" src={IconBGGold} />
                    </div>  
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography component="h5" variant="h6">
                      React
                    </Typography>
                    <Typography variant="p">
                      JavaScript Framework
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={6} md={4} lg={3}>
                <Grid className="Skill" container item spacing={2} alignItems="center">
                  <Grid item xs={12} sm={4}>
                    <div className="IconContainer">
                      <SiJavascript className="Icon" />
                      <img className="IconBG" src={IconBGGold} />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography component="h5" variant="h6">
                      JavaScript
                    </Typography>
                    <Typography variant="p">
                      Programming Language
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={6} md={4} lg={3}>
                <Grid className="Skill" container item spacing={2} alignItems="center">
                  <Grid item xs={12} sm={4}>
                    <div className="IconContainer">
                      <SiHtml5 className="Icon" />
                      <img className="IconBG" src={IconBGGold} />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography component="h5" variant="h6">
                      HTML
                    </Typography>
                    <Typography variant="p">
                      Markup Language
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={6} md={4} lg={3}>
                <Grid className="Skill" container item spacing={2} alignItems="center">
                  <Grid item xs={12} sm={4}>
                    <div className="IconContainer">
                      <SiCss3 className="Icon" />
                      <img className="IconBG" src={IconBGGold} />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography component="h5" variant="h6">
                      CSS
                    </Typography>
                    <Typography variant="p">
                      Style Language
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={6} md={4} lg={3}>
                <Grid className="Skill" container item spacing={2} alignItems="center">
                  <Grid item xs={12} sm={4}>
                    <div className="IconContainer">
                      <SiSass className="Icon" />
                      <img className="IconBG" src={IconBGGold} />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography component="h5" variant="h6">
                      Sass
                    </Typography>
                    <Typography variant="p">
                      CSS Extension Language
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={6} md={4} lg={3}>
                <Grid className="Skill" container item spacing={2} alignItems="center">
                  <Grid item xs={12} sm={4}>
                    <div className="IconContainer">
                      <FaGitAlt className="Icon" />
                      <img className="IconBG" src={IconBGGold} />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography component="h5" variant="h6">
                      Git
                    </Typography>
                    <Typography variant="p">
                      Version Control
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={6} md={4} lg={3}>
                <Grid className="Skill" container item spacing={2} alignItems="center">
                  <Grid item xs={12} sm={4}>
                    <div className="IconContainer">
                      <SiBitbucket className="Icon" />
                      <img className="IconBG" src={IconBGGold} />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography component="h5" variant="h6">
                      Bitbucket
                    </Typography>
                    <Typography variant="p">
                      Git Code Management Tool
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={6} md={4} lg={3}>
                <Grid className="Skill" container item spacing={2} alignItems="center">
                  <Grid item xs={12} sm={4}>
                    <div className="IconContainer">
                      <SiJira className="Icon" />
                      <img className="IconBG" src={IconBGGold} />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography component="h5" variant="h6">
                      Jira
                    </Typography>
                    <Typography variant="p">
                      Software Development Tool (Agile)
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={6} md={4} lg={3}>
                <Grid className="Skill" container item spacing={2} alignItems="center">
                  <Grid item xs={12} sm={4}>
                    <div className="IconContainer">
                      <FaUniversalAccess className="Icon" />
                      <img className="IconBG" src={IconBGGold} />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography component="h5" variant="h6">
                      WCAG 2.0
                    </Typography>
                    <Typography variant="p">
                      Web Accessibility
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={6} md={4} lg={3}>
                <Grid className="Skill" container item spacing={2} alignItems="center">
                  <Grid item xs={12} sm={4}>
                    <div className="IconContainer">
                      <DiPhotoshop className="Icon" />
                      <img className="IconBG" src={IconBGGold} />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography component="h5" variant="h6">
                      Photoshop
                    </Typography>
                    <Typography variant="p">
                      Design Tool
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

            </Grid>

            <Typography variant="h4">
              Secondary
            </Typography>

            <Grid container item spacing={2} alignItems="center">

              <Grid item xs={6} md={4} lg={3}>
                <Grid className="Skill" container item spacing={2} alignItems="center">
                  <Grid item xs={12} sm={4}>
                    <div className="IconContainer">
                      <SiMaterialUi className="Icon" />
                      <img className="IconBG" src={IconBGSilver} />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography component="h5" variant="h6">
                      Material UI
                    </Typography>
                    <Typography variant="p">
                      User Interface Framework
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={6} md={4} lg={3}>
                <Grid className="Skill" container item spacing={2} alignItems="center">
                  <Grid item xs={12} sm={4}>
                    <div className="IconContainer">
                      <SiBootstrap className="Icon" />
                      <img className="IconBG" src={IconBGSilver} />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography component="h5" variant="h6">
                      Bootstrap
                    </Typography>
                    <Typography variant="p">
                      User Interface Framework
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={6} md={4} lg={3}>
                <Grid className="Skill" container item spacing={2} alignItems="center">
                  <Grid className="IconContainer"item xs={12} sm={4}>
                    <div className="IconContainer">
                      <SiGraphql className="Icon" />
                      <img className="IconBG" src={IconBGSilver} />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography component="h5" variant="h6">
                      GraphQL
                    </Typography>
                    <Typography variant="p">
                      API Query Language
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={6} md={4} lg={3}>
                <Grid className="Skill" container item spacing={2} alignItems="center">
                  <Grid item xs={12} sm={4}>
                    <div className="IconContainer">
                      <SiNodeDotJs className="Icon" />
                      <img className="IconBG" src={IconBGSilver} />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography component="h5" variant="h6">
                      Node JS
                    </Typography>
                    <Typography variant="p">
                      JavaScript Runtime
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={6} md={4} lg={3}>
                <Grid className="Skill" container item spacing={2} alignItems="center">
                  <Grid item xs={12} sm={4}>
                    <div className="IconContainer">
                      <SiJest className="Icon" />
                      <img className="IconBG" src={IconBGSilver} />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography component="h5" variant="h6">
                      Jest
                    </Typography>
                    <Typography variant="p">
                      JavaScript Testing Framework
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={6} md={4} lg={3}>
                <Grid className="Skill" container item spacing={2} alignItems="center">
                  <Grid item xs={12} sm={4}>
                    <div className="IconContainer">
                      <SiElectron className="Icon RotateIconBackward" />
                      <img className="IconBG" src={IconBGSilver} />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography component="h5" variant="h6">
                      Electron
                    </Typography>
                    <Typography variant="p">
                      Cross-Platform Desktop Applications
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={6} md={4} lg={3}>
                <Grid className="Skill" container item spacing={2} alignItems="center">
                  <Grid item xs={12} sm={4}>
                    <div className="IconContainer">
                      <SiWebpack className="Icon" />
                      <img className="IconBG" src={IconBGSilver} />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography component="h5" variant="h6">
                      Webpack
                    </Typography>
                    <Typography variant="p">
                      Module Buldler
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={6} md={4} lg={3}>
                <Grid className="Skill" container item spacing={2} alignItems="center">
                  <Grid item xs={12} sm={4}>
                    <div className="IconContainer">
                      <SiDocker className="Icon" />
                      <img className="IconBG" src={IconBGSilver} />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography component="h5" variant="h6">
                      Docker
                    </Typography>
                    <Typography variant="p">
                      Project Containerization
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

            </Grid>

            <Typography variant="h4">
              Preferred Tools
            </Typography>

            
            <Grid container item spacing={2} alignItems="center">

              <Grid item xs={6} md={4} lg={3}>
                <Grid className="Skill" container item spacing={2} alignItems="center">
                  <Grid item xs={12} sm={4}>
                    <div className="IconContainer">
                      <FaWindows className="Icon" />
                      <img className="IconBG" src={IconBGTools} />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography component="h5" variant="h6">
                      Windows
                    </Typography>
                    <Typography variant="p">
                      Operating System
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={6} md={4} lg={3}>
                <Grid className="Skill" container item spacing={2} alignItems="center">
                  <Grid item xs={12} sm={4}>
                    <div className="IconContainer">
                      <FaLinux className="Icon" />
                      <img className="IconBG" src={IconBGTools} />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography component="h5" variant="h6">
                      Linux
                    </Typography>
                    <Typography variant="p">
                      Operating System
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={6} md={4} lg={3}>
                <Grid className="Skill" container item spacing={2} alignItems="center">
                  <Grid item xs={12} sm={4}>
                    <div className="IconContainer">
                      <SiVisualstudiocode className="Icon" />
                      <img className="IconBG" src={IconBGTools} />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography component="h5" variant="h6">
                      Visual Studio Code
                    </Typography>
                    <Typography variant="p">
                      Integrated Development Environment
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={6} md={4} lg={3}>
                <Grid className="Skill" container item spacing={2} alignItems="center">
                  <Grid item xs={12} sm={4}>
                    <div className="IconContainer">
                      <FaChrome className="Icon RotateIconBackward" />
                      <img className="IconBG" src={IconBGTools} />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography component="h5" variant="h6">
                      Chrome
                    </Typography>
                    <Typography variant="p">
                      Web Browser
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={6} md={4} lg={3}>
                <Grid className="Skill" container item spacing={2} alignItems="center">
                  <Grid item xs={12} sm={4}>
                    <div className="IconContainer">
                      <FaFirefox className="Icon" />
                      <img className="IconBG" src={IconBGTools} />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography component="h5" variant="h6">
                      Firefox
                    </Typography>
                    <Typography variant="p">
                      Web Browser
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={6} md={4} lg={3}>
                <Grid className="Skill" container item spacing={2} alignItems="center">
                  <Grid item xs={12} sm={4}>
                    <div className="IconContainer">
                      <FaSketch className="Icon" />
                      <img className="IconBG" src={IconBGTools} />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography component="h5" variant="h6">
                      Sketch
                    </Typography>
                    <Typography variant="p">
                      Design prototyping tool
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={6} md={4} lg={3}>
                <Grid className="Skill" container item spacing={2} alignItems="center">
                  <Grid item xs={12} sm={4}>
                    <div className="IconContainer">
                      <FaFigma className="Icon" />
                      <img className="IconBG" src={IconBGTools} />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography component="h5" variant="h6">
                      Figma
                    </Typography>
                    <Typography variant="p">
                      Design prototyping tool
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

            </Grid>

          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}