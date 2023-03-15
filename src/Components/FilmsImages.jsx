import React,{useState} from "react";
import "../styles/FilmsImages.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useSelector } from "react-redux";

function FilmsImages() {
  const [open , setOpen] = useState(false)
  const [path , setPath] = useState('')
  const handleClose = () => {
    setOpen(false)
    
  }
  const handleOpen = (path) => {
    setPath(path)
    setOpen(true)
  }
  const imagesForFilm = useSelector((state) => state.imagesForFilm);

  return (
    <div className="img-container">
      {imagesForFilm.map((e) => {
        return (
          <div className="single-img">
            <img className="img-2"
              src={`https://image.tmdb.org/t/p/w500/${e.file_path}`}
              alt=""
              onClick={() => handleOpen(e.file_path)}
            />
          
          </div>
        );
      })}
     {open && <div className='modal-container' > 
      <div>
        <button onClick={handleClose} className='button'>X</button>
        <div className="img-1">
      <LazyLoadImage
      // https://image.tmdb.org/t/p/original///6SB5j44aaQLudVzJzFLNvSN9ACr.jpg
              src={`https://image.tmdb.org/t/p/original///${path}`}
              alt=""
  
            />
            </div>
      </div>

    </div>}
       
    </div>
  );
}

export default FilmsImages;
