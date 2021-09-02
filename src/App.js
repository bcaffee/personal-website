import React from "react";
import "./custom.css";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  // CardActions,
  useMediaQuery,
  IconButton,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import { mainPage } from "./siteContent.js";

export default function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
          primary: {
            main: "#6d62ff",
            //light:
            //dark:
            //contrastText:
          },
          secondary: {
            main: "#b2b1cf", //light blueish greyish
          },

          contrastThreshold: 3,
          tonalOffset: 0.2,
        },
      }),
    [prefersDarkMode]
  );

  const useStyles = makeStyles((style) => ({
    root: {
      backgroundColor: "#313535",
      width: "20rem", //20em?
    },
    img: {
      maxHeight: "275px",
    },
  }));

  const classes = useStyles();
  const gProjects = mainPage.gameThumbnails;
  const oProjects = mainPage.otherThumbnails;
  const hProjects = mainPage.hackathonThumbnails;

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <div className="container">
          <div>
            <div className="site-title">
              <h1>Ben Caffee</h1>
            </div>
            <Grid container spacing={2} className="social-grid">
              <Grid item className="social">
                <a href="https://github.com/bcaffee">
                  <FaGithub />
                </a>
              </Grid>
              <Grid item className="social">
                <a href="mailto:bncaffee@uw.edu">
                  <FaEnvelope />
                </a>
              </Grid>
            </Grid>

            <div className="introduction">
              {mainPage.introduction}
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                commodo euismod nisl, quis sollicitudin ex laoreet eu.
              </p>
              <p>
                Quisque sagittis nibh quam, ut efficitur elit interdum non. Cras
                libero leo, pharetra nec convallis non, tincidunt ut lectus. Sed
                non molestie enim. Mauris nec est ut lectus tempor auctor non
                eget sapien. Proin sit amet varius nunc. Curabitur erat massa,
                consectetur non vehicula ac, imperdiet non odio. Ut quis risus
                libero. Pellentesque risus nunc, dignissim eget leo et, placerat
                euismod justo.
              </p>
              <p>
                Aliquam blandit semper leo et facilisis. Nam dui risus,
                sollicitudin nec bibendum ac, consectetur facilisis nisi. Etiam
                vestibulum odio vel magna condimentum, eget consequat justo
                efficitur. Ut consectetur erat diam, in dignissim ligula commodo
                vel. Sed lacinia ante libero, vitae tincidunt libero viverra
                nec. Aenean lacinia dolor in ipsum accumsan, vitae dignissim
                eros eleifend. Vivamus blandit tempus nibh id sollicitudin.
                Etiam iaculis ligula id posuere tincidunt. Duis quam magna,
                viverra sed metus et, volutpat iaculis justo. Vivamus a laoreet
                risus. Phasellus malesuada lacinia libero, vel vulputate mi
                tincidunt sit amet. Nullam venenatis justo lorem, eget hendrerit
                ex egestas quis. Donec dictum pretium lorem sed aliquet. Cras
                tincidunt, ligula id ultrices egestas, lorem elit scelerisque
                urna, id convallis nisl nibh sit amet velit.
              </p> */}
            </div>
            <Grid container spacing={10} className="skills-grid">
              <Grid item>
                <h4>Skills</h4>
                <Grid container spacing={2} className="skills">
                  <ul>
                    (Sorted by proficiency/experience in descending order)
                    <Typography>
                      <br></br>
                    </Typography>
                    <Grid item>
                      <li>Lorem ipsum</li>
                    </Grid>
                    <Grid item>
                      <li>Dolor sit amet</li>
                    </Grid>
                    <Grid item>
                      <li>Consectetur</li>
                    </Grid>
                    <Grid item>
                      <li>Lorem ipsum</li>
                    </Grid>
                    <Grid item>
                      <li>Dolor sit amet</li>
                    </Grid>
                    <Grid item>
                      <li>Consectetur</li>
                    </Grid>
                    <Grid item>
                      <li>Lorem ipsum</li>
                    </Grid>
                    <Grid item>
                      <li>Dolor sit amet</li>
                    </Grid>
                    {/* {mainPage.skills}*/}
                  </ul>
                </Grid>
              </Grid>

              <Grid item>
                <h4>Skills to Improve</h4>
                <Grid container spacing={2} className="skills">
                  <ul>
                    (Sorted by priority in descending order)
                    <Typography>
                      <br></br>
                    </Typography>
                    <Grid item>
                      <li>Lorem ipsum</li>
                    </Grid>
                    <Grid item>
                      <li>Dolor sit amet</li>
                    </Grid>
                    <Grid item>
                      <li>Consectetur</li>
                    </Grid>
                    <Grid item>
                      <li>Lorem ipsum</li>
                    </Grid>
                  </ul>
                </Grid>
              </Grid>
            </Grid>
            <Grid container spacing={2} className="projects-grid">
              <Grid item>
                <h4>Game Projects</h4>
                <Grid container spacing={2} direction="column">
                  {Object.keys(gProjects).map((project) => (
                    <Grid item key={project}>
                      <Card className={classes.root}>
                        <CardActionArea>
                          <CardMedia
                            image={gProjects[project]["img"]}
                            component="img"
                            className={classes.img} //FORMATTING
                          />
                          <CardContent className="p-label">
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                              style={{ fontWeight: "bold" }}
                            >
                              {gProjects[project]["title"]}
                            </Typography>
                            <Typography>
                              {gProjects[project]["desc"]}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <IconButton
                          onClick={function click() {
                            if (gProjects[project]["git"] !== "") {
                              window.open(oProjects[project]["git"]);
                            }
                          }}
                        >
                          <GitHubIcon />
                        </IconButton>
                        <IconButton
                          onClick={function click() {
                            //TODO: Open Modal
                          }}
                        >
                          <MoreHorizIcon />
                        </IconButton>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              <Grid item>
                <h4>Other</h4>
                <Grid container spacing={2} direction="column">
                  {Object.keys(oProjects).map((project) => (
                    <Grid item key={project}>
                      <Card className={classes.root}>
                        <CardActionArea>
                          <CardMedia
                            image={oProjects[project]["img"]}
                            key={project}
                            component="img"
                            className={classes.img}
                          />
                          <CardContent className="p-label">
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                              style={{ fontWeight: "bold" }}
                            >
                              {oProjects[project]["title"]}
                            </Typography>
                            <Typography>
                              {oProjects[project]["desc"]}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <IconButton
                          onClick={function click() {
                            window.open(oProjects[project]["git"]);
                          }}
                        >
                          <GitHubIcon />
                        </IconButton>
                        <IconButton
                          onClick={function click() {
                            //TODO: Open Modal
                          }}
                        >
                          <MoreHorizIcon />
                        </IconButton>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              <Grid item>
                <h4>Hackathons</h4>
                <Grid container spacing={2} direction="column">
                  {Object.keys(hProjects).map((project) => (
                    <Grid item key={project}>
                      <Card className={classes.root}>
                        <CardActionArea>
                          <CardMedia
                            image={hProjects[project]["img"]}
                            key={project}
                            component="img"
                            className={classes.img}
                          />
                          <CardContent className="p-label">
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                              style={{ fontWeight: "bold" }}
                            >
                              {hProjects[project]["title"]}
                            </Typography>
                            <Typography>
                              {hProjects[project]["desc"]}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <IconButton
                          onClick={function click() {
                            window.open(hProjects[project]["git"]);
                          }}
                        >
                          <GitHubIcon />
                        </IconButton>
                        <IconButton
                          onClick={function click() {
                            //TODO: Open Modal
                          }}
                        >
                          <MoreHorizIcon />
                        </IconButton>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </div>
        </div>
      </ThemeProvider>
      <script type="module" src="siteContent.js"></script>
    </div>

    //TODO: Add footer
  );
}
