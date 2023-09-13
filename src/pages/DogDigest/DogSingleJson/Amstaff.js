import BackgroundOne from "../../../assets/media/dog_digest/amstaff/background/BG_0.jpeg"
import BackgroundTwo from "../../../assets/media/dog_digest/amstaff/background/BG_1.jpeg"
import BackgroundThree from "../../../assets/media/dog_digest/amstaff/background/BG_2.jpeg"
import BackgroundFour from "../../../assets/media/dog_digest/amstaff/background/BG_3.jpeg"
import BackgroundFive from "../../../assets/media/dog_digest/amstaff/background/BG_4.jpeg"
import BackgroundSix from "../../../assets/media/dog_digest/amstaff/background/BG_5.jpeg"
import BackgroundSeven from "../../../assets/media/dog_digest/amstaff/background/BG_4.jpeg"
import DogImage from "../../../assets/media/dog_digest/amstaff/header/American Staffordshire Terrier.png" 
import Kibble from "../../../assets/media/dog_digest/labrador/header/Masarap na Kibble.png"
import ElementOne from "../../../assets/media/dog_digest/amstaff/header/0_Element1.svg"
import ElementTwo from "../../../assets/media/dog_digest/amstaff/header/0_Element2.svg"
import ElementThree from "../../../assets/media/dog_digest/amstaff/header/0_Element3.svg"
import ElementFour from "../../../assets/media/dog_digest/amstaff/header/0_Element4.svg"
import ElementStatistics from "../../../assets/media/dog_digest/amstaff/elements/OE_1.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/amstaff/elements/OE_2.svg"
import ElementRecommended from "../../../assets/media/dog_digest/amstaff/elements/OE_3.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/amstaff/elements/OE_4.svg"
import ElementGrooming from "../../../assets/media/dog_digest/amstaff/elements/OE_5.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/amstaff/featured/staffies-01.jpeg"
import featuredB from "../../../assets/media/dog_digest/amstaff/featured/staffies-02.jpeg"
import featuredC from "../../../assets/media/dog_digest/amstaff/featured/staffies-03.jpeg"
import featuredD from "../../../assets/media/dog_digest/amstaff/featured/staffies-04.jpeg"
import featuredE from "../../../assets/media/dog_digest/amstaff/featured/staffies-05.jpeg"
import featuredF from "../../../assets/media/dog_digest/amstaff/featured/staffies-06.jpeg"

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

const americanStaffordShireTerrier = {
    name: "AMERICAN STAFFORDSHIRE TERRIER",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "American Pit Bull Terriers originated from Europe. The breed was brought by the immigrants to America in the 19th century. They are known for their robust physique and athleticism.",
        dogDescriptionB: "They are perceived as dangerous and something to be feared. Others have historically exploited their qualities in the horrific and bloody business of animal sport. APBT is actually the best choice if you are looking for a gentle family member, fearless guard, and competitive teammate.",
        dogDescriptionC: "They come a long way from being bull baits, dog fighters, farm aids to nannies. They will continue to be misunderstood and mistreated, for as long as humans are misinformed and negligent.",
        extraElementA: "",
        extraElementB: ElementOne,
        extraElementC: ElementFour,
        extraElementD: ElementThree,
        extraElementE: ElementTwo,
    },

    statisticsSection: {
        backgroundImage: BackgroundTwo,
        dogType: "Terrier Dogs",
        height: "16 to 19 inches",
        weight: "18 to 27 kg",
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
            "Skin allergies",
            "Urinary tract infections",
            "Autoimmune diseases",
            "Osteoarthritis or Spondylosis",
            "Hip Dysplasia",
            "Elbow Dysplasia",
            "Hypothyroidism",
            "Demodectic Mange",
            "Cerebellar Ataxia",
            "Heart Diseases",
            "Luxating Patella"
        ],
        extraElement: ElementUsualHealth,
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "Staffies are short-coated, which generally makes them easy to groom. Frequent bathing is not recommended. Give them a bath only when necessary. You can actually clean them with regular brushing. Use a soft-bristled brush, gloves, and mitts to prevent scratching their skin. Do not forget to check their ears, nails, and places where ticks hide. Lastly, associate grooming with a positive experience.",
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

export default americanStaffordShireTerrier;