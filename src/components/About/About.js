import React from 'react';

// Material UI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { PrimaryAbilities,
         SecondaryAbilities,
         PreferredTools
       } from '../Abilities/Abilities';

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
              <PrimaryAbilities />
            </Grid>

            <Typography variant="h4">
              Secondary
            </Typography>

            <Grid container item spacing={2} alignItems="center">
              <SecondaryAbilities />
            </Grid>

            <Typography variant="h4">
              Preferred Tools
            </Typography>

            <Grid container item spacing={2} alignItems="center">
              <PreferredTools />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}