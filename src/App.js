import React from "react";
import "./custom.css";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import {
  createTheme,
  /*makeStyles,*/
  ThemeProvider,
} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Paper, Card } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function App() {
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

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="container">
          <div id="test">
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
                <a href="mailto:bencaffeeofficial@gmail.com">
                  <FaEnvelope />
                </a>
              </Grid>
            </Grid>

            <div className="introduction-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              commodo euismod nisl, quis sollicitudin ex laoreet eu. Quisque
              sagittis nibh quam, ut efficitur elit interdum non. Cras libero
              leo, pharetra nec convallis non, tincidunt ut lectus. Sed non
              molestie enim. Mauris nec est ut lectus tempor auctor non eget
              sapien. Proin sit amet varius nunc. Curabitur erat massa,
              consectetur non vehicula ac, imperdiet non odio. Ut quis risus
              libero. Pellentesque risus nunc, dignissim eget leo et, placerat
              euismod justo. Aliquam blandit semper leo et facilisis. Nam dui
              risus, sollicitudin nec bibendum ac, consectetur facilisis nisi.
              Etiam vestibulum odio vel magna condimentum, eget consequat justo
              efficitur. Ut consectetur erat diam, in dignissim ligula commodo
              vel. Sed lacinia ante libero, vitae tincidunt libero viverra nec.
              Aenean lacinia dolor in ipsum accumsan, vitae dignissim eros
              eleifend. Vivamus blandit tempus nibh id sollicitudin. Etiam
              iaculis ligula id posuere tincidunt. Duis quam magna, viverra sed
              metus et, volutpat iaculis justo. Vivamus a laoreet risus.
              Phasellus malesuada lacinia libero, vel vulputate mi tincidunt sit
              amet. Nullam venenatis justo lorem, eget hendrerit ex egestas
              quis. Donec dictum pretium lorem sed aliquet. Cras tincidunt,
              ligula id ultrices egestas, lorem elit scelerisque urna, id
              convallis nisl nibh sit amet velit.
            </div>
            <Grid container spacing={10} className="skills-grid">
              <Grid item>
                Skills
                <Grid container spacing={2} className="skills">
                  <ul>
                    <Grid item>
                      <li>Lorem ipsum</li>
                    </Grid>
                    <Grid item>
                      <li>Dolor sit amet</li>
                    </Grid>
                    <Grid item>
                      <li>Consectetur</li>
                    </Grid>
                  </ul>
                </Grid>
              </Grid>

              <Grid item>
                Skills to Improve
                <Grid container spacing={2} className="skills">
                  <ul>
                    <Grid item>
                      <li>Lorem ipsum</li>
                    </Grid>
                    <Grid item>
                      <li>Dolor sit amet</li>
                    </Grid>
                    <Grid item>
                      <li>Consectetur</li>
                    </Grid>
                  </ul>
                </Grid>
              </Grid>
            </Grid>
          </div>
          <div id="main-site-grid"></div>
        </div>
      </div>
    </ThemeProvider>

    //TODO: Display projects in gridlike way pulling from projects.json
  );
}

export default App;
