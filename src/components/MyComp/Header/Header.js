import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import navbarStyles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";
import Search from "@material-ui/icons/Search";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ProfileButton from "./ProfileButton";

const useNavbarStyles = makeStyles(navbarStyles);

export default function PageHeader(props) {
  const navbarClasses = useNavbarStyles();
  const {...rest} = props;
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Go Fund Me"
        leftLinks={
          <List className={navbarClasses.list}>
            <ListItem className={navbarClasses.listItem}>
              <CustomDropdown
                buttonText="Discover"
                buttonProps={{
                  className: navbarClasses.navLink,
                  color: "transparent"
                }}
                dropdownList={["Fundraisings", "Success stories"]}
              />
            </ListItem>
            <ListItem className={navbarClasses.listItem}>
              <CustomDropdown
                buttonText="Fundraise for"
                buttonProps={{
                  className: navbarClasses.navLink,
                  color: "transparent"
                }}
                dropdownList={[
                  "Medical",
                  "Sport",
                  "IT",
                  {divider: true},
                  "See All"
                ]}
              />
            </ListItem>
            <ListItem className={navbarClasses.listItem}>
              <Button
                href="#pablo"
                className={navbarClasses.navLink}
                onClick={e => e.preventDefault()}
                color="transparent"
              >
                Link
              </Button>
            </ListItem>
          </List>
        }
        rightLinks={
          <List className={navbarClasses.list}>
            <ListItem className={navbarClasses.listItem}>
              <CustomDropdown
                buttonText="How it works"
                dropdownHeader="HOW IT WORKS"
                buttonProps={{
                  className: navbarClasses.navLink,
                  color: "transparent"
                }}
                dropdownList={[
                  "How GoFundMe works",
                  "What is crowdfunding",
                  "Free fundraising",
                  {divider: true},
                  "Team fundraising",
                  "Fundraising tips",
                  "Fundraising ideas"
                ]}
              />
            </ListItem>
            <ListItem className={navbarClasses.listItem}>
              <CustomInput
                white
                id="navSearch"
                inputRootCustomClasses={navbarClasses.inputRootCustomClasses}
                formControlProps={{
                  className: navbarClasses.formControlSearch
                }}
                inputProps={{
                  placeholder: "Search...",
                  inputProps: {
                    "aria-label": "#555",
                    className: navbarClasses.searchInput
                  }
                }}
              />
              <Button justIcon size="sm" round color="white">
                <Search className={navbarClasses.searchIcon}/>
              </Button>
            </ListItem>
            <ListItem className={navbarClasses.listItem}>
              <ProfileButton/>
            </ListItem>
          </List>
        }
        fixed
        changeColorOnScroll={{
          height: 100,
          color: "info"
        }}
        {...rest}
      />
    </div>
  );
}
