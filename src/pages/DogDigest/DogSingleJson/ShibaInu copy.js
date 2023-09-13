import BackgroundOne from "../../../assets/media/dog_digest/shiba-inu/background/BG_00.jpeg"
import BackgroundTwo from "../../../assets/media/dog_digest/shiba-inu/background/BG_01.jpeg"
import BackgroundThree from "../../../assets/media/dog_digest/shiba-inu/background/BG_02.jpeg"
import BackgroundFour from "../../../assets/media/dog_digest/shiba-inu/background/BG_03.jpeg"
import BackgroundFive from "../../../assets/media/dog_digest/shiba-inu/background/BG_04.jpeg"
import BackgroundSix from "../../../assets/media/dog_digest/shiba-inu/background/BG_05.jpeg"
import DogImage from "../../../assets/media/dog_digest/shiba-inu/header/Shiba Inu.png"
import Kibble from "../../../assets/media/dog_digest/shiba-inu/header/Masarap na Kibble.png"
import ElementStatistics from "../../../assets/media/dog_digest/shiba-inu/elements/OE_01.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/shiba-inu/elements/OE_02.svg"
import ElementRecommended from "../../../assets/media/dog_digest/shiba-inu/elements/OE_03.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/shiba-inu/elements/OE_04.svg"
import ElementGrooming from "../../../assets/media/dog_digest/shiba-inu/elements/OE_05.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/shiba-inu/featured/pexels-cottonbro-4046305.jpeg"
import featuredB from "../../../assets/media/dog_digest/shiba-inu/featured/pexels-cottonbro-4056462.jpeg"
import featuredC from "../../../assets/media/dog_digest/shiba-inu/featured/pexels-evgeny-tchebotarev-2187304.jpeg"
import featuredD from "../../../assets/media/dog_digest/shiba-inu/featured/pexels-meruyert-gonullu-6589065.jpeg"
import featuredE from "../../../assets/media/dog_digest/shiba-inu/featured/pexels-meruyert-gonullu-6589151.jpeg"
import featuredF from "../../../assets/media/dog_digest/shiba-inu/featured/pexels-valeria-boltneva-10875180.jpeg"

import bar20 from "../../../assets/media/dog_digest/common-assets/bar-20.svg"
import bar40 from "../../../assets/media/dog_digest/common-assets/bar-40.svg"
import bar50 from "../../../assets/media/dog_digest/common-assets/bar-50.svg"
import bar60 from "../../../assets/media/dog_digest/common-assets/bar-60.svg"
import bar80 from "../../../assets/media/dog_digest/common-assets/bar-80.svg"
import bar100 from "../../../assets/media/dog_digest/common-assets/bar-100.svg"


const energyLevelHigh = "Energy filled dogs need mental and physical stimulation. They are at their happiest when activities are action packed. They are the best buddies to bring with you when running, hiking, and other kinds of adventures."
const potentialPlayfulnessHigh = "From simple catch, sit and stay training, to more advanced lessons for tricks and agility, these dogs are up for the challenge. They are always looking forward to having playmates and playdates."
const exerciseNeedsHigh = "Pumped up dogs who are very agile,active and prefer outdoors. They are historically bred to hunt, work or sport. Though all dogs need exercise, they require regular exercise not just to keep them in shape and healthy."
const intensityHigh = "Gentle natured dogs are easy to handle. They are family dogs - best with kids, elderly and even other animals. Since they are not loud and rowdy, they are a manageable company when you live in an apartment."
const energyLevelLow = "LowA"
const potentialPlayfulnessLow = "LowB"
const exerciseNeedsLow = "LowC"
const intensityLow = "LDowD"
const recommendedA = "NUTRI CHUNKS Coat Shine with real Salmon meat rich in Omega 3 & 6 for healthy skin and shinier coat."
const recommendedB = "For puppies try NUTRI CHUNKS Hi-Protein that contains 27% of high quality protein to support your puppies’ growth and development. With milky aroma for improved palatability, suitable for all breeds of puppies weaning to 12 months."

const shibaInu = {
    name: "SHIBA INU",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "The Shiba Inu was originally bred as a hunting dog. Known as the smallest of the six original and distinct spitz breeds of dog from Japan, it is now one of the most popular breeds in its native country.",
        dogDescriptionB: "The breed standards for this compact, well muscled dog would make it seem like an agile athlete, but are not fast runners. They're most valued for their strong hunting instincts and willingness to obey commands.",
        dogDescriptionC: "Shibas can be difficult to housebreak because they are inclined to roam if bored or not exercised enough. They're relatively quiet for a dog of their size, barking only when necessary. Shibas tend to get on well with children but should always be supervised around very young kids.",
        extraElementA: Kibble,
        extraElementB: "",
        extraElementC: "",
        extraElementD: "",
        extraElementE: "",
    },

    statisticsSection: {
        backgroundImage: BackgroundTwo,
        dogType: "Companion Dogs",
        height: "14 to 17 inches",
        weight: "6 to 11 kg",
        years: "12 to 15 years",
        extraElementA: ElementStatistics,
    },

    physicalNeeds: {
        backgroundImage: BackgroundThree,
        energyLevel: bar80,
        energyLevelDescription: energyLevelHigh,
        potentialPlayfulness: bar60,
        potentialPlayfulnessDescription: potentialPlayfulnessHigh,
        energyNeeds: bar60,
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
            "Chylothorax",
            "Glaucoma",
            "Cancer",
            "Epilepsy",
            "Patellar Luxation",
            "Hypothyroidism",
            "Progressive Retinal Atrophy (PRA)",
            "Hip Dysplasia",
            "Tail Chasing/ Spinning"
        ],
        extraElement: ElementUsualHealth,
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "One of the best things about owning a Shiba Inu is that they are naturally clean. Their coats do not need to be professionally groomed as frequently as some other breeds, but they need to be regularly brushed to avoid matting and tangling. Be sure not to bathe them too often though, as this can actually damage their coat rather than improve it.",
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

export default shibaInu;