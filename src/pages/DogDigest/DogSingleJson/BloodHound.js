import BackgroundOne from "../../../assets/media/dog_digest/blood-hound/background/BG_00.jpeg"
import BackgroundTwo from "../../../assets/media/dog_digest/blood-hound/background/BG_01.jpeg"
import BackgroundThree from "../../../assets/media/dog_digest/blood-hound/background/BG_02.jpeg"
import BackgroundFour from "../../../assets/media/dog_digest/blood-hound/background/BG_03.jpeg"
import BackgroundFive from "../../../assets/media/dog_digest/blood-hound/background/BG_04.jpeg"
import BackgroundSix from "../../../assets/media/dog_digest/blood-hound/background/BG_05.jpeg"
import DogImage from "../../../assets/media/dog_digest/blood-hound/header/Bloodhound.png"
import ElementStatistics from "../../../assets/media/dog_digest/blood-hound/elements/OE_01.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/blood-hound/elements/OE_02.svg"
import ElementRecommended from "../../../assets/media/dog_digest/blood-hound/elements/OE_03.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/blood-hound/elements/OE_04.svg"
import ElementGrooming from "../../../assets/media/dog_digest/blood-hound/elements/OE_05.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/blood-hound/featured/bloodhound-1833602_1920.jpeg"
import featuredB from "../../../assets/media/dog_digest/blood-hound/featured/bloodhound-1833609_1920.jpeg"
import featuredC from "../../../assets/media/dog_digest/blood-hound/featured/dog-1522644_1920.jpeg"
import featuredD from "../../../assets/media/dog_digest/blood-hound/featured/dog-1583978_1920.jpeg"
import featuredE from "../../../assets/media/dog_digest/blood-hound/featured/hanoverian-bloodhound-5193559_1920.jpeg"
import featuredF from "../../../assets/media/dog_digest/blood-hound/featured/hanoverian-bloodhound-5193561_1920.jpeg"

import bar20 from "../../../assets/media/dog_digest/common-assets/bar-20.svg"
import bar40 from "../../../assets/media/dog_digest/common-assets/bar-40.svg"
import bar50 from "../../../assets/media/dog_digest/common-assets/bar-50.svg"
import bar60 from "../../../assets/media/dog_digest/common-assets/bar-60.svg"
import bar80 from "../../../assets/media/dog_digest/common-assets/bar-80.svg"
import bar100 from "../../../assets/media/dog_digest/common-assets/bar-100.svg"


const energyLevelHigh = "Energy filled dogs need mental and physical stimulation. They are at their happiest when activities are action packed. They are the best buddies to bring with you when running, hiking, and other kinds of adventures."
const potentialPlayfulnessHigh = "From simple catch, sit and stay training, to more advanced lessons for tricks and agility, these dogs are up for the challenge. They are always looking forward to having playmates and playdates."
const exerciseNeedsHigh = "Pumped up dogs who are very agile,active and prefer outdoors. They are historically bred to hunt, work or sport. Though all dogs need exercise, they require regular exercise not just to keep them in shape and healthy."
const intensityHigh = "Gentle natured dogs are easy to handle.They are family dogs - best with kids, elderly and even other animals. Since, they are not loud and rowdy, they are a manageable company when you live in an apartment."
const energyLevelLow = "LowA"
const potentialPlayfulnessLow = "LowB"
const exerciseNeedsLow = "LowC"
const intensityLow = "LDowD"
const recommendedA = "Promotes better digestion with Optimum energy and nourishment for adult dogs. Specifically formulated for dogs' satiety, NUTRI CHUNKS OPTIMUM ADULT comes in Lamb, and Beef + Chicken Liver Flavor!"
const recommendedB = "For puppies try NUTRI CHUNKS Hi-Protein that contains 27% of high quality protein to support your puppies’ growth and development. With milky aroma for improved palatability, suitable for all breeds of puppies weaning to 12 months."

const bloodHound = {
    name: "BLOOD HOUND",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "The bloodhounds belong to a group of dogs that hunt together by scent. Their qualities of keen discernment and sound judgment make them a highly active and intelligent dog breed that got a special place in law enforcement and search and rescue.",
        dogDescriptionB: "Despite their nature to hunt, their affection and loving companionship is incomparable as long as you don’t mind a drool buddy. But as pawrents, one must beware of their notorious stubbornness and sensitivity. These bloodhounds need firm, consistent training, and you’ll be rewarded with a content and happy furry best friend for life!",
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
        height: "23 to 27 inches ",
        weight: "36 to 50 kg",
        years: "11 to 13 years",
        extraElementA: ElementStatistics,
    },

    physicalNeeds: {
        backgroundImage: BackgroundThree,
        energyLevel: bar100,
        energyLevelDescription: energyLevelHigh,
        potentialPlayfulness: bar80,
        potentialPlayfulnessDescription: potentialPlayfulnessHigh,
        energyNeeds: bar80,
        exerciseNeedsDescription: exerciseNeedsHigh,
        intentsity: bar20,
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
                "Hip Dysplasia",
                "Elbow Dysplasia",
                "Hypothyroidism",
                "Ectropion",
                "Entropion",
                "Epilepsy",
                "Gastric Dilatation-Volvulus (Bloat)",
                "Fold Dermatitis"
            ],
        extraElement: ElementUsualHealth
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "The Bloodhound is a scent hound and so it is built low to the ground with many flaps and wrinkles and long ears. Many of the scent hounds have large heavy lips and tend to drool. Noses of scent hounds are very sensitive and shampoos with too much fragrance and dips should be avoided unless needed. Bloodhounds are prone to recurring ear infections. Routinely check their ears and clean them regularly. Bloodhounds will chew and swallow the most unimaginable items, from rocks and plants to batteries and TV remotes. They should be groomed every 4 to 6 weeks to clean ears, clip nails, and check anal glands.",
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

export default bloodHound;