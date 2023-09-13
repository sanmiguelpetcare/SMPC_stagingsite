import BackgroundOne from "../../../assets/media/dog_digest/redbone-coonhound/background/BG_00.jpeg"
import BackgroundTwo from "../../../assets/media/dog_digest/redbone-coonhound/background/BG_01.jpeg"
import BackgroundThree from "../../../assets/media/dog_digest/redbone-coonhound/background/BG_02.jpeg"
import BackgroundFour from "../../../assets/media/dog_digest/redbone-coonhound/background/BG_03.jpeg"
import BackgroundFive from "../../../assets/media/dog_digest/redbone-coonhound/background/BG_04.jpeg"
import BackgroundSix from "../../../assets/media/dog_digest/redbone-coonhound/background/BG_05.jpeg"
import DogImage from "../../../assets/media/dog_digest/redbone-coonhound/header/Redbone Coonhound.png"
import ElementStatistics from "../../../assets/media/dog_digest/redbone-coonhound/elements/OE_01.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/redbone-coonhound/elements/OE_02.svg"
import ElementRecommended from "../../../assets/media/dog_digest/redbone-coonhound/elements/OE_03.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/redbone-coonhound/elements/OE_04.svg"
import ElementGrooming from "../../../assets/media/dog_digest/redbone-coonhound/elements/OE_05.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/redbone-coonhound/featured/gorgeous-redbone-coonhound-licking-tip-his-nose-with-pink-tongue.jpeg"

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

const redboneCoonhound = {
    name: "REDBONE COONHOUND",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "The redbone coonhound is a hound that has an excellent scenting sense and can bay with ease. They are also great at finding hidden objects, which makes them perfect for hunting! The only downside to this breed? The adorable Redbone Coonhound is an intelligent and energetic breed that needs plenty of mental stimulation or else they might get bored. As long as you provide them with enough exercise, this friendly pet will be happy to keep your family company! Redbone Coonhound is known to be sensitive and affectionate. These dogs adore their human families and can even make great playmates for kids so long as they go through early socialization training. Plan to be patient while training this breed; they often suffer from canine attention deficit disorder.",
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
        dogType: "Hound Dogs",
        height: "21 to 27 inches ",
        weight: "30 to 32 kg",
        years: "10 to 12 years",
        extraElementA: ElementStatistics,
    },

    physicalNeeds: {
        backgroundImage: BackgroundThree,
        energyLevel: bar80,
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
                "Hip Dysplasia",
                "Progressive Retinal Atrophy",
                "Coonhound Paralysis",
                "Pelger-Huet Anomaly",
                "Entropion",
                "Elbow Dysplasia"
            ],
        extraElement: ElementUsualHealth
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "The Redbone Conhound's short, smooth, protective coat requires a minimum of care. Regular grooming with shedding tools or mitts will help prevent excess hair from everywhere! Trim nails once per month to keep them healthy and clean-looking; give him an ear check every week too so that both are looking their best at all times.",
        extraElement: ElementGrooming
    },
    featured: {
        backgroundImage: BackgroundFive,
        imageOne: featuredA,
        imageTwo: featuredA,
        imageThree: featuredA,
        imageFour: featuredA,
        imageFive: featuredA,
        imageSix: featuredA,
        extraElement: ""
    }
}

export default redboneCoonhound;