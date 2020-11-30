import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import 'bootstrap/dist/css/bootstrap.css'
import BrandList from './brands/BrandList'
import PackageList from './package/PackageList'
import Register from './Register'
import Place from './Place'
import { history } from '../history'
import { connect } from 'react-redux'

const App = () => {
    return (
        <div>
            <Router history={history}>
                <Header />
                <Switch>
                    <Route path="/" exact component={BrandList} />
                    <Route path="/package" exact component={PackageList} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/place" exact component={Place} />
                </Switch>
            </Router>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.brandReducer.userInfo
    }
}

export default connect(mapStateToProps)(App)