import "./App.css";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

function App() {
  return (
    <div className="App">
      <div className="b-container">
        <div id="header">
          <div className="b-site-title">
            <h1>Ben Caffee</h1>
          </div>

          <Grid container spacing={2} className="b-social-row">
            <Grid item className="b-social-col">
              <a href="https://github.com/bcaffee">
                <FaGithub />
              </a>
            </Grid>

            <Grid item className="b-social-col">
              <a href="mailto:bencaffeeofficial@gmail.com">
                <FaEnvelope />
              </a>
            </Grid>
          </Grid>
        </div>
        <div id="main-site-grid"></div>
      </div>
    </div>
  );
}

export default App;
