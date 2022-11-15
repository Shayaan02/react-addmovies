import { Fragment } from "react";
import Login from "../../components/login/login";
import Signup from "../../components/signup/signup";

const Profile = () => {
  return (
    <Fragment>
      <Signup />
      <Login />
    </Fragment>
  );
};

export default Profile;
