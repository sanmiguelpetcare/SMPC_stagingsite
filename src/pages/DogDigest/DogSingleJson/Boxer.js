import BackgroundOne from "../../../assets/media/dog_digest/boxer/background/BG_00.jpeg"
import BackgroundTwo from "../../../assets/media/dog_digest/boxer/background/BG_01.jpeg"
import BackgroundThree from "../../../assets/media/dog_digest/boxer/background/BG_02.jpeg"
import BackgroundFour from "../../../assets/media/dog_digest/boxer/background/BG_03.jpeg"
import BackgroundFive from "../../../assets/media/dog_digest/boxer/background/BG_04.jpeg"
import BackgroundSix from "../../../assets/media/dog_digest/boxer/background/BG_05.jpeg"
import DogImage from "../../../assets/media/dog_digest/boxer/header/Boxer.png"
import ElementStatistics from "../../../assets/media/dog_digest/boxer/elements/OE_01.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/boxer/elements/OE_02.svg"
import ElementRecommended from "../../../assets/media/dog_digest/boxer/elements/OE_03.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/boxer/elements/OE_04.svg"
import ElementGrooming from "../../../assets/media/dog_digest/boxer/elements/OE_05.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/boxer/featured/anita-peeples-5ylV-khwM9s-unsplash.jpeg"
import featuredB from "../../../assets/media/dog_digest/boxer/featured/dog-gb22a6c673_1920.jpeg"
import featuredC from "../../../assets/media/dog_digest/boxer/featured/lucie-helesicova-F987HmlxnAw-unsplash.jpeg"
import featuredD from "../../../assets/media/dog_digest/boxer/featured/stephan-louis-cZf8RkLSk_Q-unsplash.jpeg"
import featuredE from "../../../assets/media/dog_digest/boxer/featured/vidhey-pv-fZFAOhWETpM-unsplash.jpeg"
import featuredF from "../../../assets/media/dog_digest/boxer/featured/yousef-espanioly-Wgaqx7loF2A-unsplash.jpeg"

import bar20 from "../../../assets/media/dog_digest/common-assets/bar-20.svg"
import bar40 from "../../../assets/media/dog_digest/common-assets/bar-40.svg"
import bar50 from "../../../assets/media/dog_digest/common-assets/bar-50.svg"
import bar60 from "../../../assets/media/dog_digest/common-assets/bar-60.svg"
import bar80 from "../../../assets/media/dog_digest/common-assets/bar-80.svg"
import bar100 from "../../../assets/media/dog_digest/common-assets/bar-100.svg"


const energyLevelHigh = "Energy filled dogs need mental and physical stimulation. They are at their happiest when activities are action packed. They are the best buddies to bring with you when running, hiking, and other kinds of adventures."
const potentialPlayfulnessHigh = "From simple catch, sit and stay training, to more advanced lessons for tricks and agility, these dogs are up for the challenge. They are always looking forward to having playmates and playdates."
const exerciseNeedsHigh = "Pumped up dogs who are very agile, active and prefer outdoors. They are historically bred to hunt, work or sport. Though all dogs need exercise, they require regular exercise not just to keep them in shape and healthy."
const intensityHigh = "Forceful dogs are virougus; they may strain themselves wearing the leash, break obstacle courses and devour their food. If not properly trained, they are not advised around kids and the elderly without supervision."
const energyLevelLow = "LowA"
const potentialPlayfulnessLow = "LowB"
const exerciseNeedsLow = "LowC"
const intensityLow = "LDowD"
const recommendedA = "Promotes better digestion with Optimum energy and nourishment for adult dogs. Specifically formulated for dogs' satiety, NUTRI CHUNKS OPTIMUM ADULT comes in Lamb, and Beef + Chicken Liver Flavor!"
const recommendedB = "For puppies try NUTRI CHUNKS Hi-Protein that contains 27% of high quality protein to support your puppies’ growth and development. With milky aroma for improved palatability, suitable for all breeds of puppies weaning to 12 months."

const boxer = {
    name: "BOXER",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "The Boxer's ancestors were the German Bullenbeisser–a dog descended from Mastiffs and the Bulldogs–and was used primarily for hunting preys. Overtime, they became guards of farmers and butchers. In modern times, Boxers mostly find homes as loving family companions. That said, they still retain their high energy levels and need plenty of physical activities. Because of their playful nature and boundless energy, they are sometimes called the \"Peter Pan\" of the dog breeds. They have a look with a glimpse of a sense of humor and sweetness. They adore their families and will also appreciate consistent training.",
        dogDescriptionB: "",
        dogDescriptionC: "",
        extraElementA: "",
        extraElementB: "",
        extraElementC: "",
        extraElementD: "",
        extraElementE: "",
    },

    statisticsSection: {
        backgroundImage: BackgroundTwo,
        dogType: "Working Dogs",
        height: "21 to 26 inches ",
        weight: "27 to 32 kg",
        years: "10 to 12 years",
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
        productsImageA: HiProteinA,
        productsImageB: OlambA,
        productsImageC: "",
        recommendationA: recommendedA,
        recommendationB: recommendedB,
        extraElement: ElementRecommended
    },
    usualHealthProblem: {
        backgroundImage: BackgroundFive,
        healthlist: [
                "Cancer",
                "Aortic stenosis/sub-aortic stenosis (AS/SAS)",
                "Boxer cardiomyopathy (BCM)",
                "Hip Dysplasia",
                "Hypothyroidism",
                "Corneal Dystrophy",
                "Demodectic Mange",
                "Gastric dilatation-volvulus (GDV)",
                "Allergies Deafness"
            ],
        extraElement: ElementUsualHealth
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "The Boxer requires minimal grooming because they are clean dogs and have been known to groom themselves like cats do. Boxers can shed quite a bit, but weekly brushing with a bristle brush will help keep hair under control. Other grooming needs include dental hygiene and nail care. Brush your Boxer's teeth several times a week to help remove tartar and bacteria. Daily dental hygiene is best if you want to prevent periodontal disease.\nTrim nails once or twice a month if your dog doesn't wear them down naturally. If you can hear them clicking on the floor, then your dog\'s nails are too long. The short and neatly-trimmed kind keep their feet in good condition so that when they jump up excitedly to greet someone it doesn\'t scratch any skin!",
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

export default boxer;