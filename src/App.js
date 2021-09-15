import React from "react";
import "./custom.css";
import { mainPage } from "./site-content.js";
import ProjectCard from "./ProjectCard";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  IconButton,
  Grid,
  CssBaseline,
  // useMediaQuery,
  Paper,
} from "@material-ui/core";
import { FaGithub, FaEnvelope, FaSun, FaMoon } from "react-icons/fa";

export default function App() {
  // const darkPreference = useMediaQuery("(prefers-color-scheme: dark)"); // why is this always true?
  // console.log(darkPreference);

  // React.useEffect(() => {
  //   var theme = localStorage.getItem("theme");
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

  // const theme = React.useMemo(
  //   () =>
  //     createTheme({
  //       palette: {
  //         type: darkMode ? "dark" : "light",
  //         // primary: {
  //         //   main: "#6d62ff",
  //         // },

  //         background: {
  //           paper: {
  //             light: '#efefef',
  //             dark: '#222525',
  //           },

  //           default: {
  //             // light: "#f6f6f6",
  //             // dark: "#131212",
  //           },
  //         },
  //       },
  //     }),
  //   [darkMode]
  // );

  const lightTheme = createTheme({
    palette: {
      background: {
        // default: "#f6f6f6",
        // paper: "#efefef",
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      // primary: {
      //   main:
      // },
      background: {
        default: "#131212",
        paper: "#222525",
      },
      text: {
        primary: "#ffffff",
      },
      action: {
        active: "#ffffff",
      },
      // button: {
      //   primary: "#ffffff",
      // },
      // overrides: {
      //   MuiButton: {
      //     primary: "#ffffff",
      //   },
      // },
    },
  });

  // const toggleDarkMode = async () => {
  //   localStorage.setItem("theme", !darkState);
  //   setDarkState(!darkState);
  // };

  // const darkTheme = theme(darkState);

  const gProjects = mainPage.games;
  const oProjects = mainPage.other;
  const hProjects = mainPage.hackathons;

  return (
    <div className="App">
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline>
          <div className="container">
            <div>
              <div className="site-title">
                <h1>Ben Caffee</h1>
              </div>
              <Paper className="dark-mode-button">
                <IconButton onClick={() => setDarkMode(!darkMode)}>
                  {darkMode ? <FaSun /> : <FaMoon />}
                </IconButton>
              </Paper>
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
                <IconButton onClick={() => setDarkMode(!darkMode)}>
                  {darkMode ? <FaSun /> : <FaMoon />}
                </IconButton>
              </Grid>

              <div className="introduction">
                <p>{mainPage.introductions[0]}</p>
                <p>{mainPage.introductions[1]}</p>
              </div>
              <Grid container spacing={10} className="skills-grid">
                <Grid item>
                  <h4 className="skill-titles">Skills</h4>
                  <div className="skills-note">
                    (Sorted by experience in descending order)
                  </div>
                  <Grid container spacing={2}>
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
                    (Skills I want to improve. Sorted by priority in descending
                    order)
                  </div>
                  <Grid container spacing={2}>
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
