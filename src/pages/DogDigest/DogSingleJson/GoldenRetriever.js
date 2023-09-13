import BackgroundOne from "../../../assets/media/dog_digest/golden-retriever/background/BG1.jpeg"
import BackgroundTwo from "../../../assets/media/dog_digest/golden-retriever/background/BG2.jpeg"
import BackgroundThree from "../../../assets/media/dog_digest/golden-retriever/background/BG3.jpeg"
import BackgroundFour from "../../../assets/media/dog_digest/golden-retriever/background/BG4.jpeg"
import BackgroundFive from "../../../assets/media/dog_digest/golden-retriever/background/BG5.jpeg"
import BackgroundSix from "../../../assets/media/dog_digest/golden-retriever/background/BG6.jpeg"
import BackgroundSeven from "../../../assets/media/dog_digest/golden-retriever/background/BG5.jpeg"
import DogImage from "../../../assets/media/dog_digest/golden-retriever/header/Golden Retriever.png"
import Kibble from "../../../assets/media/dog_digest/golden-retriever/header/Kibble na Masarap.png"
import ElementOne from "../../../assets/media/dog_digest/golden-retriever/elements/OE_Wind.svg"
import ElementStatistics from "../../../assets/media/dog_digest/golden-retriever/elements/OE_1.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/golden-retriever/elements/OE_2.svg"
import ElementRecommended from "../../../assets/media/dog_digest/golden-retriever/elements/OE_3.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/golden-retriever/elements/OE_4.svg"
import ElementGrooming from "../../../assets/media/dog_digest/golden-retriever/elements/OE_5.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/golden-retriever/featured/golden-retriever-featured-01.jpeg"
import featuredB from "../../../assets/media/dog_digest/golden-retriever/featured/golden-retriever-featured-02.jpeg"
import featuredC from "../../../assets/media/dog_digest/golden-retriever/featured/golden-retriever-featured-03.jpeg"
import featuredD from "../../../assets/media/dog_digest/golden-retriever/featured/golden-retriever-featured-04.jpeg"
import featuredE from "../../../assets/media/dog_digest/golden-retriever/featured/golden-retriever-featured-05.jpeg"
import featuredF from "../../../assets/media/dog_digest/golden-retriever/featured/golden-retriever-featured-06.jpeg"

import bar20 from "../../../assets/media/dog_digest/common-assets/bar-20.svg"
import bar40 from "../../../assets/media/dog_digest/common-assets/bar-40.svg"
import bar50 from "../../../assets/media/dog_digest/common-assets/bar-50.svg"
import bar60 from "../../../assets/media/dog_digest/common-assets/bar-60.svg"
import bar80 from "../../../assets/media/dog_digest/common-assets/bar-80.svg"
import bar100 from "../../../assets/media/dog_digest/common-assets/bar-100.svg"


const energyLevelHigh = "Energy filled dogs need mental and physical stimulation. They are at their happiest when activities are action packed. They are the best buddies to bring with you when running, hiking, and other kinds of adventures. "
const potentialPlayfulnessHigh = "From simple catch, sit and stay training, to more advanced lessons for tricks and agility, these dogs are up for the challenge. They are always looking forward to having playmates and playdates."
const exerciseNeedsHigh = "Pumped up dogs who are very agile,active and prefer outdoors. They are historically bred to hunt, work or sport. Though all dogs need exercise, they require regular exercise not just to keep them in shape and healthy."
const intensityHigh = "Gentle natured dogs are easy to handle. They are family dogs - best with kids, elderly and even other animals. Since they are not loud and rowdy, they are a manageable company when you live in an apartment."
const energyLevelLow = "LowA"
const potentialPlayfulnessLow = "LowB"
const exerciseNeedsLow = "LowC"
const intensityLow = "LDowD"
const recommendedA = "NUTRI CHUNKS Coat Shine with real Salmon meat rich in Omega 3 & 6 for healthy skin and shinier coat"
const recommendedB = "For puppies try NUTRI CHUNKS Hi-Protein that contains 27% of high quality protein to support your puppies’ growth and development. With milky aroma for improved palatability, suitable for all breeds of puppies weaning to 12 months"

const goldenRetriever = {
    name: "GOLDEN RETRIEVER",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "Do they retrieve gold? Figuratively, they do. Golden retrievers win over hearts, show genuine kindness and offer unlimited cuddles. No wonder they are the most popular dog breed in the USA.",
        dogDescriptionB:"They are athletic and good at retrieving games. With their sweet and gentle nature, they are the perfect family dog. They are also utilized as therapy and service dogs.",
        dogDescriptionC: "Golden retrievers have a huge appetite and often times were overfed and obese. Better to keep them in shape by watching their food intake, and taking them to regular exercise.",
        extraElementA: Kibble,
        extraElementB: "",
        extraElementC: "",
        extraElementD: "",
        extraElementE: "",
    },

    statisticsSection: {
        backgroundImage: BackgroundTwo,
        dogType: "Sporting Dogs",
        height: "21 to 24 inches ",
        weight: "25 to 34kg",
        years: "10 to 12 years",
        extraElementA: ElementStatistics,
    },

    physicalNeeds: {
        backgroundImage: BackgroundThree,
        energyLevel: bar60,
        energyLevelDescription: energyLevelHigh,
        potentialPlayfulness: bar80,
        potentialPlayfulnessDescription: potentialPlayfulnessHigh,
        energyNeeds: bar20,
        exerciseNeedsDescription: exerciseNeedsHigh,
        intentsity: bar40,
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
                "Hip Dysplasia",
                "Elbow Dysplasia",
                "Cataracts",
                "Progressive Retinal Atrophy (PRA)",
                "Subvalvular Aortic Stenosis",
                "Osteochondrosis Dissecans (OCD)",
                "Allergies",
                "Von Willebrand's Disease",
                "Gastric Dilation-Volvulus",
                "Epilepsy",
                "Hypothyroidism",
                "Hemangiosarcoma",
                'Osteosarcoma'
            ],
        extraElement: ElementUsualHealth
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "Golden and lustrous hairs are the hallmark of Golden Retrievers. Brace yourself for intensive fur care and maintenance. Commit yourself to daily brushing and detangling especially during their shedding season. Bath them only when necessary. Like any other dog, clean their ears, trim their nails, and brush their teeth to make them look, smell, and feel good.",
        extraElement: ElementGrooming
    },
    featured: {
        backgroundImage: BackgroundSeven,
        imageOne: featuredA,
        imageTwo: featuredB,
        imageThree: featuredC,
        imageFour: featuredD,
        imageFive: featuredE,
        imageSix: featuredF,
        extraElement: ""
    }
}

export default goldenRetriever;