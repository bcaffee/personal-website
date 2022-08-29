import React from "react";
import "./custom.css";
import { mainPage } from "./site-content.js";
import ProjectCard from "./ProjectCard";
import {
  // makeStyles,
  createTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import {
  IconButton,
  Grid,
  CssBaseline,
  Tooltip,
  // useMediaQuery,
  Paper,
} from "@material-ui/core";
import { FaGithub, FaEnvelope, FaSun, FaMoon } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

// const useStyles = makeStyles({
//   themeButton: {
//     verticalAlign: "text-top",
//   },
// });

export default function App() {
  // const darkPreference = useMediaQuery("(prefers-color-scheme: dark)"); // why is this always true?
  // console.log(darkPreference);

  //Theme is not switching to browser preference
  // React.useEffect(() => {
  //   let theme = localStorage.getItem("theme");
  //   if (theme === null) {
  //     setDarkState(darkPreference);
  //   } else {
  //     theme = theme === "true";
  //     setDarkState(theme);
  //   }
  // }, [darkPreference]);

  //Causes the button toggle to be stuck
  // if (
  //   window.matchMedia &&
  //   window.matchMedia("(prefers-color-scheme: dark)").matches
  // ) {
  //   darkMode = true;
  // }

  const [darkMode, setDarkMode] = React.useState(true);

  const lightTheme = createTheme({
    palette: {
      // primary: {
      //   main: "#6d62ff",
      // },
      background: {
        // default: "#f6f6f6",
      },
      action: {
        active: "#000000",
        // hover: "#6d62ff",
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      // primary: {
      //   main: "#6d62ff",
      // },
      background: {
        default: "#131212",
        // paper: "#303030",
        paper: "#222525",
      },
      text: {
        primary: "#ffffff",
      },
      action: {
        active: "#ffffff",
        //doesn't work - hover: "#6d62ff",
      },
    },
  });

  const gProjects = mainPage.games;
  const oProjects = mainPage.other;
  const hProjects = mainPage.hackathons;

  let social;

  if (darkMode) {
    social = "social-dark";
  } else {
    social = "social-light";
  }

  // const classes = useStyles();

  return (
    <div className="App">
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline>
          <div className="container">
            <div>
              <div className="site-title">
                <h1>Ben Caffee</h1>
              </div>
              <Grid container spacing={2} className="social-grid">
                <Grid item className={social}>
                  <a href="mailto:bncaffee@uw.edu">
                    <FaEnvelope />
                  </a>
                </Grid>
                <Grid item className={social}>
                  <a href="https://linkedin.com/in/bcaffee">
                    <IoLogoLinkedin />
                  </a>
                </Grid>
                <Grid item className={social}>
                  <a href="https://github.com/bcaffee">
                    <FaGithub />
                  </a>
                </Grid>
                <Tooltip title="Theme Toggle" placement="right-start">
                  <Paper>
                    <IconButton
                      // variant="contained"
                      size="medium"
                      // className={classes.themeButton}
                      // className="theme-button"
                      onClick={() => setDarkMode(!darkMode)}
                    >
                      {darkMode ? (
                        <FaSun className={social} />
                      ) : (
                        <FaMoon className={social} />
                      )}
                    </IconButton>
                  </Paper>
                </Tooltip>
              </Grid>

              <div className="introduction">
                <p>{mainPage.introductions[0]}</p>
                <p>{mainPage.introductions[1]}</p>
                <p>{mainPage.introductions[2]}</p>
              </div>
              {/* <Grid container spacing={10} className="skills-grid"> */}
              {/* <Grid item> */}
              {/* <h4 className="skill-titles">Skills</h4> */}
              {/* <div className="skills-note"> */}
              {/* (Sorted by proficiency in descending order */}
              {/* </div> */}
              {/* <div className="skills-note"> */}
              {/* relative to my overall level of experience) */}
              {/* </div> */}
              {/* <Grid container spacing={2}>
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
                </Grid> */}

              <Grid container spacing={2} className="projects-grid">
                <Grid item>
                  <h4>Games</h4>
                  <Grid container spacing={2} direction="column">
                    {Object.keys(gProjects).map((project) => (
                      <Grid item key={project}>
                        <ProjectCard project={gProjects[project]}></ProjectCard>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>

                <Grid item>
                  <h4>Other</h4>
                  <Grid container spacing={2} direction="column">
                    {Object.keys(oProjects).map((project) => (
                      <Grid item key={project}>
                        <ProjectCard project={oProjects[project]}></ProjectCard>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>

                <Grid item>
                  <h4>Hackathons</h4>
                  <Grid container spacing={2} direction="column">
                    {Object.keys(hProjects).map((project) => (
                      <Grid item key={project}>
                        <ProjectCard project={hProjects[project]}></ProjectCard>
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
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}
