import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../styles/Person.scss";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
function Person({ person }) {
  const navigate = useNavigate();
  const { profile_path, character, name, id } = person;
  const navigatetoPersonDetails = (id) => {
    navigate(`/person/${id}`);
  };
  return (
    <div className="person" key={id}>
      {profile_path ? (
        <LazyLoadImage
          className="person-img"
          onClick={() => navigatetoPersonDetails(id)}
          src={`https://image.tmdb.org/t/p/w400/${profile_path}`}
          alt=""
        />
      ) : (
        <div className="img" onClick={() => navigatetoPersonDetails(id)}>
          <PersonIcon />
        </div>
      )}
      <div>
        <span className="name">{name.substring(0, 8)}...</span>
        <br />
        <span>{character.substring(0, 8)}...</span>
      </div>
    </div>
  );
}

export default Person;
