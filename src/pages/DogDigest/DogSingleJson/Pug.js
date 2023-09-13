import BackgroundOne from "../../../assets/media/dog_digest/pug/background/BG_0.jpeg"
import BackgroundTwo from "../../../assets/media/dog_digest/pug/background/BG_1.jpeg"
import BackgroundThree from "../../../assets/media/dog_digest/pug/background/BG_2.jpeg"
import BackgroundFour from "../../../assets/media/dog_digest/pug/background/BG_3.jpeg"
import BackgroundFive from "../../../assets/media/dog_digest/pug/background/BG_4.jpeg"
import BackgroundSix from "../../../assets/media/dog_digest/pug/background/BG_5.jpeg"
import BackgroundSeven from "../../../assets/media/dog_digest/pug/background/BG_4.jpeg"
import DogImage from "../../../assets/media/dog_digest/pug/header/Pug.png" 
import Kibble from "../../../assets/media/dog_digest/pug/header/Masarap na Kibble.png"
import ElementOne from "../../../assets/media/dog_digest/pug/header/Plant1.svg"
import ElementTwo from "../../../assets/media/dog_digest/pug/header/Plant 2.svg"
import ElementStatistics from "../../../assets/media/dog_digest/pug/elements/OE_1.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/pug/elements/OE_2.svg"
import ElementRecommended from "../../../assets/media/dog_digest/pug/elements/OE_3.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/pug/elements/OE_4.svg"
import ElementGrooming from "../../../assets/media/dog_digest/pug/elements/OE_5.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/pug/featured/pug-1.jpeg"
import featuredB from "../../../assets/media/dog_digest/pug/featured/pug-2.jpeg"
import featuredC from "../../../assets/media/dog_digest/pug/featured/pug-3.jpeg"
import featuredD from "../../../assets/media/dog_digest/pug/featured/pug-4.jpeg"
import featuredE from "../../../assets/media/dog_digest/pug/featured/pug-5.jpeg"
import featuredF from "../../../assets/media/dog_digest/pug/featured/pug-6.jpeg"

import Bar20 from "../../../assets/media/dog_digest/common-assets/bar-20.svg"
import bar40 from "../../../assets/media/dog_digest/common-assets/bar-40.svg"
import bar50 from "../../../assets/media/dog_digest/common-assets/bar-50.svg"
import bar60 from "../../../assets/media/dog_digest/common-assets/bar-60.svg"
import bar80 from "../../../assets/media/dog_digest/common-assets/bar-80.svg"
import bar100 from "../../../assets/media/dog_digest/common-assets/bar-100.svg"


const energyLevelHigh = "Low-energy dogs love lounging on the couch as you binge watch your all-time favorite series. They are up for cuddles or naps on your lap. These dogs are ideal company for a quiet afternoon."
const potentialPlayfulnessHigh = "From simple catch, sit and stay training, to more advanced lessons for tricks and agility, these dogs are up for the challenge. They are always looking forward to having playmates and playdates."
const exerciseNeedsHigh = "Dogs, and even humans, need exercise, yet these dog breeds are just fine in a less active lifestyle. They are not huge fans of adrenaline rush rather they are fond of solitude."
const intensityHigh = "Forceful dogs are virougus; they may strain themselves wearing the leash, break obstacle courses and devour their food. If not properly trained, they are not advised around kids and the elderly without supervision."
const energyLevelLow = "LowA"
const potentialPlayfulnessLow = "LowB"
const exerciseNeedsLow = "LowC"
const intensityLow = "LDowD"
const recommendedA = "Promotes better digestion with Optimum energy and nourishment for adult dogs. Specifically formulated for dogs' satiety, NUTRI CHUNKS Optimum Adult comes in Lamb and Beef + Chicken Liver!"
const recommendedB = "For puppies try NUTRI CHUNKS Hi-Protein that contains 27% of high quality protein to support your puppies’ growth and development. With milky aroma for improved palatability, suitable for all breeds of puppies weaning to 12 months."

const pug = {
    name: "PUG",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "Pugs were noble companions, from the Chinese emperors to Marie Antoinette and Holland’s House of Orange, to name a few. Pugs’ name originated from the Latin word “fist”, due to their face’s resemblance to a human fist.",
        dogDescriptionB: "With pug's distinctive faces, comes their comical expressions. These endearing and mischievous dogs love to be pampered; lounging, loafing, and following you around the house is what they are good at.",
        dogDescriptionC: "Pugs love to eat, and will most likely be obese if not monitored. Best to keep them indoors. Since they cannot tolerate extreme weather and are susceptible to breathing and heart problems.",
        extraElementA: Kibble,
        extraElementB: ElementOne,
        extraElementC: ElementTwo,
        extraElementD: "",
        extraElementE: "",
    },

    statisticsSection: {
        backgroundImage: BackgroundTwo,
        dogType: "Companion Dogs",
        height: "10 to 14 inches",
        weight: "6 to 8 kg",
        years: "12 to 15 years",
        extraElementA: ElementStatistics,
    },

    physicalNeeds: {
        backgroundImage: BackgroundThree,
        energyLevel: bar50,
        energyLevelDescription: energyLevelHigh,
        potentialPlayfulness: bar100,
        potentialPlayfulnessDescription: potentialPlayfulnessHigh,
        energyNeeds: bar50,
        exerciseNeedsDescription: exerciseNeedsHigh,
        intentsity: bar80,
        intentsityDescription: intensityHigh,
        extraElementA: ElementPhysicalNeeds,
        extraElementB: "",
    },

    recommendedVariants:{
        backgroundImage: BackgroundFour,
        productsImageA: OlambA,
        productsImageB: ObeefA,
        productsImageC: HiProteinA,
        recommendationA: recommendedA,
        recommendationB: recommendedB,
        extraElement: ElementRecommended,
    },

    usualHealthProblem: {
        backgroundImage: BackgroundFive,
        healthlist: [
            "Cheyletiella Dermatitis (Walking Dandruff)",
            "Pug Dog Encephalitis (PDE)",
            "Epilepsy",
            "Nerve Degeneration",
            "Dry Eye",
            "Eye Problems",
            "Demodectic Mange",
            "Staph Infection",
            "Yeast Infection",
            "Hemi-vertebrae",
            "Hip Dysplasia",
            "Legg-Perthes Disease",
            "Patellar Luxation",
            "Vaccination Sensitivity"
        ],
        extraElement: ElementUsualHealth,
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "Pugs need low to moderate maintenance. Contrary to popular belief, pugs actually shed even; although short-coated, they require at least twice a week of brushing. Their facial wrinkles are also ideal nooks for yeast and bacteria to thrive. Better to keep these facial folds clean and dry. Give them a bath only when necessary. Trim their nails to avoid pain and discomfort.",
        extraElement: ElementGrooming
    },
    featured: {
        backgroundImage: BackgroundFive,
        imageOne: featuredA,
        imageTwo: featuredB,
        imageThree: featuredC,
        imageFour: featuredD,
        imageFive: featuredE,
        imageSix: featuredF,
        extraElement: ""
    }
}

export default pug;