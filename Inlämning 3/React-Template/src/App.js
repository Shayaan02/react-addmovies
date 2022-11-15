import React, { Fragment } from "react";
import { NavLink} from "react-router-dom";
const App = () => {



  return (
    <Fragment>
      <div className="button-container">
        <NavLink to="/addMovie">
          <button className="addMovie"> Add Movie</button>
        </NavLink>
      </div>
    </Fragment>
  );
};

export default App;
