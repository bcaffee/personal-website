import React from "react";
import "./custom.css";
import { mainPage } from "./site-content.js";
import { ProjectModal } from "./project-modal.js";
import { ImageListModal } from "./image-list-modal.js";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import GitHubIcon from "@material-ui/icons/GitHub";
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
import ReactHtmlParser from "react-html-parser";

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
          contrastThreshold: 3,
          tonalOffset: 0.2,
        },
      }),
    [prefersDarkMode]
  );

  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "#222525",
      width: "20rem",
      // fontFamily: "Raleway",
      // color: "#efefef",
    },
    // icon: {
    //   color: "#efefef",
    // },
    img: {
      maxHeight: "275px",
    },
  }));

  const classes = useStyles();
  const gProjects = mainPage.games;
  const oProjects = mainPage.other;
  const hProjects = mainPage.hackathons;

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
            <Grid container spacing={8} className="skills-grid">
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
                <h4 className="skill-titles">Goals</h4>
                <div className="skills-note">
                  (Skills that I want to improve. Sorted by priority in
                  descending order)
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
                        <ImageListModal project={gProjects[project]} />
                        {/* <CardActionArea>
                          <CardMedia
                            image={gProjects[project]["imgs"][0]}
                            component="img"
                            // className={classes.img}
                          />
                        </CardActionArea> */}
                        <CardContent>
                          <Typography
                            // className="p-grid-card"
                            gutterBottom
                            variant="h5"
                            style={{
                              fontWeight: "bold",
                            }}
                          >
                            {gProjects[project]["title"]}
                          </Typography>
                          <Typography>
                            {ReactHtmlParser(
                              gProjects[project]["thumbnailDesc"]
                            )}
                          </Typography>
                        </CardContent>

                        <Grid container direction="row" justifyContent="center">
                          <Grid item>
                            {gProjects[project]["git"].trim().length > 0 && (
                              <IconButton
                                onClick={function click() {
                                  window.open(gProjects[project]["git"]);
                                }}
                              >
                                <GitHubIcon />
                              </IconButton>
                            )}
                          </Grid>
                          <Grid item>
                            <ProjectModal project={gProjects[project]} />
                          </Grid>
                        </Grid>
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
                            image={oProjects[project]["imgs"][0]}
                            key={project}
                            component="img"
                          />
                        </CardActionArea>
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            style={{ fontWeight: "bold" }}
                          >
                            {oProjects[project]["title"]}
                          </Typography>
                          <Typography>
                            {ReactHtmlParser(
                              oProjects[project]["thumbnailDesc"]
                            )}
                          </Typography>
                        </CardContent>

                        <Grid container direction="row" justifyContent="center">
                          <Grid item>
                            <IconButton
                              onClick={function click() {
                                window.open(oProjects[project]["git"]);
                              }}
                            >
                              <GitHubIcon />
                            </IconButton>
                          </Grid>
                          <Grid item>
                            <ProjectModal project={oProjects[project]} />
                          </Grid>
                        </Grid>
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
                            image={hProjects[project]["imgs"][0]}
                            key={project}
                            component="img"
                          />
                        </CardActionArea>
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            style={{ fontWeight: "bold" }}
                          >
                            {hProjects[project]["title"]}
                          </Typography>
                          <Typography>
                            {ReactHtmlParser(
                              hProjects[project]["thumbnailDesc"]
                            )}
                          </Typography>
                        </CardContent>

                        <Grid container direction="row" justifyContent="center">
                          <Grid item>
                            <IconButton
                              onClick={function click() {
                                window.open(hProjects[project]["git"]);
                              }}
                            >
                              <GitHubIcon />
                            </IconButton>
                          </Grid>
                          <Grid item>
                            <ProjectModal project={hProjects[project]} />
                          </Grid>
                        </Grid>
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
