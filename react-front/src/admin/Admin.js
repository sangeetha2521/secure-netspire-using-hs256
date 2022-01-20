import React, { Component } from "react";
import Posts from "../post/Posts";
import Users from "../user/Users";
import { isAuthenticated } from "../auth";
import { Redirect } from "react-router-dom";
import Fade from 'react-reveal/Fade';

class Admin extends Component {
    state = {
        redirectToHome: false,
        user:[],
        posts:[]
    };

    componentDidMount() {
        if (isAuthenticated().user.role !== "admin") {
            this.setState({ redirectToHome: true });
        }
    }

    render( user,post) {
        if (this.state.redirectToHome) {
            return <Redirect to="/" />;
        }

        return (
            <div>
                <div className="jumbotron">
               
                    <h2>Admin Dashboard</h2>
                  
                    <p className="lead">Welcome !!</p>
                </div>
                
                <div className="container-fluid">
                    <div className="row">
                  
                        <div className="col-md-6">
                           
                            <h2>Posts</h2>
                            <hr />
                            <Fade left>
                            <Posts />
                            </Fade>
                        </div>
                       
                        <div className="col-md-6">
                            <h2>Users</h2>
                            <hr />
                            <Fade left>
                            <Users />
                            </Fade>
                        </div>
                    </div>
                </div>
               
            </div>
           
        );
    }
}

export default Admin;