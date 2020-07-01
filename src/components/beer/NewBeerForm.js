import React, {useState, useEffect} from "react"
import BeerManager from "../../modules/BeerManager"
import DrinkStyleManager from "../../modules/DrinkStyleManager"
import BeerServingStyleManager from "../../modules/BeerServingStyleManager"
import { Button, Form, Input, InputGroup, InputGroupAddon, InputGroupText, CustomInput} from 'reactstrap';


const NewBeerForm = props => {
    const [newBeer, setNewBeer] = useState({ name: "", drink_style_id: 0, location_name: "", location_address: "", brewery: "", rating:"", description:"", abv:"", ibu:"", beer_serving_style_id:0, created_at:"" })
    const [drinkStyles, setDrinkStyle] = useState([])
    const [beerServingStyles, setBeerServingStyles] = useState([])
    const [image, setImage] = useState({ imageFile: "", image_path: "Choose File"})


    const handleFieldChange = (evt) => {
        const stateToChange = { ...newBeer }
        stateToChange[evt.target.id] = evt.target.value
        setNewBeer(stateToChange)
    }

    const handleCancel = () => {
        props.history.push("/beers")
    }
    const handleFileUpload = (evt) => {
        setImage({ imageFile: evt.target.files[0], image_path: evt.target.files[0].name })
    }
    const handleRangeChange = evt => {
        const stateToChange = { ...newBeer }
        stateToChange[evt.target.id] = parseInt(evt.target.value)
        setNewBeer(stateToChange)
    }

    const constructNewBeer = (evt) => {
        evt.preventDefault()

        if (newBeer.name === "" || newBeer.drink_style_id === 0 || newBeer.location_name === ""
            || newBeer.location_address === '' || newBeer.brewery === "" || newBeer.rating ==="" || newBeer.description === ""
            || newBeer.abv === "" || newBeer.ibu ==="" || newBeer.beer_serving_style_id === 0) {
            window.alert("Please make sure all fields are filled out.")
        } else {
            
            const formData = new FormData()
            formData.append("image_path", image.imageFile, image.image_path)
            formData.append("name", newBeer.name)
            formData.append("drink_style_id", newBeer.drink_style_id)
            formData.append("location_name", newBeer.location_name)
            formData.append("location_address", newBeer.location_address)
            formData.append("brewery", newBeer.brewery)
            formData.append("rating", newBeer.rating)
            formData.append("description", newBeer.description)
            formData.append("abv", newBeer.abv)
            formData.append("ibu", newBeer.ibu)
            formData.append("beer_serving_style_id", newBeer.beer_serving_style_id)
            formData.append("created_at", newBeer.created_at)

            BeerManager.addBeer(formData)
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
        <center>
        <Form style={{width:"50%"}} >
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
                    <InputGroupText>ABV%</InputGroupText>
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
                <CustomInput type="file" id="image_path" onChange={handleFileUpload} placeholder= "image path"/>
            </InputGroup>
            <br/>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Rating {newBeer.rating} </InputGroupText>
                </InputGroupAddon >
                <CustomInput type="range" id="rating" min="1" maxv="100" step="1" onChange={handleRangeChange} >
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
        </center>
        <center>
        <Button onClick={constructNewBeer} >Submit</Button>
        <Button onClick={handleCancel}>Cancel</Button>
        </center>

        </>
    )
}
 
export default NewBeerForm