import BackgroundOne from "../../../assets/media/dog_digest/rhodesian-ridgeback/background/BG_00.jpeg"
import BackgroundTwo from "../../../assets/media/dog_digest/rhodesian-ridgeback/background/BG_00.jpeg"
import BackgroundThree from "../../../assets/media/dog_digest/rhodesian-ridgeback/background/BG_00.jpeg"
import BackgroundFour from "../../../assets/media/dog_digest/rhodesian-ridgeback/background/BG_00.jpeg"
import BackgroundFive from "../../../assets/media/dog_digest/rhodesian-ridgeback/background/BG_00.jpeg"
import BackgroundSix from "../../../assets/media/dog_digest/rhodesian-ridgeback/background/BG_00.jpeg"
import BackgroundSeven from "../../../assets/media/dog_digest/rhodesian-ridgeback/background/BG_00.jpeg"
import DogImage from "../../../assets/media/dog_digest/rhodesian-ridgeback/header/Rhodesian Ridgeback.png"
import ElementStatistics from "../../../assets/media/dog_digest/rhodesian-ridgeback/elements/OE_01.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/rhodesian-ridgeback/elements/OE_02.svg"
import ElementRecommended from "../../../assets/media/dog_digest/rhodesian-ridgeback/elements/OE_03.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/rhodesian-ridgeback/elements/OE_04.svg"
import ElementGrooming from "../../../assets/media/dog_digest/rhodesian-ridgeback/elements/OE_05.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/rhodesian-ridgeback/featured/beautiful-brown-rhodesian-ridgeback-dog-field.jpeg"
import featuredB from "../../../assets/media/dog_digest/rhodesian-ridgeback/featured/beautiful-brown-rhodesian-ridgeback-dog-outdoors.jpeg"
import featuredC from "../../../assets/media/dog_digest/rhodesian-ridgeback/featured/beautiful-brown-rhodesian-ridgeback-dog-wilderness.jpeg"
import featuredD from "../../../assets/media/dog_digest/rhodesian-ridgeback/featured/rhodesian-ridgeback-dog-outdoor-portrait (1).jpeg"
import featuredE from "../../../assets/media/dog_digest/rhodesian-ridgeback/featured/rhodesian-ridgeback-dog-outdoor-portrait.jpeg"
import featuredF from "../../../assets/media/dog_digest/rhodesian-ridgeback/featured/beautiful-brown-rhodesian-ridgeback-dog-field.jpeg"

import Bar20 from "../../../assets/media/dog_digest/common-assets/bar-20.svg"
import bar40 from "../../../assets/media/dog_digest/common-assets/bar-40.svg"
import bar50 from "../../../assets/media/dog_digest/common-assets/bar-50.svg"
import bar60 from "../../../assets/media/dog_digest/common-assets/bar-60.svg"
import bar80 from "../../../assets/media/dog_digest/common-assets/bar-80.svg"
import bar100 from "../../../assets/media/dog_digest/common-assets/bar-100.svg"


const energyLevelHigh = "Energy filled dogs need mental and physical stimulation. They are at their happiest when activities are action packed. They are the best buddies to bring with you when running, hiking, and other kinds of adventures. "
const potentialPlayfulnessHigh = "From simple catch, sit and stay training, to more advanced lessons for tricks and agility, these dogs are up for the challenge. They are always looking forward to having playmates and playdates."
const exerciseNeedsHigh = "Pumped up dogs who are very agile,active and prefer outdoors. They are historically bred to hunt, work or sport. Though all dogs need exercise, they require regular exercise not just to keep them in shape and healthy."
const intensityHigh = "Forceful dogs are virougus; they may strain themselves wearing the leash, break obstacle courses and devour their food. If not properly trained, they are not advised around kids and the elderly without supervision."
const energyLevelLow = "LowA"
const potentialPlayfulnessLow = "LowB"
const exerciseNeedsLow = "LowC"
const intensityLow = "LDowD"
const recommendedA = "NUTRI CHUNKS MAINTENANCE in Beef flavor is your everyday budget-friendly, complete and balanced dog food!"
const recommendedB = "For puppies try NUTRI CHUNKS Hi-Protein that contains 27% of high quality protein to support your puppies’ growth and development. With milky aroma for improved palatability, suitable for all breeds of puppies weaning to 12 months."

const rhodesianRidgeback = {
    name: "RHODESIAN RIDGEBACK",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "The loyal, protective dog that’s been around for centuries is now more likely to snuggle up on your couch than hunt lions. The handsome Rhodesian Ridgeback was created in Africa as a versatile hunter with strong hunting skills but they have since become less focused animal lovers and instead enjoy running errands or going jogging with you after doing their fair share of protecting the family home!",
        dogDescriptionB: "The Rhodesian Ridgeback is a perfect match for those who are looking to have the best of both worlds: a hunter with its hardheadedness and a home guardian with its gentleness.",
        dogDescriptionC: "",
        extraElementA: "",
        extraElementB: "",
        extraElementC: "",
        extraElementD: "",
        extraElementE: "",
    },

    statisticsSection: {
        backgroundImage: BackgroundTwo,
        dogType: "Hound Dogs",
        height: "24 to 27 inches ",
        weight: "32 to 39 kg",
        years: "10 to 12 years",
        extraElementA: ElementStatistics,
    },

    physicalNeeds: {
        backgroundImage: BackgroundThree,
        energyLevel: bar80,
        energyLevelDescription: energyLevelHigh,
        potentialPlayfulness: bar100,
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
        productsImageA: HiProteinA,
        productsImageB: MaintenanceA,
        productsImageC: "",
        recommendationA: recommendedA,
        recommendationB: recommendedB,
        extraElement: ElementRecommended
    },
    usualHealthProblem: {
        backgroundImage: BackgroundFive,
        healthlist: [
                "Hip dysplasia",
                "Elbow dysplasia",
                "Dermoid Sinus"
            ],
        extraElement: ElementUsualHealth
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "Build her routine care into your schedule to help your Rhodie live longer, stay healthier, and be happier during her lifetime. We cannot overemphasize the importance of a proper diet and exercise routine.",
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

export default rhodesianRidgeback;