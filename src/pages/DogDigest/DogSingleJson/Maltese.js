import BackgroundOne from "../../../assets/media/dog_digest/maltese/background/BG_00.jpeg"
import BackgroundTwo from "../../../assets/media/dog_digest/maltese/background/BG_01.jpeg"
import BackgroundThree from "../../../assets/media/dog_digest/maltese/background/BG_02.jpeg"
import BackgroundFour from "../../../assets/media/dog_digest/maltese/background/BG_03.jpeg"
import BackgroundFive from "../../../assets/media/dog_digest/maltese/background/BG_04.jpeg"
import BackgroundSix from "../../../assets/media/dog_digest/maltese/background/BG_05.jpeg"
import DogImage from "../../../assets/media/dog_digest/maltese/header/Maltese.png"
import ElementStatistics from "../../../assets/media/dog_digest/maltese/elements/OE_01.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/maltese/elements/Oe_02.svg"
import ElementRecommended from "../../../assets/media/dog_digest/maltese/elements/OE_03.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/maltese/elements/OE_04.svg"
import ElementGrooming from "../../../assets/media/dog_digest/maltese/elements/Oe_05.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/maltese/featured/ana-kai-1c5NjIC1SlM-unsplash.jpeg"
import featuredB from "../../../assets/media/dog_digest/maltese/featured/dallas-witt-CLnX32oQbp0-unsplash.jpeg"
import featuredC from "../../../assets/media/dog_digest/maltese/featured/flouffy-5QMmLrR_oVw-unsplash.jpeg"
import featuredD from "../../../assets/media/dog_digest/maltese/featured/joe-caione-qO-PIF84Vxg-unsplash.jpeg"
import featuredE from "../../../assets/media/dog_digest/maltese/featured/joe-caione-qO-PIF84Vxg-unsplash.jpeg"
import featuredF from "../../../assets/media/dog_digest/maltese/featured/treddy-chen--e89c0jcyww-unsplash.jpeg"

import bar20 from "../../../assets/media/dog_digest/common-assets/bar-20.svg"
import bar40 from "../../../assets/media/dog_digest/common-assets/bar-40.svg"
import bar50 from "../../../assets/media/dog_digest/common-assets/bar-50.svg"
import bar60 from "../../../assets/media/dog_digest/common-assets/bar-60.svg"
import bar80 from "../../../assets/media/dog_digest/common-assets/bar-80.svg"
import bar100 from "../../../assets/media/dog_digest/common-assets/bar-100.svg"


const energyLevelHigh = "Energy filled dogs need mental and physical stimulation. They are at their happiest when activities are action packed. They are the best buddies to bring with you when running, hiking, and other kinds of adventures."
const potentialPlayfulnessHigh = "From simple catch, sit and stay training, to more advanced lessons for tricks and agility, these dogs are up for the challenge. They are always looking forward to having playmates and playdates."
const exerciseNeedsHigh = "Dogs, and even humans, need exercise, yet these dog breeds are just fine in a less active lifestyle. They are not huge fans of adrenaline rush rather they are fond of solitude."
const intensityHigh = "Forceful dogs are virougus; they may strain themselves wearing the leash, break obstacle courses and devour their food. If not properly trained, they are not advised around kids and the elderly without supervision."
const energyLevelLow = "LowA"
const potentialPlayfulnessLow = "LowB"
const exerciseNeedsLow = "LowC"
const intensityLow = "LDowD"
const recommendedA = "NUTRI CHUNKS Coat Shine with real Salmon meat rich in Omega 3 & 6 for healthy skin and shinier coat."
const recommendedB = "For puppies try NUTRI CHUNKS Hi-Protein that contains 27% of high quality protein to support your puppies’ growth and development. With milky aroma for improved palatability, suitable for all breeds of puppies weaning to 12 months."

const maltese = {
    name: "MALTESE",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "A gentle and fearless dog breed, Maltese greets everyone as a friend. Maltese is not only a best companion for you but also a therapy dog. They are a competitive breed that exudes agility and obedience. They surely add spice as an excellent furry member.",
        dogDescriptionB:"Although they look delicate and aristocratic, Maltese can have a lot of energy. They have a long history as companion dogs so they require a lot of human attention and tend to suffer from separation anxiety. Be careful leaving them alone as they can become destructive. Maltese will want to please you but might be difficult to housetrain.",
        dogDescriptionC: "",
        extraElementA: "",
        extraElementB: "",
        extraElementC: "",
        extraElementD: "",
        extraElementE: "",
    },

    statisticsSection: {
        backgroundImage: BackgroundTwo,
        dogType: "Companioni Dogs",
        height: "8 to 10 inches ",
        weight: "3 kg",
        years: "12 to 15 years",
        extraElementA: ElementStatistics,
    },

    physicalNeeds: {
        backgroundImage: BackgroundThree,
        energyLevel: bar50,
        energyLevelDescription: energyLevelHigh,
        potentialPlayfulness: bar80,
        potentialPlayfulnessDescription: potentialPlayfulnessHigh,
        energyNeeds: bar20,
        exerciseNeedsDescription: exerciseNeedsHigh,
        intentsity: bar50,
        intentsityDescription: intensityHigh,
        extraElementA: ElementPhysicalNeeds,
        extraElementB: "",
    },

    recommendedVariants:{
        backgroundImage: BackgroundFour,
        productsImageA: HiProteinA,
        productsImageB: CoatshineA,
        productsImageC: "",
        recommendationA: recommendedA,
        recommendationB: recommendedB,
        extraElement: ElementRecommended
    },
    usualHealthProblem: {
        backgroundImage: BackgroundFive,
        healthlist: [
                "Patellar luxation",
                "Portosystemic liver shunt",
                "Progressive Retinal Atrophy (PRA)",
                "Hypoglycemia",
                "White Dog Shaker Syndrome",
                "Collapsed trachea",
                "Reverse sneezing"
            ],
        extraElement: ElementUsualHealth
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "Because of Maltese’s stunning pure white, silky, and straight coat, they are prone to unsightly stains on their fur and must be bathed weekly. Gently brush and comb their coat daily. This helps to prevent mats and keep him clean. Don’t forget to clean their eyes daily with warm water to prevent tear stains, and wash your Maltese beard after meals. \n\nWhile it is easy to take our Maltese for granted, they are very sensitive animals who need a lot of care. They have this down comfy coat you can't even feel but trust me - those ears will get dirty fast! You should check your Maltese ears at least once a week. Also, Maltese grow a lot of hair in their ears that need to be removed. Brush your Maltese teeth at least two or three times a week to remove tartar buildup and the bacteria that lurk inside them. Daily brushing is even better if you want to prevent gum disease and bad breath.",
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

export default maltese;