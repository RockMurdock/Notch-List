import { Route } from "react-router-dom"
import React from "react"
import { withRouter } from "react-router-dom"
import Register from "./auth/Register"
import Login from "./auth/Login"
import BeerList from "./beer/BeerList"
import Home from "./home/Home"
import NewBeerForm from "./beer/NewBeerForm"
import BeerReviewDetail from "./beer/BeerReviewDetail"
import EditBeerForm from "./beer/EditBeerForm"



const ApplicationViews = () => {
    return (
        <React.Fragment>

            <Route exact path="/" render={props => {
                return <Home {...props} />
            }}
            />

            <Route exact path="/register" render={props => {
                return <Register {...props} />
            }}
            />

            <Route exact path="/login" render={props => {
                return <Login {...props} />
            }}
            />
            <Route exact path="/beers" render={props => {
                return <BeerList {...props} />
            }}
            />
            <Route exact path="/beers/new" render={props => {
                return <NewBeerForm {...props} />
            }}
            />
            <Route exact path="/beers/:beerId(\d+)" render={props => {
                return <BeerReviewDetail beerId={parseInt(props.match.params.beerId)} {...props} />
            }}
            />
            <Route path="/:beerId/edit" render={props => {
                return <EditBeerForm beerId={parseInt(props.match.params.beerId)}  {...props} />
            }}
            />
            
        </React.Fragment>
    )
}

export default withRouter(ApplicationViews)
