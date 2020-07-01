import React, {useEffect, useState} from "react"
import BeerManager from "../../modules/BeerManager"
import Authorization from "../auth/Authorization"
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap'

const BeerReviewDetail = props => {
    const [beer, setBeer] = useState([])
    const [beerStyle, setBeerStyle] = useState("")
    const [servingStyle, setServingStyle] = useState("")

    const { isAuthenticated } = Authorization();

    const getBeerById = () => {
        if(isAuthenticated()) {
            return BeerManager.getBeerById(props.beerId)
                .then(resp => {
                    setBeer(resp)
                    setBeerStyle(resp.drink_style)
                    setServingStyle(resp.beer_serving_style)
                })
        }
    }
    const deleteBeer = (beerId) => {
        if (window.confirm("This will permanently delete your beer review.")) {
            BeerManager.deleteBeer(beerId)
              .then(props.history.push('/beers'))
        }
    }
    const handleEdit = (id) => {
        props.history.push(`/${id}/edit`)
    }

    useEffect(() => {
        getBeerById()
    }, [])
    return (
        <>
        <center>
        <h1>Beer Details</h1>
        <Card  className="text-left" style={{width:"50%"}} >
            <CardImg top width="100%"  style={{width:"380px", height:"650px", alignSelf:"center"}} src={beer.image_path} alt="Beer Image" />

            <CardBody>
                <CardTitle ><span style={{fontWeight:"bolder"}}>Name:</span> {beer.name} </CardTitle>
                <CardSubtitle><span style={{fontWeight:"bolder"}}></span>Brewery: {beer.brewery} </CardSubtitle>
                <CardSubtitle><span style={{fontWeight:"bolder"}}>Rating:</span> {beer.rating} </CardSubtitle>
                <CardSubtitle><span style={{fontWeight:"bolder"}}>Beer Style:</span> {beerStyle.name} </CardSubtitle>
                <CardSubtitle><span style={{fontWeight:"bolder"}}>How It's Served:</span> {servingStyle.name} </CardSubtitle>
                <CardSubtitle><span style={{fontWeight:"bolder"}}>ABV%:</span> {beer.abv} </CardSubtitle>
                <CardSubtitle><span style={{fontWeight:"bolder"}}>IBU:</span> {beer.ibu} </CardSubtitle>
                <CardSubtitle><span style={{fontWeight:"bolder"}}>Location:</span> {beer.location_name} </CardSubtitle>
                <CardSubtitle><span style={{fontWeight:"bolder"}}>Location Address:</span> {beer.location_address} </CardSubtitle>
                <CardSubtitle><span style={{fontWeight:"bolder"}}>Date Tried:</span> {beer.created_at} </CardSubtitle>
                <CardText><span style={{fontWeight:"bolder"}}>Description:</span> {beer.description} </CardText>
                <Button onClick={() => {handleEdit(beer.id)}} >Edit</Button>    
                <span> </span>           
                <Button onClick={() => {deleteBeer(beer.id)}} >Delete</Button>
            </CardBody>
        </Card>
        </center>
        </>
    )
}
 
export default BeerReviewDetail