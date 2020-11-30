import React from "react";
import {
    Button,
    CardHeader,
    CardBody,
    Card,
    CardTitle,
    Row,
    Col,
    Form,
    FormGroup,
    CustomInput,
    Label,
    Input,
} from "reactstrap";
import { connect } from "react-redux";
import * as registerActions from "../actions/brandGlobal";
import { history } from "../history";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roles: this.props.roles,
            erroMsg: false,
            formData: {},
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
        this.props.dispatch(registerActions.RegUsers(this.state.formData)).then((res) => {
            if (!res.data) {
                <h3>Register Not Successfully</h3>
            } else {
                <h3>Register Successfully</h3>
                setTimeout(() => {
                    history.push("/");
                }, 3000);
            }
        }).catch((error) => {
            <h3>Register Not Successfully</h3>
        });
    };

    render() {
        return (
            <Row
                style={{
                    height: "100vh",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: 1500,
                }}
            >
                <Col md={6} lg={4}>
                    <Card
                        body
                        style={{
                            backgroundColor: "#c1c1c1",
                        }}
                    >
                        <Form
                            onSubmit={(e) => {
                                e.preventDefault();
                                this.handleFormSubmit();
                            }}
                        >
                            {/* <div className="text-center pb-4">
                                <img
                                    className="rounded"
                                    style={{ width: 60, height: 60, cursor: "pointer" }}
                                    alt="logo"
                                />
                            </div> */}
                            <Row>
                                <Col md="6" sm="12">
                                    <FormGroup className="form-label-group position-relative has-icon-left">
                                        <Label>First Name</Label>
                                        <strong className="text-danger">*</strong>
                                        <Input
                                            type="text"
                                            required
                                            placeholder="First Name"
                                            name="firstName"
                                            onChange={this.handleInput}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md="6" sm="12">
                                    <FormGroup className="form-label-group position-relative has-icon-left">
                                        <Label>Last Name</Label>
                                        <strong className="text-danger">*</strong>
                                        <Input
                                            type="text"
                                            required
                                            placeholder="Last Name"
                                            name="lastName"
                                            onChange={this.handleInput}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md="6" sm="12">
                                    <FormGroup className="form-label-group position-relative has-icon-left">
                                        <Label>Email</Label>
                                        <strong className="text-danger">*</strong>
                                        <Input
                                            type="email"
                                            required
                                            placeholder="Email"
                                            name="email"
                                            onChange={this.handleInput}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md="6" sm="12">
                                    <FormGroup className="form-label-group position-relative has-icon-left">
                                        <Label>Password</Label>
                                        <strong className="text-danger">*</strong>
                                        <Input
                                            type="password"
                                            required
                                            placeholder="Password"
                                            name="password"
                                            onChange={this.handleInput}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md="6" sm="12">
                                    <FormGroup className="form-label-group position-relative has-icon-left">
                                        <Label>Pin-Code</Label>
                                        <strong className="text-danger">*</strong>
                                        <Input
                                            type="number"
                                            required
                                            placeholder="Pin-Code"
                                            name="pinCode"
                                            onChange={this.handleInput}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md="6" sm="12">
                                    <FormGroup className="form-label-group position-relative has-icon-left">
                                        <Label>Mobile No.</Label>
                                        <strong className="text-danger">*</strong>
                                        <Input
                                            type="number"
                                            required
                                            placeholder="Mobile No."
                                            name="mobile"
                                            onChange={this.handleInput}
                                        />
                                    </FormGroup>
                                </Col>

                                <Col sm="12">
                                    <FormGroup className="form-label-group position-relative has-icon-left">
                                        <Label>Address</Label>
                                        <Input
                                            type="textarea"
                                            placeholder="Address"
                                            name="address"
                                            onChange={this.handleInput}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Button className="bg-dark border-0" block type="submit">
                                Register
                            </Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        //Once data are store in dispatch variable so whenever use it variable to call like this in below:
    };
};
export default connect(mapStateToProps)(Register);