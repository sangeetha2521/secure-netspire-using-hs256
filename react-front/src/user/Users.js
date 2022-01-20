import React, { Component } from "react";
import { list } from "./apiUser";
import DefaultProfile from "../images/avater.jpg";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import Layout from "../core/Layout";

class Users extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        list().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({ users: data });
            }
        });
    }

    renderUsers = users => (
        <div className="row">
            {users.map((user, i) => (
                <div className="card col-md-4 col-mb-4" key={i}>
                    <Fade top big>
                    <img
                        style={{ height: "400px", width: "400px" }}
                        className="img-thumbnail"
                        src={`${process.env.REACT_APP_API_URL}/user/photo/${
                            user._id
                        }`}
                        onError={i => (i.target.src = `${DefaultProfile}`)}
                        alt={user.name}
                    />
                            </Fade>

                    <div className="card-body bg-secondary">
                        <h2 className="card-title">{user.name}</h2>
                        
                        <Link
                            to={`/user/${user._id}`}
                            className="btn btn-raised btn-primary btn-sm"
                        >
                            View Profile
                        </Link>
                       
                    </div>
                </div>
            ))}
        </div>
    );

    render() {
        const { users } = this.state;
        return (
            <Layout
            title="Users"
            description="All users"
            className="container-fluid"
            >
            <div className="container">
                

                {this.renderUsers(users)}
            </div>
            </Layout>
        );
    }
}

export default Users;