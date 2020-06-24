import React from "react"
import { Table } from 'reactstrap';


const BeerCard = props => {
    return (
        <>
        <tbody>
            <tr>
                <td onClick={() => props.history.push(`/beers/${props.beer.id}`)}> {props.beer.name} </td>
                <td> {props.beer.location_name} </td>
                <td> {props.beer.brewery} </td>
                <td> {props.beer.rating} </td>
            </tr>
        </tbody>
        {/* <button onClick={() => {props.deleteBeer(props.beer.id)}} >Delete</button> */}

        </>
    )
}
 
export default BeerCard