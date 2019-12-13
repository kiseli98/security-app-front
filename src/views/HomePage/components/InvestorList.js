import React from 'react';
import RestApiCalls from 'views/utils/RestApiCalls';
import PropTypes from 'prop-types';
import GridContainer from "components/Grid/GridContainer.js";
import InvestorCard from "views/HomePage/components/InvestorCard.js"

import { withStyles } from '@material-ui/styles';

const styles = {
    container: {
        marginLeft: 'auto',
        marginRight: 'auto'
    }
};

class ProjectList extends React.Component{
    state = {
        loadedInvestors: []
    }

    componentDidMount(){
        RestApiCalls.loadTopInvestors()
        .then(loadedInvestors => this.setState({loadedInvestors}))
    }

    renderProjects(){
        console.log(this.state.loadedInvestors);
        return this.state.loadedInvestors.map( (investor,index) => (
            <InvestorCard  
                sm={7} lg={3}
                key={index}
                name={investor.name} 
                about={investor.about} 
                investedSum={investor.investedSum} 
                userImage={investor.userImage}
            />
        ));
    }
    render(){
        return (
            <div style={{backgroundColor:"#FAFAFA"}} >
                <div>
                    <h1><center>Our investors</center></h1>
                </div>
                <GridContainer justify="center">
                
                {this.renderProjects()}
                </GridContainer>
            </div>
        )
    }
}

  
ProjectList.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(ProjectList);