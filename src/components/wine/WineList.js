import React, { useEffect, useState } from "react";
import Authorization from "../auth/Authorization";
import WineManager from "../../modules/WineManager";
import WineCard from "./WineCard"
import { Table, Button } from 'reactstrap';


const WineList = (props) => {
  const [wines, setWines] = useState([]);
  const { isAuthenticated } = Authorization();

  const getWine = () => {
    if (isAuthenticated()) {
      WineManager.getWine().then((wineItems) => {
          setWines(wineItems)
      });
    }
  };
  

  const deleteWine = (beer) => {
      if (window.confirm("This will permanently delete your wine info.")) {
          WineManager.deleteWine(beer)
            .then(getWine)
      }
  }
  useEffect(()=> {
      getWine()
  },[])

  return (
    <>
      <h1>Wine Reviews</h1>
        <Button
              type="button" 
              onClick={() => {
                props.history.push("/wines/new");
              }}
            >
              Add Wine Review
        </Button>
            <p></p>
        <Table bordered>
          <thead>
              <tr>
                <th>Wine Name</th>
                <th>Location</th>
                <th>Winery</th>
                <th>Rating</th>
              </tr>
          </thead>
        {wines.map((wine) => (
          <WineCard key={wine.id} wine={wine} deleteWine={deleteWine} {...props} />
        ))}
        </Table>

    </>
  );
};
export default WineList;