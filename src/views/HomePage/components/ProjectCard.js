import React from 'react';
import GridItem from "components/Grid/GridItem.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";

import Card from "components/Card/Card.js";
import { cardTitle } from "assets/jss/material-kit-react.js";
import { makeStyles } from "@material-ui/core/styles";
import stylesStandard from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";


const styles = {
    cardImage:{
        width: "100%", 
        display: "block"
    },
    cardTitle,
    textCenter: {
      textAlign: "center"
    },
    description: {
        height: "150px"
    },
    ...stylesStandard
};

const useStyles = makeStyles(styles);

export default function ProjectCard(props){
    const classes = useStyles();
    let progress = props.investedSum / props.targetSum * 100;
    if(progress > 100){ progress = 100; }  
    const {name, description, investedSum, targetSum, ...rest} = props;
    return (
        <GridItem {...rest}>
            <Card className={classes.textCenter}>
                <img src='http://localhost:8081/file/test.png' className={
                  classes.cardImage + " " +
                  classes.imgRounded 
                }></img>
                <CardBody >
                    <h4 className={classes.cardTitle}>{name.toUpperCase()}</h4>
                    <p className={classes.description}>{description}</p>
                    <h5><strong>${investedSum} raised</strong> of ${targetSum}</h5>
                    <CustomLinearProgress
                        variant="determinate"
                        color="success"
                        value={progress}
                    />
                    <Button color="primary">Detailed</Button>    
                </CardBody>
            </Card>
        </GridItem>
    )
}