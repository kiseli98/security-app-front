import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import Carousel from "react-slick";
import Card from "../../../../components/Card/Card";
import CustomLinearProgress from "../../../../components/CustomLinearProgress/CustomLinearProgress";
import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor
} from "assets/jss/material-kit-react.js";


import badgeStyle from "assets/jss/material-kit-react/components/badgeStyle.js"
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true
};

const useStyles = makeStyles(
  {
    bold: {fontWeight: "bold"},
    infoColor: infoColor,
    ...styles
  }
);

export default function ProductSection(props) {
  const classes = useStyles();
  let progress = 0;
  if(props.projectData){
    progress = props.projectData.investedSum / props.projectData.targetSum * 100;
    if(progress > 100){ progress = 100; } 
  }

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk our project</h2>
          <h5 className={classes.description}>
            {props.projectData ? props.projectData.description : null }
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Feature 1"
              description="In hac habitasse platea dictumst. Cras eget posuere tortor. Donec vulputate vitae elit ut malesuada. Fusce elit mauris, ullamcorper ac tellus nec, sollicitudin tincidunt ligula."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Feature 2"
              description="Vivamus lacinia ut nisi eu fermentum. Nam facilisis venenatis diam nec faucibus. Vivamus mattis elit vel enim euismod, eget imperdiet leo finibus. "
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Feature 3"
              description="Phasellus a neque ut felis lacinia aliquam. Proin dictum porta enim ut malesuada."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt="First slide" className="slick-image"/>
                </div>
                <div>
                  <img
                    src={image2}
                    alt="Second slide"
                    className="slick-image"
                  />
                </div>
                <div>
                  <img src={image3} alt="Third slide" className="slick-image"/>
                </div>
              </Carousel>
            </Card>
          </GridItem>
          <GridItem justify="center" style={{color: "#000"}}>
            {props.projectData ?
              <div>
                <h3>
                  Days passed <span className={classes.bold}>{props.projectData.daysPassed}</span>
                  <br/>
                  Days remaining <span
                  className={classes.infoColor + " " + classes.bold}>{props.projectData.daysRemaining}</span>
                </h3>
              </div>
              : null
            }
          </GridItem>

          <GridItem xs={12} sm={12} md={12}>
            <h2 style={{color: "#000"}}>
              {props.projectData ?
                <div>
                  <span style={{fontWeight: "bold"}}>
                    ${props.projectData.investedSum} raised 
                  </span>
                    of ${props.projectData.targetSum}
                </div>
                : null }
              </h2>

            <CustomLinearProgress
              variant="determinate"
              color="info"
              value={progress}
            />
            <div>
              <Button color="success"> Invest</Button>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
