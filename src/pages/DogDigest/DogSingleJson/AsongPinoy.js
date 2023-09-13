import BackgroundOne from "../../../assets/media/dog_digest/asong-pinoy/background/BG1.jpeg"
import BackgroundTwo from "../../../assets/media/dog_digest/asong-pinoy/background/BG2.jpeg"
import BackgroundThree from "../../../assets/media/dog_digest/asong-pinoy/background/BG3.jpeg"
import BackgroundFour from "../../../assets/media/dog_digest/asong-pinoy/background/BG4.jpeg"
import BackgroundFive from "../../../assets/media/dog_digest/asong-pinoy/background/BG5.jpeg"
import BackgroundSix from "../../../assets/media/dog_digest/asong-pinoy/background/BG6.jpeg"
import BackgroundSeven from "../../../assets/media/dog_digest/asong-pinoy/background/BG5.jpeg"
import DogImage from "../../../assets/media/dog_digest/asong-pinoy/header/Aspin.png" 
import Kibble from "../../../assets/media/dog_digest/asong-pinoy/header/Masarap na Kibble.png"
import ElementOne from "../../../assets/media/dog_digest/asong-pinoy/elements/Grass 1.svg"
import ElementTwo from "../../../assets/media/dog_digest/asong-pinoy/elements/Grass 2.svg"
import ElementStatistics from "../../../assets/media/dog_digest/asong-pinoy/elements/OE_1.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/asong-pinoy/elements/OE_2.svg"
import ElementRecommended from "../../../assets/media/dog_digest/asong-pinoy/elements/OE_3.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/asong-pinoy/elements/OE_4.svg"
import ElementGrooming from "../../../assets/media/dog_digest/asong-pinoy/elements/OE_5.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/asong-pinoy/featured/aspin-1.jpeg"
import featuredB from "../../../assets/media/dog_digest/asong-pinoy/featured/aspin-2.jpeg"
import featuredC from "../../../assets/media/dog_digest/asong-pinoy/featured/aspin-3.jpeg"
import featuredD from "../../../assets/media/dog_digest/asong-pinoy/featured/aspin-4.jpeg"
import featuredE from "../../../assets/media/dog_digest/asong-pinoy/featured/aspin-5.jpeg"
import featuredF from "../../../assets/media/dog_digest/asong-pinoy/featured/aspin-6.jpeg"

import Bar20 from "../../../assets/media/dog_digest/common-assets/bar-20.svg"
import bar40 from "../../../assets/media/dog_digest/common-assets/bar-40.svg"
import bar50 from "../../../assets/media/dog_digest/common-assets/bar-50.svg"
import bar60 from "../../../assets/media/dog_digest/common-assets/bar-60.svg"
import bar80 from "../../../assets/media/dog_digest/common-assets/bar-80.svg"
import bar100 from "../../../assets/media/dog_digest/common-assets/bar-100.svg"


const energyLevelHigh = "Low-energy dogs love lounging on the couch as you binge watch your all-time favorite series. They are up for cuddles or naps on your lap. These dogs are ideal company for a quiet afternoon."
const potentialPlayfulnessHigh = "Amusing these dogs with sorts of games will not be a problem. They will not be tailing and begging you around to kill their boredom. They can be more aloof and independent from the pact and humans."
const exerciseNeedsHigh = "Dogs, and even humans, need exercise, yet these dog breeds are just fine in a less active lifestyle. They are not huge fans of adrenaline rush rather they are fond of solitude."
const intensityHigh = "Gentle natured dogs are easy to handle. They are family dogs - best with kids, elderly and even other animals. Since they are not loud and rowdy, they are a manageable company when you live in an apartment."
const energyLevelLow = "LowA"
const potentialPlayfulnessLow = "LowB"
const exerciseNeedsLow = "LowC"
const intensityLow = "LDowD"
const recommendedA = "NUTRI CHUNKS MAINTENANCE in Beef flavor is your everyday budget-friendly, complete and balanced dog food!"
const recommendedB = "For puppies try NUTRI CHUNKS Hi-Protein that contains 27% of high quality protein to support your puppies’ growth and development. With milky aroma for improved palatability, suitable for all breeds of puppies weaning to 12 months."

const aspin = {
    name: "ASPIN",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "Aspins, derived from “Asong Pinoy”, are native dogs that are usually seen on the streets, also known as “Askals” (asong kalye). They are customarily watchdogs (called bantay) among Philippine households.",
        dogDescriptionB:"These dogs are well-adapted to the local climate. They are low shedders, more resistant to diseases, and generally have high immunity.",
        dogDescriptionC: "Proven and tested, Aspins’ value is far beyond the streets and backyards. For better treatment and recognition, its name was updated from “Askal” to “Aspin”. A fitting name that embodies what Pinoys are - agile, resilient, and fun-loving.",
        extraElementA: Kibble,
        extraElementB: "",
        extraElementC: "",
        extraElementD: "",
        extraElementE: "",
    },

    statisticsSection: {
        backgroundImage: BackgroundTwo,
        dogType: "Mixed Breed Dogs",
        height: "",
        weight: "",
        years: "8 to 10 years",
        extraElementA: ElementStatistics,
    },

    physicalNeeds: {
        backgroundImage: BackgroundThree,
        energyLevel: bar50,
        energyLevelDescription: energyLevelHigh,
        potentialPlayfulness: bar50,
        potentialPlayfulnessDescription: potentialPlayfulnessHigh,
        energyNeeds: bar50,
        exerciseNeedsDescription: exerciseNeedsHigh,
        intentsity: bar50,
        intentsityDescription: intensityHigh,
        extraElementA: ElementPhysicalNeeds,
        extraElementB: ElementTwo,
    },

    recommendedVariants:{
        backgroundImage: BackgroundFour,
        productsImageA: HiProteinA,
        productsImageB: MaintenanceA,
        productsImageC: "",
        recommendationA: recommendedA,
        recommendationB: recommendedB,
        extraElement: ElementRecommended,
    },

    usualHealthProblem: {
        backgroundImage: BackgroundFive,
        healthlist: [],
        extraElement: ElementUsualHealth,
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "Aspins are definitely low maintenance dogs. They are short coated, and shed less fur. Compared to foreign and exotic breeds, they are healthier and far more manageable since they are acclimatized. They need minimal and basic dog grooming. which means bathing once in every 1-2 weeks, brushing of teeth, trimming of nails, and cleaning of ears. They are basically practical to own and raise.",
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

export default aspin;