import BackgroundOne from "../../../assets/media/dog_digest/pomeranian/background/BG_00.png"
import BackgroundTwo from "../../../assets/media/dog_digest/pomeranian/background/BG_01.jpeg"
import BackgroundThree from "../../../assets/media/dog_digest/pomeranian/background/BG_02.jpeg"
import BackgroundFour from "../../../assets/media/dog_digest/pomeranian/background/BG_03.jpeg"
import BackgroundFive from "../../../assets/media/dog_digest/pomeranian/background/BG_04.jpeg"
import BackgroundSix from "../../../assets/media/dog_digest/pomeranian/background/BG_05.jpeg"
import DogImage from "../../../assets/media/dog_digest/pomeranian/header/Pomeranian.png"
import ElementOne from "../../../assets/media/dog_digest/pomeranian/header/BG_00_Asset.svg"
import ElementStatistics from "../../../assets/media/dog_digest/pomeranian/elements/OE_01.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/pomeranian/elements/OE_02.svg"
import ElementRecommended from "../../../assets/media/dog_digest/pomeranian/elements/OE_03.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/pomeranian/elements/OE_05.svg"
import ElementGrooming from "../../../assets/media/dog_digest/pomeranian/elements/OE_05.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/pomeranian/featured/dog-1113398_1920.jpeg"
import featuredB from "../../../assets/media/dog_digest/pomeranian/featured/dog-5061039_1280.jpeg"
import featuredC from "../../../assets/media/dog_digest/pomeranian/featured/dog-6386536_1920.jpeg"
import featuredD from "../../../assets/media/dog_digest/pomeranian/featured/dwarf-spitz-386698_1920.jpeg"
import featuredE from "../../../assets/media/dog_digest/pomeranian/featured/pomeranian-1541798_1920.jpeg"
import featuredF from "../../../assets/media/dog_digest/pomeranian/featured/pomeranian-6915943_1280.jpeg"

import bar20 from "../../../assets/media/dog_digest/common-assets/bar-20.svg"
import bar40 from "../../../assets/media/dog_digest/common-assets/bar-40.svg"
import bar50 from "../../../assets/media/dog_digest/common-assets/bar-50.svg"
import bar60 from "../../../assets/media/dog_digest/common-assets/bar-60.svg"
import bar80 from "../../../assets/media/dog_digest/common-assets/bar-80.svg"
import bar100 from "../../../assets/media/dog_digest/common-assets/bar-100.svg"


const energyLevelHigh = "Energy filled dogs need mental and physical stimulation. They are at their happiest when activities are action packed. They are the best buddies to bring with you when running, hiking, and other kinds of adventures."
const potentialPlayfulnessHigh = "From simple catch, sit and stay training, to more advanced lessons for tricks and agility, these dogs are up for the challenge. They are always looking forward to having playmates and playdates."
const exerciseNeedsHigh = "Dogs, and even humans, need exercise, yet these dog breeds are just fine in a less active lifestyle. They are not huge fans of adrenaline rush rather they are fond of solitude."
const intensityHigh = "Gentle natured dogs are easy to handle.They are family dogs - best with kids, elderly and even other animals. Since, they are not loud and rowdy, they are a manageable company when you live in an apartment."
const energyLevelLow = "LowA"
const potentialPlayfulnessLow = "LowB"
const exerciseNeedsLow = "LowC"
const intensityLow = "LDowD"
const recommendedA = "NUTRI CHUNKS Coat Shine with real Salmon meat rich in Omega 3 & 6 for healthy skin and shinier coat."
const recommendedB = "For puppies try NUTRI CHUNKS Hi-Protein that contains 27% of high quality protein to support your puppies’ growth and development. With milky aroma for improved palatability, suitable for all breeds of puppies weaning to 12 months."

const pomeranian = {
    name: "POMERANIAN",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "Pomeranians are cheerleaders that will brighten up anybody’s day. Poms descended from the large Spitz-type like Samoyed and Alaskan Malamute. They were named after the province of Pomerania in Germany.",
        dogDescriptionB: "Did you know that these foxy dogs are the most popular toy breeds in the world? Moreso, Poms seem easy to handle but they are usually described to have a \"big\" dog attitude. Poms are eager to train with yet, they can be stubborn so be firm to stand your ground as their alpha.",
        dogDescriptionC: "Keep them indoors to prevent them from overheating. Although they are not ideal for apartment dwellers and households with small children, they are very loyal and effective watchdogs!",
        extraElementA: "",
        extraElementB: ElementOne,
        extraElementC: "",
        extraElementD: "",
        extraElementE: "",
    },

    statisticsSection: {
        backgroundImage: BackgroundTwo,
        dogType: "Toy Dogs",
        height: "7 to 12 inches",
        weight: "1 to 4 kg",
        years: "12 to 16 years",
        extraElementA: ElementStatistics,
    },

    physicalNeeds: {
        backgroundImage: BackgroundThree,
        energyLevel: bar60,
        energyLevelDescription: energyLevelHigh,
        potentialPlayfulness: bar60,
        potentialPlayfulnessDescription: potentialPlayfulnessHigh,
        energyNeeds: bar20,
        exerciseNeedsDescription: exerciseNeedsHigh,
        intentsity: bar20,
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
            "Epilepsy",
            "Hip Dysplasia",
            "Legg-Perthes Disease",
            "Hip Dysplasia",
            "Patellar Luxation",
            "Collapsed Trachea",
            "Dental Problems"
        ],
        extraElement: ElementUsualHealth,
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "Since Pomeranians originated from the colder region of Europe, they have a thick double coat. Poms are known for their fluffy and soft undercoat. Grooming is important to keep their appearance, smell, hygiene, and of course health at its best. Important areas of grooming also include eyes, ears, paws, and even nails.",
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

export default pomeranian;