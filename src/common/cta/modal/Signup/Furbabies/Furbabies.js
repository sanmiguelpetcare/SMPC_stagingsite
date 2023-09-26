import React, { useState } from 'react';
import DropdownList from 'react-widgets/DropdownList';
import { Select } from 'antd';
// import Select from 'react-select';
import { catBreeds } from "cat-breeds";
import { colorStyles } from '../StylesOptions';
import { dogBreeds } from "dog-breeds"
import { ReduxConnect } from "helpers/HOC";
import { Padding } from '@mui/icons-material';

const Furbabies = (props) => {
    const [dropDownStatus, setDropdownStatus] = React.useState(false)
    const [dropDownSpeciesStatus, setDropwDownSpeciesStatus] = React.useState(false)
    const [dateColor, setDateColor] = useState(false)
    const furbabies = props.fe_signup_state.item.furbabies;
    const _catBreedsList = catBreeds.map(cat => cat.name).sort();
    const _dogBreedsList = dogBreeds.sort();
    const placeholderInputColor = "#8F8F8F"
    const _catFoodList = [
        "Whiskas",
        "Powercat",
        "Princess",
        "Aozi Cat",
        "Special Cat",
        "Smartheart Cat",
        "Table Food",
        "Raw Meat",
        "Others"
    ];
    const _dogFoodlist = [
        "Nutri Chunks",
        "Pedigree",
        "Beefpro",
        "Topbreed",
        "Royal Canin",
        "Special Dog",
        "Vitality",
        "Holistic",
        "Aozi Dog",
        "Raw meat",
        "Table food",
        "Others",
    ];

    const catBreedsList = _catBreedsList.map(cat => {
        return({
            value: cat,
            label: cat,
            target: {
                id: "breed",
                value: cat
            }
        })
    });

    const catFoodList = _catFoodList.map(catFood => {
        return({
            value: catFood,
            label: catFood,
            target: {
                id: "foodType",
                value: catFood
            }
        })
    });

    const dogBreedsList = _dogBreedsList.map(dog => {
        return({
            value: dog,
            label: dog,
            target: {
                id: "breed",
                value: dog
            }
        })
    });

    const dogFoodList = _dogFoodlist.map(dogFood => {
        return({
            value: dogFood,
            label: dogFood,
            target: {
                id: "foodType",
                value: dogFood
            }
        })
    });


    const unsetStyle = {
        color: placeholderInputColor,
        opacity: 0.8
    }

    const onAdditem = (e, i) => {
        let list = [...furbabies]

        list.splice(i, 0, props.fe_signup_state.item.furbabyEntry);

        props.fe_signup_actions.updateFurbabies(list)
    }

    const onRemoveitem = (e, i) => {
        let list = furbabies.filter((item, index) => index != i)

        props.fe_signup_actions.updateFurbabies(list)
    }

    // const handleDogFooditems = (itemSelected, i) => {
    //     props.fe_signup_actions.updateFurbabies(furbabies.map((item, index) => {
    //         if(index === i) {
    //             return {
    //                 ...item,
    //                 foodType: itemSelected
    //             }
    //         }

    //         return item;
    //     }))
    // }

    const handleChange = (e, i) => {
        props.fe_signup_actions.updateFurbabies(furbabies.map((item, index) => {
            if(index === i) {
                return {
                    ...item,
                    [e.target.id]: e.target.value
                }
            }

            return item;
        }))
    }

    const handleSpecies = (e, i) => {
        handleChange(e, i)
        
        if (e.target.value === "Cat") {          
            foodList(catFoodList);
        }
        else if (e.target.value === "Dog") {
            foodList(dogFoodList);
        }
    }

    const handleBreedChange = (e, i) => {
        // handleChange(e, i);
        props.fe_signup_actions.updateFurbabies(furbabies.map((item, index) => {
            if(index === i) {
                return {
                    ...item,
                    "breed": e
                }
            }

            return item;
        }))
    }

    const handleBirthdayChange = (e, i) => {
        setDateColor(true);
        handleChange(e, i);
    }

    const handleFoodChange = (e, i) => {
        // handleChange(e, i);
        props.fe_signup_actions.updateFurbabies(furbabies.map((item, index) => {
            if(index === i) {
                return {
                    ...item,
                    "foodType": e
                }
            }

            return item;
        }))
    }

    const dogButtonStyles = (item) => {
        if (item.species === "Dog") {
            return { backgroundColor: "#17479D" }
        }
        else {
            return { backgroundColor: "#F5821F" }
        }
    }

    const catButtonStyles = (item) => {
        if (item.species === "Cat") {
            return { backgroundColor: "#17479D" }
        }
        else {
            return { backgroundColor: "#F5821F" }
        }
    }

    const breedList = (item) => {
        if (item.species === "Cat") {
            return catBreedsList
            // return _catBreedsList
        }
        else if (item.species === "Dog") {
            return dogBreedsList
            // return _dogBreedsList
        }
    }

    const valueBreed = (item) => {
        if (item.species === "") {
            return null
        }
        else if (item.species === "Cat") {
            catBreedsList.find(_breed => {
                return _breed.value === item.breed
            })
        }
        else if (item.species === "Dog") {
            dogBreedsList.find(_breed => {
                return _breed.value === item.breed
            })
        }
        else {
            return null
        }
    }

    const foodList = (item) => {
        if (item.species === "Cat") {
            return catFoodList
        }
        else if (item.species === "Dog") {
            return dogFoodList
        }
    }

    const valueFood = (item) => {
        if (item.species === "Cat") {
            catFoodList.find(_food => {
                if (_food.value === item.foodType) {
                    return {label: _food.value, value: _food.value}
                }
            })
        }
        else if (item.species === "Dog") {
            dogFoodList.find(_food => {
                return _food.value === item.foodType
            })
        }
        else {
            return null
        }
    }

    const handleAddFurbabyButtonClick = (e, i) => {
        onAdditem(e, i);
        let el = e.target.ref.current;

        window.scrollTo({
            behavior: "smooth",
            left: 0,
            top: el.offsetTop
        });
    }

    return (
        <>
            <div className="furbaby-details-container">
                <div className="furbaby-details-heading-container">
                    <h4>Furbaby Details</h4>
                </div>
                <div className="furbaby-details-form-container">
                    {
                        furbabies.map((item, i) => {
                            return (
                                <>
                                    <div className="furBaby-details-container" ref={React.createRef()}>
                                        <div className="field-detials-container">
                                            <div className="dog-cat-container field-container">
                                                <p>1. Do you have a Dog or a Cat?</p>
                                                <div className="dog-cat-container">
                                                    <button 
                                                        className="dog-cat-button" 
                                                        value="Dog"
                                                        onClick={ e => handleSpecies(e, i) }
                                                        id="species"
                                                        style={ dogButtonStyles(item) }>
                                                            Dog
                                                    </button>
                                                    <button 
                                                        className="dog-cat-button" 
                                                        value="Cat"
                                                        onClick={ e => handleSpecies(e, i) }
                                                        id="species"
                                                        style={ catButtonStyles(item) }>
                                                            Cat
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="dog-name-container field-container">
                                                <p>2. What is your furbaby’s name?</p>
                                                <input
                                                    value={item.name}
                                                    type="text"
                                                    onChange={e => handleChange(e, i)}
                                                    id="name"
                                                    className="signup-input"
                                                    autoComplete="off"
                                                />
                                            </div>
                                            <div className="dog-breed-container field-container">
                                                <p>3. What is your furbaby’s breed?</p>
                                                <Select 
                                                    options={ breedList(item) }
                                                    placeholder=""
                                                    onChange={ e => handleBreedChange(e, i) }
                                                    showSearch={true}
                                                    value={ item.breed }
                                                    id="breed"
                                                    autoFocus={false}
                                                    notFoundContent="Choose whether your pet is a Dog or Cat"
                                                    autoComplete="off"
                                                />
                                            </div>
                                        </div>

                                        <div className="field-detials-container">
                                            <div className="dog-bday-container field-container">
                                                <p>4. When is your furbaby’s birthday?</p>
                                                <input
                                                    className="signup-input"
                                                    value={item.birthday}
                                                    type="date"
                                                    onChange={ e => handleBirthdayChange(e, i) }
                                                    id="birthday"
                                                />
                                            </div>
                                            <div className="dog-food-container-dropdown field-container">
                                                <p>5. What do you feed your furbaby? </p>
                                                <Select 
                                                    options={ foodList(item) }
                                                    placeholder=""
                                                    onChange={ e => handleFoodChange(e, i) }
                                                    showSearch={true}
                                                    id="foodType"
                                                    value={ item.foodType }
                                                    notFoundContent="Choose whether your pet is a Dog or Cat"
                                                    autoComplete="off"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="add-remove-container">
                                        <div className="add-dog add-remove">
                                            <i className="fa fa-plus" onClick={ e => onAdditem(e, i) }></i>
                                        </div>
                                        {
                                            furbabies.length > 1 && (
                                                <div className='remove-dog add-remove'>
                                                    <i className="fa fa-minus" onClick={ e => onRemoveitem(e, i) }></i>
                                                </div>
                                            )
                                        }
                                        {furbabies.length == 1 && (
                                            <p onClick={ e => onAdditem(e, i)}>Add furbaby</p>
                                        )}
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ReduxConnect( Furbabies, ["fe_signup"] );