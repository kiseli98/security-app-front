import React,{ useState } from 'react';
import GridItem from "components/Grid/GridItem.js";
import CardBody from "components/Card/CardBody.js";

import Card from "components/Card/Card.js";
import { cardTitle } from "assets/jss/material-kit-react.js";
import { makeStyles } from "@material-ui/core/styles";
import stylesStandard from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import GridContainer from 'components/Grid/GridContainer';
import stylesProfilePage from "assets/jss/material-kit-react/views/profilePage.js";
import Button from "components/CustomButtons/Button.js";
import Badge from 'components/Badge/Badge.js';
import RestApiCalls from 'views/utils/RestApiCalls';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
const styles = {
    noPadding: { 
        padding: "0px" 
    },
    cardImage:{
        width: "100%", 
        // minHeight: "200px",
        // maxHeight: "300px",
        display: "block"
    },
    cardTitle,
    textCenter: {
      textAlign: "center"
    },
    description: {
        height: "150px"
    },
    ...stylesStandard,
    ...stylesProfilePage
};

const useStyles = makeStyles(styles);

class UserDemoRow extends React.Component{

    constructor(props){
        super(props);
        
        console.log("calling constrctor props" + props.status);
        this.state = {
            status: props.status
        }

        this.setAccepted = this.setAccepted.bind(this);
        this.setRejected = this.setRejected.bind(this);
        
    }

    setRejected(){
        this.setState({status:"REJECTED"});
        RestApiCalls.patchMember(this.props.projectName,this.props.name,"REJECTED");
    }

    setAccepted(){
        this.setState({status:"ACCEPTED"});
        RestApiCalls.patchMember(this.props.projectName,this.props.name,"ACCEPTED");
    }

    render(){
        const {classes,projectName,roleLevel,name, about, userImage, investedSum, ...rest} = this.props;
        
        return (
            <div>
                {
                 this.state == null ?
                 null :
                 <GridItem {...rest}>
                <Card >
                    <GridContainer>
                        <GridItem className={classes.noPadding} lg={4}>
                            <img src={userImage} className={
                            classes.cardImage + " " +
                            classes.imgRounded
                            }
                            alt=""></img>
                        </GridItem>
                        <GridItem lg={8}>
                            <h4 className={classes.cardTitle}>{name.toUpperCase()}</h4>
                            <p className={classes.description}>{about != "Investor" ? about : 
                                <h3>
                                    Invested : <strong> {investedSum} </strong>
                                </h3>
                            }</p>                            
                        </GridItem>
                    </GridContainer>
                </Card>
                {
                    
                    roleLevel == 3 ? 
                    <div>
                        {
                            this.state.status == "PENDING" ?
                            <Badge color="warning">pending</Badge> :
                            this.state.status == "ACCEPTED" ?
                            <Badge color="success">accepted</Badge> :
                            <Badge color="danger">rejected</Badge> 
                        }
                        <div>
                            { about == "Investor" || this.state.status == "REJECTED" ?
                                <Button color="danger" disabled>reject</Button> :
                                <Button color="danger" onClick={this.setRejected}>reject</Button>
                            }
                            {
                                this.state.status == "ACCEPTED" ? 
                                <Button color="success" disabled>accept</Button> :
                                <Button color="success" onClick={this.setAccepted}>accept</Button>
                            }
                        </div>
                    </div>
                    : null
                }
            </GridItem>
                
                } 
            </div>
        )
    }
}


  
UserDemoRow.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(UserDemoRow);