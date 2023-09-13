import BackgroundOne from "../../../assets/media/dog_digest/chinese-shar-pei/background/BG_00.jpeg"
import BackgroundTwo from "../../../assets/media/dog_digest/chinese-shar-pei/background/BG_01.jpeg"
import BackgroundThree from "../../../assets/media/dog_digest/chinese-shar-pei/background/BG_02.jpeg"
import BackgroundFour from "../../../assets/media/dog_digest/chinese-shar-pei/background/BG_03.jpeg"
import BackgroundFive from "../../../assets/media/dog_digest/chinese-shar-pei/background/BG_04.jpeg"
import BackgroundSix from "../../../assets/media/dog_digest/chinese-shar-pei/background/BG_05.jpeg"
import DogImage from "../../../assets/media/dog_digest/chinese-shar-pei/header/Shar-Pei.png"
import ElementStatistics from "../../../assets/media/dog_digest/chinese-shar-pei/elements/OE_01.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/chinese-shar-pei/elements/OE_02.svg"
import ElementRecommended from "../../../assets/media/dog_digest/chinese-shar-pei/elements/OE_03.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/chinese-shar-pei/elements/OE_04.svg"
import ElementGrooming from "../../../assets/media/dog_digest/chinese-shar-pei/elements/OE_05.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/chinese-shar-pei/featured/dog-1721499_1920.jpeg"
import featuredB from "../../../assets/media/dog_digest/chinese-shar-pei/featured/dog-5898852_1920.jpeg"
import featuredC from "../../../assets/media/dog_digest/chinese-shar-pei/featured/dog-5958704_1920.jpeg"
import featuredD from "../../../assets/media/dog_digest/chinese-shar-pei/featured/dog-7223233_1920.jpeg"
import featuredE from "../../../assets/media/dog_digest/chinese-shar-pei/featured/shar-pei-6106064_1920.jpeg"
import featuredF from "../../../assets/media/dog_digest/chinese-shar-pei/featured/dog-1721499_1920.jpeg"

import bar20 from "../../../assets/media/dog_digest/common-assets/bar-20.svg"
import bar40 from "../../../assets/media/dog_digest/common-assets/bar-40.svg"
import bar50 from "../../../assets/media/dog_digest/common-assets/bar-50.svg"
import bar60 from "../../../assets/media/dog_digest/common-assets/bar-60.svg"
import bar80 from "../../../assets/media/dog_digest/common-assets/bar-80.svg"
import bar100 from "../../../assets/media/dog_digest/common-assets/bar-100.svg"


const energyLevelHigh = "Low-energy dogs love lounging on the couch as you binge watch your all-time favorite series. They are up for cuddles or naps on your lap. These dogs are ideal company for a quiet afternoon."
const potentialPlayfulnessHigh = "Amusing these dogs with sorts of games will not be a problem. They will not be tailing and begging you around to kill their boredom. They can be more aloof and independent from the pact and humans."
const exerciseNeedsHigh = "Dogs, and even humans, need exercise, yet these dog breeds are just fine in a less active lifestyle. They are not huge fans of adrenaline rush rather they are fond of solitude."
const intensityHigh = "Gentle natured dogs are easy to handle.They are family dogs - best with kids, elderly and even other animals. Since, they are not loud and rowdy, they are a manageable company when you live in an apartment."
const energyLevelLow = "LowA"
const potentialPlayfulnessLow = "LowB"
const exerciseNeedsLow = "LowC"
const intensityLow = "LDowD"
const recommendedA = "Promotes better digestion with Optimum energy and nourishment for adult dogs. Specifically formulated for dogs' satiety, NUTRI CHUNKS OPTIMUM ADULT comes in Lamb, and Beef + Chicken Liver Flavor!"
const recommendedB = "For puppies try NUTRI CHUNKS Hi-Protein that contains 27% of high quality protein to support your puppies’ growth and development. With milky aroma for improved palatability, suitable for all breeds of puppies weaning to 12 months."

const chinseSharPei = {
    name: "CHINESE SHAR PEI",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "The Chinese Shar-Pei originated in the southern provinces of China and was valued as a hunter, herder, guardian, and fighter. They are known for their characteristic of being short with bristly coats–a reference to the meaning of their name “sand skin.” They also have loose wrinkles that make him look like he's wearing a bulky, oversized suit.",
        dogDescriptionB: "In modern times, the Shar-Pei mostly enjoy a life of a beloved companion and are known for their devotion for their family. Shar-Pei is calm enough that he can live in an apartment. He's also an independent-thinking, sometimes aloof dog. His heritage as a guardian and fighting dog make him an excellent watchdog and guard dog.",
        dogDescriptionC: "",
        extraElementA: "",
        extraElementB: "",
        extraElementC: "",
        extraElementD: "",
        extraElementE: "",
    },

    statisticsSection: {
        backgroundImage: BackgroundTwo,
        dogType: "Working Dogs",
        height: "18 to 20 inches ",
        weight: "18 to 25 kg",
        years: "8 to 12 years",
        extraElementA: ElementStatistics,
    },

    physicalNeeds: {
        backgroundImage: BackgroundThree,
        energyLevel: bar20,
        energyLevelDescription: energyLevelHigh,
        potentialPlayfulness: bar20,
        potentialPlayfulnessDescription: potentialPlayfulnessHigh,
        energyNeeds: bar80,
        exerciseNeedsDescription: exerciseNeedsHigh,
        intentsity: bar20,
        intentsityDescription: intensityHigh,
        extraElementA: ElementPhysicalNeeds,
        extraElementB: "",
    },

    recommendedVariants:{
        backgroundImage: BackgroundFour,
        productsImageA: HiProteinA,
        productsImageB: ObeefA,
        productsImageC: "",
        recommendationA: recommendedA,
        recommendationB: recommendedB,
        extraElement: ElementRecommended
    },
    usualHealthProblem: {
        backgroundImage: BackgroundFive,
        healthlist: [
                "Shar-Pei Fever",
                "Hypothyroidism Cancer",
                "Elbow Dysplasia",
                "Demodectic Mange",
                "Seborrhea",
                "Pyoderma",
                "Patellar Luxation",
                "Hip Dysplasia",
                "Gastric Torsion",
                "Osteochondrosis Dissecans (OCD)",
                "Cutaneous Mucinosis",
                "Glaucoma",
                "Entropion"
            ],
        extraElement: ElementUsualHealth
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "While the Shar-Pei is a naturally clean dog with very little odor so frequent bathing isn't necessary for the Shar-Pei, but when you bathe him, dry him thoroughly. The wrinkles and skin folds are an ideal breeding ground for fungal infections. Brush your Shar-Pei's teeth at least two or three times a week to remove tartar buildup and the bacteria that lurk inside it. Daily brushing is even better if you want to prevent gum disease and bad breath. For his nails, trim once or twice a month. For his ears, carefully check weekly for redness or bad odor. Remember that their canals are small and are prone to irritation and infection. Do not use a swab to clean the ears and take care not to get water in them when bathing. Don't insert anything into the ear canal but just clean the outer ear.",
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

export default chinseSharPei;