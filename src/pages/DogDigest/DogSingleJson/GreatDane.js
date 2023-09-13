import BackgroundOne from "../../../assets/media/dog_digest/great-dane/background/BG_0.jpeg"
import BackgroundTwo from "../../../assets/media/dog_digest/great-dane/background/BG_1.jpeg"
import BackgroundThree from "../../../assets/media/dog_digest/great-dane/background/BG_2.jpeg"
import BackgroundFour from "../../../assets/media/dog_digest/great-dane/background/BG_3.jpeg"
import BackgroundFive from "../../../assets/media/dog_digest/great-dane/background/BG_4.jpeg"
import BackgroundSix from "../../../assets/media/dog_digest/great-dane/background/BG_5.jpeg"
import DogImage from "../../../assets/media/dog_digest/great-dane/header/Great Dane.png"
import Kibble from "../../../assets/media/dog_digest/great-dane/header/Masarap na Kibble.png"
import ElementStatistics from "../../../assets/media/dog_digest/great-dane/elements/OE_1.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/great-dane/elements/OE_2.svg"
import ElementRecommended from "../../../assets/media/dog_digest/great-dane/elements/OE_3.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/great-dane/elements/OE_4.svg"
import ElementGrooming from "../../../assets/media/dog_digest/great-dane/elements/OE_5.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/great-dane/featured/great-dane-01.jpeg"
import featuredB from "../../../assets/media/dog_digest/great-dane/featured/great-dane-02.jpeg"
import featuredC from "../../../assets/media/dog_digest/great-dane/featured/great-dane-03.jpeg"
import featuredD from "../../../assets/media/dog_digest/great-dane/featured/great-dane-04.jpeg"
import featuredE from "../../../assets/media/dog_digest/great-dane/featured/great-dane-05.jpeg"
import featuredF from "../../../assets/media/dog_digest/great-dane/featured/great-dane-06.jpeg"

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
const recommendedA = "Promotes better digestion with Optimum energy and nourishment for adult dogs. Specifically formulated for dogs' satiety, NUTRI CHUNKS Optimum Adult comes in Lamb and Beef + Chicken Liver!"
const recommendedB = "For puppies try NUTRI CHUNKS Hi-Protein that contains 27% of high quality protein to support your puppies’ growth and development. With milky aroma for improved palatability, suitable for all breeds of puppies weaning to 12 months."

const greatDane = {
    name: "GREAT DANE",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "Aside from solving mysteries like Scooby-Doo, Great Danes are also known for being the “Apollo of Dogs” for their innate elegance and power. Since they are way bigger than usual dogs, they were used as board hunters by the German nobles.",
        dogDescriptionB:"Although they are now owned as pets, tiny spaces are not the best place to live with them. Comparable to other dogs, Danes have a shorter life expectancy so be sure to make the most of their life.",
        dogDescriptionC: "These gentle giants are attentive and sharp-eyed caretakers of houses. If properly trained and socialized, they can be very affectionate and playful even with children. Big dogs surely need an extra amount of food, space, activity, and of course a warm family.",
        extraElementA: Kibble,
        extraElementB: "",
        extraElementC: "",
        extraElementD: "",
        extraElementE: "",
    },

    statisticsSection: {
        backgroundImage: BackgroundTwo,
        dogType: "Working Dogs",
        height: "26 to 34 inches ",
        weight: "45 to 91 kg",
        years: "7 to 10 years",
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
        intentsity: bar100,
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
                "Development Issues",
                "Hip Dysplasia",
                "Gastric Torsion",
                "Bone Cancer",
                "Heart Disease"
            ],
        extraElement: ElementUsualHealth
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "Great Dane's coat are smooth, and easy to maintain. Their coat can be on top condition with regular brushing using a medium-bristle brush. They don't shed that much but with their size, they can still shed most of the time. They may take a bath from time to time but bathing them is a heavy task because of their size and unwillingness. Whenever you groom them, routinely check for sores, lumps, and other signs and/or symptoms of fungal, parasitic and health concerns.",
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

export default greatDane;