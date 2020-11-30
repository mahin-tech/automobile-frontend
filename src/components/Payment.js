import React from "react";
import DropIn from "braintree-web-drop-in-react";
import * as globalAction from '../actions/brandGlobal'
import { Button, Row, Col, Card, CardBody, CardHeader } from "reactstrap";

class Payment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clientToken: null,
            instance: {},
            userInfo: this.props.userData,
        };
    }

    componentDidMount = () => {
        const userId = this.state.userInfo._id;
        this.props.dispatch(globalAction.getToken(userId)).then((res) => {
            let clientToken = res.data.clientToken;
            this.setState({ clientToken });
        });
    };

    //Purchase Product
    onPurchase = () => {
        const userId = this.state.userInfo._id;
        this.state.instance.requestPaymentMethod().then((data) => {
            const nonce = data.nonce;
            const paymentData = {
                amount: this.props.cartPrice,
                paymentMethodNonce: nonce,
            };
            this.props
                .dispatch(globalAction.processPayment(userId, paymentData))
                .then((res) => {
                    const resData = res.data;
                    let obj = {
                        transaction: resData.transaction.id,
                        status: resData.transaction.status,
                        amount: resData.transaction.amount,
                    };
                    this.props.data(obj);
                });
        });
    };

    render() {
        return (
            <Row>
                <Col sm={{ size: 11, offset: 0 }}>
                    <Card>
                        <CardHeader>Payment</CardHeader>
                        <CardBody>
                            {this.state.clientToken !== null ? (
                                <div>
                                    <DropIn
                                        options={{
                                            authorization: this.state.clientToken,
                                        }}
                                        onInstance={(instance) =>
                                            (this.state.instance = instance)
                                        }
                                    />
                                    <Button
                                        className="btn btn-block btn-primary"
                                        onClick={() => this.onPurchase()}
                                    >
                                        Buy
                           </Button>
                                </div>
                            ) : (
                                    "loading.."
                                )}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default Payment;