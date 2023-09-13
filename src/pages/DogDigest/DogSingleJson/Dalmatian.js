import BackgroundOne from "../../../assets/media/dog_digest/dalmatian/background/BG_0.jpeg"
import BackgroundTwo from "../../../assets/media/dog_digest/dalmatian/background/BG_1.jpeg"
import BackgroundThree from "../../../assets/media/dog_digest/dalmatian/background/BG_2.jpeg"
import BackgroundFour from "../../../assets/media/dog_digest/dalmatian/background/BG_3.jpeg"
import BackgroundFive from "../../../assets/media/dog_digest/dalmatian/background/BG_4.jpeg"
import BackgroundSix from "../../../assets/media/dog_digest/dalmatian/background/BG_5.jpeg"
import BackgroundSeven from "../../../assets/media/dog_digest/dalmatian/background/BG_4.jpeg"
import DogImage from "../../../assets/media/dog_digest/dalmatian/header/Dalmatian.png" 
import Kibble from "../../../assets/media/dog_digest/dalmatian/header/Masarap na Kibble.png"
import ElementOne from "../../../assets/media/dog_digest/poodle/elements/OE_0.svg"
import ElementStatistics from "../../../assets/media/dog_digest/dalmatian/elements/OE_1.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/dalmatian/elements/OE_2.svg"
import ElementRecommended from "../../../assets/media/dog_digest/dalmatian/elements/OE_3.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/dalmatian/elements/OE_4.svg"
import ElementGrooming from "../../../assets/media/dog_digest/dalmatian/elements/OE_5.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/dalmatian/featured/dalmatian-1.jpeg"
import featuredB from "../../../assets/media/dog_digest/dalmatian/featured/dalmatian-2.jpeg"
import featuredC from "../../../assets/media/dog_digest/dalmatian/featured/dalmatian-3.jpeg"
import featuredD from "../../../assets/media/dog_digest/dalmatian/featured/dalmatian-4.jpeg"
import featuredE from "../../../assets/media/dog_digest/dalmatian/featured/dalmatian-5.jpeg"
import featuredF from "../../../assets/media/dog_digest/dalmatian/featured/dalmatian-6.jpeg"

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
const recommendedA = "​Promotes better digestion with Optimum energy and nourishment for adult dogs. Specifically formulated for dogs' satiety, NUTRI CHUNKS Optimum Adult comes in Lamb and Beef + Chicken Liver!"
const recommendedB = "For puppies try NUTRI CHUNKS Hi-Protein that contains 27% of high quality protein to support your puppies’ growth and development. With milky aroma for improved palatability, suitable for all breeds of puppies weaning to 12 months."

const dalmatian = {
    name: "DALMATIAN",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "With its black spots all over its white fur, Dalmatians are not hard to distinguish. They are also popularized by Disney’s 101 Dalmatians.",
        dogDescriptionB: "In fact, newly-born Dalmatians are completely white. Their spots start to appear around two (2) weeks. Each Dalmatian has a unique pattern of spots.",
        dogDescriptionC: "Dalmatians used to be coach or carriage dogs. They guard and alert the carriage from bandits which the horses transport. This explains why Dalmatians are can be dependable watchdogs and firehouse dogs. From being gallant and dignified patrollers, Dalmatians are also goofy and friendly with proper socialization.",
        extraElementA: Kibble,
        extraElementB: "",
        extraElementC: "",
        extraElementD: "",
        extraElementE: "",
    },

    statisticsSection: {
        backgroundImage: BackgroundTwo,
        dogType: "Companion Dogs",
        height: "19 to 24 inches",
        weight: "22 to 25 kg",
        years: "12 to 15 years",
        extraElementA: ElementStatistics,
    },

    physicalNeeds: {
        backgroundImage: BackgroundThree,
        energyLevel: bar100,
        energyLevelDescription: energyLevelHigh,
        potentialPlayfulness: bar80,
        potentialPlayfulnessDescription: potentialPlayfulnessHigh,
        energyNeeds: bar100,
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
            "Hereditary Deafness",
            "Urolithiasis",
            "Skin Allergies",
            "Hip Dysplasia",
            "Elbow dysplasia",
            "Iris Sphincter Dysplasia"
        ],
        extraElement: ElementUsualHealth,
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "Dalmatians' appeal lies on its spots. Maintaining shiny black spots on a white background is quite manageable. This combination is comprised of quality grooming and balanced diet. Give them bath depending on their lifestyle and weather condition. Regularly trim their nails, brush their teeth, and check their ears.",
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

export default dalmatian;