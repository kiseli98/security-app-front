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
// import RestApiCalls from 'views/utils/RestApiCalls';
import ProjectList from 'views/HomePage/components/ProjectList';
import InvestorList from 'views/HomePage/components/InvestorList';

import AboutUs from 'views/HomePage/components/AboutUs';
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from '@material-ui/styles';

function HomePage(props) {

    const useStyles = makeStyles(styles);
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
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <Card>
                        <Carousel {...settings}>
                            <div>
                                <img
                                    src={image1}
                                    alt="First slide"
                                    className="slick-image"
                                />
                            </div>
                            <div>
                                <img
                                    src={image2}
                                    alt="Second slide"
                                    className="slick-image"
                                />
                            </div>
                            <div>
                                <img
                                    src={image3}
                                    alt="Third slide"
                                    className="slick-image"
                                />
                            </div>
                        </Carousel>
                    </Card>
                </GridItem>
            </GridContainer>
            <AboutUs classes={classes}/>
            <ProjectList/>
            <InvestorList/>
        </div>
    );
}


export default HomePage;