import React, { Component, Fragment } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import {
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavbarText,
} from "reactstrap";
import { logout } from "../actions/brandGlobal";
import { connect } from "react-redux";

class Menu1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: this.props.userInfo,
        };
    }

    //Handle Item
    handleitem = (e, path) => {
        this.props.logout();
        window.location.reload();
        this.props.history.push(path);
    };

    render() {
        const { userInfo } = this.state;
        return (
            <div>
                <ul className="nav nav-tabs bg-blue">
                    {userInfo.name ? (
                        <UncontrolledDropdown>
                            <DropdownToggle
                                tag="a"
                                data-toggle="dropdown"
                                className="nav-link dropdown-user-link"
                            >
                                <div className="user-nav d-sm-flex d-none">
                                    <span>
                                        Welcome,
                                        <strong style={{ color: "black" }}>
                                            <i>
                                                {userInfo && userInfo.name
                                                    ? userInfo.name
                                                    : "loading..."}
                                            </i>
                                        </strong>
                                    </span>
                                </div>
                            </DropdownToggle>
                            <DropdownMenu right>
                                {/* <NavLink
                                    to="/"
                                    exact
                                    className="nav-link"
                                    activeStyle={{ color: "red" }}
                                >
                                    <span className="align-middle">Edit Profile</span>
                                </NavLink> */}
                                <DropdownItem
                                    // tag={RRNavLink}
                                    // to={`/login`}
                                    onClick={(e) => this.handleitem(e, "/")}
                                >
                                    <span className="align-bottom">logout</span>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    ) : (
                            <UncontrolledDropdown>
                                <DropdownToggle
                                    tag="a"
                                    data-toggle="dropdown"
                                    className="nav-link dropdown-user-link"
                                >
                                    <div className="user-nav d-sm-flex d-none">
                                        <span>
                                            First Name :{" "}
                                            <strong style={{ color: "black" }}>
                                                <i>
                                                    {userInfo && userInfo.firstName
                                                        ? userInfo.firstName
                                                        : "loading..."}
                                                </i>
                                            </strong>
                                        </span>
                                        &nbsp;
                                        <span>
                                            Last Name :{" "}
                                            <strong style={{ color: "black" }}>
                                                {userInfo && userInfo.lastName
                                                    ? userInfo.lastName
                                                    : "loading..."}
                                            </strong>
                                        </span>
                                    </div>
                                </DropdownToggle>
                                <DropdownMenu right>
                                    {/* <NavLink
                                        to="/"
                                        exact
                                        className="nav-link"
                                        activeStyle={{ color: "red" }}
                                    >
                                        <span className="align-middle">Edit Profile</span>
                                    </NavLink> */}
                                    <DropdownItem
                                        // tag={RRNavLink}
                                        // to={`/login`}
                                        onClick={(e) => this.handleitem(e, "/")}
                                    >
                                        <span className="align-bottom">logout</span>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        )}
                </ul>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        userInfo: state.brandReducer.userInfo,
    };
};
const mapDispatchToProps = (dispatch) => {
    return { logout: () => dispatch(logout()), dispatch };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Menu1));