import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import People from "@material-ui/icons/People";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import loginStyles from "assets/jss/material-kit-react/views/loginPage.js";
import typoStyles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useLoginStyles = makeStyles(loginStyles);
const useTypoStyles = makeStyles(typoStyles);

export default function SignIn(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const loginClasses = useLoginStyles();
  const typoClasses = useTypoStyles();
  return (
    <div className={loginClasses.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6}>
          <Card className={loginClasses[cardAnimaton]}>
            <form className={loginClasses.form}>
              <CardHeader
                color="info"
                className={loginClasses.cardHeader}
              >
                <h2 className={typoClasses.titleRegister}>Sign In</h2>
              </CardHeader>
              <CardBody>
                <CustomInput
                  labelText="Username"
                  id="username"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    required: true,
                    type: "text",
                    endAdornment: (
                      <InputAdornment position="end">
                        <People className={loginClasses.inputIconsColor}/>
                      </InputAdornment>
                    )
                  }}
                />
                <CustomInput
                  labelText="Password"
                  id="password"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    required: true,
                    type: "password",
                    endAdornment: (
                      <InputAdornment position="end">
                        <Icon className={loginClasses.inputIconsColor}>
                          lock_outline
                        </Icon>
                      </InputAdornment>
                    ),
                    autoComplete: "off"
                  }}
                />
              </CardBody>
              <CardFooter className={loginClasses.cardFooter}>
                <Button simple color="primary" size="lg">
                  Sign In
                </Button>
              </CardFooter>
              <CardFooter className={loginClasses.cardFooter}>
                <a
                  href="#"
                  className={loginClasses.a}
                  target="_self"
                >
                  Forgot Password
                </a>
              </CardFooter>
            </form>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
