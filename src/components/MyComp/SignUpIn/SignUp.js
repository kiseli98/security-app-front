import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
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
import RestApiCalls from "../../../views/utils/RestApiCalls";

const useLoginStyles = makeStyles(loginStyles);
const useTypoStyles = makeStyles(typoStyles);

export default function SignUp(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordRepeat, setPasswordRepeat] = React.useState("");
  const [email, setEmail] = React.useState("");

  let checkPasswordMatch = () => {
    return password !== passwordRepeat;
  };

  const setUsernameHandle = event => {
    setUsername(event.target.value);
  };

  const setPasswordHandle = event => {
    setPassword(event.target.value);
  };

  const setPasswordRepeatHandle = event => {
    setPasswordRepeat(event.target.value);
  };

  const setEmailHandle = event => {
    setEmail(event.target.value);
  };

  const register = () => {
    RestApiCalls.register(username, password, email).then(resp => {
      console.log(resp);
    });
  };


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
                <h2 className={typoClasses.titleRegister}>Sign Up</h2>
              </CardHeader>
              <CardBody>
                <CustomInput
                  labelText="Username"
                  id="username"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: setUsernameHandle,
                    required: true,
                    type: "text",
                    endAdornment: (
                      <InputAdornment position="end">
                        <People className={loginClasses.inputIconsColor}/>
                      </InputAdornment>
                    )
                  }}
                />
                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={6} lg={6}>
                    <CustomInput
                      labelText="First Name"
                      id="first"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        required: true,
                        type: "text"
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6} lg={6}>
                    <CustomInput
                      labelText="Last Name"
                      id="last"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        required: true,
                        type: "text"
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <CustomInput
                  labelText="Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: setEmailHandle,
                    type: "email",
                    required: true,
                    endAdornment: (
                      <InputAdornment position="end">
                        <Email className={loginClasses.inputIconsColor}/>
                      </InputAdornment>
                    )
                  }}
                />
                <div className={typoClasses.space50}/>
                <CustomInput
                  labelText="Password"
                  id="password"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: setPasswordHandle,
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
                <CustomInput
                  labelText="Confirm Password"
                  id="conf_password"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: setPasswordRepeatHandle,
                    required: true,
                    type: "password",
                    endAdornment: (
                      <InputAdornment position="end">
                        <Icon className="fas fa-check"></Icon>
                      </InputAdornment>
                    ),
                    autoComplete: "off"
                  }}
                />
              </CardBody>
              <CardFooter className={loginClasses.cardFooter}>
                <Button onClick={register} simple color="primary" size="lg" disabled={!checkPasswordMatch}>
                  Get started
                </Button>
              </CardFooter>
            </form>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
