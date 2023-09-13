import BackgroundOne from "../../../assets/media/dog_digest/dachshund/background/00_BG_Option_1.jpg"
import BackgroundTwo from "../../../assets/media/dog_digest/dachshund/background/01_BG.jpg"
import BackgroundThree from "../../../assets/media/dog_digest/dachshund/background/02_BG.jpg"
import BackgroundFour from "../../../assets/media/dog_digest/dachshund/background/03_BG.jpg"
import BackgroundFive from "../../../assets/media/dog_digest/dachshund/background/04_BG.jpg"
import BackgroundSix from "../../../assets/media/dog_digest/dachshund/background/05_BG.jpg"
import DogImage from "../../../assets/media/dog_digest/dachshund/header/Dachshund.png" 
import Kibble from "../../../assets/media/dog_digest/dachshund/header/Masarap na Kibble.png"
import ElementStatistics from "../../../assets/media/dog_digest/dachshund/elements/01_OE.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/dachshund/elements/02_OE.svg"
import ElementRecommended from "../../../assets/media/dog_digest/dachshund/elements/03_OE.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/dachshund/elements/04_OE.svg"
import ElementGrooming from "../../../assets/media/dog_digest/dachshund/elements/05_OE.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/dachshund/featured/daschund-01.jpeg"
import featuredB from "../../../assets/media/dog_digest/dachshund/featured/daschund-02.jpeg"
import featuredC from "../../../assets/media/dog_digest/dachshund/featured/daschund-03.jpeg"
import featuredD from "../../../assets/media/dog_digest/dachshund/featured/daschund-04.jpeg"
import featuredE from "../../../assets/media/dog_digest/dachshund/featured/daschund-05.jpeg"
import featuredF from "../../../assets/media/dog_digest/dachshund/featured/daschund-06.jpeg"

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
const recommendedA = "Promotes better digestion with Optimum energy and nourishment for adult dogs. Specifically formulated for dogs' satiety, NUTRI CHUNKS Optimum Adult comes in Lamb and Beef + Chicken Liver!"
const recommendedB = "For puppies try NUTRI CHUNKS Hi-Protein that contains 27% of high quality protein to support your puppies’ growth and development. With milky aroma for improved palatability, suitable for all breeds of puppies weaning to 12 months."

const dachshund = {
    name: "DACHSHUND",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "Dachshund are known to have several nicknames such as hotdogs and doxies. They are irresistably cute and fun-loving. Beyond their charming features and character lies an interesting history.",
        dogDescriptionB: "Although doxies’ ancestry is unknown, Dachshunds rank sixth in the original breeds recognized by AKC. They were bred to smell like a hound and hunt like a terrier. Their compact body, powerful legs, and big lungs were useful in tunneling badgers and other den animals.",
        dogDescriptionC: "In the 1800s, people started to raise them as pets. Then they were less favored after World War I due to their association with Germany. They finally made a comeback in the ’50s. Today, they are one the most popular dog breed in the world!",
        extraElementA: Kibble,
        extraElementB: "",
        extraElementC: "",
        extraElementD: "",
        extraElementE: "",
    },

    statisticsSection: {
        backgroundImage: BackgroundTwo,
        dogType: "Hound Dogs",
        height: "8 to 9 inches",
        weight: "7 to 15 kg",
        years: "12 to 15 years",
        extraElementA: ElementStatistics,
    },

    physicalNeeds: {
        backgroundImage: BackgroundThree,
        energyLevel: bar60,
        energyLevelDescription: energyLevelHigh,
        potentialPlayfulness: bar80,
        potentialPlayfulnessDescription: potentialPlayfulnessHigh,
        energyNeeds: bar60,
        exerciseNeedsDescription: exerciseNeedsHigh,
        intentsity: bar60,
        intentsityDescription: intensityHigh,
        extraElementA: ElementPhysicalNeeds,
        extraElementB: "",
    },

    recommendedVariants:{
        backgroundImage: BackgroundFour,
        productsImageA: OlambA,
        productsImageB: ObeefA,
        productsImageC: HiProteinA,
        recommendationA: recommendedA,
        recommendationB: recommendedB,
        extraElement: ElementRecommended,
    },

    usualHealthProblem: {
        backgroundImage: BackgroundFive,
        healthlist: [
            "Intervertebral Retinal Disease (IVDD)",
            "Epilepsy",
            "Gastric Dilation-Volvulus (GDV) a.k.a. “Bloat” or “Torsion”",
            "Cushings Disease (hyperadrenocorticism)",
            "Canine diabetes Mellitus (DM)",
            "Deafness"
        ],
        extraElement: ElementUsualHealth,
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "Dachshunds may need occasional to regular detangling, depending on which coat type they have. Dachshunds come in three coat types: smooth, wirehaired, and longhaired. Use the appropriate hound glove and brush them daily. Bathe only when necessary. Given their size and regardless which coat type, Doxies are low maintenance dogs.",
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

export default dachshund;