import axios from "axios";
import "../styles/PersonImages.scss";
import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { fetchPersonImages } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
function PersonImages({ id, setImgPath, setOpenPersonImage }) {
  const dispatch = useDispatch();
  const imagesForPerson = useSelector((state) => state.imagesForPerson);
  const handleOpen = (path) => {
    setImgPath(path);
    setOpenPersonImage(true);
  };
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/person/${id}/images?api_key=${import.meta.env.VITE_REACT_APP_TMDB_KEY}`
      )
      .then((res) => {
        dispatch(fetchPersonImages(res.data));
      });
  }, []);
  return (
    <div className="photos-container">
     {imagesForPerson?.profiles?.length-1 !==0 &&  <h2>Photos</h2>}
      <div className="photos">
        {imagesForPerson.profiles?.slice(1, 15).map((e) => {
          return (
            <div className="single-img-container">
              {" "}
              <LazyLoadImage
                onClick={() => handleOpen(e.file_path)}
                src={`https://image.tmdb.org/t/p/w185///${e.file_path}`}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PersonImages;
