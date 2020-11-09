import React from 'react'
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
    InputGroup,
    InputGroupAddon,
    InputGroupText,
} from 'reactstrap'
import { connect } from 'react-redux'
import * as globalActions from '../../actions/brandGlobal'
import IMG from '../../config/imageConfig'
import { MapPin } from 'react-feather'

class BrandList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: "",
            longitude: "",
            rowData: [],
            searchData: []
        }
    }
    getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                this.getCoordinates,
                this.handleLocation
            );
        } else {
            alert("hello");
        }
    };
    handleLocation = (error) => {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("The Request For Geolocation is denied");
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Showroom Location is not available.");
                break;
            case error.TIMEOUT:
                alert("user location was timed out.");
                break;
            case error.UNKNOWN_ERROR:
                alert("Unknown error access");
                break;
            default:
        }
    };
    getCoordinates = (position) => {
        const data = position.coords.latitude
        const xyz = position.coords.longitude
        this.props.dispatch(globalActions.getLocationBrand(xyz, data)).then((res) => {
            let data = res.data
            this.setState({ data })
        })
    };

    onSearchChange = (abc) => {
        this.props.dispatch(globalActions.getSearch(abc)).then((response) => {
            let rowData = response.data.brandData;
            this.setState({ rowData });
        });
    }

    componentDidMount = () => {
        this.props.dispatch(globalActions.getBrand()).then((res) => {
            let rowData = res.data;
            this.setState({ rowData });
        });
        this.getLocation()
    };
    render() {
        return (
            <Row>
                <Col sm="12">
                    <Card className="pt-1">
                        <CardBody>
                            <Col sm="12">
                                <Col
                                    sm="12"
                                    md={{ size: 4, offset: 4 }}
                                    style={{ paddingTop: 20 }}
                                >
                                    <InputGroup>
                                        <Input
                                            type="text"
                                            id="brand"
                                            placeholder="Search showroom"
                                            onChange={(e) => this.onSearchChange(e.target.value)}
                                        />
                                        <p>{this.state.searchLocation}</p>
                                        <InputGroupAddon addonType="append">
                                            <InputGroupText>
                                                Search
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </Col>
                                <Row className="pt-4">
                                    {this.state.rowData && this.state.rowData.length > 0
                                        ? this.state.rowData.map((item, index) => {
                                            return (
                                                <Col lg="4" sm="12" key={index}>
                                                    <Card
                                                        body
                                                        outline
                                                        style={{ borderColor: "#333" }}
                                                        className="mt-4"
                                                    >
                                                        <CardHeader className="justify-content-between">
                                                            <div className="card-heading">
                                                                <CardTitle>
                                                                    <h6>
                                                                        <strong>
                                                                            {item.brandName}
                                                                        </strong>
                                                                    </h6>
                                                                </CardTitle>
                                                                <CardText>
                                                                    <CardLink
                                                                        href={item.locationLink}
                                                                    >
                                                                        <MapPin size="15" />{" "}
                                                                            &nbsp; Find Location
                                                                        </CardLink>
                                                                </CardText>
                                                            </div>
                                                        </CardHeader>
                                                        <CardBody>
                                                            <CardImg
                                                                variant="bottom"
                                                                src={
                                                                    IMG.baseURL +
                                                                    "" +
                                                                    item.branchLogo
                                                                }
                                                            />
                                                            <hr />
                                                            <div className="justify-content-between">
                                                                <i>Branch Name:&nbsp;&nbsp;</i>
                                                                <span className="text-success">
                                                                    {item.branchName}
                                                                </span>
                                                                <br />
                                                                <br />
                                                                <i>Location:&nbsp;&nbsp;</i>
                                                                <span className="text-secondary">
                                                                    {item.location}
                                                                </span>
                                                                <br />
                                                                <br />
                                                                <i>Contact:&nbsp;&nbsp;</i>
                                                                <span className="text-info">
                                                                    {item.contact}
                                                                </span>
                                                            </div>
                                                        </CardBody>
                                                    </Card>
                                                </Col>
                                            );
                                        })
                                        : "No showroom found near you!"}
                                </Row>
                            </Col>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps)(BrandList)