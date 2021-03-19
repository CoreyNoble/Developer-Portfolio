import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import { Helmet } from "react-helmet";

import CssBaseline from '@material-ui/core/CssBaseline';
import './App.scss';
import { Navigation } from "./components/Navigation/Navigation";
import { SkipNavContent } from "@reach/skip-nav";
import "@reach/skip-nav/styles.css";
import { Footer } from "./components/Footer/Footer";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Hero = React.lazy(() => import('./components/Hero/Hero'));
const Introduction = React.lazy(() => import('./components/Introduction/Introduction'));
const AboutComponent = React.lazy(() => import('./components/About/About'));
const PortfolioComponent = React.lazy(() => import('./components/Portfolio/Portfolio'));

const ContactForm = React.lazy(() => import('./components/ContactForm/ContactForm'));

function App() {
  function NotFound() {
    return (
      <h1>404 - Page Not Found</h1>
    );
  }

  function ServerError() {
    return (
      <h1>500 - Server Error</h1>
    );
  }

  function SiteIndex() {
    return (
      <h1>Site Index</h1>
    );
  }

  function PortfolioRouter() {
    let match = useRouteMatch();

    return (
      <Switch>
        <Route 
          path={`${match.path}/portfolio-entry-1`} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
               <PortfolioEntry1 />
            </Suspense>
          )} 
        />
        <Route 
          path={`${match.path}/portfolio-entry-2`} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
               <PortfolioEntry2 />
            </Suspense>
          )} 
        />
        <Route 
          path={`${match.path}/portfolio-entry-3`} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
               <PortfolioEntry3 />
            </Suspense>
          )} 
        />
        <Route 
          path={`${match.path}/portfolio-entry-4`} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
               <PortfolioEntry4 />
            </Suspense>
          )} 
        />
        <Route 
          path={match.path} 
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <Portfolio />
            </Suspense>
          )} 
        />
      </Switch>
    );
  }

  function Portfolio() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Portfolio | Corey Noble</title>
          <meta name="description" content="View my portfolio. Corey Noble, Web Developer. Look at some of my past work to see why my skills can benefit you." />
          <link rel="canonical" href="http://corey-noble.com/portfolio" />
        </Helmet>

        <h1>Portfolio</h1>

        <ButtonGroup color="primary" orientation="vertical">
          <Button href="/portfolio/portfolio-entry-1" variant="contained" color="primary">Portfolio Entry 1</Button>
          <Button href="/portfolio/portfolio-entry-2" variant="contained" color="primary">Portfolio Entry 2</Button>
          <Button href="/portfolio/portfolio-entry-3" variant="contained" color="primary">Portfolio Entry 3</Button>
          <Button href="/portfolio/portfolio-entry-4" variant="contained" color="primary">Portfolio Entry 4</Button>
        </ButtonGroup>
      </React.Fragment>
    );
  }

  function PortfolioEntry1() {
    return (
      <React.Fragment>
        <h1>Portfolio Entry 1</h1>
        <Button href="/portfolio" variant="contained" color="primary">Back to Portfolio</Button>
      </React.Fragment>
    );
  }

  function PortfolioEntry2() {
    return (
      <React.Fragment>
        <h1>Portfolio Entry 2</h1>
        <Button href="/portfolio" variant="contained" color="primary">Back to Portfolio</Button>
      </React.Fragment>
    );
  }

  function PortfolioEntry3() {
    return (
      <React.Fragment>
        <h1>Portfolio Entry 3</h1>
        <Button href="/portfolio" variant="contained" color="primary">Back to Portfolio</Button>
      </React.Fragment>
    );
  }

  function PortfolioEntry4() {
    return (
      <React.Fragment>
        <h1>Portfolio Entry 4</h1>
        <Button href="/portfolio" variant="contained" color="primary">Back to Portfolio</Button>
      </React.Fragment>
    );
  }

  function About() {
    return (
      <React.Fragment>
        <Helmet>
          <title>About Me | Corey Noble</title>
          <meta name="description" content="Details about me - Corey Noble, Web Developer. View my skill set, work experience and a summary of why I became a Web Developer." />
          <link rel="canonical" href="http://corey-noble.com/about" />
        </Helmet>

        <h1>About Me</h1>
        <Button href="/portfolio" variant="contained" color="primary">Back to Portfolio</Button>
      </React.Fragment>
    );
  }

  function Contact() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Contact Me | Corey Noble</title>
          <meta name="description" content="Contact Me - Corey Noble | Web Application Developer" />
          <link rel="canonical" href="http://corey-noble.com/contact" />
        </Helmet>

        <h1>Contact</h1>
        <ContactForm />
      </React.Fragment>
    );
  }

  function Index() {
    return (
      <React.Fragment>
        <Hero />
        <Introduction />
        <AboutComponent />
        <PortfolioComponent />
      </React.Fragment>
    );
  }

  return (
    <Router>
      <CssBaseline />
      <div className="App">
        <Helmet>
          <title>Corey Noble | Web Application Developer</title>
          <meta name="description" content="Hi, my name is Corey Noble, I am a Web Application Developer currently employed by Evertz Microsystems Ltd., A global leader in broadcast solutions with headquarters based in the beautiful city of Burlington, ON - Canada." />
          <link rel="canonical" href="http://corey-noble.com" />
        </Helmet>
      
        <Navigation />

        <SkipNavContent />
        <main id="main">
          <Switch>
            <Route 
              path="/404" 
              render={() => (
                <Suspense fallback={<div>Loading...</div>}>
                  <NotFound />
                </Suspense>
              )} 
            />

            <Route 
              path="/500" 
              render={() => (
                <Suspense fallback={<div>Loading...</div>}>
                  <ServerError />
                </Suspense>
              )} 
            />

            <Route 
              path="/site-index" 
              render={() => (
                <Suspense fallback={<div>Loading...</div>}>
                  <SiteIndex />
                </Suspense>
              )} 
            />

            <Route 
              path="/portfolio" 
              render={() => (
                <Suspense fallback={<div>Loading...</div>}>
                  <PortfolioRouter />
                </Suspense>
              )} 
            />

            <Route 
              path="/about" 
              render={() => (
                <Suspense fallback={<div>Loading...</div>}>
                  <About />
                </Suspense>
              )} 
            />

            <Route 
              path="/contact" 
              render={() => (
                <Suspense fallback={<div>Loading...</div>}>
                  <Contact />
                </Suspense>
              )} 
            />

            <Route 
              path="/" 
              render={() => (
                <Suspense fallback={<div>Loading...</div>}>
                  <Index />
                </Suspense>
              )} 
            />
          </Switch>
        </main>

        <Suspense fallback={<div>Loading...</div>}>
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
