import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import PageHeader from "components/MyComp/Header/Header.js";
// @material-ui/icons
import PropTypes from 'prop-types';
// core components
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import {infoColor} from "assets/jss/material-kit-react.js";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";

import Badge from 'components/Badge/Badge.js';
import badgeStyle from "assets/jss/material-kit-react/components/badgeStyle.js"
import {withStyles} from '@material-ui/styles';
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import ProjectName from 'views/ProjectPage/components/ProjectName';
import ProjectImages from 'views/ProjectPage/components/ProjectImages';
import MembersList from 'views/ProjectPage/components/MembersList';
import JoiningForm from 'views/ProjectPage/components/JoiningForm';

import UserDemo from 'views/Components/elements/UserDemo';
import RestApiCalls from 'views/utils/RestApiCalls';

const stylesProjectPage = {
  infoColor: {color: infoColor},
  bold: {fontWeight: "bold"},
  projectDescription: {
    minHeight: "200px",
    maxWidth: "600px",
    color: "#999",
    textAlign: "center !important"
  }
  ,
  categories: {
    display: "grid",
    width: "100%",
    gridTemplateColumn: "6fr 3fr"
  },
  buttons: {
    width: "70px"
  },
  ...styles,
  ...badgeStyle
}

class ProjectPage extends React.Component {
  state = {
    roleLevel: 1,
    images: [
      work1, work2, work3, work4
    ]
  }

  calculateDayDifference(strDate) {
    let currentDate = new Date();
    let date = new Date(strDate.replace("-", "/"));
    let timeDiff = currentDate - date.getTime();

    // To calculate the no. of days between two dates
    let days = timeDiff / (1000 * 3600 * 24);

    return Math.floor(days);
  }


  componentDidMount() {
    let projectName = this.props.match.params.projectName;

    RestApiCalls.getRoleForProject(projectName)
      .then(roleLevel => this.setState({roleLevel: roleLevel.role}));

    RestApiCalls.loadProject(projectName)
      .then(projectData => {
        let daysPassed = this.calculateDayDifference(projectData.creationDate);
        let daysRemaining = this.calculateDayDifference(projectData.targetDate);
        if (daysRemaining > 0) {
          daysRemaining = 0;
        }
        daysRemaining = Math.abs(daysRemaining);

        this.setState({
          projectData: {
            daysPassed,
            daysRemaining,
            ...projectData
          }
        });

        RestApiCalls.loadUser(projectData.owner)
          .then(userData => this.setState({userData}))
      });
  }

  render() {
    const {classes, ...rest} = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );

    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

    return (
      <div>
        <PageHeader/>
        <Parallax small filter image={require("assets/img/profile-bg.jpg")}/>
        <div className={classes.main + " " + classes.mainRaised}>
          <div>
            <GridContainer>
              <GridItem lg={12} sm={12}>
                <GridContainer>
                  <ProjectName lg={9} sm={8} space={2}>
                    {this.state.projectData ?
                      <h1>{this.state.projectData.name}</h1>
                      : null
                    }
                  </ProjectName>
                  <GridItem lg={3} sm={4}>
                    <br/>
                    {
                      this.state.roleLevel == 3 ?
                        <GridContainer justify="space-evenly">
                          <GridItem lg={1}>
                            <Button color="danger" className={classes.buttons}>delete</Button>
                          </GridItem>
                          <GridItem lg={1}>
                            <Button color="success" className={classes.buttons}>edit</Button>
                          </GridItem>
                          <GridItem lg={1}>
                            <Badge color="warning">pending</Badge>
                          </GridItem>
                        </GridContainer>
                        : null
                    }
                  </GridItem>
                </GridContainer>
              </GridItem>
            </GridContainer>
            <br/> <br/>
            <GridContainer justify="center" alignItems="center">
              <GridItem lg={1}/>
              <GridItem lg={5}>
                {
                  this.state.projectData ?
                    <div className={classes.projectDescription}>
                      <p>
                        {this.state.projectData.description}
                      </p>
                    </div> : null
                }
                <div>
                  {this.state.projectData ?
                    <div>
                      <h3>
                        Days passed <span className={classes.bold}>{this.state.projectData.daysPassed}</span>
                        <br/>
                        Days remaining <span
                        className={classes.infoColor + " " + classes.bold}>{this.state.projectData.daysRemaining}</span>
                      </h3>
                    </div>
                    : null
                  }
                </div>
                <ProjectImages images={this.state.images}/>

              </GridItem>
              <GridItem lg={6}>
                <GridContainer justify="flex-end">
                  {this.state.userData ?
                    <UserDemo lg={6}
                              name={this.state.userData.name}
                              userImage={this.state.userData.userImage}
                              about={this.state.userData.about}
                    /> : null}
                  <GridItem lg={1}/>
                </GridContainer>
              </GridItem>
            </GridContainer>
          </div>
          <div>
            <GridContainer justify="center" direction="column" alignItems="center">
              <div>
                {
                  this.state.projectData ?
                    <h2>
                                        <span className={classes.bold}>${this.state.projectData.investedSum} raised
                                        </span> of ${this.state.projectData.targetSum}
                    </h2> : null
                }
              </div>
              <div>
                <Button color="success"> Invest</Button>
              </div>
            </GridContainer>
          </div>
          <br/>
        </div>
        {
          this.state.roleLevel == 1 ?
            <GridContainer justify="center" alignItems="center">
              <JoiningForm props={this.props}/>
            </GridContainer>
            :
            <div>
              <MembersList projectName={this.props.match.params.projectName} roleLevel={this.state.roleLevel}/>
            </div>
        }
        <Footer/>
      </div>
    );
  }
}

ProjectPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(stylesProjectPage)(ProjectPage);