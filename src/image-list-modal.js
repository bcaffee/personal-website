import React from "react";
import "./custom.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  Modal,
  Backdrop,
  Fade,
  CardActionArea,
  CardMedia,
  ImageList,
  ImageListItem,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: "nowrap",
    // Promote the list into its own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  img: {
    maxHeight: "275px",
  },
}));

export default function ImageListModal({ project }) {
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
      <CardActionArea onClick={handleOpen}>
        <CardMedia
          image={project.imgs[0]} //project.thumbnailImg
          component="img"
          // className={classes.img}
        />
      </CardActionArea>
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
          <div className={classes.root}>
            <ImageList className={classes.imageList} cols={2.5}>
              {project.imgs.map((item) => (
                <ImageListItem key={item.img}>
                  <img src={item.img} alt="" />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const itemData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

export { ImageListModal };
