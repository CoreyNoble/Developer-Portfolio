import React from 'react';
import { Link } from "react-router-dom";

// Material UI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// Icons
import { FaGithub, FaClipboardList, FaFileCode } from 'react-icons/fa';
import { BsBrush, BsFillInfoCircleFill } from 'react-icons/bs';

// Images
import PlaceholderImageSmall from '../../assets/img/portfolio/placeholder-image-small.png';
import PlaceholderImageMedium from '../../assets/img/portfolio/placeholder-image-medium.png';
import MotusbankImage from '../../assets/img/portfolio/motusbank.jpg';

// Stylesheet
import './Portfolio.scss';

export default function Portfolio() {
  // Modal
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <React.Fragment>
      <div className="PortfolioBackground">
        <div className="PortfolioIcons">
          <FaClipboardList className="PortfolioIcon1 PortfolioIcon" size='9rem' />
          <BsBrush className="PortfolioIcon2 PortfolioIcon" size='9rem' />
          <FaFileCode className="PortfolioIcon3 PortfolioIcon" size='9rem' />
        </div>

        <Container component="main" maxWidth="lg">
          <Grid container spacing={5}>

            {/* Title */}
            <Grid item xs={12}>
              <Typography variant="h3" align="center">
                My Projects
              </Typography>
            </Grid>

            {/* Path Finding Algorithm Visualizer */}
            <Grid className="PortfolioItem" item xs={12} md={6}>
              <Tooltip title="View Project Details" placement="left-start">
                <Link 
                  className="InfoCTA"
                  onClick={handleClickOpen('paper')}
                  id="path-finding-algorithm-visualizer-modal"
                >
                  <BsFillInfoCircleFill size='2rem' />
                </Link>
              </Tooltip>

              <Link to="/contact">
                { /* Small */ }
                <Box display={{ xs: 'block', md: 'none' }}>
                  <img src={PlaceholderImageSmall} alt="" />
                </Box>

                { /* Medium */ }
                <Box display={{ xs: 'none', md: 'block' }}>
                  <img src={PlaceholderImageMedium} alt="" />
                </Box>
              </Link>

              <Grid className="PortfolioItemInfo" container item alignItems="center">
                { /* Grid Offset */ }
                <Grid item xs={0} sm={2}></Grid>

                <Grid item xs={10} sm={8}>
                  <Link to="/contact">
                    <Typography variant="h6" align="center">
                      Path Finding Algorithm Visualizer
                    </Typography>
                  </Link>
                </Grid>

                <Grid item xs={2}>
                  <Link 
                    className="GitHubCTA"
                    to="//github.com/CoreyNoble"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size='2rem' />
                  </Link>
                </Grid>
              </Grid>
            </Grid>

            {/* Sorting Algorithm Visualizer */}
            <Grid className="PortfolioItem" item xs={12} md={6}>
              <Tooltip title="View Project Details" placement="left-start">
                <Link
                  className="InfoCTA"
                  onClick={handleClickOpen('paper')}
                  id="path-finding-algorithm-visualizer-modal"
                >
                  <BsFillInfoCircleFill size='2rem' />
                </Link>
              </Tooltip>

              <Link to="/contact">
                { /* Small */ }
                <Box display={{ xs: 'block', md: 'none' }}>
                  <img src={PlaceholderImageSmall} alt="" />
                </Box>

                { /* Medium */ }
                <Box display={{ xs: 'none', md: 'block' }}>
                  <img src={PlaceholderImageMedium} alt="" />
                </Box>
              </Link>

              <Grid className="PortfolioItemInfo" container item alignItems="center">
                { /* Grid Offset */ }
                <Grid item xs={0} sm={2}></Grid>

                <Grid item xs={10} sm={8}>
                  <Link to="/contact">
                    <Typography variant="h6" align="center">
                      Sorting Algorithm Visualizer
                    </Typography>
                  </Link>
                </Grid>

                <Grid item xs={2}>
                  <Link
                    className="GitHubCTA"
                    to="//github.com/CoreyNoble"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size='2rem' />
                  </Link>
                </Grid>
              </Grid>
            </Grid>

            {/* Tree Traversal Algorithm Visualizer */}
            <Grid className="PortfolioItem" item xs={12} md={6}>
              <Tooltip title="View Project Details" placement="left-start">
                <Link
                  className="InfoCTA"
                  onClick={handleClickOpen('paper')}
                  id="path-finding-algorithm-visualizer-modal"
                >
                  <BsFillInfoCircleFill size='2rem' />
                </Link>
              </Tooltip>

              <Link to="/contact">
                { /* Small */ }
                <Box display={{ xs: 'block', md: 'none' }}>
                  <img src={PlaceholderImageSmall} alt="" />
                </Box>

                { /* Medium */ }
                <Box display={{ xs: 'none', md: 'block' }}>
                  <img src={PlaceholderImageMedium} alt="" />
                </Box>
              </Link>

              <Grid className="PortfolioItemInfo" container item alignItems="center">
                { /* Grid Offset */ }
                <Grid item xs={0} sm={2}></Grid>

                <Grid item xs={10} sm={8}>
                  <Link to="/contact">
                    <Typography variant="h6" align="center">
                      Tree Traversal Algorithm Visualizer
                    </Typography>
                  </Link>
                </Grid>

                <Grid item xs={2}>
                  <Link
                    className="GitHubCTA"
                    to="//github.com/CoreyNoble"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size='2rem' />
                  </Link>
                </Grid>
              </Grid>
            </Grid>

            {/* React Store */}
            <Grid className="PortfolioItem" item xs={12} md={6}>
              <Tooltip title="View Project Details" placement="left-start">
                <Link
                  className="InfoCTA"
                  onClick={handleClickOpen('paper')}
                  id="path-finding-algorithm-visualizer-modal"
                >
                  <BsFillInfoCircleFill size='2rem' />
                </Link>
              </Tooltip>

              <Link to="/contact">
                { /* Small */ }
                <Box display={{ xs: 'block', md: 'none' }}>
                  <img src={PlaceholderImageSmall} alt="" />
                </Box>

                { /* Medium */ }
                <Box display={{ xs: 'none', md: 'block' }}>
                  <img src={PlaceholderImageMedium} alt="" />
                </Box>
              </Link>

              <Grid className="PortfolioItemInfo" container item alignItems="center">
                { /* Grid Offset */ }
                <Grid item xs={0} sm={2}></Grid>

                <Grid item xs={10} sm={8}>
                  <Link to="/contact">
                    <Typography variant="h6" align="center">
                      React Store
                    </Typography>
                  </Link>
                </Grid>

                <Grid item xs={2}>
                  <Link
                    className="GitHubCTA"
                    to="//github.com/CoreyNoble"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size='2rem' />
                  </Link>
                </Grid>
              </Grid>
            </Grid>

            {/* motusbank */}
            <Grid className="PortfolioItem" item xs={12} md={6}>
              <Tooltip title="View Project Details" placement="left-start">
                <Link
                  className="InfoCTA"
                  onClick={handleClickOpen('paper')}
                  id="path-finding-algorithm-visualizer-modal"
                >
                  <BsFillInfoCircleFill size='2rem' />
                </Link>
              </Tooltip>

              <Link to="/contact">
                <Box display={{ xs: 'block', md: 'none' }}> { /* Small */ }
                  <img src={MotusbankImage} alt="" />
                </Box>
                <Box display={{ xs: 'none', md: 'block' }}> { /* Medium */ }
                  <img src={MotusbankImage} alt="" />
                </Box>
              </Link>

              <Grid className="PortfolioItemInfo" container item alignItems="center">
                <Grid item xs={12}>
                  <Link to="/contact">
                    <Typography variant="h6" align="center">
                      motusbank
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          
          </Grid>
        </Container>
      </div>

      {/* Modal */}
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="path-finding-algorithm-visualizer-modal"
        aria-describedby="path-finding-algorithm-visualizer-description"
      >
        <DialogTitle id="scroll-dialog-title">
          <Grid className="PortfolioItemInfo" container item alignItems="center">
            <Grid item xs={10}>
              <Link to="/contact">
                <Typography variant="h6" align="center">
                  Path Finding Algorithm Visualizer
                </Typography>
              </Link>
            </Grid>

            <Grid item xs={2}>
              <Link
                className="GitHubCTA"
                to="//github.com/CoreyNoble"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size='2rem' />
              </Link>
            </Grid>
          </Grid>
        </DialogTitle>

        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="path-finding-algorithm-visualizer-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {[...new Array(10)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
                        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
              )
              .join('\n')}

            <br /><br />
            <Link
              className="GitHubCTA"
              to="//github.com/CoreyNoble"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size='2rem' />&nbsp;&nbsp;View this projects' source code on GitHub!
            </Link>
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}