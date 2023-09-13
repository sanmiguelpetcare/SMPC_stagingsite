import BackgroundOne from "../../../assets/media/dog_digest/corgi/background/BG_0.jpeg"
import BackgroundTwo from "../../../assets/media/dog_digest/corgi/background/BG_1.jpeg"
import BackgroundThree from "../../../assets/media/dog_digest/corgi/background/BG_2.jpeg"
import BackgroundFour from "../../../assets/media/dog_digest/corgi/background/BG_3.jpeg"
import BackgroundFive from "../../../assets/media/dog_digest/corgi/background/BG_4.jpeg"
import BackgroundSix from "../../../assets/media/dog_digest/corgi/background/BG_5.jpeg"
import BackgroundSeven from "../../../assets/media/dog_digest/corgi/background/BG_4.jpeg"
import DogImage from "../../../assets/media/dog_digest/corgi/header/Corgi.png" 
import Kibble from "../../../assets/media/dog_digest/siberian-husky/header/siberian-husky-1.png"
import ElementOne from "../../../assets/media/dog_digest/siberian-husky/elements/Snowflake1.svg"
import ElementTwo from "../../../assets/media/dog_digest/siberian-husky/elements/Snowflake2.svg"
import ElementThree from "../../../assets/media/dog_digest/siberian-husky/elements/Snowflake3.svg"
import ElementFour from "../../../assets/media/dog_digest/siberian-husky/elements/Snowflake4.svg"
import ElementStatistics from "../../../assets/media/dog_digest/corgi/elements/OE_1.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/corgi/elements/OE_2.svg"
import ElementRecommended from "../../../assets/media/dog_digest/corgi/elements/OE_3.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/corgi/elements/OE_4.svg"
import ElementGrooming from "../../../assets/media/dog_digest/corgi/elements/OE_5.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/corgi/featured/corgi-1.jpeg"
import featuredB from "../../../assets/media/dog_digest/corgi/featured/corgi-2.jpeg"
import featuredC from "../../../assets/media/dog_digest/corgi/featured/corgi-3.jpeg"
import featuredD from "../../../assets/media/dog_digest/corgi/featured/corgi-4.jpeg"
import featuredE from "../../../assets/media/dog_digest/corgi/featured/corgi-5.jpeg"
import featuredF from "../../../assets/media/dog_digest/corgi/featured/corgi-6.jpeg"

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

const corgi = {
    name: "PEMBROKE WELSH CORGI",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "Pembrokes and cardigans are two varieties of corgis that were bred and developed separately. Both are dwarf dogs with stocky built and upright ears. You can easily recognize Pembrokes since they have “broken” or bobbed tails in Sable, Red, and White color.",
        dogDescriptionB: "The fondness of Queen Elizabeth II of England to cardigan welsh corgis led to the stardom of these shepherd dogs. Due to their herding background, it’s not surprising that these short-legged dogs have the stamina for running.",
        dogDescriptionC: "Pembrokes are ideal for families who are active and fun-loving. With the right training and socialization, they can also be dependable house guards and drovers.",
        extraElementA: "",
        extraElementB: "",
        extraElementC: "",
        extraElementD: "",
        extraElementE: "",
    },

    statisticsSection: {
        backgroundImage: BackgroundTwo,
        dogType: "Herding Dogs",
        height: "10 to 12 inches",
        weight: "up to 14 kg",
        years: "12 to 14 years",
        extraElementA: ElementStatistics,
    },

    physicalNeeds: {
        backgroundImage: BackgroundThree,
        energyLevel: bar80,
        energyLevelDescription: energyLevelHigh,
        potentialPlayfulness: bar80,
        potentialPlayfulnessDescription: potentialPlayfulnessHigh,
        energyNeeds: bar80,
        exerciseNeedsDescription: exerciseNeedsHigh,
        intentsity: bar50,
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
            "Hip Dysplasia",
            "Cataracts",
            "Cutaneous Asthenia",
            "Cystinuria",
            "Degenerative Myelopathy (DM)",
            "Epilepsy",
            "Intervertebral Disk Disease",
            "Patent Ductus Arteriosus (PDA) with Pulmonary Hypertension Progressive Retinal Atrophy (PRA)",
            "Retinal Dysplasia",
            "Von Willebrand's Disease"
        ],
        extraElement: ElementUsualHealth,
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "Corgis have a double coat with a thick undercoat and long topcoat. Keeping one means being committed to daily brushing. They even shed continuously, and may shed more during summer. Thus, investing in a vacuum cleaner sounds like a great idea. As for dental care, brush their teeth at least once a week. Give them a bath when needed, considering their lifestyle and physical activity.",
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

export default corgi;