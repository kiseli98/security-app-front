import React from 'react';

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

export default function ProjectName(props){
    const {space, lg, ...rest} = props;
    return (
        <GridItem lg={lg} {...rest}>
            <GridContainer>
                <GridItem lg={space}/>
                <GridItem lg={lg-space}>
                    {props.children}
                </GridItem>
            </GridContainer>
        </GridItem>
    )
}