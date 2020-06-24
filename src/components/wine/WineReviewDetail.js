import React, {useEffect, useState} from "react"
import WineManager from "../../modules/WineManager"
import Authorization from "../auth/Authorization"
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap'

const WineReviewDetail = props => {
    const [wine, setWine] = useState([])
    const [wineStyle, setWineStyle] = useState("")

    const { isAuthenticated } = Authorization();

    const getWineById = () => {
        if(isAuthenticated()) {
            return WineManager.getWineById(props.wineId)
                .then(resp => {
                    setWine(resp)
                    setWineStyle(resp.drink_style)
                })
        }
    }
    const deleteWine = (wineId) => {
        if (window.confirm("This will permanently delete your wine review.")) {
            WineManager.deleteWine(wineId)
              .then(props.history.push('/wines'))
        }
    }
    const handleEdit = (id) => {
        props.history.push(`/${id}/edit-wine`)
    }

    useEffect(() => {
        getWineById()
    }, [])
    return (
        <>
        <h1>Wine Details</h1>
        <Card>
            {/* <CardImg top width="100%" src={beer.image_path} alt="Beer Image" /> */}

            <CardBody>
                <CardTitle>Name: {wine.name} </CardTitle>
                <CardSubtitle>Winery: {wine.winery} </CardSubtitle>
                <CardSubtitle>Rating: {wine.rating} </CardSubtitle>
                <CardSubtitle>Wine Style: {wineStyle.name} </CardSubtitle>
                <CardSubtitle>ABV%: {wine.abv} </CardSubtitle>
                <CardSubtitle>Location: {wine.location_name} </CardSubtitle>
                <CardSubtitle>Location Address: {wine.location_address} </CardSubtitle>
                <CardSubtitle>Date Tried: {wine.created_at} </CardSubtitle>
                <CardText>Description: {wine.description} </CardText>
                <Button onClick={() => {handleEdit(wine.id)}} >Edit</Button>    
                            
                <Button onClick={() => {deleteWine(wine.id)}} >Delete</Button>
            </CardBody>
        </Card>
        </>
    )
}
 
export default WineReviewDetail