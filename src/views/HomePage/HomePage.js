import React from 'react';

import Carousel from "react-slick";
// material-ui components
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";
import styles from "assets/jss/material-kit-react/views/homePage.js";
import landingStyles from "assets/jss/material-kit-react/views/landingPage.js";
import loginStyles from "assets/jss/material-kit-react/views/loginPage.js";


// import RestApiCalls from 'views/utils/RestApiCalls';
import PageHeader from "components/MyComp/Header/Header.js";
import ProjectList from "views/HomePage/components/ProjectList";
import InvestorList from "views/HomePage/components/InvestorList";
import Button from "components/CustomButtons/Button.js";

import AboutUs from "views/HomePage/components/AboutUs";
import {makeStyles} from "@material-ui/core/styles";
import Parallax from "components/Parallax/Parallax.js";
import backImage from "assets/img/bg7.jpg";

const useLoginStyles = makeStyles(loginStyles);
const useStyles = makeStyles(styles);
const useLandingStyles = makeStyles(landingStyles);

function HomePage(props) {

  const loginClasses = useLoginStyles();
  const landingClasses = useLandingStyles();
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <div>
      <PageHeader/>
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={landingClasses.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={landingClasses.title}>Your Fundraising Starts With Us.</h1>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque accumsan tempor turpis, eu porttitor sapien volutpat ac. Vivamus sit amet feugiat neque. Praesent placerat aliquam justo non venenatis.
              </h4>
              <br />
              <Button
                color="primary"
                size="md"
                href="#"
                target="_blank"
              >
                Data Use Policy
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <GridContainer style={{paddingTop: '-100px'}} justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <Carousel {...settings}>
              <div>
                <img src={image1} alt="First slide" className="slick-image"/>
              </div>
              <div>
                <img src={image2} alt="Second slide" className="slick-image"/>
              </div>
              <div>
                <img src={image3} alt="Third slide" className="slick-image"/>
              </div>
            </Carousel>
          </Card>
        </GridItem>
        <AboutUs classes={classes}/>
        <ProjectList/>
        <InvestorList/>
      </GridContainer>
    </div>
  );
}

export default HomePage;
