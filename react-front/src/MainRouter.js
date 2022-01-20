import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./core/Home";
import Menu from "./core/Menu";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Profile from "./user/Profile";
import Users from "./user/Users";
import EditProfile from "./user/EditProfile";
import FindPeople from "./user/FindPeople";
import NewPost from "./post/NewPost";
import EditPost from "./post/EditPost";
import SinglePost from "./post/SinglePost";
import PrivateRoute from "./auth/PrivateRoute";
import ForgotPassword from "./user/ForgotPassword";
import ResetPassword from "./user/ResetPassword";
import Admin from "./admin/Admin";
import Business from "./admin/business";
import AddCategory from "./post/AddCategory";
import AddProduct from "./post/AddProduct";
import Products from "./post/Home";
import Shop from "./post/Shop";
import UserDash from'./admin/UserDash.js';
import Product from"./post/Product";
import Cart from"./post/Cart";
import Orders from "./post/Orders";
import ManageProducts from './post/ManageProducts';
import UpdateProduct from './post/UpdateProduct';
import UpdateCategory from './post/UpdateCategory';
import bill from'./post/bill';
const MainRouter = () => (
    <div>
        <Menu />
        <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute exact path="/admin" component={Admin} />
            <PrivateRoute exact path="/dashboard" component={Business} />
            <PrivateRoute exact path="/UserDash" component={UserDash} />
            <PrivateRoute exact path="/cart" component={Cart} />
            <PrivateRoute exact path="/create/category" component={AddCategory} />
            <PrivateRoute exact path="/product/create" component={AddProduct} />
            <PrivateRoute exact path="/product/:productId" component={Product} />
            <PrivateRoute exact path="/products" component={Products} />
            <PrivateRoute exact path="/shop" component={Shop} />
            <PrivateRoute path="/admin/products" exact component={ManageProducts} />
            <PrivateRoute exact path="/admin/orders" component={Orders} />
            <PrivateRoute exact path="/bill" component={bill} />
            <PrivateRoute path="/admin/product/update/:productId" exact component={UpdateProduct} />
                <PrivateRoute path="/admin/category/update/:categoryId" exact component={UpdateCategory} />


            <Route exact path="/forgot-password" component={ForgotPassword} />
            <Route
                exact
                path="/reset-password/:resetPasswordToken"
                component={ResetPassword}
            />
            <PrivateRoute exact path="/post/create" component={NewPost} />
            <Route exact path="/post/:postId" component={SinglePost} />
            <PrivateRoute
                exact
                path="/post/edit/:postId"
                component={EditPost}
            />
            <Route exact path="/users" component={Users} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signin" component={Signin} />
            <PrivateRoute
                exact
                path="/user/edit/:userId"
                component={EditProfile}
            />
            <PrivateRoute exact path="/findpeople" component={FindPeople} />
            <PrivateRoute exact path="/user/:userId" component={Profile} />
        </Switch>
    </div>
);

export default MainRouter;