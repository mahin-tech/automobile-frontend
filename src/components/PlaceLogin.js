import React from "react";
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Row,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
} from "reactstrap";
import { GoogleLogin } from "react-google-login";
import { Facebook } from "react-feather";
import FacebookLogin from "react-facebook-login";
import { NavLink } from "react-router-dom";
import { history } from "../history";
import {
    loginWithJWT,
    logInGoogle,
    logInFacebook,
} from "../actions/brandGlobal";
import { connect } from "react-redux";

class PlaceLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {},
            userInfo: this.props.userInfo,
        };
    }

    //handleInput
    handleInput = (event) => {
        event.persist();
        this.setState((prevState) => ({
            formData: {
                ...prevState.formData,
                [event.target.name]: event.target.value,
            },
        }));
    };

    //Handle Form Submit
    handleFormSubmit = () => {
        this.props.dispatch(loginWithJWT(this.state.formData));
    };

    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab,
            });
        }
    };

    //Response from Google
    responseSuccessGoogle = (abc) => {
        const tokenId = abc.tokenId;
        let obj = {
            tokenId: tokenId,
        };
        this.props.dispatch(logInGoogle(obj));
    };

    //Response From Facebook
    responseFacebook = (response) => {
        const userID = response.userID;
        const accessToken = response.accessToken;
        let obj = {
            userID: userID,
            accessToken: accessToken,
        };
        this.props.dispatch(logInFacebook(obj));
    };

    render() {
        const { userInfo } = this.state;

        return (
            <Row className="m-0 justify-content-center">
                <Col
                    sm="8"
                    xl="7"
                    lg="10"
                    md="8"
                    className="d-flex justify-content-center pt-4"
                >
                    {userInfo && userInfo ? (
                        <FormGroup>
                            <div>
                                You Already Logged Please{" "}
                                <NavLink to="/place" exact>
                                    Click Here
                                </NavLink>
                            </div>
                        </FormGroup>
                    ) : (
                            <Card className="rounded-0 mb-0 px-2">
                                <CardHeader>Login</CardHeader>
                                <CardBody>
                                    <Col sm="12">
                                        <Form
                                            onSubmit={(e) => {
                                                e.preventDefault();
                                                this.handleFormSubmit();
                                            }}
                                        >
                                            <Row>
                                                <Col sm="12">
                                                    <FormGroup>
                                                        <Label>Email</Label>
                                                        <Input
                                                            type="email"
                                                            placeholder="Email"
                                                            name="email"
                                                            onChange={this.handleInput}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col sm="12">
                                                    <FormGroup>
                                                        <Label>Password</Label>
                                                        <Input
                                                            type="password"
                                                            placeholder="Password"
                                                            name="password"
                                                            onChange={this.handleInput}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col sm="12">
                                                    <FormGroup>
                                                        <GoogleLogin
                                                            className="text-white bg-primary"
                                                            clientId="306922324712-u704i32658h1un3q1hotdn35i3dppo6h.apps.googleusercontent.com"
                                                            buttonText="Login with Google"
                                                            onSuccess={this.responseSuccessGoogle}
                                                            cookiePolicy={"single_host_origin"}
                                                        />
                                                    </FormGroup>
                                                </Col>

                                                <Col sm="12">
                                                    <FormGroup className="d-flex justify-content-between align-items-center">
                                                        <FacebookLogin
                                                            className="text-white bg-primary"
                                                            appId="3298788330231497"
                                                            size="small"
                                                            callback={this.responseFacebook}
                                                        />
                                                    </FormGroup>

                                                    <div className="d-flex justify-content-between">
                                                        <Button
                                                            color="primary"
                                                            outline
                                                            onClick={() => {
                                                                history.push("/register");
                                                            }}
                                                        >
                                                            Register
                                                        </Button>
                                                        <Button color="primary" type="submit">
                                                            Login
                                                        </Button>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </Col>
                                </CardBody>
                            </Card>
                        )}
                </Col>
            </Row>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        userInfo: state.brandReducer.userInfo,
    };
};
export default connect(mapStateToProps)(PlaceLogin);