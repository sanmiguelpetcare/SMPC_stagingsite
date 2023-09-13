import BackgroundOne from "../../../assets/media/dog_digest/beagle/background/BG1.png"
import BackgroundTwo from "../../../assets/media/dog_digest/beagle/background/BG2.png"
import BackgroundThree from "../../../assets/media/dog_digest/beagle/background/BG3.png"
import BackgroundFour from "../../../assets/media/dog_digest/beagle/background/BG4.png"
import BackgroundFive from "../../../assets/media/dog_digest/beagle/background/BG5.png"
import BackgroundSix from "../../../assets/media/dog_digest/beagle/background/BG6.png"
import BackgroundSeven from "../../../assets/media/dog_digest/beagle/background/BG7.png"
import DogImage from "../../../assets/media/dog_digest/beagle/section-one/Doggo.png" 
import Kibble from "../../../assets/media/dog_digest/beagle/section-one/kibble.png"
import ElementOne from "../../../assets/media/dog_digest/beagle/section-one/Platform.png"
import ElementTwo from "../../../assets/media/dog_digest/beagle/section-one/Paltform.png"
import ElementStatistics from "../../../assets/media/dog_digest/beagle/elements/statistics-elem.png"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/beagle/elements/physiscal-needs-elem.png"
import ElementRecommended from "../../../assets/media/dog_digest/beagle/elements/recommended-elem.png"
import ElementUsualHealth from "../../../assets/media/dog_digest/beagle/elements/usual-health-elem.png"
import ElementGrooming from "../../../assets/media/dog_digest/beagle/elements/grooming-elem.png"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/beagle/featured/beagle-1.png"
import featuredB from "../../../assets/media/dog_digest/beagle/featured/beagle-2.png"
import featuredC from "../../../assets/media/dog_digest/beagle/featured/beagle-3.png"
import featuredD from "../../../assets/media/dog_digest/beagle/featured/beagle-4.png"
import featuredE from "../../../assets/media/dog_digest/beagle/featured/beagle-buddy.jpg"

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

const beagle = {
    name: "BEAGLE",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "As popularized by the 50’s comic character Snoopy, beagles become a traditional household dog. This tri-colored dog with droopy ears and compact build are just irresistible.",
        dogDescriptionB:"Beagles are affectionate, clingy and playful; ideal to families with an active lifestyle and cozy vibe. They will surely vocalize to express their hate for boredom and separation anxiety. They are quite known for wailing – combinations of loud howl and bark.",
        dogDescriptionC: "Being hounds, beagles navigate and make sense of the world through scents. There’s no question whether they can trace your food so better secure it. In fact, beagle brigades are sourced to identify contraband food at airports in the USA.",
        extraElementA: Kibble,
        extraElementB: ElementOne,
        extraElementC: ElementTwo,
        extraElementD: "",
        extraElementE: "",
    },

    statisticsSection: {
        backgroundImage: BackgroundTwo,
        dogType: "Hound Dogs",
        height: "13 to 15 inches ",
        weight: "8 to 14kg",
        years: "10 to 15 years",
        extraElementA: ElementStatistics,
    },

    physicalNeeds: {
        backgroundImage: BackgroundThree,
        energyLevel: bar80,
        energyLevelDescription: energyLevelHigh,
        potentialPlayfulness: bar100,
        potentialPlayfulnessDescription: potentialPlayfulnessHigh,
        energyNeeds: bar80,
        exerciseNeedsDescription: exerciseNeedsHigh,
        intentsity: bar100,
        intentsityDescription: intensityHigh,
        extraElementA: ElementPhysicalNeeds,
        extraElementB: "",
    },

    recommendedVariants:{
        backgroundImage: BackgroundFour,
        productsImageA: ObeefA,
        productsImageB: OlambA,
        productsImageC: HiProteinA,
        recommendationA: recommendedA,
        recommendationB: recommendedB,
        extraElement: ElementRecommended,
    },

    usualHealthProblem: {
        backgroundImage: BackgroundFive,
        healthlist: [
                "Intervertebral Disk Disease",
                "Hip Dysplasia",
                "Cherry Eye",
                "Glaucoma",
                "Progressive Retinal Atrophy",
                "Distichiasis",
                "Epilepsy",
                "Hypothyroidism",
                "Beagle Dwarfism",
                "Chinese Beagle Syndrome (CBS)",
                "Patellar Luxation",
            ],
        extraElement: ElementUsualHealth,
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "Beagles require moderate grooming. A weekly brushing of their coat will do to take out dead hairs and assist hair growth. Since they have short coats, excessive shedding will not be an issue but brush bristles can scratch their skin. You can use grooming gloves and mitts to make deshedding like petting. And always check their floppy ears where ticks usually hide. ",
        extraElement: ElementGrooming
    },
    featured: {
        backgroundImage: BackgroundFive,
        imageOne: featuredA,
        imageTwo: featuredB,
        imageThree: featuredC,
        imageFour: featuredD,
        imageFive: featuredE,
        imageSix: "",
        extraElement: ""
    }
}

export default beagle;