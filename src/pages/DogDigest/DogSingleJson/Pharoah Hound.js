import BackgroundOne from "../../../assets/media/dog_digest/pharoah-hound/background/BG_00.jpeg"
import BackgroundTwo from "../../../assets/media/dog_digest/pharoah-hound/background/BG_01.jpeg"
import BackgroundThree from "../../../assets/media/dog_digest/pharoah-hound/background/BG_02.jpeg"
import BackgroundFour from "../../../assets/media/dog_digest/pharoah-hound/background/BG_03.jpeg"
import BackgroundFive from "../../../assets/media/dog_digest/pharoah-hound/background/BG_04.jpeg"
import BackgroundSix from "../../../assets/media/dog_digest/pharoah-hound/background/BG_05.jpeg"
import DogImage from "../../../assets/media/dog_digest/pharoah-hound/header/Pharaoh Hound.png"
import ElementStatistics from "../../../assets/media/dog_digest/pharoah-hound/elements/OE_01.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/pharoah-hound/elements/OE_02.svg"
import ElementRecommended from "../../../assets/media/dog_digest/pharoah-hound/elements/OE_03.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/pharoah-hound/elements/OE_04.svg"
import ElementGrooming from "../../../assets/media/dog_digest/pharoah-hound/elements/OE_05.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/pharoah-hound/featured/horizontal-shot-cute-brown-pharaoh-hound.jpeg"
import featuredB from "../../../assets/media/dog_digest/pharoah-hound/featured/pexels-enzo-muñoz-6729352.jpeg"
import featuredC from "../../../assets/media/dog_digest/pharoah-hound/featured/portrait-cute-brown-half-breed-dog.jpeg"
import featuredD from "../../../assets/media/dog_digest/pharoah-hound/featured/selective-focus-shot-adorable-pharaoh-hound (1).jpeg"
import featuredE from "../../../assets/media/dog_digest/pharoah-hound/featured/selective-focus-shot-adorable-pharaoh-hound.jpeg"
import featuredF from "../../../assets/media/dog_digest/pharoah-hound/featured/horizontal-shot-cute-brown-pharaoh-hound.jpeg"

import bar20 from "../../../assets/media/dog_digest/common-assets/bar-20.svg"
import bar40 from "../../../assets/media/dog_digest/common-assets/bar-40.svg"
import bar50 from "../../../assets/media/dog_digest/common-assets/bar-50.svg"
import bar60 from "../../../assets/media/dog_digest/common-assets/bar-60.svg"
import bar80 from "../../../assets/media/dog_digest/common-assets/bar-80.svg"
import bar100 from "../../../assets/media/dog_digest/common-assets/bar-100.svg"


const energyLevelHigh = "Low-energy dogs love lounging on the couch as you binge watch your all-time favorite series. They are up for cuddles or naps on your lap. These dogs are ideal company for a quiet afternoon."
const potentialPlayfulnessHigh = "From simple catch, sit and stay training, to more advanced lessons for tricks and agility, these dogs are up for the challenge. They are always looking forward to having playmates and playdates."
const exerciseNeedsHigh = "Pumped up dogs who are very agile,active and prefer outdoors. They are historically bred to hunt, work or sport. Though all dogs need exercise, they require regular exercise not just to keep them in shape and healthy."
const intensityHigh = "Forceful dogs are virougus; they may strain themselves wearing the leash, break obstacle courses and devour their food. If not properly trained, they are not advised around kids and the elderly without supervision."
const energyLevelLow = "LowA"
const potentialPlayfulnessLow = "LowB"
const exerciseNeedsLow = "LowC"
const intensityLow = "LDowD"
const recommendedA = "Promotes better digestion with Optimum energy and nourishment for adult dogs. Specifically formulated for dogs' satiety, NUTRI CHUNKS Optimum Adult comes in Lamb and Beef + Chicken Liver!"
const recommendedB = "For puppies try NUTRI CHUNKS Hi-Protein that contains 27% of high quality protein to support your puppies’ growth and development. With milky aroma for improved palatability, suitable for all breeds of puppies weaning to 12 months."

const pharoahHound = {
    name: "PHAROAH HOUND",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "The Pharaoh Hound is a friendly and very affectionate towards people if it's socialized at a young age. It's also known for being very gentle around children and making great therapy dogs due to its kind nature.",
        dogDescriptionB:"In fact, the breed was so loved by Maltese people that they used them as temple guards! Although they need to be monitored around small animals due to their hunting instinct kicks in whenever there's something small running away from them.",
        dogDescriptionC: "They are not considered good pets for first-time owners since they require a lot of attention and physical activity. Yet, this breed of dog is very intelligent. They are also quite good with kids because they have a gentle nature.",
        extraElementA: "",
        extraElementB: "",
        extraElementC: "",
        extraElementD: "",
        extraElementE: "",
    },

    statisticsSection: {
        backgroundImage: BackgroundTwo,
        dogType: "Hound Dogs",
        height: "21 to 25 inches ",
        weight: "20 to 25 kg",
        years: "11 to 14 years",
        extraElementA: ElementStatistics,
    },

    physicalNeeds: {
        backgroundImage: BackgroundThree,
        energyLevel: bar20,
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
        productsImageB: ObeefA,
        productsImageC: "",
        recommendationA: recommendedA,
        recommendationB: recommendedB,
        extraElement: ElementRecommended
    },
    usualHealthProblem: {
        backgroundImage: BackgroundFive,
        healthlist: [
                "Anesthesia Sensitivity",
                "Allergies"
            ],
        extraElement: ElementUsualHealth
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "Pharaoh Hounds' the coat is very short and fine except for a shoulder tuft of hair which may be flat or slightly curved. Their coat does not require regular washing but should be brushed once or twice per week using a comb with angular teeth to avoid damaging their fine coat.They are notorious for being difficult to bathe due to their independent nature.",
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

export default pharoahHound;