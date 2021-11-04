import React from "react";
import GoogleButton from "react-google-button";
import { firebase } from "./firebase";
const SignIn = () => {
  const fire = () => {
    var google_provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(google_provider)
      .then((res) => {
        console.log(res.user.displayName);
      })
      .catch((err) => console.log(err));
  };
  return <GoogleButton onClick={fire} />;
};
export default SignIn;
