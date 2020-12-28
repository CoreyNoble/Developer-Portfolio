import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

import './Footer.scss';

export const Footer = () => {
  return (
    <React.Fragment>
      <Container className="Footer" component="main" maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography component="h2" variant="h3" align="center">
              Let's Work Together
            </Typography>
            <Typography component="p" variant="h5">Have I piqued your interest?</Typography>
            <Button 
              href="/contact"
              title="Contact Me"
              variant="contained"
              color="primary"
            >
              Get in Touch
            </Button>
          </Grid>
          <Grid className="ContactCTAs" item xs={12} md={6}>
            <Button 
              href="mailto:corey@corey-noble.com"
              title="Send Me An Email"
              variant="contained"
              color="primary"
              startIcon={<IoIosMail size="1.33rem" />}
            >
              corey@corey-noble.com
            </Button>
            <Button 
              href="//github.com/CoreyNoble"
              title="Visit My GitHub"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              color="primary"
              startIcon={<FaGithub size="1.33rem" />}
            >
              GitHub
            </Button>
            <Button 
              href="//ca.linkedin.com/in/corey-noble"
              title="View My LinkedIn Profile"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              color="primary"
              startIcon={<FaLinkedin size="1.33rem" />}
            >
              LinkedIn
            </Button>
          </Grid>
        </Grid>
      </Container>

      <div className="Copyright">
        <Container component="main" maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography component="p">&copy;&nbsp;{new Date().getFullYear()}&nbsp;Corey&nbsp;Noble. All&nbsp;rights&nbsp;reserved.</Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
}