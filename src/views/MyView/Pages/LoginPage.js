import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components
import PageHeader from "components/MyComp/Header/Header.js";
import SignIn from "components/MyComp/SignUpIn/SignIn.js";

import Footer from "components/Footer/Footer.js";

import loginStyles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";

const useLoginStyles = makeStyles(loginStyles);

export default function LoginPage() {
  const loginClasses = useLoginStyles();
  return (
    <div>
      <PageHeader />
      <div
        className={loginClasses.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <SignIn />
        <Footer whiteFont />
      </div>
    </div>
  );
}
