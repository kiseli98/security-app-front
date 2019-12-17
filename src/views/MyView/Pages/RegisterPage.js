import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components
import PageHeader from "components/MyComp/Header/Header.js";
import SignUp from "components/MyComp/SignUpIn/SignUp.js";

import Footer from "components/Footer/Footer.js";

import loginStyles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";

const useLoginStyles = makeStyles(loginStyles);

export default function RegisterPage() {
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
        <SignUp />
        <Footer whiteFont />
      </div>
    </div>
  );
}
