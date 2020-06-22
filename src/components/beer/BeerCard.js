import React from "react"

const BeerCard = props => {
    return (
        <>
        <article>
           Beer Name: {props.beer.name}<br/>
           <button onClick={() => {props.deleteBeer(props.beer.id)}} >Delete</button>
            <hr/>
        </article>
        </>
    )
}
 
export default BeerCard