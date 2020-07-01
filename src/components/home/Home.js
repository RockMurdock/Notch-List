import React, { useEffect, useState } from "react";
import Authorization from "../auth/Authorization";
import BeerManager from "../../modules/BeerManager";
import WineManager from "../../modules/WineManager";
import { Table } from 'reactstrap';
import HomeBeerCard from "./HomeBeerCard";
import HomeWineCard from "./HomeWineCard";

const Home = props => {
    const [beers, setBeers] = useState([]);
    const [wines, setWines] = useState([]);
    const { isAuthenticated } = Authorization();

    const getBeer = () => {
        if (isAuthenticated()) {
        BeerManager.getBeer().then((beerItems) => {
            setBeers(beerItems)
        });
        }
    }
    const getWine = () => {
        if (isAuthenticated()) {
        WineManager.getWine().then((wineItems) => {
            setWines(wineItems)
        });
            }
    };
    useEffect(()=> {
        getBeer()
    },[])
    useEffect(()=> {
        getWine()
    },[])
    return (
        <>
        <center>
        <h1>Welcome To Notch-List</h1>
        <br/>
        <br/>
        <h4>Last Five Beer Reviews</h4>
        </center>
        <center>
        <Table bordered style={{ width:"50%"}} >
          <thead>
              <tr>
                <th>Beer Name</th>
                <th>Location</th>
                <th>Brewery</th>
                <th>Rating</th>
              </tr>
          </thead>
        {beers.slice(0, 5).map((beer) => (
          <HomeBeerCard key={beer.id} beer={beer} {...props} />
        ))}
        </Table>
        </center>
        <br/>
        <br/>
        <center>
        <h4>Last Five Wine Reviews</h4>
        <Table bordered style={{width:"50%"}} >
          <thead>
              <tr>
                <th>Wine Name</th>
                <th>Location</th>
                <th>Winery</th>
                <th>Rating</th>
              </tr>
          </thead>
        {wines.slice(0, 5).map((wine) => (
          <HomeWineCard key={wine.id} wine={wine}  {...props} />
        ))}
        </Table>
        </center>
        </>
    )
}
 
export default Home