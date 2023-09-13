import BackgroundOne from "../../../assets/media/dog_digest/mini-pinscher/background/BG_0.jpeg"
import BackgroundTwo from "../../../assets/media/dog_digest/mini-pinscher/background/BG_1.jpeg"
import BackgroundThree from "../../../assets/media/dog_digest/mini-pinscher/background/BG_2.jpeg"
import BackgroundFour from "../../../assets/media/dog_digest/mini-pinscher/background/BG_3.jpeg"
import BackgroundFive from "../../../assets/media/dog_digest/mini-pinscher/background/BG_4.jpeg"
import BackgroundSix from "../../../assets/media/dog_digest/mini-pinscher/background/BG_5.jpeg"
import BackgroundSeven from "../../../assets/media/dog_digest/mini-pinscher/background/BG_4.jpeg"
import DogImage from "../../../assets/media/dog_digest/mini-pinscher/header/Min Pin.png" 
import Kibble from "../../../assets/media/dog_digest/labrador/header/Masarap na Kibble.png"
import ElementOne from "../../../assets/media/dog_digest/mini-pinscher/elements/0_Ship1.svg"
import ElementTwo from "../../../assets/media/dog_digest/mini-pinscher/elements/0_Ship2.svg"
import ElementThree from "../../../assets/media/dog_digest/mini-pinscher/elements/0_Ship3.svg"
import ElementStatistics from "../../../assets/media/dog_digest/mini-pinscher/elements/OE_1.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/mini-pinscher/elements/OE_2.svg"
import ElementRecommended from "../../../assets/media/dog_digest/mini-pinscher/elements/OE_3.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/mini-pinscher/elements/OE_4.svg"
import ElementGrooming from "../../../assets/media/dog_digest/mini-pinscher/elements/OE_5.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/mini-pinscher/featured/minipin-1.jpeg"
import featuredB from "../../../assets/media/dog_digest/mini-pinscher/featured/minipin-2.jpeg"
import featuredC from "../../../assets/media/dog_digest/mini-pinscher/featured/minipin-3.jpeg"
import featuredD from "../../../assets/media/dog_digest/mini-pinscher/featured/minipin-4.jpeg"
import featuredE from "../../../assets/media/dog_digest/mini-pinscher/featured/minipin-6.jpeg"
import featuredF from "../../../assets/media/dog_digest/mini-pinscher/featured/minipin.jpeg"

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
const recommendedA = "Promotes better digestion with Optimum energy and nourishment for adult dogs. Specifically formulated for dogs' satiety, NUTRI CHUNKS Optimum Adult comes in Lamb and Beef + Chicken Liver!"
const recommendedB = "For puppies try NUTRI CHUNKS Hi-Protein that contains 27% of high quality protein to support your puppies’ growth and development. With milky aroma for improved palatability, suitable for all breeds of puppies weaning to 12 months."

const miniPinscher = {
    name: "MINI PINSCHER",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "It’s a common misconception that Mini Pins are the smaller version of Dobermans. Mini Pins are actually an older breed. Mini Pins originated from Germany. The \"King of Toys\" might chase and attack small objects because they used to be bred to hunt vermin.",
        dogDescriptionB: "They are quite challenging to handle especially for first-time dog owners. Barking can also be an issue if they are left alone or bored. Moreover, they will definitely assume the alpha role if their owners won’t.",
        dogDescriptionC: "Mini Pins are perfect for those who can keep up with their almost inexhaustible energy for activity. They can be reliable watchdogs and friendly hosts to your guests with proper socialization.",
        extraElementA: "",
        extraElementB: ElementOne,
        extraElementC: ElementTwo,
        extraElementD: ElementThree,
        extraElementE: "",
    },

    statisticsSection: {
        backgroundImage: BackgroundTwo,
        dogType: "Companion Dogs",
        height: "10 to 12 inches",
        weight: "3 tp 6 kg",
        years: "10 to 14 years",
        extraElementA: ElementStatistics,
    },

    physicalNeeds: {
        backgroundImage: BackgroundThree,
        energyLevel: bar80,
        energyLevelDescription: energyLevelHigh,
        potentialPlayfulness: bar100,
        potentialPlayfulnessDescription: potentialPlayfulnessHigh,
        energyNeeds: bar80,
        exerciseNeedsDescription: exerciseNeedsHigh,
        intentsity: bar60,
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
            "Progressive Retinal Atrophy (PRA)",
            "Legg-Calve-Perthes Disease",
            "Epilepsy",
            "Hypothyroidism",
            "Patellar Luxation"
        ],
        extraElement: ElementUsualHealth,
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "Given the Min Pins’ size, they are easy to clean. You don’t want to overdo baths, invite unintended skin diseases because you have stripped their natural oils. Even brushing at least once a week is good enough. A grooming mitt and a soft bristled brush suits Min Pin’s short fur. Do not forget to check their ears, nails and places where ticks hide. Most importantly, associate grooming to a positive experience.",
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

export default miniPinscher;