import BackgroundOne from "../../../assets/media/dog_digest/collie/background/Bg_00.jpeg"
import BackgroundTwo from "../../../assets/media/dog_digest/collie/background/Bg_01.jpeg"
import BackgroundThree from "../../../assets/media/dog_digest/collie/background/Bg_02.jpeg"
import BackgroundFour from "../../../assets/media/dog_digest/collie/background/Bg_03.jpeg"
import BackgroundFive from "../../../assets/media/dog_digest/collie/background/Bg_04.jpeg"
import BackgroundSix from "../../../assets/media/dog_digest/collie/background/Bg_05.jpeg"
import DogImage from "../../../assets/media/dog_digest/collie/header/Collie.png"
import ElementStatistics from "../../../assets/media/dog_digest/collie/elements/OE_01.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/collie/elements/OE_02.svg"
import ElementRecommended from "../../../assets/media/dog_digest/collie/elements/OE_03.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/collie/elements/OE_04.svg"
import ElementGrooming from "../../../assets/media/dog_digest/collie/elements/OE_05.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/collie/featured/anna-dudkova--KWX2LlZ_3M-unsplash.jpeg"
import featuredB from "../../../assets/media/dog_digest/collie/featured/anna-dudkova-md2_P9X7t4M-unsplash.jpeg"
import featuredC from "../../../assets/media/dog_digest/collie/featured/anna-dudkova-urs_y9NwFcc-unsplash.jpeg"
import featuredD from "../../../assets/media/dog_digest/collie/featured/baptist-standaert-mx0DEnfYxic-unsplash.jpeg"
import featuredE from "../../../assets/media/dog_digest/collie/featured/chung-nguyen-kJlk-jW2nLI-unsplash.jpeg"
import featuredF from "../../../assets/media/dog_digest/collie/featured/jiasong-huang-5XwVKkVSxA8-unsplash.jpeg"

import bar20 from "../../../assets/media/dog_digest/common-assets/bar-20.svg"
import bar40 from "../../../assets/media/dog_digest/common-assets/bar-40.svg"
import bar50 from "../../../assets/media/dog_digest/common-assets/bar-50.svg"
import bar60 from "../../../assets/media/dog_digest/common-assets/bar-60.svg"
import bar80 from "../../../assets/media/dog_digest/common-assets/bar-80.svg"
import bar100 from "../../../assets/media/dog_digest/common-assets/bar-100.svg"


const energyLevelHigh = "Energy filled dogs need mental and physical stimulation. They are at their happiest when activities are action packed. They are the best buddies to bring with you when running, hiking, and other kinds of adventures."
const potentialPlayfulnessHigh = "From simple catch, sit and stay training, to more advanced lessons for tricks and agility, these dogs are up for the challenge. They are always looking forward to having playmates and playdates."
const exerciseNeedsHigh = "Pumped up dogs who are very agile,active and prefer outdoors. They are historically bred to hunt, work or sport. Though all dogs need exercise, they require regular exercise not just to keep them in shape and healthy."
const intensityHigh = "Gentle natured dogs are easy to handle.They are family dogs - best with kids, elderly and even other animals. Since, they are not loud and rowdy, they are a manageable company when you live in an apartment."
const energyLevelLow = "LowA"
const potentialPlayfulnessLow = "LowB"
const exerciseNeedsLow = "LowC"
const intensityLow = "LDowD"
const recommendedA = "NUTRI CHUNKS Coat Shine with real Salmon meat rich in Omega 3 & 6 for healthy skin and shinier coat."
const recommendedB = "For puppies try NUTRI CHUNKS Hi-Protein that contains 27% of high quality protein to support your puppies’ growth and development. With milky aroma for improved palatability, suitable for all breeds of puppies weaning to 12 months."

const collie = {
    name: "COLLIE",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "A native from Scotland, Collie were primarily considered as herding dogs. But despite of, they are great family companions too! In Lassie, a 1950s television series, we knew that the Collie would come to the rescue. Collie is surely not only the star of the show but a star in real life as well. The real-life Collie is an extremely intelligent, sensitive dog known for her uncanny ability to know when something is wrong. True stories abound about this breed coming to the rescue of people and animals. They are definitely our super furry hero but aside from this, they are easy to train, devoted to and protective of her family, and friendly with people outside the family circle as well. She makes an excellent companion for children and an excellent watchdog for the whole family.",
        dogDescriptionB:"",
        dogDescriptionC: "",
        extraElementA: "",
        extraElementB: "",
        extraElementC: "",
        extraElementD: "",
        extraElementE: "",
    },

    statisticsSection: {
        backgroundImage: BackgroundTwo,
        dogType: "Herding Dogs",
        height: "22 to 26 inches ",
        weight: "22 to 23 kg",
        years: "10 to 14 years",
        extraElementA: ElementStatistics,
    },

    physicalNeeds: {
        backgroundImage: BackgroundThree,
        energyLevel: bar50,
        energyLevelDescription: energyLevelHigh,
        potentialPlayfulness: bar80,
        potentialPlayfulnessDescription: potentialPlayfulnessHigh,
        energyNeeds: bar50,
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
        extraElement: ElementRecommended
    },
    usualHealthProblem: {
        backgroundImage: BackgroundFive,
        healthlist: [
                "Dermatomyositis",
                "Collie Nose",
                "Collie Eye Anomaly",
                "Progressive Retinal atrophy (PRA)",
                "Nodular Granulomatous Episclerokeratitis (NGE)",
                "Hip Dysplasia",
                "Allergies",
                "Drug Sensitivity"
            ],
        extraElement: ElementUsualHealth
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "Overall, the Collie is a clean dog, with minimal dog odor. The long, full coat of the Rough Collie needs thorough brushing twice a week. Meanwhile, brushing once a week is sufficient for the Smooth Collie.\n\nIn terms of bathing, bathe as needed, usually every six to eight weeks. Brushing may be challenging because of their thick coat, but practice and instruction can keep this from becoming a discouraging chore. When trimming their nails, do it at least once a month. Do not forget to check their ears once a week for dirt, redness, or bad odor. Brush their teeth at least two or three times a week to remove tartar buildup and bacteria.",
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

export default collie;