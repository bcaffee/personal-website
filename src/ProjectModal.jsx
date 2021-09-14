import React from "react";
import "./custom.css";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, IconButton, Paper, Backdrop, Fade } from "@material-ui/core";
import ReactHtmlParser from "react-html-parser";
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { FiMoreHorizontal } from "react-icons/fi";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    // backgroundColor: "#222525",
    fontFamily: "Raleway",
    // color: "#efefef",
    // border: "1px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0, 5, 1),
    marginTop: 200,
    marginBottom: 200,
    marginLeft: 400,
    marginRight: 400,
  },
}));

export default function ProjectModal({ project }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <FiMoreHorizontal className="p-icons" />
      </IconButton>
      <Modal
        aria-labelledby="title"
        aria-describedby="info"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Paper className={classes.paper}>
            <h2 id="title">{project.title}</h2>
            <p id="info">{ReactHtmlParser(project.modalInfo)}</p>
          </Paper>
        </Fade>
      </Modal>
    </div>
  );
}

export { ProjectModal };
