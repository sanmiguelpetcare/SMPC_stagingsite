import BackgroundOne from "../../../assets/media/dog_digest/basset-hound/background/BG_0.jpeg"
import BackgroundTwo from "../../../assets/media/dog_digest/basset-hound/background/BG_1.jpeg"
import BackgroundThree from "../../../assets/media/dog_digest/basset-hound/background/BG_2.jpeg"
import BackgroundFour from "../../../assets/media/dog_digest/basset-hound/background/BG_3.jpeg"
import BackgroundFive from "../../../assets/media/dog_digest/basset-hound/background/BG_4.jpeg"
import BackgroundSix from "../../../assets/media/dog_digest/basset-hound/background/BG_5.jpeg"
import BackgroundSeven from "../../../assets/media/dog_digest/basset-hound/background/BG_4.jpeg"
import DogImage from "../../../assets/media/dog_digest/basset-hound/header/Basset Hound.png" 
import Kibble from "../../../assets/media/dog_digest/labrador/header/Masarap na Kibble.png"
import ElementOne from "../../../assets/media/dog_digest/basset-hound/header/Plant_1.svg"
import ElementTwo from "../../../assets/media/dog_digest/basset-hound/header/Plant_2.svg"
import ElementStatistics from "../../../assets/media/dog_digest/basset-hound/elements/OE_1.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/basset-hound/elements/OE_2.svg"
import ElementRecommended from "../../../assets/media/dog_digest/basset-hound/elements/OE_3.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/basset-hound/elements/OE_4.svg"
import ElementGrooming from "../../../assets/media/dog_digest/basset-hound/elements/OE_5.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/basset-hound/featured/basset-hound-01.jpeg"
import featuredB from "../../../assets/media/dog_digest/basset-hound/featured/basset-hound-02.jpeg"
import featuredC from "../../../assets/media/dog_digest/basset-hound/featured/basset-hound-03.jpeg"
import featuredD from "../../../assets/media/dog_digest/basset-hound/featured/basset-hound-04.jpeg"
import featuredE from "../../../assets/media/dog_digest/basset-hound/featured/basset-hound-05.jpeg"
import featuredF from "../../../assets/media/dog_digest/basset-hound/featured/basset-hound-06.jpeg"

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

const bassettHound = {
    name: "BASSET HOUND",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "St. Hubert hounds are the ancestor of Bassets, which basically makes Bassets its smaller version. As scent hounds, Bassets were used for hunting rabbits and other small animals. Its short legs make slow-walking hunters can follow them.",
        dogDescriptionB: "Bassets are known for their droopy skin and floor dragging ears. These are the source of their skill, charm, and grooming needs. For instance, their wrinkled skin captures the scent of their target. However, their loose skin creates folds and inables them to fully close their mouth causing them to drool.",
        dogDescriptionC: "People are fond of them not because of their tracking ability but due to their comical appearance. They are perfect for families with a cozy, lowkey, and not-so-active lifestyle.",
        extraElementA: "",
        extraElementB: ElementOne,
        extraElementC: ElementTwo,
        extraElementD: "",
        extraElementE: "",
    },

    statisticsSection: {
        backgroundImage: BackgroundTwo,
        dogType: "Hound Dogs",
        height: "up to 14 inches",
        weight: "23 to 30 kg",
        years: "10 to 12 years",
        extraElementA: ElementStatistics,
    },

    physicalNeeds: {
        backgroundImage: BackgroundThree,
        energyLevel: bar60,
        energyLevelDescription: energyLevelHigh,
        potentialPlayfulness: bar60,
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
            "Gastric Dilatation-Volvulus (GDV)",
            "Von Willebrand's Disease",
            "Panosteitis",
            "Glaucoma",
            "Allergies",
            "Patellar Luxation",
            "Eyelid and Eyelash Problems",
            "Interverbral Disc Disease",
            "Ear Infections",
            "Obesity",
            "Hip Dysplasia",
            "Cherry Eye"
        ],
        extraElement: ElementUsualHealth,
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "Basset hounds have short and silky hair. Expect minimal shedding, although commit to at least once a week brushing to remove dead hairs and stimulate hair growth. Occasionally give them a bath. Their long and dragging ears that are susceptible to ear infections. Regularly inspect and clean every corner and fold of their loose skin as these are very good breeding grounds for fungi, lice, and ticks.",
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

export default bassettHound;