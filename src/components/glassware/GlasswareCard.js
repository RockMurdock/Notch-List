import React from "react"
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap'



const GlasswareCard = props => {
    return (
        <>
        <Card style={{width: "30%"}} >
            <CardImg top width="100%" src={props.glassware.image_path} ></CardImg>
            <CardBody>
                <CardTitle> {props.glassware.name} </CardTitle>
                <CardText> {props.glassware.description} </CardText>
            </CardBody>
        </Card>
        </>
    )
}
 
export default GlasswareCard