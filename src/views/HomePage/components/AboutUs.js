import React from 'react';
import stylesStandard from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import workTogetherImage from "assets/img/workTogether.jpg";

const styles = {
    aboutContainer:{
        backgroundColor:"#FAFAFA"
    },
    image:{
        width: '100%'
    },
    ...stylesStandard
};

const useStyles = makeStyles(styles);

export default function AboutUs(props){
    const classes = useStyles();
    return (
        <GridContainer justify='center' className={classes.aboutContainer}>
            <GridItem sm={5} lg={4}>
                <img src={workTogetherImage} className={classes.image}></img>
            </GridItem>
            <GridItem sm={3} lg={3}>
                <h2>
                    <strong><a style={{textAlign:"center"}} href>JOIN StartProject Platform and</a></strong>
                </h2>

                <ul>
                    <li>Work with the team to create best product</li>
                    <li>Watch the progress and colaborate</li>
                    <li>Give a chanse to project on existence</li>    
                </ul>
                
            </GridItem>
        </GridContainer>
    );
}