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
import WineList from "./wine/WineList"
import WineReviewDetail from "./wine/WineReviewDetail"
import NewWineForm from "./wine/NewWineForm"
import EditWineForm from "./wine/EditWineForm"
import GlasswareList from "./glassware/GlasswareList"
import Authorization from "./auth/Authorization"



const ApplicationViews = () => {
    return (
        <React.Fragment>

            <Route exact path="/" render={props => {
                return <Home isAuthenticated={Authorization.isAuthenticated} {...props} />
            }}
            />

            <Route exact path="/register" render={props => {
                return <Register  {...props} />
            }}
            />

            <Route exact path="/login" render={props => {
                return <Login {...props} />
            }}
            />
            <Route exact path="/beers" render={props => {
                return <BeerList isAuthenticated={Authorization.isAuthenticated} {...props} />
            }}
            />
            <Route exact path="/beers/new" render={props => {
                return <NewBeerForm isAuthenticated={Authorization.isAuthenticated} {...props} />
            }}
            />
            <Route exact path="/beers/:beerId(\d+)" render={props => {
                return <BeerReviewDetail isAuthenticated={Authorization.isAuthenticated} beerId={parseInt(props.match.params.beerId)} {...props} />
            }}
            />
            <Route path="/:beerId/edit" render={props => {
                return <EditBeerForm isAuthenticated={Authorization.isAuthenticated} beerId={parseInt(props.match.params.beerId)}  {...props} />
            }}
            />
            <Route exact path="/wines" render={props => {
                return <WineList isAuthenticated={Authorization.isAuthenticated} {...props} />
            }}
            />
            <Route exact path="/wines/:wineId(\d+)" render={props => {
                return <WineReviewDetail isAuthenticated={Authorization.isAuthenticated} wineId={parseInt(props.match.params.wineId)} {...props} />
            }}
            />
            <Route exact path="/wines/new" render={props => {
                return <NewWineForm isAuthenticated={Authorization.isAuthenticated} {...props} />
            }}
            />
            <Route path="/:wineId/edit-wine" render={props => {
                return <EditWineForm isAuthenticated={Authorization.isAuthenticated} wineId={parseInt(props.match.params.wineId)}  {...props} />
            }}
            />
            <Route exact path="/glassware" render={props => {
                return <GlasswareList isAuthenticated={Authorization.isAuthenticated} {...props} />
            }}
            />
            
        </React.Fragment>
    )
}

export default withRouter(ApplicationViews)
