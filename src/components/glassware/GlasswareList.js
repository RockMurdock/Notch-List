import React, { useEffect, useState } from "react";
import Authorization from "../auth/Authorization";
import GlasswareManager from "../../modules/GlasswareManager";
import GlasswareCard from "./GlasswareCard";
import { CardColumns, CardDeck, CardGroup} from "reactstrap"

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
    <center>
      <h1>Types of Glassware</h1>
        
        <CardGroup style={{display: "flex", flexWrap:"wrap", justifyContent:"space-evenly"}}>
            {glasswares.map((glassware) => (
            <GlasswareCard key={glassware.id} glassware={glassware}  {...props} />
            ))}
        </CardGroup>
    </center>
    </>
  );
};
export default GlasswareList;