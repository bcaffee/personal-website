import React from "react";
import "./custom.css";
import { mainPage } from "./site-content.js";
import ProjectCard from "./ProjectCard";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  IconButton,
  /*Typography,*/
  Grid,
  CssBaseline,
  useMediaQuery,
} from "@material-ui/core";
import { FaGithub, FaEnvelope, FaSun, FaMoon } from "react-icons/fa";
//FaRegMoon, FaRegSun, RiSunFill, RiMoonFill, CgDarkMode, VscColorMode

export default function App() {
  const darkPreference = useMediaQuery("(prefers-color-scheme: dark)");

  React.useEffect(() => {
    var theme = localStorage.getItem("theme");
    if (theme === null) {
      setDarkState(darkPreference);
    } else {
      theme = theme === "true";
      setDarkState(theme);
    }
  }, [darkPreference]);

  const [darkState, setDarkState] = React.useState(false);

  const theme = (state) =>
    createTheme(
      {
        palette: {
          type: state ? "dark" : "light",
          // background: { paper: "#F3F3F7" },
          primary: { main: "#6d62ff" },
          contrastThreshold: 3,
          tonalOffset: 0.2,
        },
      },
      [darkPreference]
    );

  // const theme = React.useMemo(
  //   () =>
  //     createTheme({
  //       palette: {
  //         type: prefersDarkMode ? "dark" : "light",
  //         primary: {
  //           main: "#6d62ff",
  //           //project card and modal
  //           light: "#efefef",
  //           dark: "#222525",
  //           //contrastText:
  //         },
  //         background: {
  //           light: "#f6f6f6",
  //           dark: "#131212",
  //         },

  //         /*
  //         A higher value for "tonalOffset" will make calculated values for "light" lighter, and "dark" darker.
  //         A higher value for "contrastThreshold" increases the point at which a background color is considered
  //         light, and given a dark "contrastText".
  //         */
  //         contrastThreshold: 3,
  //         tonalOffset: 0.2,
  //       },
  //     }),
  //   [prefersDarkMode]
  // );

  const darkTheme = theme(darkState);

  const toggleDarkMode = async () => {
    localStorage.setItem("theme", !darkState);
    setDarkState(!darkState);
  };

  const gProjects = mainPage.games;
  const oProjects = mainPage.other;
  const hProjects = mainPage.hackathons;

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline>
          <div className="container">
            <div>
              <div className="site-title" color="primary">
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

                <Grid item>
                  <IconButton
                    className="dark-mode-button"
                    onClick={toggleDarkMode}
                  >
                    {console.log(darkTheme)}
                    {darkTheme ? <FaSun /> : <FaMoon />}
                  </IconButton>
                </Grid>
              </Grid>

              <div className="introduction">
                <p>{mainPage.introductions[0]}</p>
                <p>{mainPage.introductions[1]}</p>
              </div>
              <Grid container spacing={5} className="skills-grid">
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
