import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import 'bootstrap/dist/css/bootstrap.css'
import BrandList from './brands/BrandList'
import PackageList from './package/PackageList'
import { history } from '../history'

const App = () => {
    return (
        <div>
            <Router history={history}>
                <Header />
                <Switch>
                    <Route path="/" exact component={BrandList} />
                    <Route path="/package" exact component={PackageList} />
                </Switch>
            </Router>
        </div>
    )
}

export default App