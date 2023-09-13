import BackgroundOne from "../../../assets/media/dog_digest/dobermann/background/BG_0.png"
import BackgroundTwo from "../../../assets/media/dog_digest/dobermann/background/BG_1.png"
import BackgroundThree from "../../../assets/media/dog_digest/dobermann/background/BG_2.png"
import BackgroundFour from "../../../assets/media/dog_digest/dobermann/background/BG_3.png"
import BackgroundFive from "../../../assets/media/dog_digest/dobermann/background/BG_4.png"
import BackgroundSix from "../../../assets/media/dog_digest/dobermann/background/BG_5.png"
import BackgroundSeven from "../../../assets/media/dog_digest/dobermann/background/BG_4.png"
import DogImage from "../../../assets/media/dog_digest/dobermann/header/Doberman Pinscher.png"
import Kibble from "../../../assets/media/dog_digest/dobermann/header/Masarap na Kibble.png"
import ElementOne from "../../../assets/media/dog_digest/german-shephered/header/A-eroplane.png"
import ElementTwo from "../../../assets/media/dog_digest/german-shephered/header/A-eroplane.png"
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
import featuredA from "../../../assets/media/dog_digest/dobermann/featured/dobberman-01.jpeg"
import featuredB from "../../../assets/media/dog_digest/dobermann/featured/dobberman-02.jpeg"
import featuredC from "../../../assets/media/dog_digest/dobermann/featured/dobberman-03.jpeg"
import featuredD from "../../../assets/media/dog_digest/dobermann/featured/dobberman-04.jpeg"
import featuredE from "../../../assets/media/dog_digest/dobermann/featured/dobberman-05.jpeg"
import featuredF from "../../../assets/media/dog_digest/dobermann/featured/dobberman-06.jpeg"

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

const dobermann = {
    name: "DOBERMANN",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "Karl Friedrich Louis Dobermann needed to protect himself and the tax he collected from thieves. He then successfully bred the dog he needed, since he was also the town dog catcher and keeper of the pound. The breed was named after him though there were no records of which dogs were mixed and used.",
        dogDescriptionB:"Dobes are powerful, sleek, and athletic. They are commonly utilized in police and military service since they have a reputation for being aggressive and vicious.",
        dogDescriptionC: "Having Dobes as pets would mean you have reliable guards and loyal companions. However, their amazing qualities should be consistently honed through a variety of outdoor and physical activities.",
        extraElementA: Kibble,
        extraElementB: "",
        extraElementC: "",
        extraElementD: "",
        extraElementE: "",
    },

    statisticsSection: {
        backgroundImage: BackgroundTwo,
        dogType: "Working Dogs",
        height: "Up to 14 inches ",
        weight: "27 to 37 kg",
        years: "10 to 13 years",
        extraElementA: ElementStatistics,
    },

    physicalNeeds: {
        backgroundImage: BackgroundThree,
        energyLevel: bar60,
        energyLevelDescription: energyLevelHigh,
        potentialPlayfulness: bar100,
        potentialPlayfulnessDescription: potentialPlayfulnessHigh,
        energyNeeds: bar60,
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
        extraElement: ElementRecommended
    },
    usualHealthProblem: {
        backgroundImage: BackgroundFive,
        healthlist: [
                "Von Willebrand's Disease",
                "Hip Dysplasia",
                "Progressive Retinal Atrophy (PRA)",
                "Hypothyroidism",
                "Wobbler's Syndrome",
                "Cardiomyopathy",
                "Albinoism",
                "Color Mutant Alopecia",
                "Narcolepsy",
                "Gastric Dilation-Volvulus"
            ],
        extraElement: ElementUsualHealth
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "Dobermanns are tidy and neat dogs. They have a minimal doggy odor and shedding. You may use a rubber mitten or brush to maintain their shiny coat. Give them a bath depending on their smell, lifestyle, and weather. Make their hygiene routine a positive and enjoyable experience for them. Most dogs feel uncomfortable and stressed when being cleaning.",
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

export default dobermann;