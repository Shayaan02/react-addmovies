import React, { Fragment } from "react";
import Modal from "../modal/modal";
class Signup extends React.Component {
  email = "";
  password = "";
  constructor(props) {
    super(props);
    this.state = {
      showmodal: false,
      titleTxt: "",
    };
  }

  submitForm = (e) => {
    e.preventDefault();
    const account = { email: this.email, password: this.password };
    const users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];
    let checkexist = false;
    for (const user of users) {
      if (user.email === this.email) {
        checkexist = true;
      }
    }
    if (checkexist) {
      this.setState({ showmodal: true, titleTxt: "User exists" });
    } else {
      users.push(account);
      console.log(users);
      localStorage.setItem("users", JSON.stringify(users));

      this.setState({ showmodal: true, titleTxt: "Welcome" });
    }
  };
  hideModal = () => {
    this.setState({ showmodal: false });
  };
  render() {
    return (
      <Fragment>
        <form onSubmit={this.submitForm}>
          <h2 className="text"> Sign Up!</h2>
          <div className="input-container">
            <div className="wrapper">
              <input
                onChange={(e) => (this.email = e.target.value)}
                type="email"
                placeholder="email"
                className="email-input"
              />
              <input
                onChange={(e) => (this.password = e.target.value)}
                type="password"
                placeholder="password"
                className="password-input"
              />
              <input type="submit" value="Submit" className="submit-button" />
              {this.state.showmodal && (
                <Modal
                  titleTxt={this.state.titleTxt}
                  btnText="Dismiss"
                  hideModal={this.hideModal}
                />
              )}
            </div>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default Signup;
