import React from "react"
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap'



const GlasswareCard = props => {
    return (
        <>
        <div style={{width:"300px"}} >
        <Card style={{width:"auto", height:"1100px"}} >
            <CardImg top width="100%" src={props.glassware.image_path}   ></CardImg>
            <CardBody>
                <CardTitle style={{fontWeight:"bolder"}} > {props.glassware.name} </CardTitle>
                <CardText className="text-left" > {props.glassware.description} </CardText>
            </CardBody>
        </Card>
        </div>
        </>
    )
}
 
export default GlasswareCard