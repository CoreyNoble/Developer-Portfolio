import React, { useRef } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { GrSend } from 'react-icons/gr';
import { BiSend } from 'react-icons/bi';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import ReCAPTCHA from "react-google-recaptcha";

export default function SignUp() {
  const recaptchaRef = useRef();

  const onSubmitWithReCAPTCHA = async () => {
    const token = await recaptchaRef.current.executeAsync();
    console.log('[token]: ', token);
    // apply to form data
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    }
  }));

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="lg">
      <Paper className={classes.paper}>
        <GrSend size='2rem' />
        <Typography component="h1" variant="h5">
          Contact Me
        </Typography>
        <form className={classes.form} onSubmit={onSubmitWithReCAPTCHA}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="lname"
                name="lastName"
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="company"
                label="Company"
                name="company"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="inquiry"
                label="Inquiry"
                name="inquiry"
                multiline
                rows={8}
                rowsMax={8}
              />
            </Grid>
            <Grid item xs={3} sm={6} md={9}></Grid>
            <Grid item xs={9} sm={6} md={3}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                endIcon={<BiSend size='1rem' />}
              >
                Submit Inquiry
              </Button>
            </Grid>
          </Grid>

          <ReCAPTCHA
            ref={recaptchaRef}
            size="invisible"
            sitekey="6LcQZt4ZAAAAAHX1c3rQMlTNMZn7WOo74fecFtMB"
            // onChange={onChange}
          />
        </form>
      </Paper>
    </Container>
  );
}