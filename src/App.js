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
      backgroundColor: "#222525",
      width: "20rem",
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
              <p>{mainPage.introductions[0]}</p>
              <p>{mainPage.introductions[1]}</p>
            </div>
            <Grid container spacing={10} className="skills-grid">
              <Grid item>
                <h4 className="skill-titles">Skills</h4>
                <div className="skills-note">
                  (Sorted by proficiency and experience in descending order)
                </div>
                <Grid container spacing={2} className="skills">
                  <ul>
                    {Object.keys(mainPage.skills).map((skill) => (
                      <Grid item key={skill}>
                        <li className="skills">{mainPage.skills[skill]}</li>
                      </Grid>
                    ))}
                    <div className="skill-divider">
                      ---------------------------------
                    </div>
                    {Object.keys(mainPage.otherSkills).map((otherSkill) => (
                      <Grid item key={otherSkill}>
                        <li className="skills">
                          {mainPage.otherSkills[otherSkill]}
                        </li>
                      </Grid>
                    ))}
                  </ul>
                </Grid>
              </Grid>

              <Grid item>
                <h4 className="skill-titles">Skills to Improve</h4>
                <div className="skills-note">
                  (Sorted by priority in descending order)
                </div>
                <Grid container spacing={2} className="skills">
                  <ul>
                    {Object.keys(mainPage.skillsToImprove).map(
                      (skillToImprove) => (
                        <Grid item key={skillToImprove}>
                          <li className="skills">
                            {mainPage.skillsToImprove[skillToImprove]}
                          </li>
                        </Grid>
                      )
                    )}
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
                            className={classes.img}
                          />
                          <CardContent className="p-desc">
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
                        {gProjects[project]["git"].trim().length > 0 && (
                          <IconButton
                            onClick={function click() {
                              window.open(gProjects[project]["git"]);
                            }}
                          >
                            <GitHubIcon />
                          </IconButton>
                        )}
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
                          <CardContent className="p-desc">
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
                          <CardContent className="p-desc">
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
        <div className="footer">
          Copyright © {new Date().getFullYear()} Ben Caffee.
        </div>
      </ThemeProvider>
    </div>
  );
}
