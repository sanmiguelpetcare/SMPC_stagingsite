import BackgroundOne from "../../../assets/media/dog_digest/cavalier-king-charles-spaniel/background/BG_0_288x-100.jpeg"
import BackgroundTwo from "../../../assets/media/dog_digest/cavalier-king-charles-spaniel/background/BG_01.jpeg"
import BackgroundThree from "../../../assets/media/dog_digest/cavalier-king-charles-spaniel/background/BG_02.jpeg"
import BackgroundFour from "../../../assets/media/dog_digest/cavalier-king-charles-spaniel/background/BG_03.jpeg"
import BackgroundFive from "../../../assets/media/dog_digest/cavalier-king-charles-spaniel/background/BG_04.jpeg"
import BackgroundSix from "../../../assets/media/dog_digest/cavalier-king-charles-spaniel/background/BG_05.jpeg"
import DogImage from "../../../assets/media/dog_digest/cavalier-king-charles-spaniel/header/King Charles Spaniel.png"
import Kibble from "../../../assets/media/dog_digest/cavalier-king-charles-spaniel/header/Masarap na Kibble.png"
import ElementStatistics from "../../../assets/media/dog_digest/cavalier-king-charles-spaniel/elements/OE_01.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/cavalier-king-charles-spaniel/elements/OE_02.svg"
import ElementRecommended from "../../../assets/media/dog_digest/cavalier-king-charles-spaniel/elements/OE_03.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/cavalier-king-charles-spaniel/elements/OE_04.svg"
import ElementGrooming from "../../../assets/media/dog_digest/cavalier-king-charles-spaniel/elements/OE_05.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/cavalier-king-charles-spaniel/featured/dog-g3b44ff315_1920.jpeg"
import featuredB from "../../../assets/media/dog_digest/cavalier-king-charles-spaniel/featured/dog-gce7610ade_1920.jpeg"
import featuredC from "../../../assets/media/dog_digest/cavalier-king-charles-spaniel/featured/dog-gf48ad9cfb_1920.jpeg"
import featuredD from "../../../assets/media/dog_digest/cavalier-king-charles-spaniel/featured/portrait-gb92df0a94_1920.jpeg"
import featuredE from "../../../assets/media/dog_digest/cavalier-king-charles-spaniel/featured/dog-gce7610ade_1920.jpeg"
import featuredF from "../../../assets/media/dog_digest/cavalier-king-charles-spaniel/featured/portrait-gb92df0a94_1920.jpeg"

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

const cavalierKingCharlesSpaniel = {
    name: "CAVALIER KING CHARLES SPANIEL",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "The Cavalier King Charles Spaniel is a small dog that was originally bred in the United Kingdom. Cavaliers are also known for their gentle demeanor and make great family pets. They are also known for their love of performing tricks, and they can be taught to do everything from rolling over to playing fetch.",
        dogDescriptionB:"They are prone to several health problems, including heart disease, ear infections, and hip dysplasia. However, with proper care, Cavaliers can live for 10 to 12 years.",
        dogDescriptionC: "If you're considering adding a one to your family, be sure to research the breed thoroughly and discuss any concerns you may have with your veterinarian. Cavaliers require a lot of love and attention, but they are well worth the effort.",
        extraElementA: Kibble,
        extraElementB: "",
        extraElementC: "",
        extraElementD: "",
        extraElementE: "",
    },

    statisticsSection: {
        backgroundImage: BackgroundTwo,
        dogType: "Companion Dogs",
        height: "12 to 13 inches ",
        weight: "6 to 8 kg",
        years: "9 to 15 years",
        extraElementA: ElementStatistics,
    },

    physicalNeeds: {
        backgroundImage: BackgroundThree,
        energyLevel: bar50,
        energyLevelDescription: energyLevelHigh,
        potentialPlayfulness: bar100,
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
        productsImageB: CoatshineA,
        productsImageC: "",
        recommendationA: recommendedA,
        recommendationB: recommendedB,
        extraElement: ElementRecommended
    },
    usualHealthProblem: {
        backgroundImage: BackgroundFive,
        healthlist: [
                "Mitral Valve Disease (MVD)",
                "Syringomyelia (SM) Episodic Falling",
                "Hip Dysplasia Patellar Luxation",
                "Keratoconjunctivities Sicca (Dry Eye)"
            ],
        extraElement: ElementUsualHealth
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "Cavalier King Charles Spaniels are one of the most easily groomed breeds around. In fact, their coat is so short and fine that it usually doesn't require more than a good brushing once or twice a week to keep it looking its best. You should check for signs or infection in ears and clean as needed, trim nails on regular basis (every two to four weeks) plus brush teeth at least one week per month so they stay healthy!",
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

export default cavalierKingCharlesSpaniel;