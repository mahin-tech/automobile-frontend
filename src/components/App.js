import React from 'react'
import { Router, Route } from 'react-router-dom'
import Header from '../components/Header'
import 'bootstrap/dist/css/bootstrap.css'
import BrandList from './brands/BrandList'
import history from '../history'

const App = () => {
    return (
        <div>
            <Router history={history}>
                <div>
                    <Header />
                    <Route path="/" exact component={BrandList} />
                </div>
            </Router>
        </div>
    )
}

export default App