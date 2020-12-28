import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { IoIosMail } from 'react-icons/io';

import './Introduction.scss';

export default function Introduction() {
  return (
    <React.Fragment>
      <Container component="main" maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className="Introduction">
              <Typography component="h2" variant="h2" align="center">
                Hi, I'm Corey.
              </Typography>
              <Typography component="p" variant="h4">A web developer from the greater Toronto&nbsp;area.</Typography>
              <Typography component="p" variant="h4">I create elegent, yet complex applications to help companies go further&nbsp;online.</Typography>
              <Button 
                href="/contact"
                variant="contained"
                color="primary"
                endIcon={<IoIosMail size="1.33rem" />}
              >
                Contact Me
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}