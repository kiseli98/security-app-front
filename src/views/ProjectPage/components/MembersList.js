import React from 'react';
import RestApiCalls from 'views/utils/RestApiCalls';
import PropTypes from 'prop-types';
import GridContainer from "components/Grid/GridContainer.js";
import ProjectCard from "views/HomePage/components/ProjectCard.js"
import UserDemoRow from 'views/Components/elements/UserDemoRow';
import { withStyles } from '@material-ui/styles';
import Paginations from "components/Pagination/Pagination.js";

import GridItem from "components/Grid/GridItem.js";
import CardBody from "components/Card/CardBody.js";

import Card from "components/Card/Card.js";
import stylesProfilePage from "assets/jss/material-kit-react/views/profilePage.js";

const styles = {
    textCenter: {
        textAlign: "center"
      },
    backgroundColorContent: {
        backgroundColor:"#FAFAFA"
    },
    container: {
        marginLeft: 'auto',
        marginRight: 'auto'
    }
    ,
    ...stylesProfilePage
};

class MembersList extends React.Component{
    state = {
        currentPage:0,
        fetchingMembersAmount:3,
        loadedMembers : []
    }

    componentDidMount(){
        if(this.props.roleLevel == 3){
            RestApiCalls.loadProjectMembers(this.props.projectName)
            .then(loadedMembers  => this.setState({loadedMembers}))
        }

        if(this.props.roleLevel == 2){
            RestApiCalls.loadProjectMembers(this.props.projectName,"ACCEPTED")
            .then(loadedMembers  => this.setState({loadedMembers}))
        }
    }

    listMembers(component,page){
        if(page == "NEXT"){
            if( (component.state.currentPage + 1) * component.state.fetchingMembersAmount < component.state.loadedMembers.length + 3 ){
                component.setState({currentPage: component.state.currentPage + 1})
            }
        }
        if(page == "PREV"){
            if( (component.state.currentPage - 1) * component.state.fetchingMembersAmount >= 0 ){
                component.setState({currentPage: component.state.currentPage - 1})
            }
        }
        // alert(page);
    }

    renderMembers(){
        console.log(this.state.loadedMembers)
        
        return this.state.loadedMembers.slice(
            this.state.currentPage * this.state.fetchingMembersAmount,
            (this.state.currentPage + 1) * this.state.fetchingMembersAmount)
            .map( (member) => (
            <div>
            <UserDemoRow lg={12}
                key={member.name}
                projectName={this.props.projectName}
                roleLevel={this.props.roleLevel}
                name={member.name}
                status = {member.status}
                about={member.membershipScope}
                userImage={member.userImage}
                investedSum={member.investedSum}
            />
            <hr></hr>
            </div>
        ));
    }
    render(){
        const {classes} = this.props; 
        return (
            <GridContainer  justify="space-between" alignItems="center" direction="column">
                <GridItem lg={6}>
                    <Card className={classes.textCenter}>
                       <h1><strong>Our team</strong></h1>
                        <CardBody >
                            {this.renderMembers()}
                            <br/>
                            <Paginations
                                component = {this}
                                action = {this.listMembers}
                                pages={[
                                    { text: "PREV" },
                                    { text: "NEXT" }
                                ]}
                            color="info"
                            />
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        )
    }
}

  
MembersList.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(MembersList);