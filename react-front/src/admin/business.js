import React from"react";
import { Link}from 'react-router-dom';
import { isAuthenticated } from "../auth";
import Layout from'../core/Layout';



const Dashboard=()=>{
    const {user:{_id,name,role}}=isAuthenticated()


    const adminLinks=()=>{
        return(

            <div className="card">
                <h4 className="card-header">Admin Links</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to="/create/category">
                     Create Category</Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link " to="/product/create">
                        Create Product
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link " to="/admin/orders">
                       
                       View Orders
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/admin/products">
                            Manage Products
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/bill">
                          Generate for Hard Copy Bill
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
    const adminInfo=()=>{

    
    return(
        
<div className="card mb-5">
<h3 className="card-header">user information</h3>
<ul className="list-group">
    <li className="list-group-item">{name}</li>
 
    <li className="list-group-item">
    {role === 1 ? "Admin" : "Registered User"}

    </li>

</ul>
</div>


    )
 
};


return(
    <Layout

    title="Dashboard"
    description={`Gud'day ${name}!`}
    className="container-fluid"
    >
        <div className="row">
            <div className="col-3">{adminLinks()}</div>
        <div className="col-9">
            {adminInfo()}
        </div>
        </div>
    </Layout>
)
};
export default Dashboard;