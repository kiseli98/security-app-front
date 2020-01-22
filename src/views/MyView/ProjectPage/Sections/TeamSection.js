import React, {useEffect} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

import WorkSection from "./WorkSection.js";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";
import InvestorCard from "../../../HomePage/components/InvestorCard";
import RestApiCalls from "../../../utils/RestApiCalls";
import MembersList from 'views/ProjectPage/components/MembersList';
import JoiningForm from 'views/ProjectPage/components/JoiningForm';

const useStyles = makeStyles(styles);

export default function TeamSection(props) {
  const [loadedInvestors, setLoadedInvestors] = React.useState([]);

  useEffect(() => {
    RestApiCalls.loadTopInvestors().then(loadedInvestors =>
      setLoadedInvestors(loadedInvestors)
    );
  });


  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <GridContainer justify="center" align='center'>
      {
          props.roleLevel == 1 ?
              <WorkSection />
            :
            <div>
                    <h2 className={classes.title}>Here is our team</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses}/>
              </GridItem>
              <h4 className={classes.cardTitle}>
                Jane Doe
                <br/>
                <small className={classes.smallTitle}>Lawyer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Sed vitae orci vel odio sollicitudin molestie. Interdum et malesuada fames ac ante ipsum primis in
                  faucibus. Maecenas id mollis ipsum.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"}/>
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"}/>
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"}/>
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses}/>
              </GridItem>
              <h4 className={classes.cardTitle}>
                John Doe
                <br/>
                <small className={classes.smallTitle}>Designer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Aliquam faucibus gravida ultrices. Nulla felis lacus, varius et condimentum id, auctor eget nunc.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"}/>
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"}/>
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses}/>
              </GridItem>
              <h4 className={classes.cardTitle}>
                Marry Sue
                <br/>
                <small className={classes.smallTitle}>Manager</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Fusce elit mauris, ullamcorper ac tellus nec, sollicitudin tincidunt ligula. Maecenas accumsan erat
                  vel rutrum hendrerit. Aenean consectetur in urna at volutpat.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"}/>
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"}/>
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"}/>
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>

              <h2 className={classes.title}>Our Investors:</h2>
              <MembersList projectName={props.projectName} roleLevel={props.roleLevel}/>
            </div>
        }
      </GridContainer>
    </div>
  );
}
