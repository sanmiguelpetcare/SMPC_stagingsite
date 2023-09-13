import BackgroundOne from "../../../assets/media/dog_digest/shi-tzu/background/BG1.png"
import BackgroundTwo from "../../../assets/media/dog_digest/shi-tzu/background/BG2.png"
import BackgroundThree from "../../../assets/media/dog_digest/shi-tzu/background/BG3.png"
import BackgroundFour from "../../../assets/media/dog_digest/shi-tzu/background/BG4.png"
import BackgroundFive from "../../../assets/media/dog_digest/shi-tzu/background/BG5.png"
import BackgroundSix from "../../../assets/media/dog_digest/shi-tzu/background/BG6.png"
import BackgroundSeven from "../../../assets/media/dog_digest/shi-tzu/background/BG5.png"
import DogImage from "../../../assets/media/dog_digest/shi-tzu/header/Shih-tzu.png"
import KibbleAndScepter from "../../../assets/media/dog_digest/shi-tzu/header/Kibble-and-Scepter.png"
import ElementOne from "../../../assets/media/dog_digest/shi-tzu/elements/sparkle.svg"
import ElementTwo from "../../../assets/media/dog_digest/beagle/section-one/Paltform.png"
import ElementStatistics from "../../../assets/media/dog_digest/shi-tzu/elements/01.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/shi-tzu/elements/02.svg"
import ElementRecommended from "../../../assets/media/dog_digest/shi-tzu/elements/03.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/shi-tzu/elements/04.svg"
import ElementGrooming from "../../../assets/media/dog_digest/shi-tzu/elements/05.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/shi-tzu/featured/shih-tzu-1.png"
import featuredB from "../../../assets/media/dog_digest/shi-tzu/featured/shih-tzu-2.png"
import featuredC from "../../../assets/media/dog_digest/shi-tzu/featured/shih-tzu-3.png"
import featuredD from "../../../assets/media/dog_digest/shi-tzu/featured/shih-tzu-4.png"
import featuredE from "../../../assets/media/dog_digest/shi-tzu/featured/shih-tzu-5.png"
import featuredF from "../../../assets/media/dog_digest/shi-tzu/featured/shih-tzu-6.png"

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
const recommendedA = "NUTRI CHUNKS Coat Shine with real Salmon meat rich in Omega 3 & 6 for healthy skin and shinier coat"
const recommendedB = "For puppies try NUTRI CHUNKS Hi-Protein that contains 27% of high quality protein to support your puppies’ growth and development. With milky aroma for improved palatability, suitable for all breeds of puppies weaning to 12 months"

const shiTzu = {
    name: "SHIH TZU",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "Shih Tzus are regal charmer way back in China during the Ming dynasty. Today, they are the most loved and popular breed in the Philippines.",
        dogDescriptionB:"Unlike other dogs that are bred to hunt, herd or sport, Shih Tzus are companion dogs. They sit on your lap, tail you around, and greet your visitors. They are friendly and affectionate to anybody - humans and animals alike.",
        dogDescriptionC: "Bear in mind that, their double coats are not suitable for hot climates. Keep them indoors to prevent them from heatstroke and overheating. More reasons to pamper Shih Tzus like babies.",
        extraElementA: KibbleAndScepter,
        extraElementB: ElementOne,
        extraElementC: "",
        extraElementD: "",
        extraElementE: "",
    },

    statisticsSection: {
        backgroundImage: BackgroundTwo,
        dogType: "Companion Dogs",
        height: "9 to 10 inches ",
        weight: "4 to 7kg",
        years: "10 to 16 years",
        extraElementA: ElementStatistics,
    },

    physicalNeeds: {
        backgroundImage: BackgroundThree,
        energyLevel: bar40,
        energyLevelDescription: energyLevelHigh,
        potentialPlayfulness: bar80,
        potentialPlayfulnessDescription: potentialPlayfulnessHigh,
        energyNeeds: bar40,
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
        // productsImageC: "",
        recommendationA: recommendedA,
        recommendationB: recommendedB,
        extraElement: ElementRecommended
    },
    usualHealthProblem: {
        backgroundImage: BackgroundFive,
        healthlist: [
                "Allergies",
                "Canine hip dysplasia",
                "Patellar luxation",
                "Juvenile renal dysplasia",
                "Bladder stones and bladder infections",
                "Eye problems ",
                "Ear infections",
                "Retained baby teeth and tooth and gum problems",
                "Umbilical hernia",
                "Portosystemic liver shunt",
                "Snuffles",
                "Reverse sneezing",
            ],
        extraElement: ElementUsualHealth
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "Shih Tzu’s fur is their crowning glory. Invest in daily combing, detangling as well as dog hair products, and visit for grooming salons. You can be creative on styling their hair –shaved, moderate cut or top tie. However, cleanliness should come first. Give them bath depending on their lifestyle and weather condition. Regularly trim their nails, brush their teeth, and check their ears.",
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

export default shiTzu;