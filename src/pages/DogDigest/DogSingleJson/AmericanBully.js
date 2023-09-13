import BackgroundOne from "../../../assets/media/dog_digest/american-bully/background/BG_0.jpeg"
import BackgroundTwo from "../../../assets/media/dog_digest/american-bully/background/BG_1.jpeg"
import BackgroundThree from "../../../assets/media/dog_digest/american-bully/background/BG_2.jpeg"
import BackgroundFour from "../../../assets/media/dog_digest/american-bully/background/BG_3.jpeg"
import BackgroundFive from "../../../assets/media/dog_digest/american-bully/background/BG_4.jpeg"
import BackgroundSix from "../../../assets/media/dog_digest/american-bully/background/BG_5.jpeg"
import BackgroundSeven from "../../../assets/media/dog_digest/american-bully/background/BG_4.jpeg"
import DogImage from "../../../assets/media/dog_digest/american-bully/header/American Bully.png" 
import Kibble from "../../../assets/media/dog_digest/labrador/header/Masarap na Kibble.png"
import ElementOne from "../../../assets/media/dog_digest/american-bully/header/0_Element2.svg"
import ElementTwo from "../../../assets/media/dog_digest/american-bully/header/0_Element3.svg"
import ElementThree from "../../../assets/media/dog_digest/american-bully/header/0_Element4.svg"
import ElementStatistics from "../../../assets/media/dog_digest/american-bully/elements/OE_1.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/american-bully/elements/OE_2.svg"
import ElementRecommended from "../../../assets/media/dog_digest/american-bully/elements/OE_3.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/american-bully/elements/OE_4.svg"
import ElementGrooming from "../../../assets/media/dog_digest/american-bully/elements/OE_5.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/american-bully/featured/american-bully-1.jpeg"
import featuredB from "../../../assets/media/dog_digest/american-bully/featured/american-bully-2.jpeg"
import featuredC from "../../../assets/media/dog_digest/american-bully/featured/american-bully-3.jpeg"
import featuredD from "../../../assets/media/dog_digest/american-bully/featured/american-bully-4.jpeg"
import featuredE from "../../../assets/media/dog_digest/american-bully/featured/american-bully-5.jpeg"
import featuredF from "../../../assets/media/dog_digest/american-bully/featured/american-bully-6.jpeg"

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

const americanBully = {
    name: "AMERICAN BULLY",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "American bully originated from American Pit Bull Terriers and other bulldog breeds. The development of this breed began in the 1980s. On July 15, 2013, American Bully breed was recognized by the United Kennel Club.",
        dogDescriptionB: "Despite being a modern breed, American bullies come in different sizes; standard, XL, classic, and pocket size. American bullies are athletic, muscular, and tenacious but definitely not aggressive. They are described as perfect companion dogs - friendly and loyal.",
        dogDescriptionC: "Due to the status symbol attached to them, owning one would certainly be an expensive purchase. Education, training, and socialization are deal-breakers to their personality and behavior.",
        extraElementA: Kibble,
        extraElementB: ElementOne,
        extraElementC: ElementTwo,
        extraElementD: ElementThree,
        extraElementE: "",
    },

    statisticsSection: {
        backgroundImage: BackgroundTwo,
        dogType: "Companion Dogs",
        height: "20 to 28 inches",
        weight: "27 to 54 kg",
        years: "10 to 16 years",
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
        extraElement: ElementRecommended,
    },

    usualHealthProblem: {
        backgroundImage: BackgroundFive,
        healthlist: [
            "Cataracts",
            "Mange",
            "Hypothyroidism",
            "Hip or Shoulder Dysplasia",
            "Flatulence"
        ],
        extraElement: ElementUsualHealth,
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "American Bullies may be a large type of dog but since they have short coats that moderately shed, grooming them is not much of an inconvenience. It is easy and manageable to keep them neat and posh. Brush them at least once a week; too much brushing will damage their coats and they will shed more than usual. Bath them only when necessary. When it gets cold, keep them indoors and give them blankets. Always check their skin for any signs of allergies, irritations, and parasites.",
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

export default americanBully;