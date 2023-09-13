import BackgroundOne from "../../../assets/media/dog_digest/labrador/background/BG_0.jpeg"
import BackgroundTwo from "../../../assets/media/dog_digest/labrador/background/BG_1.jpeg"
import BackgroundThree from "../../../assets/media/dog_digest/labrador/background/BG_2.jpeg"
import BackgroundFour from "../../../assets/media/dog_digest/labrador/background/BG_3.jpeg"
import BackgroundFive from "../../../assets/media/dog_digest/labrador/background/BG_4.jpeg"
import BackgroundSix from "../../../assets/media/dog_digest/labrador/background/BG_5.jpeg"
import BackgroundSeven from "../../../assets/media/dog_digest/labrador/background/BG_4.jpeg"
import DogImage from "../../../assets/media/dog_digest/labrador/header/Labrador Retriever.png" 
import Kibble from "../../../assets/media/dog_digest/labrador/header/Masarap na Kibble.png"
import ElementOne from "../../../assets/media/dog_digest/poodle/elements/OE_0.svg"
import ElementStatistics from "../../../assets/media/dog_digest/dalmatian/elements/OE_1.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/dalmatian/elements/OE_2.svg"
import ElementRecommended from "../../../assets/media/dog_digest/dalmatian/elements/OE_3.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/dalmatian/elements/OE_4.svg"
import ElementGrooming from "../../../assets/media/dog_digest/dalmatian/elements/OE_5.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/labrador/featured/labrador-1.jpeg"
import featuredB from "../../../assets/media/dog_digest/labrador/featured/labrador-2.jpeg"
import featuredC from "../../../assets/media/dog_digest/labrador/featured/labrador-3.jpeg"
import featuredD from "../../../assets/media/dog_digest/labrador/featured/labrador-4.jpeg"
import featuredE from "../../../assets/media/dog_digest/labrador/featured/labrador-5.jpeg"
import featuredF from "../../../assets/media/dog_digest/labrador/featured/labrador-6.jpeg"

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

const labradorRetriever = {
    name: "LABRADOR RETRIEVER",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "Before Labrador Retrievers became the most popular dog of America, they used to be called as “St. John’s dog”. They originated from the northern east coast of Newfoundland, Canada. Thanks to Labs’ dense and water-resistant coats, helping the fisher folks is no big deal.",
        dogDescriptionB: "From being retrievers and hunters, Labs are now trained to be guide, therapy, and service dogs. Labs are easy to train as they are also eager to please.",
        dogDescriptionC: "They may fail regulating their diet and guarding your house. After all, it’s not their utility that makes Labs a top choice; rather it’s their pleasing personality and warm presence.",
        extraElementA: Kibble,
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
        energyLevel: bar100,
        energyLevelDescription: energyLevelHigh,
        potentialPlayfulness: bar100,
        potentialPlayfulnessDescription: potentialPlayfulnessHigh,
        energyNeeds: bar100,
        exerciseNeedsDescription: exerciseNeedsHigh,
        intentsity: bar100,
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
            "Hip Dysplasia",
            "Elbow Dysplasia",
            "Osteochondrosis Dissecans (OCD)",
            "Cataracts",
            "Progressive Retinal Atrophy (PRA)",
            "Epilepsy",
            "Tricuspid Valve Dysplasia (TVD)",
            "Myopathy",
            "Gastric Dilation-Volvulus",
            "Acute Moist Dermatitis",
            "Cold Tail",
            "Ear Infections"
        ],
        extraElement: ElementUsualHealth,
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "Labradors have two coats; their topcoat is short and thick,while the undercoat is soft and water-resistant. Expect fur shedding and coat maintenance. Do not overdo bathing, to keep the natural oil of their skin. Brush them daily to avoid fur matting, take out dead hairs, and induce hair growth. Lastly, a quality vacuum comes very handy.",
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

export default labradorRetriever;