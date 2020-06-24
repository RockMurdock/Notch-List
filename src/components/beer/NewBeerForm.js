import React, {useState, useEffect} from "react"
import BeerManager from "../../modules/BeerManager"
import DrinkStyleManager from "../../modules/DrinkStyleManager"
import BeerServingStyleManager from "../../modules/BeerServingStyleManager"
import { Button, Form, FormGroup, Label, Input, FormText, InputGroup, InputGroupAddon, InputGroupText, CustomInput} from 'reactstrap';


const NewBeerForm = props => {
    const [newBeer, setNewBeer] = useState({ name: "", drink_style_id: 0, location_name: "", location_address: "", brewery: "", rating:"", description:"", abv:"", ibu:"", beer_serving_style_id:0, image_path:"", created_at:"" })
    const [drinkStyles, setDrinkStyle] = useState([])
    const [beerServingStyles, setBeerServingStyles] = useState([])

    const handleFieldChange = (evt) => {
        const stateToChange = { ...newBeer }
        stateToChange[evt.target.id] = evt.target.value
        setNewBeer(stateToChange)
    }

    const handleCancel = () => {
        props.history.push("/beers")
    }

    const constructNewBeer = (evt) => {
        evt.preventDefault()

        if (newBeer.name === "" || newBeer.drink_style_id === 0 || newBeer.location_name === ""
            || newBeer.location_address === '' || newBeer.brewery === "" || newBeer.rating ==="" || newBeer.description === ""
            || newBeer.abv === "" || newBeer.ibu ==="" || newBeer.beer_serving_style_id === 0) {
            window.alert("Please make sure all fields are filled out.")
        } else {
            
            BeerManager.addBeer(newBeer)
            .then(props.history.push("/beers"))
        }
    }
    const getDrinkStyle = () => {
        DrinkStyleManager.getDrinkStyles().then((drinkStyleItems) => {
            setDrinkStyle(drinkStyleItems)
        });
    }
    const getBeerStyle = () => {
        BeerServingStyleManager.getBeerServingStyles().then((beerServingStyleItems) => {
            setBeerServingStyles(beerServingStyleItems)
        });
    }

    useEffect(()=> {
        getDrinkStyle()
    },[])
    useEffect(()=> {
        getBeerStyle()
    },[])
    return (
        <>
        <Form>
            <h1>Beer Review Form</h1>
            <br/>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Beer Name</InputGroupText>
                </InputGroupAddon >
                <Input type="text" id="name" onChange={handleFieldChange} placeholder= "beer name"/>
            </InputGroup>
            <br/>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Location Name</InputGroupText>
                </InputGroupAddon >
                <Input type="text" id="location_name" onChange={handleFieldChange} placeholder= "location name"/>
            </InputGroup>
            <br/>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Location Address</InputGroupText>
                </InputGroupAddon >
                <Input type="text" id="location_address" onChange={handleFieldChange} placeholder= "location address"/>
            </InputGroup>
            <br/>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Brewery</InputGroupText>
                </InputGroupAddon >
                <Input type="text" id="brewery" onChange={handleFieldChange} placeholder= "brewery"/>
            </InputGroup>
            <br/>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>ABV</InputGroupText>
                </InputGroupAddon >
                <Input type="text" id="abv" onChange={handleFieldChange} placeholder= "abv"/>
            </InputGroup>
            <br/>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>IBU</InputGroupText>
                </InputGroupAddon >
                <Input type="text" id="ibu" onChange={handleFieldChange} placeholder= "ibu"/>
            </InputGroup>
            <br/>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Image Path</InputGroupText>
                </InputGroupAddon >
                <CustomInput type="file" id="image_path" onChange={handleFieldChange} placeholder= "image path"/>
            </InputGroup>
            <br/>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Rating</InputGroupText>
                </InputGroupAddon >
                <CustomInput type="range" id="rating" min="1" maxv="100" step="1" onChange={handleFieldChange} >
                </CustomInput>
            </InputGroup>
            <br/>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Drink Style</InputGroupText>
                </InputGroupAddon >
                <Input type="select" id="drink_style_id" value={newBeer.drink_style_id} onChange={handleFieldChange} placeholder= "drink style">
                    <option value={0} >select option</option>
                    {drinkStyles.map(drinkStyle => (
                        <option key={drinkStyle.id} value={drinkStyle.id}>
                            {drinkStyle.name}
                        </option>
                    ))}
                </Input>
            </InputGroup>
            <br/>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Beer Serving Style</InputGroupText>
                </InputGroupAddon >
                <Input type="select" id="beer_serving_style_id" value={newBeer.beer_serving_style_id} onChange={handleFieldChange} placeholder= "beer serving style">
                    <option value={0} >select option</option>
                    {beerServingStyles.map(beerServingStyle => (
                        <option key={beerServingStyle.id} value={beerServingStyle.id}>
                            {beerServingStyle.name}
                        </option>
                    ))}
                </Input>
            </InputGroup>
            <br/>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Description</InputGroupText>
                </InputGroupAddon >
                <Input type="textarea" id="description" onChange={handleFieldChange} placeholder= "description"/>
            </InputGroup>
            <br/>

        </Form>
        
        <Button onClick={constructNewBeer} >Submit</Button>
        <Button onClick={handleCancel}>Cancel</Button>

        </>
    )
}
 
export default NewBeerForm