import React from "react"


const HomeBeerCard = props => {
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

        </>
    )
}
 
export default HomeBeerCard