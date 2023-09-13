import BackgroundOne from "../../../assets/media/dog_digest/siberian-husky/background/BG1.jpeg"
import BackgroundTwo from "../../../assets/media/dog_digest/siberian-husky/background/BG2.jpeg"
import BackgroundThree from "../../../assets/media/dog_digest/siberian-husky/background/BG3.jpeg"
import BackgroundFour from "../../../assets/media/dog_digest/siberian-husky/background/BG4.jpeg"
import BackgroundFive from "../../../assets/media/dog_digest/siberian-husky/background/BG5.jpeg"
import BackgroundSix from "../../../assets/media/dog_digest/siberian-husky/background/BG6.jpeg"
import BackgroundSeven from "../../../assets/media/dog_digest/siberian-husky/background/BG5.jpeg"
import DogImage from "../../../assets/media/dog_digest/siberian-husky/header/Siberian Husky.png" 
import Kibble from "../../../assets/media/dog_digest/siberian-husky/header/siberian-husky-1.png"
import ElementOne from "../../../assets/media/dog_digest/siberian-husky/elements/Snowflake1.svg"
import ElementTwo from "../../../assets/media/dog_digest/siberian-husky/elements/Snowflake2.svg"
import ElementThree from "../../../assets/media/dog_digest/siberian-husky/elements/Snowflake3.svg"
import ElementFour from "../../../assets/media/dog_digest/siberian-husky/elements/Snowflake4.svg"
import ElementStatistics from "../../../assets/media/dog_digest/siberian-husky/elements/OE_1.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/siberian-husky/elements/OE_2.svg"
import ElementRecommended from "../../../assets/media/dog_digest/siberian-husky/elements/OE_3.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/siberian-husky/elements/OE_4.svg"
import ElementGrooming from "../../../assets/media/dog_digest/siberian-husky/elements/OE_5.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/siberian-husky/featured/siberian-husky-1.jpeg"
import featuredB from "../../../assets/media/dog_digest/siberian-husky/featured/siberian-husky-2.jpeg"
import featuredC from "../../../assets/media/dog_digest/siberian-husky/featured/siberian-husky-3.jpeg"
import featuredD from "../../../assets/media/dog_digest/siberian-husky/featured/siberian-husky-4.jpeg"
import featuredE from "../../../assets/media/dog_digest/siberian-husky/featured/siberian-husky-5.jpeg"
import featuredF from "../../../assets/media/dog_digest/siberian-husky/featured/siberian-husky-6.jpeg"

import Bar20 from "../../../assets/media/dog_digest/common-assets/bar-20.svg"
import bar40 from "../../../assets/media/dog_digest/common-assets/bar-40.svg"
import bar50 from "../../../assets/media/dog_digest/common-assets/bar-50.svg"
import bar60 from "../../../assets/media/dog_digest/common-assets/bar-60.svg"
import bar80 from "../../../assets/media/dog_digest/common-assets/bar-80.svg"
import bar100 from "../../../assets/media/dog_digest/common-assets/bar-100.svg"


const energyLevelHigh = "Energy filled dogs need mental and physical stimulation. They are at their happiest when activities are action packed. They are the best buddies to bring with you when running, hiking, and other kinds of adventures."
const potentialPlayfulnessHigh = "From simple catch, sit and stay training, to more advanced lessons for tricks and agility, these dogs are up for the challenge. They are always looking forward to having playmates and playdates."
const exerciseNeedsHigh = "Pumped up dogs who are very agile,active and prefer outdoors. They are historically bred to hunt, work or sport. Though all dogs need exercise, they require regular exercise not just to keep them in shape and healthy."
const intensityHigh = "Forceful dogs are virougus; they may strain themselves wearing the leash, break obstacle courses and devour their food. If not properly trained, they are not advised around kids and the elderly without supervision."
const energyLevelLow = "LowA"
const potentialPlayfulnessLow = "LowB"
const exerciseNeedsLow = "LowC"
const intensityLow = "LDowD"
const recommendedA = "NUTRI CHUNKS Coat Shine with real Salmon meat rich in Omega 3 & 6 for healthy skin and shinier coat."
const recommendedB = "For puppies try NUTRI CHUNKS Hi-Protein that contains 27% of high quality protein to support your puppies’ growth and development. With milky aroma for improved palatability, suitable for all breeds of puppies weaning to 12 months."

const siberianHusky = {
    name: "SIBERIAN HUSKY",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "The Chukchi people of Siberia, a district in Russia, bred and raised Siberian Huskies. Wolf looking, striking eyes, handsome face, and graceful gait are the usual reasons people are interested to raise one.",
        dogDescriptionB: "However, Huskies are built for cooler weather. This explains their double coat – called “undercoat” and “guard hair”. Raising a Husky in tropical places can be challenging. Best to provide air conditioning to avoid them from overheating.",
        dogDescriptionC: "Huskies are pack dogs, so owning one means you have to be the leader or the alpha. They hate being left alone, they are rather friendly and not as good being guard dogs.",
        extraElementA: Kibble,
        extraElementB: ElementThree,
        extraElementC: ElementFour,
        extraElementD: "",
        extraElementE: "",
    },

    statisticsSection: {
        backgroundImage: BackgroundTwo,
        dogType: "Working Dogs",
        height: "20 to 23 inches",
        weight: "16 to 27kg",
        years: "12 to 15 years",
        extraElementA: ElementStatistics,
    },

    physicalNeeds: {
        backgroundImage: BackgroundThree,
        energyLevel: bar100,
        energyLevelDescription: energyLevelHigh,
        potentialPlayfulness: bar100,
        potentialPlayfulnessDescription: potentialPlayfulnessHigh,
        energyNeeds: bar100,
        exerciseNeedsDescription: exerciseNeedsHigh,
        intentsity: bar60,
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
        extraElement: ElementRecommended,
    },

    usualHealthProblem: {
        backgroundImage: BackgroundFive,
        healthlist: [
            "Cataracts",
            "Corneal Dystrophy",
            "Progressive Retinal Atrophy (PRA)"
        ],
        extraElement: ElementUsualHealth,
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "Huskies are self-cleaning dogs. They are not smelly nor need frequent baths. Make sure you have quality hair products to preserve the natural oils of their double coat. Expect shedding so invest in a good vacuum cleaner. They even shed more in warm climates than in cooler temperatures. Brush them daily to avoid fur matting, take out dead hairs, and induce hair growth.",
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

export default siberianHusky;