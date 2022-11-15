import { Fragment, useEffect } from "react";
import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
const Movie = () => {
  const [removeItem, setRemoveItem] = useState(true)
  const [list, setList] = useState(
    localStorage.getItem("movies")
      ? JSON.parse(localStorage.getItem("movies"))
      : []
  );

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state) {
      setList((list) => [...list]);
    }
  }, [location.state]);

  const movieOnClick = (value) => {
    console.log(value);
    navigate(value.movieName, {
      state: { movieName: value, movieDescription: value, subTitle: value },
    });
  };

  return (
    <Fragment>
      <div className="list-container">
        {list.map((value) => {
          return (
            <div className="div-container" onClick={(e) => movieOnClick(value)}>
              <h1 className="name"> {value.movieName} </h1>
              <p className="name"> {value.subTitle} </p>
           
            </div>
          );
        })}
        <NavLink to="/addMovie">
          <button> Add Movie </button>
        </NavLink> 

      </div>
    </Fragment>
  );
};

export default Movie;
