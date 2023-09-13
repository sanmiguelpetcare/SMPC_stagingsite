import BackgroundOne from "../../../assets/media/dog_digest/poodle/background/BG_0.jpeg"
import BackgroundTwo from "../../../assets/media/dog_digest/poodle/background/BG_1.jpeg"
import BackgroundThree from "../../../assets/media/dog_digest/poodle/background/BG_2.jpeg"
import BackgroundFour from "../../../assets/media/dog_digest/poodle/background/BG_3.jpeg"
import BackgroundFive from "../../../assets/media/dog_digest/poodle/background/BG_4.jpeg"
import BackgroundSix from "../../../assets/media/dog_digest/poodle/background/BG_5.jpeg"
import BackgroundSeven from "../../../assets/media/dog_digest/siberian-husky/background/BG5.jpeg"
import DogImage from "../../../assets/media/dog_digest/poodle/header/Poodle.png" 
import Kibble from "../../../assets/media/dog_digest/poodle/header/Masarap na Kibble.png"
import ElementOne from "../../../assets/media/dog_digest/poodle/elements/OE_0.svg"
import ElementStatistics from "../../../assets/media/dog_digest/poodle/elements/OE_1.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/poodle/elements/OE_2.svg"
import ElementRecommended from "../../../assets/media/dog_digest/poodle/elements/OE_3.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/poodle/elements/OE_4.svg"
import ElementGrooming from "../../../assets/media/dog_digest/poodle/elements/OE_5.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/poodle/featured/poodle-1.jpeg"
import featuredB from "../../../assets/media/dog_digest/poodle/featured/poodle-2.jpeg"
import featuredC from "../../../assets/media/dog_digest/poodle/featured/poodle-3.jpeg"
import featuredD from "../../../assets/media/dog_digest/poodle/featured/poodle-4.jpeg"
import featuredE from "../../../assets/media/dog_digest/poodle/featured/poodle-5.jpeg"
import featuredF from "../../../assets/media/dog_digest/poodle/featured/poodle-6.jpeg"

import Bar20 from "../../../assets/media/dog_digest/common-assets/bar-20.svg"
import bar40 from "../../../assets/media/dog_digest/common-assets/bar-40.svg"
import bar50 from "../../../assets/media/dog_digest/common-assets/bar-50.svg"
import bar60 from "../../../assets/media/dog_digest/common-assets/bar-60.svg"
import bar80 from "../../../assets/media/dog_digest/common-assets/bar-80.svg"
import bar100 from "../../../assets/media/dog_digest/common-assets/bar-100.svg"


const energyLevelHigh = "Energy filled dogs need mental and physical stimulation. They are at their happiest when activities are action packed. They are the best buddies to bring with you when running, hiking, and other kinds of adventures."
const potentialPlayfulnessHigh = "From simple catch, sit and stay training, to more advanced lessons for tricks and agility, these dogs are up for the challenge. They are always looking forward to having playmates and playdates."
const exerciseNeedsHigh = "Pumped up dogs who are very agile,active and prefer outdoors. They are historically bred to hunt, work or sport. Though all dogs need exercise, they require regular exercise not just to keep them in shape and healthy."
const intensityHigh = "Forceful dogs are virougus; they may strain themselves wearing the leash, break obstacle courses and devour their food. If not properly trained, they are not advised around kids and the elderly without supervision."
const energyLevelLow = "LowA"
const potentialPlayfulnessLow = "LowB"
const exerciseNeedsLow = "LowC"
const intensityLow = "LDowD"
const recommendedA = "NUTRI CHUNKS Coat Shine with real Salmon meat rich in Omega 3 & 6 for healthy skin and shinier coat."
const recommendedB = "For puppies try NUTRI CHUNKS Hi-Protein that contains 27% of high quality protein to support your puppies’ growth and development. With milky aroma for improved palatability, suitable for all breeds of puppies weaning to 12 months."

const poodle = {
    name: "POODLE",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "Poodles are the national dog of France. Before poodles become runway and dog show regulars, their intelligence and athleticism were used as mushroom hunters and waterfowl retrievers.",
        dogDescriptionB: "Even their famous haircut was meant to keep them lighter in the water. To protect their joints and organs from the cold water, puffs of hair were kept on their ankles and upper torso.",
        dogDescriptionC: "Poodles do not shed because they have hairs, not fur. While this makes them hypoallergenic, it also makes hair care a commitment. Poodles do come in three size varieties: standard, miniature, and toy. All of which are hyper-intelligent, and in constant need of mental and physical stimulation.",
        extraElementA: Kibble,
        extraElementB: ElementOne,
        extraElementC: ElementOne,
        extraElementD: "",
        extraElementE: "",
    },

    statisticsSection: {
        backgroundImage: BackgroundTwo,
        dogType: "Companion Dogs",
        height: "10 to 22 inches",
        weight: "3 to 31 kg",
        years: "12 to 15 years",
        extraElementA: ElementStatistics,
    },

    physicalNeeds: {
        backgroundImage: BackgroundThree,
        energyLevel: bar80,
        energyLevelDescription: energyLevelHigh,
        potentialPlayfulness: bar100,
        potentialPlayfulnessDescription: potentialPlayfulnessHigh,
        energyNeeds: bar80,
        exerciseNeedsDescription: exerciseNeedsHigh,
        intentsity: bar60,
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
            "Addison's Disease",
            "Gastric Dilation-Volvulus",
            "Cushings Disease (Hyperadrenocorticism)",
            "Epilepsy",
            "Hip Dysplasia",
            "Elbow Dysplasia",
            "Hypothyroidism",
            "Legg-Perthes Disease",
            "Patellar Luxation",
            "Progressive Retinal Atrophy (PRA)",
            "Optic Nerve Hypoplasia",
            "Sebaceous Adenitis (SA)",
            "Von Willebrand's Disease"
        ],
        extraElement: ElementUsualHealth,
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "There is no doubt poodles are high-maintenance dogs. Poodles can be styled in elaborate, fancy, and creative ways. To prevent hairs from matting, poodles should be brought to a professional grooming clinic at least every three to six weeks. Aside from haircuts, poodle owners should begin with proper hair care. This involves brushing, combing, hair products, and even a good diet.",
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

export default poodle;