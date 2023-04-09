import React, { useState } from "react";
import "../styles/FilmsImages.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function FilmsImages({ open, setOpen }) {
  const style = `body{
    height: 100%;
    overflow: hidden;

  }
  .single-img{
    opacity: 0.5;
  }
  `
  const [path, setPath] = useState("");
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = (path) => {
    setPath(path);
    setOpen(true);
  };
  const imagesForFilm = useSelector((state) => state.imagesForFilm);
  return (
    <motion.div className="img-container" 
    initial={{ y: 22, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
     >
      {imagesForFilm.map((e) => {
        return (
          <div className="single-img" onClick={() => open && setOpen(false)}>
            <img
              className="img-2"
              style={{ cursor: open && "context-menu" }}
              src={`https://image.tmdb.org/t/p/w500/${e.file_path}`}
              alt=""
              onClick={() => handleOpen(e.file_path)}
            />
          </div>
        );
      })}
      {open && (
        <motion.div className="modal-container"
        initial={{ y: 22, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}>
          <div>
            <button onClick={handleClose} className="button">
              <CloseRoundedIcon />
            </button>
            <div className="img-1">
              <LazyLoadImage
                src={`https://image.tmdb.org/t/p/original///${path}`}
                alt=""
              />
            </div>
          </div>
        </motion.div>
      )}
      {open && <style>{style}</style>}
    </motion.div>
  );
}

export default FilmsImages;
