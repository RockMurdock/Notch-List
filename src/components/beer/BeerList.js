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
  

  const deleteBeer = (beer) => {
      if (window.confirm("This will permanently delete your beer info.")) {
          BeerManager.deleteBeer(beer)
            .then(getBeer)
      }
  }
  useEffect(()=> {
      getBeer()
  },[])

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
          <BeerCard key={beer.id} beer={beer} deleteBeer={deleteBeer} {...props} />
        ))}
        </Table>

    </>
  );
};
export default BeerList;