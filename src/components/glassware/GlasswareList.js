import React, { useEffect, useState } from "react";
import Authorization from "../auth/Authorization";
import GlasswareManager from "../../modules/GlasswareManager";
import GlasswareCard from "./GlasswareCard";
import {CardDeck, CardColumns} from "reactstrap"

const GlasswareList = (props) => {
  const [glasswares, setGlasswares] = useState([]);
  const { isAuthenticated } = Authorization();

  const getGlassware = () => {
    if (isAuthenticated()) {
      GlasswareManager.getGlassware().then((glasswareItems) => {
          setGlasswares(glasswareItems)
      });
    }
  };
  

  
  
  useEffect(()=> {
      getGlassware()
  },[])

  return (
    <>
      <h1>Types of Glassware</h1>
        
        <CardColumns style={{columnCount:"unset"}}>
            {glasswares.map((glassware) => (
            <GlasswareCard key={glassware.id} glassware={glassware}  {...props} />
            ))}
        </CardColumns>

    </>
  );
};
export default GlasswareList;