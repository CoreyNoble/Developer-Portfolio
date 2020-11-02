import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.scss';
import { Navigation } from "./components/Navigation/Navigation";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

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
      <h1>About</h1>
    );
  }

  function Blog() {
    return (
      <h1>Blog</h1>
    );
  }

  function Contact() {
    return (
      <h1>Contact</h1>
    );
  }

  function Index() {
    return (
      <h1>Home</h1>
    );
  }

  return (
    <Router>
      <CssBaseline />
      <div className="App">
        <Navigation />

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
              path="/blog" 
              render={() => (
                <Suspense fallback={<div>Loading...</div>}>
                  <Blog />
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
      </div>
    </Router>
  );
}

export default App;
