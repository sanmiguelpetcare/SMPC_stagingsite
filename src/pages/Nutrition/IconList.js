import thumbsupPaw from "../../assets/media/nutrition/thumbs_up_2x.png"
import atom from "../../assets/media/nutrition/ActivBoost_2x.png"
import runningDog from "../../assets/media/nutrition/Active_Dog_2x.png"
import arrowUp from "../../assets/media/nutrition/Balanced_Protein_2x.png"
import xrayDog from "../../assets/media/nutrition/Digestive_2x.png"
import balance from "../../assets/media/nutrition/Imbalance_Protein_2x.png"
import meat from "../../assets/media/nutrition/Kibble_2x.png"
import beef from "../../assets/media/nutrition/lamb_Beef_salmon_2x.png"
import meatAndmilk from "../../assets/media/nutrition/Meat_and_Milk Aroma_2x.png"
import noColoring from "../../assets/media/nutrition/No_Aritificial_Coloring_2x.png"
import poop from "../../assets/media/nutrition/Poop_2x.png"
import shinyDog from "../../assets/media/nutrition/Shiny_Coat_2x.png"
import smell from "../../assets/media/nutrition/Smell_2x.png"
import dogWithtounge from "../../assets/media/nutrition/Taste_2x.png"
import doctorDog from "../../assets/media/nutrition/VET_Checkup_2x.png"
import eye from "../../assets/media/nutrition/Vision_2x.png"
import plant from "../../assets/media/nutrition/Yucca_2x.png"
import omega from "../../assets/media/nutrition/Omega.png"


const iconList = [
    {
        id: 0,
        title: "VISION",
        blueIcon: eye,
        orangeIcon: noColoring,
        blueDescription: "Colors and shapes are not relevant to dogs for food palatability.",
        orangeDescription: "To ensure your furbabies' safety, NUTRI Chunks has no added artificial color."
    },
    {
        id: 1,
        title: "SMELL",
        blueIcon: smell,
        orangeIcon: meatAndmilk,
        blueDescription: "40% of a dog's brain is dedicated for their sense of smell - 10,000 times more sensitive than humans. They are attracted to good aroma.",
        orangeDescription: "To entice their highly sensitive sense of smell, NUTRI Chunks adult formula has a meaty aroma while the puppy variant has a milky aroma."
    }, 
    {
        id: 2,
        title: "TASTE",
        blueIcon: dogWithtounge,
        orangeIcon: beef,
        blueDescription: "The sense of taste in pets is significantly different versus human taste. The food must be specifically formulated for dogs. Variety is also important to avoid satiety.",
        orangeDescription: "To suit dogs' palate and appetite, NUTRI Chunks is formulated by pet nutrition experts who used pet grade ingredients."
    },
    {
        id: 3,
        title: "DIGESTIVE TRACT",
        blueIcon: xrayDog,
        orangeIcon: meat,
        blueDescription: "Human intestinal tract is a lot longer than a dogs and therefore the body has more time to absorb nutrients from more complex foods. ",
        orangeDescription: "To improve nutrient absorption, digestion and overall immune system, NUTRI Chunks contains natural prebiotics."
    },
    {
        id: 4,
        title: "PROTEIN",
        blueIcon: balance,
        orangeIcon: arrowUp,
        blueDescription: "Higher Protein isn't necessarily good. It's in the quality not quantity.",
        orangeDescription: "To facilitate growth and development, NUTRI Chunks contain optimum level of high quality proteins: 27% for Puppies and 18-22% for Adults."
    }, 
    {
        id: 5,
        title: "SHINY COAT",
        blueIcon: shinyDog,
        orangeIcon: omega,
        blueDescription: "Shiny coat is an indication of good health.",
        orangeDescription: "To help maintain healthy and shiny coat, NUTRI Chunks formula contains Omega 3 & 6."
    }, 
    {
        id: 6,
        title: "ODOR ELIMINATOR",
        blueIcon: poop,
        orangeIcon: plant,
        blueDescription: "The quality of the stool is a determinant of your dog’s health. A foul and difficult to clean poop can be a sign of bad health.",
        orangeDescription: "For better poop quality - less odor and easy-to-dispose, NUTRI Chunks contains Yucca Extract."
    }, 
    {
        id: 7,
        title: "NEED TO BE ACTIVE",
        blueIcon: runningDog,
        orangeIcon: atom,
        blueDescription: "Dogs needs to be active. An inactive dog is a clear sign of concern. Nutrition plays a vital part in your dog’s daily activity level.",
        orangeDescription: "To provide their daily energy, NUTRI Chunks contains ActivBoost Formula - a unique blend of Protein, Fat, Carbohydrates, Vitamins, and Minerals."
    }, 
    {
        id: 8,
        title: "VET VISIT",
        blueIcon: doctorDog,
        orangeIcon:thumbsupPaw,
        blueDescription: "Dogs must be brought to the vet regularly to ensure their health and well-being.",
        orangeDescription: "To ensure your furbabies' health and safety, NUTRI Chunks is 100% nutritionally balanced and complete."
    },  
]

export default iconList