import React, { useEffect, useState } from "react";
import Authorization from "../auth/Authorization";
import BeerManager from "../../modules/BeerManager";
import BeerCard from "./BeerCard"

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
      <button
              type="button" 
              onClick={() => {
                props.history.push("/beers/new");
              }}
            >
              Add Beer Review
            </button>
        <hr/>
      <main>
        {beers.map((beer) => (
          <BeerCard key={beer.id} beer={beer} deleteBeer={deleteBeer} {...props} />
        ))}
      </main>
    </>
  );
};
export default BeerList;