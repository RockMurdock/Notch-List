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
        <h1>Beer Details</h1>
        <Card>
            {/* <CardImg top width="100%" src={beer.image_path} alt="Beer Image" /> */}

            <CardBody>
                <CardTitle>Name: {beer.name} </CardTitle>
                <CardSubtitle>Brewery: {beer.brewery} </CardSubtitle>
                <CardSubtitle>Rating: {beer.rating} </CardSubtitle>
                <CardSubtitle>Beer Style: {beerStyle.name} </CardSubtitle>
                <CardSubtitle>How It's Served: {servingStyle.name} </CardSubtitle>
                <CardSubtitle>ABV%: {beer.abv} </CardSubtitle>
                <CardSubtitle>IBU: {beer.ibu} </CardSubtitle>
                <CardSubtitle>Location: {beer.location_name} </CardSubtitle>
                <CardSubtitle>Location Address: {beer.location_address} </CardSubtitle>
                <CardSubtitle>Date Tried: {beer.created_at} </CardSubtitle>
                <CardText>Description: {beer.description} </CardText>
                <Button onClick={() => {handleEdit(beer.id)}} >Edit</Button>    
                            
                <Button onClick={() => {deleteBeer(beer.id)}} >Delete</Button>
            </CardBody>
        </Card>
        </>
    )
}
 
export default BeerReviewDetail