import React from "react"
import {
    CardBody,
    CardHeader,
    Card,
    Button,
    Row,
    Col,
    CardText,
    Input,
    CardLink,
    CardImg,
    Nav,
    NavItem,
    NavLink,
    CardTitle,

} from "reactstrap";
import { connect } from 'react-redux'
import * as globalActions from '../../actions/brandGlobal'

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
        };
    }

    componentDidMount = () => {
        this.props.dispatch(globalActions.getProduct()).then((res) => {
            let rowData = res.data.data.product.filter((item) => {
                if (item.brandId === this.state.brandId) {
                    console.log("hi")
                } else {
                    console.log("sorry")
                }
            })
        })
    }

    render() {
        return (
            <Row>
                <Col md="6" sm="12" className="pt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>welcome</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <h1> hiii</h1>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="6" sm="12">
                    <h2> hello</h2>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps)(PackageList)
