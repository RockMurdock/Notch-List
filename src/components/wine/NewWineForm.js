import React, {useState, useEffect} from "react"
import WineManger from "../../modules/WineManager"
import DrinkStyleManager from "../../modules/DrinkStyleManager"
import { Button, Form, FormGroup, Label, Input, FormText, InputGroup, InputGroupAddon, InputGroupText, CustomInput} from 'reactstrap';


const NewWineForm = props => {
    const [newWine, setNewWine] = useState({ name: "", drink_style_id: 0, location_name: "", location_address: "", winery: "", rating:"", description:"", abv:"", image_path:"", created_at:"", year:"" })
    const [drinkStyles, setDrinkStyle] = useState([])

    const handleFieldChange = (evt) => {
        const stateToChange = { ...newWine }
        stateToChange[evt.target.id] = evt.target.value
        setNewWine(stateToChange)
    }

    const handleCancel = () => {
        props.history.push("/wines")
    }

    const constructNewWine = (evt) => {
        evt.preventDefault()

        if (newWine.name === "" || newWine.drink_style_id === 0 || newWine.location_name === ""
            || newWine.location_address === '' || newWine.winery === "" || newWine.rating ==="" || newWine.description === ""
            || newWine.abv === "") {
            window.alert("Please make sure all fields are filled out.")
        } else {
            
            WineManger.addWine(newWine)
            .then(props.history.push("/wines"))
        }
    }
    const getDrinkStyle = () => {
        DrinkStyleManager.getDrinkStyles().then((drinkStyleItems) => {
            setDrinkStyle(drinkStyleItems)
        });
    }
    

    useEffect(()=> {
        getDrinkStyle()
    },[])
    
    return (
        <>
        <Form>
            <h1>Wine Review Form</h1>
            <br/>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Wine Name</InputGroupText>
                </InputGroupAddon >
                <Input type="text" id="name" onChange={handleFieldChange} placeholder= "wine name"/>
            </InputGroup>
            <br/>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Wine Year</InputGroupText>
                </InputGroupAddon >
                <Input type="text" id="year" onChange={handleFieldChange} placeholder= "wine year"/>
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
                    <InputGroupText>Winery</InputGroupText>
                </InputGroupAddon >
                <Input type="text" id="winery" onChange={handleFieldChange} placeholder= "winery"/>
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
                <Input type="select" id="drink_style_id" value={newWine.drink_style_id} onChange={handleFieldChange} placeholder= "drink style">
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
                    <InputGroupText>Description</InputGroupText>
                </InputGroupAddon >
                <Input type="textarea" id="description" onChange={handleFieldChange} placeholder= "description"/>
            </InputGroup>
            <br/>

        </Form>
        
        <Button onClick={constructNewWine} >Submit</Button>
        <Button onClick={handleCancel}>Cancel</Button>

        </>
    )
}
 
export default NewWineForm