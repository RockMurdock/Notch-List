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
        <center>
        <h1>Wine Details</h1>
        <Card className="text-left" style={{width:"50%"}} >
            <CardImg top width="100%" style={{ alignSelf:"center", width:"380px", height:"1000px"}} src={wine.image_path} alt="Wine Image" />

            <CardBody>
                <CardTitle><span style={{fontWeight:"bolder"}}>Name:</span> {wine.name} </CardTitle>
                <CardSubtitle><span style={{fontWeight:"bolder"}}>Winery:</span> {wine.winery} </CardSubtitle>
                <CardSubtitle><span style={{fontWeight:"bolder"}}>Rating:</span> {wine.rating} </CardSubtitle>
                <CardSubtitle><span style={{fontWeight:"bolder"}}>Wine Style:</span> {wineStyle.name} </CardSubtitle>
                <CardSubtitle><span style={{fontWeight:"bolder"}}>ABV%:</span> {wine.abv} </CardSubtitle>
                <CardSubtitle><span style={{fontWeight:"bolder"}}>Location:</span> {wine.location_name} </CardSubtitle>
                <CardSubtitle><span style={{fontWeight:"bolder"}}>Location Address:</span> {wine.location_address} </CardSubtitle>
                <CardSubtitle><span style={{fontWeight:"bolder"}}>Date Tried:</span> {wine.created_at} </CardSubtitle>
                <CardText><span style={{fontWeight:"bolder"}}>Description:</span> {wine.description} </CardText>
                <Button onClick={() => {handleEdit(wine.id)}} >Edit</Button>    
                <span> </span>        
                <Button onClick={() => {deleteWine(wine.id)}} >Delete</Button>
            </CardBody>
        </Card>
        </center>
        </>
    )
}
 
export default WineReviewDetail