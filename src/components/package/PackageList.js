import React from "react"
import {
    CardBody,
    CardHeader,
    Card,
    Button,
    Row,
    Col,
    Table,
    CardText,
    Input,
    CardLink,
    CardImg,
    Media,
    Collapse,
    CardTitle,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from "reactstrap";
import { connect } from 'react-redux'
import * as IMG from "../../config/imageConfig";
import * as globalActions from '../../actions/brandGlobal'
import ExtraItem from '../item/ExtraItem'
import Cart from '../cart/CartItem'

class PackageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brandId:
                this.props.location &&
                    this.props.location.state &&
                    this.props.location.state.brandId
                    ? this.props.location.state.brandId // you will get the edit Id here
                    : "",
            rowData: [],
            showModal: false,
            comboItem: [],
            item: [],
            arr: []
        };
    }

    componentDidMount = () => {
        this.props.dispatch(globalActions.getPackage(this.state.brandId)).then((res) => {
            const rowData = res.data.data.package
            this.setState({ rowData })
        })
    }

    toggleModal = (item) => {
        this.state.rowData &&
            this.state.rowData.map((item) =>
                this.setState({ item: item.extraItemDetails })
            );
        this.setState({ comboItem: item });
        this.setState((prevState) => ({
            showModal: !prevState.showModal,
        }));
    };

    handleChild = (price, name, quantity, id) => {
        let cart = {
            price: price,
            productName: name,
            quantity: quantity,
            _id: id,
        };

        let arr = this.state.arr;

        arr.push({
            ...cart,
            count: 1,
        });

        this.setState({ arr });
        this.toggleModal();
    };

    render() {
        return (
            <Row>
                <Col md="6" sm="12">
                    {this.state.rowData &&
                        this.state.rowData.map((i, index) => {
                            return (
                                <Card
                                    style={{
                                        cursor: "pointer"
                                    }}
                                    key={index}
                                >
                                    <CardTitle tag="h3">{i.packageName}</CardTitle>
                                    <CardHeader>
                                        {i.productDetails &&
                                            i.productDetails.map((item, index) => {
                                                return (
                                                    <div key={index}>
                                                        <CardTitle
                                                            tag="h6"
                                                            onClick={this.toggleModal}
                                                        >
                                                            Product Name: {item.productName}
                                                        </CardTitle>
                                                        <Modal
                                                            isOpen={this.state.showModal}
                                                            toggle={this.toggleModal}
                                                            className="modal-dialog-centered modal-lg"
                                                        >
                                                            <ModalHeader
                                                                toggle={this.toggleModal}
                                                                className="bg-secondary"
                                                            >
                                                                Choose Items
                                                            </ModalHeader>
                                                            <ModalBody>
                                                                <ExtraItem
                                                                    toggleModal={this.toggleModal}
                                                                    addItem={this.state.comboItem}
                                                                    addExtraItem={this.state.item}
                                                                    handleChild={this.handleChild}
                                                                />
                                                            </ModalBody>
                                                        </Modal>
                                                    </div>

                                                );
                                            })}
                                        <Media className="d-sm-flex d-block">
                                            <Media body className="pt-3">
                                                <p>
                                                    <h6>Description:</h6>
                                                    <i>{i.description}</i>
                                                </p>
                                            </Media>
                                            <Media className="mt-md-1 mt-0">
                                                <Media
                                                    className="rounded mr-2"
                                                    object
                                                    src={IMG.default.baseURL + "" + i.image}
                                                    alt="Generic placeholder image"
                                                    height="112"
                                                    width="112"
                                                />
                                            </Media>
                                        </Media>
                                    </CardHeader>
                                </Card>
                            );
                        })}
                </Col>

                <Col md="6" sm="12">
                    <Cart addItem1={this.state.arr} dispatch={this.props.dispatch} />
                </Col>
            </Row >
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps)(PackageList)
