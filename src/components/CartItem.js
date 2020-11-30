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
    Modal,
    ModalBody,
    ModalHeader
} from "reactstrap";
import { Minus, Plus, Trash } from "react-feather";
import PlaceLogin from '../components/PlaceLogin'
import * as globalActions from '../actions/brandGlobal'

class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: this.props.addItem1,
            prevPrice: 0,
            price: 0,
            total: 0,
            updateData: [],
            showModal: false
        };
    }

    //Handle the Increment Quantity
    handleInc = (i, index) => {
        let obj = {
            productId: i._id,
            quantity: i.quantity,
            price: i.price,
        };
        this.props
            .dispatch(globalActions.getIncProduct(i._id, obj))
            .then((res) => {
                let data1 = res.data.updateProduct;
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

    //Handle the Decrement Quantity
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
                        let data1 = res.data.updateProduct;
                        data1.price = this.state.prevPrice;

                        this.state.cart.map((item, index) => {
                            if (item._id === data1._id) {
                                this.state.cart.splice(index, 1, data1);
                                let cart = this.state.cart;
                                let total = cart.reduce(
                                    (totalitem, item) => +totalitem + + item.price,
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

    //Remove the particular Item
    handleDel = (item) => {
        this.props.dispatch(globalActions.removeParticularItem(item));
        window.location.reload();
    };

    //Remove the all the item
    handleRemove = (e) => {
        e.preventDefault();
        this.props.removeItem();
    };

    toggleModal = () => {
        this.setState((prevState) => ({
            showModal: !prevState.showModal,
        }));
    }

    render() {
        let price = this.state.cart;
        let total1 = price && price.reduce((totalitem, item) => +totalitem + +item.price, 0);
        return (
            <Card>
                <CardHeader>
                    <CardTitle tag="h5">Order Summary</CardTitle>
                </CardHeader>
                <CardBody>
                    <Table bordered>
                        <thead>
                            <tr>
                                <th>Remove Item</th>
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
                                            <td>
                                                <div className="d-flex justify-content-start">
                                                    <Button
                                                        className="mr-1"
                                                        color="primary"
                                                        type="submit"
                                                        onClick={() => this.handleDel(i)}
                                                    >
                                                        <Trash size={15} />
                                                    </Button>
                                                </div>
                                            </td>
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
                        <Col sm="12">
                            <Table responsive borderless>
                                <tbody>
                                    <tr>
                                        <th className="text-right">Total</th>
                                    </tr>
                                    <tr>
                                        <td className="text-right">
                                            {this.state.total ? this.state.total : total1}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex justify-content-between">
                                                <Button
                                                    className="mr-1"
                                                    color="primary"
                                                    type="submit"
                                                    onClick={(e) => this.handleRemove(e)}
                                                >
                                                    Remove All
                                                </Button>
                                                {this.state.cart.length > 0 ? (
                                                    <Button
                                                        className="mr-1"
                                                        color="primary"
                                                        type="submit"
                                                        onClick={() => this.toggleModal()}
                                                    >
                                                        Place Order
                                                    </Button>
                                                ) : (
                                                        "No Place the order"
                                                    )}
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </div>
                <Modal
                    isOpen={this.state.showModal}
                    toggle={this.toggleModal}
                    className="modal-dialog-centered modal-lg"
                >
                    <ModalHeader toggle={this.toggleModal} className="bg-primary">
                        Welcome back, please login to your account
                    </ModalHeader>
                    <ModalBody>
                        <PlaceLogin />
                    </ModalBody>
                </Modal>
            </Card>
        );
    }
}

export default CartItem;