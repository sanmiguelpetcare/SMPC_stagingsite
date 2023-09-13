import BackgroundOne from "../../../assets/media/dog_digest/bichon-frise/background/BG_00.jpeg"
import BackgroundTwo from "../../../assets/media/dog_digest/bichon-frise/background/BG_01.jpeg"
import BackgroundThree from "../../../assets/media/dog_digest/bichon-frise/background/BG_02.jpeg"
import BackgroundFour from "../../../assets/media/dog_digest/bichon-frise/background/BG_03.jpeg"
import BackgroundFive from "../../../assets/media/dog_digest/bichon-frise/background/BG_04.jpeg"
import BackgroundSix from "../../../assets/media/dog_digest/bichon-frise/background/BG_05.jpeg"
import DogImage from "../../../assets/media/dog_digest/bichon-frise/header/Bichon_Frise.png"
import Kibble from "../../../assets/media/dog_digest/bichon-frise/header/Masarap na Kibble.png"
import ElementStatistics from "../../../assets/media/dog_digest/bichon-frise/elements/OE_01.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/bichon-frise/elements/OE_02.svg"
import ElementRecommended from "../../../assets/media/dog_digest/bichon-frise/elements/OE_03.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/bichon-frise/elements/OE_04.svg"
import ElementGrooming from "../../../assets/media/dog_digest/bichon-frise/elements/OE_05.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/bichon-frise/featured/pexels-anna-bondarenko-11380206.jpeg"
import featuredB from "../../../assets/media/dog_digest/bichon-frise/featured/pexels-helena-lopes-5047567.jpeg"
import featuredC from "../../../assets/media/dog_digest/bichon-frise/featured/pexels-nikita-nikitin-10860234.jpeg"
import featuredD from "../../../assets/media/dog_digest/bichon-frise/featured/pexels-radovan-zierik-5562331.jpeg"
import featuredE from "../../../assets/media/dog_digest/bichon-frise/featured/pexels-radovan-zierik-5655086.jpeg"
import featuredF from "../../../assets/media/dog_digest/bichon-frise/featured/pexels-sp-cena-5584468.jpeg"

import bar20 from "../../../assets/media/dog_digest/common-assets/bar-20.svg"
import bar40 from "../../../assets/media/dog_digest/common-assets/bar-40.svg"
import bar50 from "../../../assets/media/dog_digest/common-assets/bar-50.svg"
import bar60 from "../../../assets/media/dog_digest/common-assets/bar-60.svg"
import bar80 from "../../../assets/media/dog_digest/common-assets/bar-80.svg"
import bar100 from "../../../assets/media/dog_digest/common-assets/bar-100.svg"


const energyLevelHigh = "Energy filled dogs need mental and physical stimulation. They are at their happiest when activities are action packed. They are the best buddies to bring with you when running, hiking, and other kinds of adventures."
const potentialPlayfulnessHigh = "From simple catch, sit and stay training, to more advanced lessons for tricks and agility, these dogs are up for the challenge. They are always looking forward to having playmates and playdates."
const exerciseNeedsHigh = "Pumped up dogs who are very agile, active and prefer outdoors. They are historically bred to hunt, work or sport. Though all dogs need exercise, they require regular exercise not just to keep them in shape and healthy."
const intensityHigh = "Gentle natured dogs are easy to handle.They are family dogs - best with kids, elderly and even other animals. Since, they are not loud and rowdy, they are a manageable company when you live in an apartment."
const energyLevelLow = "LowA"
const potentialPlayfulnessLow = "LowB"
const exerciseNeedsLow = "LowC"
const intensityLow = "LDowD"
const recommendedA = "NUTRI CHUNKS Coat Shine with real Salmon meat rich in Omega 3 & 6 for healthy skin and shinier coat."
const recommendedB = "For puppies try NUTRI CHUNKS Hi-Protein that contains 27% of high quality protein to support your puppies’ growth and development. With milky aroma for improved palatability, suitable for all breeds of puppies weaning to 12 months."

const bichonFrise = {
    name: "BICHON FRISE",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "The Bichon Frise is a small breed of dog that is considered hypoallergenic. This means that they are less likely to cause an allergic reaction in people than other breeds of dog.",
        dogDescriptionB:"Bichon Frises are friendly, playful, and smart, and require minimal grooming.They can be easily trained too. Because of their small size, they are perfect for apartment living.",
        dogDescriptionC: "Despite their small size, Bichon Frises make great watchdogs. They will bark when they hear something strange or when someone comes to the door. Overall, the Bichon Frise is a wonderful breed of dog that is perfect for families with allergies.",
        extraElementA: Kibble,
        extraElementB: "",
        extraElementC: "",
        extraElementD: "",
        extraElementE: "",
    },

    statisticsSection: {
        backgroundImage: BackgroundTwo,
        dogType: "Companion Dogs",
        height: "9 to 11 inches ",
        weight: "3 to 6 kg",
        years: "12 to 15 years",
        extraElementA: ElementStatistics,
    },

    physicalNeeds: {
        backgroundImage: BackgroundThree,
        energyLevel: bar100,
        energyLevelDescription: energyLevelHigh,
        potentialPlayfulness: bar100,
        potentialPlayfulnessDescription: potentialPlayfulnessHigh,
        energyNeeds: bar50,
        exerciseNeedsDescription: exerciseNeedsHigh,
        intentsity: bar50,
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
                "Bladder Problems",
                "Allergies",
                "Patellar Luxation",
                "Vaccination Sensitivity",
                "Hip Dysplasia",
                "Juvenile Cataracts"
            ],
        extraElement: ElementUsualHealth
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "It's important to keep your Bichon Frise groomed so that he or she looks their best. Most groomers recommend bathing your Bichon Frise about once a month. You can use a dog shampoo or baby shampoo. Be sure to rinse your dog thoroughly and dry him or her with a towel. Some groomers also suggest using a conditioner after bathing to make the coat soft and shiny. During this time, the groomer will trim the hair around the ears, clip the nails, and brush and comb the hair.",
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

export default bichonFrise;