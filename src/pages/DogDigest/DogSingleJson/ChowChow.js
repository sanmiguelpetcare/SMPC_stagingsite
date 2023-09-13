import BackgroundOne from "../../../assets/media/dog_digest/chow-chow/background/00_BG_Option_1.jpeg"
import BackgroundTwo from "../../../assets/media/dog_digest/chow-chow/background/01_BG.jpeg"
import BackgroundThree from "../../../assets/media/dog_digest/chow-chow/background/02_BG.jpeg"
import BackgroundFour from "../../../assets/media/dog_digest/chow-chow/background/03_BG.jpeg"
import BackgroundFive from "../../../assets/media/dog_digest/chow-chow/background/04_BG.jpeg"
import BackgroundSix from "../../../assets/media/dog_digest/chow-chow/background/05_BG.jpeg"
import BackgroundSeven from "../../../assets/media/dog_digest/chow-chow/background/04_BG.jpeg"
import DogImage from "../../../assets/media/dog_digest/chow-chow/header/Chow chow.png"
import Kibble from "../../../assets/media/dog_digest/chow-chow/header/Masarap na Kibble.png"
import ElementOne from "../../../assets/media/dog_digest/chow-chow/header/Main_Flower.svg"
import ElementStatistics from "../../../assets/media/dog_digest/dobermann/elements/OE_1.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/dobermann/elements/OE_2.svg"
import ElementRecommended from "../../../assets/media/dog_digest/dobermann/elements/OE_3.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/dobermann/elements/OE_4.svg"
import ElementGrooming from "../../../assets/media/dog_digest/dobermann/elements/OE_5.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/chow-chow/featured/chow-chow-01.jpeg"
import featuredB from "../../../assets/media/dog_digest/chow-chow/featured/chow-chow-02.jpeg"
import featuredC from "../../../assets/media/dog_digest/chow-chow/featured/chow-chow-03.jpeg"
import featuredD from "../../../assets/media/dog_digest/chow-chow/featured/chow-chow-04.jpeg"
import featuredE from "../../../assets/media/dog_digest/chow-chow/featured/chow-chow-05.jpeg"
import featuredF from "../../../assets/media/dog_digest/chow-chow/featured/chow-chow-06.jpeg"

import bar20 from "../../../assets/media/dog_digest/common-assets/bar-20.svg"
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
const recommendedA = "Promotes better digestion with Optimum energy and nourishment for adult dogs. Specifically formulated for dogs' satiety, NUTRI CHUNKS Optimum Adult comes in Lamb and Beef + Chicken Liver!"
const recommendedB = "For puppies try NUTRI CHUNKS Hi-Protein that contains 27% of high quality protein to support your puppies’ growth and development. With milky aroma for improved palatability, suitable for all breeds of puppies weaning to 12 months."

const chowChow = {
    name: "CHOW CHOW",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "Chow-chow is an ancient breed that originated from Mongolia and China. They were favored by the nobles but were also hunted and considered exotic for their coat and meat.",
        dogDescriptionB:"Chow-chows are cat-like dogs; both in physical appearance and personality. Rough and thick-coated chows have a mane resembling a lion. Although they look fluffy, they are not the cuddle type of toy dog. They are aloof, confident, and independent.",
        dogDescriptionC: "They are not sociable but very loyal to their owners. They are not aggressive but are very possessive and suspicious of the stranger, which makes them a fitting watchdog. They are best with people who can take the time to care for their glorified coat and be satisfied with a reserved companion.",
        extraElementA: Kibble,
        extraElementB: ElementOne,
        extraElementC: ElementOne,
        extraElementD: "",
        extraElementE: "",
    },

    statisticsSection: {
        backgroundImage: BackgroundTwo,
        dogType: "Non-sporting Dogs",
        height: "17 to 20 inches ",
        weight: "18 to 32 kg",
        years: "12 to 15 years",
        extraElementA: ElementStatistics,
    },

    physicalNeeds: {
        backgroundImage: BackgroundThree,
        energyLevel: bar40,
        energyLevelDescription: energyLevelHigh,
        potentialPlayfulness: bar20,
        potentialPlayfulnessDescription: potentialPlayfulnessHigh,
        energyNeeds: bar40,
        exerciseNeedsDescription: exerciseNeedsHigh,
        intentsity: bar40,
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
        extraElement: ElementRecommended
    },
    usualHealthProblem: {
        backgroundImage: BackgroundFive,
        healthlist: [
                "Canine Hip Dysplasia (CHD)",
                "Entropion"
            ],
        extraElement: ElementUsualHealth
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "Chows come in two coat types: rough and smooth. Both types are seasonal shedders. They may shed even more in warm climates. Giving chows a daily brush will help you manage cleaning after their fallen fur. They are also regarded as one of the cleanest breeds because they do not have a doggy odor.",
        extraElement: ElementGrooming
    },
    featured: {
        backgroundImage: BackgroundSeven,
        imageOne: featuredA,
        imageTwo: featuredB,
        imageThree: featuredC,
        imageFour: featuredD,
        imageFive: featuredE,
        imageSix: featuredF,
        extraElement: ""
    }
}

export default chowChow;