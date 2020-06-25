import React, {useState, useEffect} from "react"
import WineManager from "../../modules/WineManager"
import DrinkStyleManager from "../../modules/DrinkStyleManager"
import { Button, Form, Input, InputGroup, InputGroupAddon, InputGroupText, CustomInput} from 'reactstrap';


const EditWineForm = props => {
    const [wine, setWine] = useState({ name: "", drink_style_id: 0, location_name: "", location_address: "", winery: "", rating:"", description:"", abv:"", year:"", image_path:"", created_at:"" })
    const [drinkStyles, setDrinkStyle] = useState([])
    const [image, setImage] = useState({ imageFile: "", image_path: "Choose File"})

    const handleFieldChange = (evt) => {
        const stateToChange = { ...wine }
        stateToChange[evt.target.id] = evt.target.value
        setWine(stateToChange)
    }

    const getWineById = () => {
        
            return WineManager.getWineById(props.wineId)
                .then(resp => {
                    setWine(resp)
                    
                })
        
    }

    const handleFileUpload = (evt) => {
        setImage({ imageFile: evt.target.files[0], image_path: evt.target.files[0].name })
    }

    const handleCancel = () => {
        props.history.push("/wines")
    }

    const editWineReview = (evt) => {
        evt.preventDefault()

        if (wine.name === "" || wine.drink_style_id === 0 || wine.location_name === ""
            || wine.location_address === '' || wine.winery === "" || wine.rating ==="" || wine.description === ""
            || wine.abv === "" || wine.year ==="" ) {
            window.alert("Please make sure all fields are filled out.")
        } else {

            const formData = new FormData()
            formData.append("image_path", image.imageFile, image.image_path)
            formData.append("name", wine.name)
            formData.append("drink_style_id", wine.drink_style_id)
            formData.append("location_name", wine.location_name)
            formData.append("location_address", wine.location_address)
            formData.append("winery", wine.winery)
            formData.append("rating", wine.rating)
            formData.append("description", wine.description)
            formData.append("abv", wine.abv)
            formData.append("year", wine.year)
            formData.append("created_at", wine.created_at)
            
            WineManager.updateWine(formData, wine.id)
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
    
    useEffect(()=> {
        getWineById()
    },[])
    return (
        <>
        <Form>
            <h1>Wine Review Edit Form</h1>
            <br/>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Wine Name</InputGroupText>
                </InputGroupAddon >
                <Input type="text" id="name" value={wine.name} onChange={handleFieldChange} placeholder= "wine name"/>
            </InputGroup>
            <br/>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Location Name</InputGroupText>
                </InputGroupAddon >
                <Input type="text" id="location_name" value={wine.location_name} onChange={handleFieldChange} placeholder= "location name"/>
            </InputGroup>
            <br/>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Location Address</InputGroupText>
                </InputGroupAddon >
                <Input type="text" id="location_address" value={wine.location_address} onChange={handleFieldChange} placeholder= "location address"/>
            </InputGroup>
            <br/>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Winery</InputGroupText>
                </InputGroupAddon >
                <Input type="text" id="winery" value={wine.winery} onChange={handleFieldChange} placeholder= "winery"/>
            </InputGroup>
            <br/>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>ABV%</InputGroupText>
                </InputGroupAddon >
                <Input type="text" id="abv" value={wine.abv} onChange={handleFieldChange} placeholder= "abv"/>
            </InputGroup>
            <br/>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Year</InputGroupText>
                </InputGroupAddon >
                <Input type="text" id="year" value={wine.year} onChange={handleFieldChange} placeholder= "year"/>
            </InputGroup>
            <br/>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Image Path</InputGroupText>
                </InputGroupAddon >
                <CustomInput type="file" id="image_path"  onChange={handleFileUpload} placeholder= "image path"/>
            </InputGroup>
            <br/>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Rating {wine.rating} </InputGroupText>
                </InputGroupAddon >
                <CustomInput type="range" id="rating" value={wine.rating} min="1" maxv="100" step="1" onChange={handleFieldChange} >
                </CustomInput>
            </InputGroup>
            <br/>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Drink Style</InputGroupText>
                </InputGroupAddon >
                <Input type="select" id="drink_style_id" value={wine.drink_style_id} onChange={handleFieldChange} placeholder= "drink style">
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
                <Input type="textarea" id="description" value={wine.description} onChange={handleFieldChange} placeholder= "description"/>
            </InputGroup>
            <br/>

        </Form>
        
        <Button onClick={editWineReview} >Submit</Button>
        <Button onClick={handleCancel}>Cancel</Button>

        </>
    )
}
 
export default EditWineForm