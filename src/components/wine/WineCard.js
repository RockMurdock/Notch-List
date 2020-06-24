import React from "react"
import { Table } from 'reactstrap';


const WineCard = props => {
    return (
        <>
        <tbody>
            <tr>
                <td onClick={() => props.history.push(`/wines/${props.wine.id}`)}> {props.wine.name} </td>
                <td> {props.wine.location_name} </td>
                <td> {props.wine.winery} </td>
                <td> {props.wine.rating} </td>
            </tr>
        </tbody>
        </>
    )
}
 
export default WineCard