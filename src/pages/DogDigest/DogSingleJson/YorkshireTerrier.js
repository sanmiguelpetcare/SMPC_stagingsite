import BackgroundOne from "../../../assets/media/dog_digest/yorkshire-terrier/background/00.jpeg"
import BackgroundTwo from "../../../assets/media/dog_digest/yorkshire-terrier/background/01.jpeg"
import BackgroundThree from "../../../assets/media/dog_digest/yorkshire-terrier/background/02.jpeg"
import BackgroundFour from "../../../assets/media/dog_digest/yorkshire-terrier/background/03.jpeg"
import BackgroundFive from "../../../assets/media/dog_digest/yorkshire-terrier/background/04.jpeg"
import BackgroundSix from "../../../assets/media/dog_digest/yorkshire-terrier/background/05.jpeg"
import DogImage from "../../../assets/media/dog_digest/yorkshire-terrier/header/Yorkshire terrier.png"
import ElementStatistics from "../../../assets/media/dog_digest/yorkshire-terrier/elements/OE_01.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/yorkshire-terrier/elements/OE_02.svg"
import ElementRecommended from "../../../assets/media/dog_digest/yorkshire-terrier/elements/OE_03.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/yorkshire-terrier/elements/OE_04.svg"
import ElementGrooming from "../../../assets/media/dog_digest/yorkshire-terrier/elements/OE_05.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/yorkshire-terrier/featured/dog-216282_1920.jpeg"
import featuredB from "../../../assets/media/dog_digest/yorkshire-terrier/featured/dog-1543294_1920.jpeg"
import featuredC from "../../../assets/media/dog_digest/yorkshire-terrier/featured/dog-2785087_1920.jpeg"
import featuredD from "../../../assets/media/dog_digest/yorkshire-terrier/featured/dog-4980080_1920.jpeg"
import featuredE from "../../../assets/media/dog_digest/yorkshire-terrier/featured/yorkshire-terrier-4783327_1920.jpeg"
import featuredF from "../../../assets/media/dog_digest/yorkshire-terrier/featured/dog-216282_1920.jpeg"

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

const yorkshireTerrier = {
    name: "YORKSHIRE TERRIER",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "Yorkshire Terrier, a small yet big-hearted breed of dog, is loved by many for its loyalty and affection. The most popular toy dog breed in the United States, the “Yorkie” has won many fans with their devotion to their owners, their elegant looks, and their suitability to apartment living.",
        dogDescriptionB:"Yorkies are small, playful dogs who will stick to you like your shadow. They can be yappy but if given lots of love and attention from their owners they make great apartment pets! Yorkshire Terriers are affectionate towards their people as one would expect from a companion dog, but true to their terrier heritage, they're sometimes suspicious of strangers, and will bark at strange sounds and intruders.",
        dogDescriptionC: "Socialization can help them become confident since they are not generally friendly. It may take some time but once they get used to it, they will be your most devoted and fearless companions.",
        extraElementA: "",
        extraElementB: "",
        extraElementC: "",
        extraElementD: "",
        extraElementE: "",
    },

    statisticsSection: {
        backgroundImage: BackgroundTwo,
        dogType: "Companion Dogs",
        height: "8 to 9 inches ",
        weight: "2 to 3 kg",
        years: "12 to 15 years",
        extraElementA: ElementStatistics,
    },

    physicalNeeds: {
        backgroundImage: BackgroundThree,
        energyLevel: bar100,
        energyLevelDescription: energyLevelHigh,
        potentialPlayfulness: bar100,
        potentialPlayfulnessDescription: potentialPlayfulnessHigh,
        energyNeeds: bar80,
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
                "Patellar Luxation",
                "Progressive Retinal Atrophy (PRA)",
                "Portosystemic Shunt",
                "Hypoglycemia",
                "Collapsed trachea",
                "Reverse sneezing"
            ],
        extraElement: ElementUsualHealth
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "Grooming a long-haired Yorkshire Terrier is not for the faint of heart, especially if he has a \"soft\" coat that tangles easily instead of a silky one! Even if you keep his coat trimmed short, gently brush your Yorkie's coat every day to help prevent mats and keep him clean. They’ll need a bit of maintenance too, especially when it comes to dental care. Small breeds are prone to dental problems, and Yorkies are no exception because they tend to form a lot of tartar on their teeth and can lose their teeth at a young age, so brush their teeth regularly and schedule a professional cleaning by your vet at least once a year.",
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

export default yorkshireTerrier;