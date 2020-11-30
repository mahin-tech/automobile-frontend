import React from "react";
import {
    CardBody,
    CardHeader,
    Card,
    Table,
    Button,
    Row,
    Col,
    FormGroup,
    Label,
    Input,
    CardTitle,
} from "reactstrap";
import { connect } from "react-redux";
import PlaceCart from "../components/PlaceCart"
import Payment from "../components/Payment"

class Place extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: this.props.userInfo,
            cartPrice: 0,
            paymentData: {},
        };
    }

    cartTotal = (price) => {
        this.setState({ cartPrice: price });
    };

    paymentData = (data) => {
        this.setState({ paymentData: data });
    };

    render() {
        const { userInfo, paymentData } = this.state;

        return (
            <Row>
                <Col md="6" sm="12">
                    <Card>
                        <CardHeader>
                            <div className="d-flex justify-content-between">
                                <CardTitle tag="h2">User Information</CardTitle>
                                <div className="d-flex flex-wrap flot-right">
                                    <Button
                                        className="add-new-btn"
                                        color="primary"
                                        onClick={() => this.props.history.push("/")}
                                        outline
                                    >
                                        <span className="align-middle">Back To Menu</span>
                                    </Button>
                                </div>
                            </div>
                        </CardHeader>
                        <CardBody>
                            {userInfo.name ? (
                                <Row>
                                    <Col sm="12">
                                        <FormGroup className="form-label-group position-relative has-icon-left">
                                            <Label>Name</Label>
                                            <Input
                                                type="text"
                                                name="name"
                                                readOnly
                                                value={
                                                    userInfo && userInfo.name
                                                        ? userInfo.name
                                                        : "loading..."
                                                }
                                            />
                                        </FormGroup>
                                    </Col>

                                    <Col sm="12">
                                        <FormGroup className="form-label-group position-relative has-icon-left">
                                            <Label>E-mail</Label>
                                            <Input
                                                type="email"
                                                name="email"
                                                readOnly
                                                value={
                                                    userInfo && userInfo.email
                                                        ? userInfo.email
                                                        : "loading..."
                                                }
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                            ) : (
                                    <Row>
                                        <Col md="6" sm="12">
                                            <FormGroup className="form-label-group position-relative has-icon-left">
                                                <Label>First Name</Label>
                                                <Input
                                                    type="text"
                                                    name="firstName"
                                                    readOnly
                                                    value={
                                                        userInfo && userInfo.firstName
                                                            ? userInfo.firstName
                                                            : "loading..."
                                                    }
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md="6" sm="12">
                                            <FormGroup className="form-label-group position-relative has-icon-left">
                                                <Label>Last Name</Label>
                                                <Input
                                                    type="text"
                                                    name="lastName"
                                                    readOnly
                                                    value={
                                                        userInfo && userInfo.lastName
                                                            ? userInfo.lastName
                                                            : "loading..."
                                                    }
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md="6" sm="12">
                                            <FormGroup className="form-label-group position-relative has-icon-left">
                                                <Label>E-mail</Label>
                                                <Input
                                                    type="email"
                                                    name="email"
                                                    readOnly
                                                    value={
                                                        userInfo && userInfo.email
                                                            ? userInfo.email
                                                            : "loading..."
                                                    }
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md="6" sm="12">
                                            <FormGroup className="form-label-group position-relative has-icon-left">
                                                <Label>PinCode</Label>
                                                <Input
                                                    type="number"
                                                    name="pinCode"
                                                    readOnly
                                                    value={
                                                        userInfo && userInfo.pinCode
                                                            ? userInfo.pinCode
                                                            : "loading..."
                                                    }
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col sm="12">
                                            <FormGroup className="form-label-group position-relative has-icon-left">
                                                <Label>Address</Label>
                                                <Input
                                                    type="textarea"
                                                    name="address"
                                                    readOnly
                                                    value={
                                                        userInfo && userInfo.address
                                                            ? userInfo.address
                                                            : "loading..."
                                                    }
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                )}
                        </CardBody>
                    </Card>
                </Col>

                <Col md="6" sm="12">
                    <PlaceCart
                        cartData={this.props.cartItem}
                        cartTotal={this.cartTotal}
                    />
                </Col>

                <Col md="6" sm="12">
                    <Payment
                        dispatch={this.props.dispatch}
                        userData={userInfo}
                        data={this.paymentData}
                        cartPrice={this.state.cartPrice}
                    />
                </Col>
                <Col md="6" sm="12">
                    <Table bordered>
                        <thead>
                            <tr>
                                <th>Transaction Id</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>{paymentData.transaction}</td>

                                <td>{paymentData.amount}&nbsp; INR</td>

                                <td>{paymentData.status}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        );
    }
}
//Once data are store in dispatch variable so whenever use it variable to call like this in below:
const mapStateToProps = (state) => {
    return {
        cartItem: state.brandReducer.data,
        userInfo: state.brandReducer.userInfo,
    };
};
export default connect(mapStateToProps)(Place);