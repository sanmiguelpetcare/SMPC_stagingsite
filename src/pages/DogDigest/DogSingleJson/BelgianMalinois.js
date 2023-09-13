import BackgroundOne from "../../../assets/media/dog_digest/belgian-malinois/background/00_BG.jpeg"
import BackgroundTwo from "../../../assets/media/dog_digest/belgian-malinois/background/01_BG.jpeg"
import BackgroundThree from "../../../assets/media/dog_digest/belgian-malinois/background/02_BG.jpeg"
import BackgroundFour from "../../../assets/media/dog_digest/belgian-malinois/background/03_BG.jpeg"
import BackgroundFive from "../../../assets/media/dog_digest/belgian-malinois/background/04_BG.jpeg"
import BackgroundSix from "../../../assets/media/dog_digest/belgian-malinois/background/05_BG.jpeg"
import BackgroundSeven from "../../../assets/media/dog_digest/belgian-malinois/background/04_BG.jpeg"
import DogImage from "../../../assets/media/dog_digest/belgian-malinois/header/Belgian Malilois.png"
import Kibble from "../../../assets/media/dog_digest/belgian-malinois/header/Masarap na Kibble.png"
import ElementOne from "../../../assets/media/dog_digest/german-shephered/header/A-eroplane.png"
import ElementStatistics from "../../../assets/media/dog_digest/belgian-malinois/elements/01_OE.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/belgian-malinois/elements/02_OE.svg"
import ElementRecommended from "../../../assets/media/dog_digest/belgian-malinois/elements/03_OE.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/belgian-malinois/elements/04_OE.svg"
import ElementGrooming from "../../../assets/media/dog_digest/belgian-malinois/elements/05_OE.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/belgian-malinois/featured/belgian-malinois-01.jpeg"
import featuredB from "../../../assets/media/dog_digest/belgian-malinois/featured/belgian-malinois-02.jpeg"
import featuredC from "../../../assets/media/dog_digest/belgian-malinois/featured/belgian-malinois-03.jpeg"
import featuredD from "../../../assets/media/dog_digest/belgian-malinois/featured/belgian-malinois-04.jpeg"
import featuredE from "../../../assets/media/dog_digest/belgian-malinois/featured/belgian-malinois-05.jpeg"
import featuredF from "../../../assets/media/dog_digest/belgian-malinois/featured/belgian-malinois-06.jpeg"

import Bar20 from "../../../assets/media/dog_digest/common-assets/bar-20.svg"
import bar40 from "../../../assets/media/dog_digest/common-assets/bar-40.svg"
import bar50 from "../../../assets/media/dog_digest/common-assets/bar-50.svg"
import bar60 from "../../../assets/media/dog_digest/common-assets/bar-60.svg"
import bar80 from "../../../assets/media/dog_digest/common-assets/bar-80.svg"
import bar100 from "../../../assets/media/dog_digest/common-assets/bar-100.svg"


const energyLevelHigh = "Energy filled dogs need mental and physical stimulation. They are at their happiest when activities are action packed. They are the best buddies to bring with you when running, hiking, and other kinds of adventures. "
const potentialPlayfulnessHigh = "From simple catch, sit and stay training, to more advanced lessons for tricks and agility, these dogs are up for the challenge. They are always looking forward to having playmates and playdates."
const exerciseNeedsHigh = "Pumped up dogs who are very agile,active and prefer outdoors. They are historically bred to hunt, work or sport. Though all dogs need exercise, they require regular exercise not just to keep them in shape and healthy."
const intensityHigh = "Forceful dogs are virougus; they may strain themselves wearing the leash, break obstacle courses and devour their food. If not properly trained, they are not advised around kids and the elderly without supervision."
const energyLevelLow = "LowA"
const potentialPlayfulnessLow = "LowB"
const exerciseNeedsLow = "LowC"
const intensityLow = "LDowD"
const recommendedA = "Promotes better digestion with Optimum energy and nourishment for adult dogs. Specifically formulated for dogs' satiety, NUTRI CHUNKS Optimum Adult comes in Lamb and Beef + Chicken Liver!"
const recommendedB = "For puppies try NUTRI CHUNKS Hi-Protein that contains 27% of high quality protein to support your puppies’ growth and development. With milky aroma for improved palatability, suitable for all breeds of puppies weaning to 12 months."

const belgianMalinois = {
    name: "BELGIAN MALINOIS",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "Named after its city of origin, Malines, Malinois (pronounced as Mah-lin-wa) is actually one of the four shepherds of Belgium. This breed is also often mistaken as the German Shepherd.",
        dogDescriptionB:"Unlike GSDs, Belgian Malinois is lean and angular in silhouette. Its color is usually fawn or any shade of tan, with a black facemask. From being a sheepdog they became service dogs in the military and police because they are hardworking and smart.",
        dogDescriptionC: "They are reliable watchdogs too, for they are very protective and territorial. However, they have a high tendency to have aggressive and destructive behavior. This breed is compatible with experienced dog owners who can handle their energy and hone their temperament.",
        extraElementA: Kibble,
        extraElementB: "",
        extraElementC: "",
        extraElementD: "",
        extraElementE: "",
    },

    statisticsSection: {
        backgroundImage: BackgroundTwo,
        dogType: "Herding Dogs",
        height: "22 to 26 inches ",
        weight: "18 to 28 kg",
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
        intentsity: bar80,
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
        extraElement: ElementRecommended
    },
    usualHealthProblem: {
        backgroundImage: BackgroundFive,
        healthlist: [
                "Hip dysplasia",
                "Progressive Retinal Atrophy (PRA)",
                "Elbow Dysplasia",
                "Anesthesia Sensitivity"
            ],
        extraElement: ElementUsualHealth
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "Belgian Malinois have short and straight coats. They do shed once a year and are generally easy to maintain. Commit to regular brushing to remove dirt and old hairs. Give them a bath only when necessary. At least twice a week, brush their teeth, clean their ears, and clip their nails. As you do this hygiene routine, make sure you also checked for any signs of sores, fungal infection, and other parasites.",
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

export default belgianMalinois;