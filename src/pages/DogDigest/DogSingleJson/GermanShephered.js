import BackgroundOne from "../../../assets/media/dog_digest/german-shephered/background/BG1.jpg"
import BackgroundTwo from "../../../assets/media/dog_digest/german-shephered/background/BG2.jpg"
import BackgroundThree from "../../../assets/media/dog_digest/german-shephered/background/BG3.jpg"
import BackgroundFour from "../../../assets/media/dog_digest/german-shephered/background/BG4.jpg"
import BackgroundFive from "../../../assets/media/dog_digest/german-shephered/background/BG5.jpg"
import BackgroundSix from "../../../assets/media/dog_digest/german-shephered/background/BG6.jpg"
import BackgroundSeven from "../../../assets/media/dog_digest/german-shephered/background/BG5.jpg"
import DogImage from "../../../assets/media/dog_digest/german-shephered/header/German Shepherd.png"
import Kibble from "../../../assets/media/dog_digest/german-shephered/header/Kibble and Parachute.png"
import ElementOne from "../../../assets/media/dog_digest/german-shephered/header/A-eroplane.png"
import ElementTwo from "../../../assets/media/dog_digest/german-shephered/header/A-eroplane.png"
import ElementStatistics from "../../../assets/media/dog_digest/german-shephered/elements/01.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/german-shephered/elements/02.svg"
import ElementRecommended from "../../../assets/media/dog_digest/german-shephered/elements/03.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/german-shephered/elements/04.svg"
import ElementGrooming from "../../../assets/media/dog_digest/german-shephered/elements/05.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/german-shephered/featured/german-shepherd-featured-01.jpg"
import featuredB from "../../../assets/media/dog_digest/german-shephered/featured/german-shepherd-featured-02.jpg"
import featuredC from "../../../assets/media/dog_digest/german-shephered/featured/german-shepherd-featured-03.jpg"
import featuredD from "../../../assets/media/dog_digest/german-shephered/featured/german-shepherd-featured-04.jpg"
import featuredE from "../../../assets/media/dog_digest/german-shephered/featured/german-shepherd-featured-05.jpg"
import featuredF from "../../../assets/media/dog_digest/german-shephered/featured/german-shepherd-featured-06.jpg"

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

const germanShepherd = {
    name: "GERMAN SHEPHERD",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "Excelling in anything they are trained to do, German Shepherds are versatile working dogs. They are bred to herd, then were utilized in police and military service known as K9.",
        dogDescriptionB:"GSDs are very active and intelligent. They need regular exercise and thorough training and socialization. Although GSDs are reserved and athletic, they hate being left alone. They prefer indoors and where they can be close enough to guard you.",
        dogDescriptionC: "Socialization can help them become confident since they are not generally friendly. It may take some time but once they get used to it, they will be your most devoted and fearless companions.",
        extraElementA: Kibble,
        extraElementB: ElementOne,
        extraElementC: ElementTwo,
        extraElementD: "",
        extraElementE: "",
    },

    statisticsSection: {
        backgroundImage: BackgroundTwo,
        dogType: "Companion Dogs",
        height: "18 to 26 inches ",
        weight: "34 to 43kg",
        years: "10 to 14 years",
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
                "Gastric dilation-volvulus",
                "Degenerative myelopathy",
                "Exocrine Pancreatic Insufficiency",
                "Allergies"
            ],
        extraElement: ElementUsualHealth
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "With double coat and medium length hair, German Shepherds are also called as German Shedders. Although GSDs shed once or twice a year, better get used to brushing and vacuuming. They do not smell easily, so give them a bath only when necessary. Do not leave their nails untrimmed or else it will cause them pain and discomfort.",
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

export default germanShepherd;