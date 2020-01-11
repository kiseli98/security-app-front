import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import navbarStyles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";
import profileImage from "assets/img/faces/avatar.jpg";

const useNavbarStyles = makeStyles(navbarStyles);

export default function ProfileButton(props) {
  const navbarClasses = useNavbarStyles();
  const {...rest} = props;
  return (
    <CustomDropdown
      left
      caret={false}
      hoverColor="black"
      dropdownHeader="Dropdown Header"
      buttonText={
        <img
          src={profileImage}
          className={navbarClasses.img}
          alt="profile"
        />
      }
      buttonProps={{
        className:
          navbarClasses.navLink + " " + navbarClasses.imageDropdownButton,
        color: "transparent"
      }}
      dropdownList={[
        "Me",
        "Settings and other stuff",
        "Sign out"
      ]}
    />
  );
}
