import React from 'react';

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CardBody from "components/Card/CardBody.js";

import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import { cardTitle } from "assets/jss/material-kit-react.js";
import { makeStyles } from "@material-ui/core/styles";
import stylesStandard from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import RestApiCalls from 'views/utils/RestApiCalls';

const styles = {
    membershipScope:{
        minHeight: "200px", 
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

export default function JoiningForm(props){
    const {projectName, ...rest} = props;
    function joinProject(){
        RestApiCalls.joinProject(projectName);
    }

    const classes = useStyles();

    return (
        <GridContainer lg={12} xs={12} sm={12} {...rest}>
            <Card  className={classes.textCenter}>
                <CardBody >
                    <h2>
                        Joining request
                    </h2>
                    {/* <GridItem lg={12}> */}
                        <CustomInput
                            classes={classes.membershipScope}
                            id="disabled"
                            labelText= "Describe why do you want to join this project"
                                
                            inputProps={{
                                multiline: true,
                                rows: 10
                            }}
                            formControlProps={{
                                fullWidth: true
                            }}
                        />
                    {/* </GridItem> */}
                    <Button onClick={joinProject} color="primary">join</Button>    
                </CardBody>
            </Card>
        </GridContainer>
    )
}