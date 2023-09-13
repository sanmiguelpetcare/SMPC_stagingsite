import BackgroundOne from "../../../assets/media/dog_digest/mutt/background/BG_0.jpeg"
import BackgroundTwo from "../../../assets/media/dog_digest/mutt/background/BG_1.jpeg"
import BackgroundThree from "../../../assets/media/dog_digest/mutt/background/BG_2.jpeg"
import BackgroundFour from "../../../assets/media/dog_digest/mutt/background/BG_3.jpeg"
import BackgroundFive from "../../../assets/media/dog_digest/mutt/background/BG_4.jpeg"
import BackgroundSix from "../../../assets/media/dog_digest/mutt/background/BG_5.jpeg"
import BackgroundSeven from "../../../assets/media/dog_digest/mutt/background/BG_4.jpeg"
import DogImage from "../../../assets/media/dog_digest/mutt/header/Mutt.png" 
import Kibble from "../../../assets/media/dog_digest/mutt/header/Masarap na Kibble.png"
import ElementOne from "../../../assets/media/dog_digest/pug/header/Plant1.svg"
import ElementTwo from "../../../assets/media/dog_digest/pug/header/Plant 2.svg"
import ElementStatistics from "../../../assets/media/dog_digest/mutt/elements/OE_1.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/mutt/elements/OE_2.svg"
import ElementRecommended from "../../../assets/media/dog_digest/mutt/elements/OE_3.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/mutt/elements/OE_4.svg"
import ElementGrooming from "../../../assets/media/dog_digest/mutt/elements/OE_5.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/mutt/featured/mutt-1.png"
import featuredB from "../../../assets/media/dog_digest/mutt/featured/mutt-2.png"
import featuredC from "../../../assets/media/dog_digest/mutt/featured/mutt-3.png"
import featuredD from "../../../assets/media/dog_digest/mutt/featured/mutt-4.png"
import featuredE from "../../../assets/media/dog_digest/mutt/featured/mutt-5.png"
import featuredF from "../../../assets/media/dog_digest/mutt/featured/mutt-6.png"

import Bar20 from "../../../assets/media/dog_digest/common-assets/bar-20.svg"
import bar40 from "../../../assets/media/dog_digest/common-assets/bar-40.svg"
import bar50 from "../../../assets/media/dog_digest/common-assets/bar-50.svg"
import bar60 from "../../../assets/media/dog_digest/common-assets/bar-60.svg"
import bar80 from "../../../assets/media/dog_digest/common-assets/bar-80.svg"
import bar100 from "../../../assets/media/dog_digest/common-assets/bar-100.svg"


const energyLevelHigh = "Low-energy dogs love lounging on the couch as you binge watch your all-time favorite series. They are up for cuddles or naps on your lap. These dogs are ideal company for a quiet afternoon."
const potentialPlayfulnessHigh = "Amusing these dogs with sorts of games will not be a problem. They will not be tailing and begging you around to kill their boredom. They can be more aloof and independent from the pact and humans."
const exerciseNeedsHigh = "Dogs, and even humans, need exercise, yet these dog breeds are just fine in a less active lifestyle. They are not huge fans of adrenaline rush rather they are fond of solitude."
const intensityHigh = "Gentle natured dogs are easy to handle.They are family dogs - best with kids, elderly and even other animals. Since, they are not loud and rowdy, they are a manageable company when you live in an apartment."
const energyLevelLow = "LowA"
const potentialPlayfulnessLow = "LowB"
const exerciseNeedsLow = "LowC"
const intensityLow = "LDowD"
const recommendedA = "NUTRI CHUNKS Coat Shine with real Salmon meat rich in Omega 3 & 6 for healthy skin and shinier coat."
const recommendedB = "For puppies try NUTRI CHUNKS Hi-Protein that contains 27% of high quality protein to support your puppies’ growth and development. With milky aroma for improved palatability, suitable for all breeds of puppies weaning to 12 months."

const mutt = {
    name: "MUTT",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "Mutts are known by a couple of names: mixed-breeds, crossbreeds, hybrids, mongrels, and half-breeds. Mixed breeds are neither special nor lesser of a kind than pure breeds or pedigrees.",
        dogDescriptionB: "Having a diverse gene pool is generally considered a health and survival advantage. Mutts are observed to have stronger immunity, not susceptible to diseases and erratic weather, than pure breeds.",
        dogDescriptionC: "They come in all sizes, shapes, and colors. Finding the best dog should not be based on their looks. Unconditional love and acceptance of mutts will be as rewarding as any dog.",
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
        years: "8 to 15 years",
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
            "Allergies",
            "Hip Dysplasia",
            "Cancer",
            "Ear Infections"
        ],
        extraElement: ElementUsualHealth,
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "Like any other dog, mutts need basic maintenance. This covers bathing only when necessary, brushing of teeth, clipping of nails, and cleaning of ears. As much as possible, make grooming a positive experience for your dogs. Introduce them to regular hygiene routines as young as possible.",
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

export default mutt;