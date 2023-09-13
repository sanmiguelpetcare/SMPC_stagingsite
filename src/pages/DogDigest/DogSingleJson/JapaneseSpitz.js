import BackgroundOne from "../../../assets/media/dog_digest/japanese-spitz/background/BG_00.jpeg"
import BackgroundTwo from "../../../assets/media/dog_digest/japanese-spitz/background/BG_01.jpeg"
import BackgroundThree from "../../../assets/media/dog_digest/japanese-spitz/background/BG_02.jpeg"
import BackgroundFour from "../../../assets/media/dog_digest/japanese-spitz/background/BG_03.jpeg"
import BackgroundFive from "../../../assets/media/dog_digest/japanese-spitz/background/BG_04.jpeg"
import BackgroundSix from "../../../assets/media/dog_digest/japanese-spitz/background/BG_05.jpeg"
import DogImage from "../../../assets/media/dog_digest/japanese-spitz/header/Japanese Spitz.png"
import ElementStatistics from "../../../assets/media/dog_digest/japanese-spitz/elements/OE_01.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/japanese-spitz/elements/OE_02.svg"
import ElementRecommended from "../../../assets/media/dog_digest/japanese-spitz/elements/OE_03.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/japanese-spitz/elements/OE_04.svg"
import ElementGrooming from "../../../assets/media/dog_digest/japanese-spitz/elements/OE_05.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/japanese-spitz/featured/02_CARDO.jpeg"
import featuredB from "../../../assets/media/dog_digest/japanese-spitz/featured/11_CHLOE.jpeg"
import featuredC from "../../../assets/media/dog_digest/japanese-spitz/featured/pexels-andréa-11349091.jpeg"
import featuredD from "../../../assets/media/dog_digest/japanese-spitz/featured/pexels-aydın-kiraz-6964619.jpeg"
import featuredE from "../../../assets/media/dog_digest/japanese-spitz/featured/pexels-juan-garcía-8889286.jpeg"
import featuredF from "../../../assets/media/dog_digest/japanese-spitz/featured/pexels-mohan-nannapaneni-5913074.jpeg"

import bar20 from "../../../assets/media/dog_digest/common-assets/bar-20.svg"
import bar40 from "../../../assets/media/dog_digest/common-assets/bar-40.svg"
import bar50 from "../../../assets/media/dog_digest/common-assets/bar-50.svg"
import bar60 from "../../../assets/media/dog_digest/common-assets/bar-60.svg"
import bar80 from "../../../assets/media/dog_digest/common-assets/bar-80.svg"
import bar100 from "../../../assets/media/dog_digest/common-assets/bar-100.svg"


const energyLevelHigh = "Energy filled dogs need mental and physical stimulation. They are at their happiest when activities are action packed. They are the best buddies to bring with you when running, hiking, and other kinds of adventures."
const potentialPlayfulnessHigh = "Amusing these dogs with sorts of games will not be a problem. They will not be tailing and begging you around to kill their boredom. They can be more aloof and independent from the pact and humans."
const exerciseNeedsHigh = "Dogs, and even humans, need exercise, yet these dog breeds are just fine in a less active lifestyle. They are not huge fans of adrenaline rush rather they are fond of solitude."
const intensityHigh = "Gentle natured dogs are easy to handle. They are family dogs - best with kids, elderly and even other animals. Since they are not loud and rowdy, they are a manageable company when you live in an apartment."
const energyLevelLow = "LowA"
const potentialPlayfulnessLow = "LowB"
const exerciseNeedsLow = "LowC"
const intensityLow = "LDowD"
const recommendedA = "NUTRI CHUNKS Coat Shine with real Salmon meat rich in Omega 3 & 6 for healthy skin and shinier coat."
const recommendedB = "For puppies try NUTRI CHUNKS Hi-Protein that contains 27% of high quality protein to support your puppies’ growth and development. With milky aroma for improved palatability, suitable for all breeds of puppies weaning to 12 months."

const japaneseSpitz = {
    name: "JAPANESE SPITZ",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "The Japanese Spitz is a small-sized dog breed. It was developed in Japan and it has been around since the 1800s. The closest relative of this breed is the Hokkaido Inu, which explains their similar shape and stature.",
        dogDescriptionB: "The Jap Spitz has a lot of energy and they need to be active most of the time. Without mental and physical stimulation, they suffer from depression which is a common among canines . Their barking may cause a problem too if your neighbors love peace and quietness.",
        dogDescriptionC: "Teach them at a young age so they won't to jump on people which can hurt them. They are very loyal and eager to please their owner. They are fearless and love kids so they are very suitable family pet.",
        extraElementA: "",
        extraElementB: "",
        extraElementC: "",
        extraElementD: "",
        extraElementE: "",
    },

    statisticsSection: {
        backgroundImage: BackgroundTwo,
        dogType: "Companion Dogs",
        height: "12 to 15 inches",
        weight: "5 to 9 kg",
        years: "10 to 16 years",
        extraElementA: ElementStatistics,
    },

    physicalNeeds: {
        backgroundImage: BackgroundThree,
        energyLevel: bar60,
        energyLevelDescription: energyLevelHigh,
        potentialPlayfulness: bar80,
        potentialPlayfulnessDescription: potentialPlayfulnessHigh,
        energyNeeds: bar40,
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
            "Luxating Patellas",
            "Eye problems",
            "Dry skin"
        ],
        extraElement: ElementUsualHealth,
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "These small-sized pups require moderate amount of grooming, so brushing their coats every week will do the job. Nevertheless, if their coat is brushed every 3 days, the shedding will be much less . About once a year they need to visit professional groomers who will make them look like little foxes with round faces and curly tails!",
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

export default japaneseSpitz;