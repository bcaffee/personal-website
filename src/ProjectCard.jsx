import React from "react";
import "./custom.css";
import ProjectModal from "./ProjectModal";
// import ImageListModal from "./ImageListModal";
// import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
} from "@material-ui/core";
// import GitHubIcon from "@material-ui/icons/GitHub";
import { FaGithub } from "react-icons/fa";

import ReactHtmlParser from "react-html-parser";

export default function ProjectCard({ project }) {
  return (
    <div>
      <Card className="root-object">
        {/* <ImageListModal imgs={project.imgs} /> */}
        <CardActionArea>
          <CardMedia
            image={project.thumbnailImg}
            component="img"
            // className="p-card-img"
          />
        </CardActionArea>
        <CardContent>
          <Typography className="p-grid-card" gutterBottom variant="h5">
            {project.title}
          </Typography>
          <Typography>{ReactHtmlParser(project.thumbnailDesc)}</Typography>
        </CardContent>

        <Grid container direction="row" justifyContent="center">
          <Grid item>
            {project.git.length > 0 && (
              // <IconButton
              //   onClick={function click() {
              //     window.open(project.git);
              //   }}
              // >
              //   <GitHubIcon />
              // </IconButton>

              <IconButton>
                <a href={project.git}>
                  <FaGithub />
                </a>
              </IconButton>
            )}
          </Grid>
          <Grid item>
            <ProjectModal project={project} />
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}

export { ProjectCard };
