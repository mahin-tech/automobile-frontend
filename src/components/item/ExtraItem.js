import React from "react";
import {
    Card,
    Col,
    Row,
    Button,
    CardHeader,
    CardTitle,
    CardBody,
    Form,
    FormGroup,
    Table,
    Label,
    Input,
} from "reactstrap";

import { connect } from "react-redux";

class ExtraItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {},
            extraPrice: 0,
            total: 0,
            addItem: this.props.addItem,
        };
    }
    handleItem = (abc) => {
        this.setState({ extraPrice: abc.price }, () => {
            const total = +this.state.addItem.price + +this.state.extraPrice;

            this.setState({ total });
        });
    };
    handleClick = () => {
        let price = this.state.total;
        this.props.handleChild(price);
    };
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
    handleFormSubmit = () => { };
    render() {
        console.log("darta", this.props)
        const { addItem } = this.state;
        const { addExtraItem } = this.props;
        return (
            <Row>
                <Col sm="12">
                    <Card>
                        <CardHeader>Product Details</CardHeader>
                        <CardBody className="pt-2">
                            <Col sm="12">
                                <Table size="md" responsive bordered>
                                    <thead>
                                        <tr>
                                            <th>Product Name</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{addItem.productName}</td>
                                            <td>
                                                {addItem.price}&nbsp; INR
                                            </td>
                                            <td>{addItem.quantity}</td>
                                        </tr>
                                    </tbody>

                                    <thead className="pt-4">
                                        <tr>
                                            <th>Item Name</th>
                                            <th>Price</th>
                                            <th>Choose One</th>
                                        </tr>
                                    </thead>
                                    {addExtraItem &&
                                        addExtraItem.map((item, index) => {
                                            return (
                                                <tbody key={index}>
                                                    <tr>
                                                        <td>{item.itemName}</td>
                                                        <td>
                                                            {item.price}&nbsp; INR
                                                        </td>
                                                        <td>
                                                            <Input
                                                                className="ml-3"
                                                                type="radio"
                                                                name="radio"
                                                                onChange={() =>
                                                                    this.handleItem(item)
                                                                }
                                                            />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            );
                                        })}
                                </Table>
                            </Col>
                        </CardBody>
                        <div className="invoice-total-table">
                            <Row>
                                <Col sm="12">
                                    <Table responsive borderless>
                                        <tbody>
                                            <th className="text-right">Total</th>
                                            <tr>
                                                <td>
                                                    <div className="d-flex justify-content-between">
                                                        <Button
                                                            className="mr-1"
                                                            color="primary"
                                                            type="submit"
                                                            onClick={() => this.handleClick}
                                                        >
                                                            Add To Cart
                                                        </Button>
                                                        {this.state.total
                                                            ? this.state.total
                                                            : this.state.addItem.price}
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps)(ExtraItem);
