import React from "react";
import {
    CardBody,
    CardHeader,
    Card,
    Button,
    Row,
    Col,
    Table,
    CardTitle,
} from "reactstrap";
import { Minus, Plus } from "react-feather";
import * as globalActions from '../../actions/brandGlobal'

class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: this.props.addItem1,
            prevPrice: 0,
            price: 0,
            total: 0,
            updateData: [],
        };
    }
    /*Handle the Increment Quantity*/
    handleInc = (i, index) => {
        let obj = {
            productId: i._id,
            quantity: i.quantity,
            price: i.price,
        };
        this.props
            .dispatch(globalActions.getIncProduct(i._id, obj))
            .then((res) => {
                let data1 = res.data;
                this.state.cart.map((item, index) => {
                    if (item._id === data1._id) {
                        this.state.cart.splice(index, 1, data1);
                        let cart = this.state.cart;
                        let total = cart.reduce(
                            (totalitem, item) => +totalitem + +item.price,
                            0
                        );
                        this.setState({ total });
                        this.setState({ cart });
                    }
                });
            });
    };
    /*Handle the Decrement Quantity*/
    handleDec = (item) => {
        this.setState(
            (prevState) => {
                return {
                    price: item.price,
                    prevPrice: prevState.price,
                };
            },
            () => {
                let obj = {
                    productId: item._id,
                    quantity: item.quantity,
                    price: this.state.price,
                };
                this.props
                    .dispatch(globalActions.getDecProduct(item._id, obj))
                    .then((res) => {
                        let data1 = res.data;
                        data1.price = this.state.prevPrice;

                        this.state.cart.map((item, index) => {
                            if (item._id === data1._id) {
                                this.state.cart.splice(index, 1, data1);
                                let cart = this.state.cart;
                                let total = cart.reduce(
                                    (totalitem, item) => +totalitem + +item.price,
                                    0
                                );
                                this.setState({ total });
                                this.setState({ cart });
                            }
                        });
                    });
            }
        );
    };

    render() {
        let price = this.state.cart;
        let total1 = price.reduce(
            (totalitem, item) => +totalitem + +item.price,
            0
        );
        return (
            <Card>
                <CardHeader>
                    <CardTitle tag="h5">Orders</CardTitle>
                </CardHeader>
                <CardBody>
                    <Table bordered>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Add</th>
                            </tr>
                        </thead>
                        {this.state.cart.length > 0
                            ? this.state.cart &&
                            this.state.cart.map((i, index) => {
                                return (
                                    <tbody key={index}>
                                        <tr>
                                            <td>{i.productName}</td>
                                            <td> {i.price} &nbsp; INR</td>
                                            <td> {i.quantity}</td>
                                            <td>
                                                <div className="d-flex justify-content-between">
                                                    <Button
                                                        className="mr-1"
                                                        color="primary"
                                                        type="submit"
                                                        onClick={() => this.handleDec(i)}
                                                    >
                                                        <Minus size={15} />
                                                    </Button>
                                                    <Button
                                                        className="mr-1"
                                                        color="primary"
                                                        type="submit"
                                                        onClick={() =>
                                                            this.handleInc(i, index)
                                                        }
                                                    >
                                                        <Plus size={15} />
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                );
                            })
                            : "No Products Found"}
                    </Table>
                </CardBody>
                <div className="invoice-total-table">
                    <Row>
                        <Col sm={{ size: 6, offset: 6 }}>
                            <Table responsive borderless>
                                <tbody>
                                    <tr>
                                        <th>TOTAL</th>
                                        <td>
                                            {this.state.total ? this.state.total : total1}
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </div>
            </Card>
        );
    }
}

export default CartItem;