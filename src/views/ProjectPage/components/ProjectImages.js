import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-slick";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

export default function ProjectImages(props){
    const images = props.images;

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (            
        <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
                <Card>
                    <Carousel {...settings}>
                        { 
                            images ? images.map( imageSrc => 
                            <div>
                                <img 
                                    src={imageSrc}
                                    alt="First slide"
                                    className="slick-image"
                                />
                            </div>) 
                        : null }

                    </Carousel>
                </Card>
            </GridItem>
        </GridContainer>
    )
}