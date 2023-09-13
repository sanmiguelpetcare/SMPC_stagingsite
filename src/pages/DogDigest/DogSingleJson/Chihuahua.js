import BackgroundOne from "../../../assets/media/dog_digest/chihuahua/background/BG1.jpeg"
import BackgroundTwo from "../../../assets/media/dog_digest/chihuahua/background/BG2.jpeg"
import BackgroundThree from "../../../assets/media/dog_digest/chihuahua/background/BG3.jpeg"
import BackgroundFour from "../../../assets/media/dog_digest/chihuahua/background/BG4.jpeg"
import BackgroundFive from "../../../assets/media/dog_digest/chihuahua/background/BG5.jpeg"
import BackgroundSix from "../../../assets/media/dog_digest/chihuahua/background/BG6.jpeg"
import BackgroundSeven from "../../../assets/media/dog_digest/chihuahua/background/BG5.jpeg"
import DogImage from "../../../assets/media/dog_digest/chihuahua/header/Chihuahua.png"
import Kibble from "../../../assets/media/dog_digest/chihuahua/header/Kibble and trophy.png"
import ElementOne from "../../../assets/media/dog_digest/chihuahua/elements/sparkle.svg"
import ElementTwo from "../../../assets/media/dog_digest/chihuahua/elements/sparkle.svg"
import ElementThree from "../../../assets/media/dog_digest/chihuahua/elements/sparkle.svg"
import ElementStatistics from "../../../assets/media/dog_digest/chihuahua/elements/film-roll-01.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/chihuahua/elements/film-roll-02.svg"
import ElementRecommended from "../../../assets/media/dog_digest/chihuahua/elements/film-roll-03.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/chihuahua/elements/film-roll-04.svg"
import ElementGrooming from "../../../assets/media/dog_digest/chihuahua/elements/film-roll-05.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/chihuahua/featured/chihuahua-1.jpeg"
import featuredB from "../../../assets/media/dog_digest/chihuahua/featured/chihuahua-2.jpeg"
import featuredC from "../../../assets/media/dog_digest/chihuahua/featured/chihuahua-3.jpeg"
import featuredD from "../../../assets/media/dog_digest/chihuahua/featured/chihuahua-4.jpeg"
import featuredE from "../../../assets/media/dog_digest/chihuahua/featured/chihuahua-5.jpeg"
import featuredF from "../../../assets/media/dog_digest/chihuahua/featured/chihuahua-6.jpeg"

import bar20 from "../../../assets/media/dog_digest/common-assets/bar-20.svg"
import bar40 from "../../../assets/media/dog_digest/common-assets/bar-40.svg"
import bar50 from "../../../assets/media/dog_digest/common-assets/bar-50.svg"
import bar60 from "../../../assets/media/dog_digest/common-assets/bar-60.svg"
import bar80 from "../../../assets/media/dog_digest/common-assets/bar-80.svg"
import bar100 from "../../../assets/media/dog_digest/common-assets/bar-100.svg"


const energyLevelHigh = "Energy filled dogs need mental and physical stimulation. They are at their happiest when activities are action packed. They are the best buddies to bring with you when running, hiking, and other kinds of adventures. "
const potentialPlayfulnessHigh = "From simple catch, sit and stay training, to more advanced lessons for tricks and agility, these dogs are up for the challenge. They are always looking forward to having playmates and playdates."
const exerciseNeedsHigh = "Dogs, and even humans, need exercise, yet these dog breeds are just fine in a less active lifestyle. They are not huge fans of adrenaline rush rather they are fond of solitude."
const intensityHigh = "Gentle natured dogs are easy to handle. They are family dogs - best with kids, elderly and even other animals. Since they are not loud and rowdy, they are a manageable company when you live in an apartment."
const energyLevelLow = "LowA"
const potentialPlayfulnessLow = "LowB"
const exerciseNeedsLow = "LowC"
const intensityLow = "LDowD"
const recommendedA = "NUTRI CHUNKS Coat Shine with real Salmon meat rich in Omega 3 & 6 for healthy skin and shinier coat"
const recommendedB = "For puppies try NUTRI CHUNKS Hi-Protein that contains 27% of high quality protein to support your puppies’ growth and development. With milky aroma for improved palatability, suitable for all breeds of puppies weaning to 12 months"

const chihuahua = {
    name: "CHIHUAHUA",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "Renowned as the smallest dog breed, Chihuahuas proved that size really doesn’t matter. These toy breeds have huge personalities and great intellect.",
        dogDescriptionB:"Chihuahuas are icons of innate grace and wit. Their demeanor explains why they are well-loved “purse dogs” of the rich and famous. They became even more popular when they starred in the Disney movie trilogy, “Beverly Hills Chihuahua”.",
        dogDescriptionC: "When properly trained, Chihuahuas can compete with medium and large dogs. Even if they have high energy levels, do not overexert them during exercise.",
        extraElementA: Kibble,
        extraElementB: ElementOne,
        extraElementC: ElementTwo,
        extraElementD: ElementThree,
        extraElementE: "",
    },

    statisticsSection: {
        backgroundImage: BackgroundTwo,
        dogType: "Companion Dogs",
        height: "6 to 9 inches ",
        weight: "1 to 3kg",
        years: "10 to 18 years",
        extraElementA: ElementStatistics,
    },

    physicalNeeds: {
        backgroundImage: BackgroundThree,
        energyLevel: bar60,
        energyLevelDescription: energyLevelHigh,
        potentialPlayfulness: bar80,
        potentialPlayfulnessDescription: potentialPlayfulnessHigh,
        energyNeeds: bar20,
        exerciseNeedsDescription: exerciseNeedsHigh,
        intentsity: bar40,
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
        extraElement: ElementRecommended
    },
    usualHealthProblem: {
        backgroundImage: BackgroundFive,
        healthlist: [
                "Patellar luxation",
                "Hypoglycemia",
                "Heart murmurs",
                "Pulmonic stenosis",
                "Collapsed Trachea",
                "Hydrocephalus",
                "Open fontanel",
                "Shivering",
            ],
        extraElement: ElementUsualHealth
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "Due to recessive gene traits, Chihuahua can be long coated, but they usually have a smooth and short coat. Regardless which coat variety; shedding season is still manageable since they are small. Use rubber mitts and soft bristled brush to comb and detangle their hair. Just like any other dogs, keep their nails trimmed, along with a healthy ear and dental hygiene.",
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

export default chihuahua;