import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import { SignInAndSignUp } from "./sigin-in-and-sign-up.styles";

const SignInAndSignUpPage = () => {
  return (
    <SignInAndSignUp>
      <SignIn />
      <SignUp />
    </SignInAndSignUp>
  );
};

export default SignInAndSignUpPage;
