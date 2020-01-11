import React from 'react';
import RestApiCalls from 'views/utils/RestApiCalls';
import PropTypes from 'prop-types';
import GridContainer from "components/Grid/GridContainer.js";
import ProjectCard from "views/HomePage/components/ProjectCard.js"

import { withStyles } from '@material-ui/styles';

const styles = {
    container: {
        marginLeft: 'auto',
        marginRight: 'auto'
    }
};

class ProjectList extends React.Component{
    state = {
        loadedProjects : []
    }

    componentDidMount(){
        RestApiCalls.loadProjects()
        .then(loadedProjects => this.setState({loadedProjects}))
    }

    renderProjects(){
        return this.state.loadedProjects.slice(0,3).map( (project,index) => (
            <ProjectCard  
                sm={7} lg={3}
                key={index}
                name={project.name} 
                description={project.description} 
                investedSum={project.investedSum} 
                targetSum={project.targetSum}/>
        ));
    }
    render(){
        // const { classes } = this.props;
        return (
            <GridContainer justify="center">
                {this.renderProjects()}
            </GridContainer>
        )
    }
}

  
ProjectList.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(ProjectList);