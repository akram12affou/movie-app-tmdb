import axios from "axios";
import "../styles/PersonImages.scss";
import React, { useEffect ,useState} from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { fetchPersonImages } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
function PersonImages({ id }) {
  const dispatch = useDispatch();
  const [openPersonImg,setOpenPersonImage] = useState(false)
  const REACT_APP_TMDB_KEY = "4a16a312cc25534aac7bab9f0901fa3b";
  const imagesForPerson = useSelector((state) => state.imagesForPerson);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/person/${id}/images?api_key=${REACT_APP_TMDB_KEY}`
      )
      .then((res) => {
        dispatch(fetchPersonImages(res.data));
      });
  }, []);
  return (
    <div className="photos-container">
      <h2>Photos</h2>
      <div className="photos">
        {imagesForPerson.profiles.slice(0, 15).map((e) => {
          return (
            <div className="single-img-container">
              {" "}
              <LazyLoadImage
                src={`https://image.tmdb.org/t/p/w185///${e.file_path}`}
                alt=""
              />
            </div>
          );
        })}
        {openPersonImg &&
        <div>
         <img src="" alt="" />
        </div>}
      </div>
    </div>
  );
}

export default PersonImages;