import React from 'react';
import GridItem from "components/Grid/GridItem.js";
import CardBody from "components/Card/CardBody.js";

import Card from "components/Card/Card.js";
import { cardTitle } from "assets/jss/material-kit-react.js";
import { makeStyles } from "@material-ui/core/styles";
import stylesStandard from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";


const styles = {
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
    ...stylesStandard
};

const useStyles = makeStyles(styles);

export default function UserDemo(props){
    const classes = useStyles();

    const {name, about, userImage, investedSum, ...rest} = props;
    
    return (
        <GridItem {...rest}>
            <Card className={classes.textCenter}>
                <img src={userImage} className={
                classes.cardImage + " " +
                classes.imgRounded
                }
                alt=""></img>
                <CardBody >
                    <h4 className={classes.cardTitle}>{name.toUpperCase()}</h4>
                    <p className={classes.description}>{about}</p>
                    
                    {/* <Button color="primary">Detailed</Button>     */}
                </CardBody>
            </Card>
        </GridItem>
    )
}