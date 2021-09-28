import React from "react";
import "./custom.css";
import { mainPage } from "./site-content.js";
import ProjectCard from "./ProjectCard";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  IconButton,
  Grid,
  CssBaseline,
  Tooltip,
  // useMediaQuery,
  // Paper,
} from "@material-ui/core";
import { FaGithub, FaEnvelope, FaSun, FaMoon } from "react-icons/fa";

export default function App() {
  // const darkPreference = useMediaQuery("(prefers-color-scheme: dark)"); // why is this always true?
  // console.log(darkPreference);

  //Theme is not switching to browser preference
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

  /* TODOS:
1. Add P57 and personal website modal info
2. Fix mobile project grid width
3. Clean up/refactor/modularize App.js
4. Remove purple from CSS and add to primary color for theme provider (change all headings to Typography). Experiment more with button hovering.
5. Fix ImageListModal and align="stretch" bug
6. Remember in local storage (when refreshing) about dark/light mode and attempt to get preference for theme working.
7. Experiment with dark mode card paper elevation with "light" shadow
*/

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

  var social;

  if (darkMode) {
    social = "social-dark";
  } else {
    social = "social-light";
  }

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
                  <a href="https://github.com/bcaffee">
                    <FaGithub />
                  </a>
                </Grid>
                <Grid item className={social}>
                  <a href="mailto:bncaffee@uw.edu">
                    <FaEnvelope />
                  </a>
                </Grid>
                {/* <Paper className="dark-mode-button"> */}
                <Tooltip title="Theme Toggle" placement="right-start">
                  <IconButton onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <FaSun /> : <FaMoon />}
                  </IconButton>
                </Tooltip>
                {/* </Paper> */}
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
                  <h4>Experiences</h4>
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
