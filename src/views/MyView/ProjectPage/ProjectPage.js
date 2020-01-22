import React, { useState, useEffect } from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import PageHeader from "components/MyComp/Header/Header.js";

// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";
import InvestorList from "../../HomePage/components/InvestorList";
import RestApiCalls from "../../utils/RestApiCalls";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

function calculateDayDifference(strDate) {
  let currentDate = new Date();
  let date = new Date(strDate.replace("-", "/"));
  let timeDiff = currentDate - date.getTime();

  // To calculate the no. of days between two dates
  let days = timeDiff / (1000 * 3600 * 24);

  return Math.floor(days);
}

export default function LandingPage(props) {
  let projectName = props.match.params.projectName;
  let [projectData, setProjectData ] = useState();
  let [userData, setUserData ] = useState();
  let [roleLevel, setRoleLevel ] = useState(1);
  
  useEffect(() => {
    RestApiCalls.getRoleForProject(projectName)
      .then(roleLevel => setRoleLevel(roleLevel.role));


    RestApiCalls.loadProject(projectName)
    .then(projectData => {
      let daysPassed = calculateDayDifference(projectData.creationDate);
      let daysRemaining = calculateDayDifference(projectData.targetDate);
      if (daysRemaining > 0) {
        daysRemaining = 0;
      }
      daysRemaining = Math.abs(daysRemaining);

      setProjectData({
          daysPassed,
          daysRemaining,
          ...projectData
      });

      RestApiCalls.loadUser(projectData.owner)
        .then(userData => setUserData({userData}))
    });
  }, []);

  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <PageHeader />
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>{projectName}</h1>
              <h4>
                Every project page needs a small description after the big bold
                title, that{"'"}s why we added this text here. Here is all the
                information that can create the first
                impression.
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      {/* {props.projectData ? */}
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProductSection projectData={projectData}/>
            <TeamSection projectName={projectName} roleLevel={roleLevel}/>
          </div>
        </div>
        {/* : null
      } */}
      
      <Footer />
    </div>
  );
}
