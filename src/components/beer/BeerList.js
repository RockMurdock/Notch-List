import React, { useEffect, useState } from "react";
import Authorization from "../auth/Authorization";
import BeerManager from "../../modules/BeerManager";
import BeerCard from "./BeerCard"
import { Table, Button } from 'reactstrap';


const BeerList = (props) => {
  const [beers, setBeers] = useState([]);
  const { isAuthenticated } = Authorization();

  const getBeer = () => {
    if (isAuthenticated()) {
      BeerManager.getBeer().then((beerItems) => {
          setBeers(beerItems)
      });
    }
  };
  

  
  
  useEffect(()=> {
      getBeer()
  },[beers.length])

  return (
    <>
      <h1>Beer Reviews</h1>
        <Button
              type="button" 
              onClick={() => {
                props.history.push("/beers/new");
              }}
            >
              Add Beer Review
        </Button>
            <p></p>
        <Table bordered>
          <thead>
              <tr>
                <th>Beer Name</th>
                <th>Location</th>
                <th>Brewery</th>
                <th>Rating</th>
              </tr>
          </thead>
        {beers.map((beer) => (
          <BeerCard key={beer.id} beer={beer}  {...props} />
        ))}
        </Table>

    </>
  );
};
export default BeerList;