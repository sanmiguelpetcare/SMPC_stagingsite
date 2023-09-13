import BackgroundOne from "../../../assets/media/dog_digest/american-cocker-spaniel/background/BG_00.jpeg"
import BackgroundTwo from "../../../assets/media/dog_digest/american-cocker-spaniel/background/BG_01.jpeg"
import BackgroundThree from "../../../assets/media/dog_digest/american-cocker-spaniel/background/BG_02.jpeg"
import BackgroundFour from "../../../assets/media/dog_digest/american-cocker-spaniel/background/BG_03.jpeg"
import BackgroundFive from "../../../assets/media/dog_digest/american-cocker-spaniel/background/BG_04.jpeg"
import BackgroundSix from "../../../assets/media/dog_digest/american-cocker-spaniel/background/BG_05.jpeg"
import DogImage from "../../../assets/media/dog_digest/american-cocker-spaniel/header/Cocker Spaniel.png"
import ElementStatistics from "../../../assets/media/dog_digest/american-cocker-spaniel/elements/OE_01.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/american-cocker-spaniel/elements/OE_02.svg"
import ElementRecommended from "../../../assets/media/dog_digest/american-cocker-spaniel/elements/OE_03.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/american-cocker-spaniel/elements/OE_04.svg"
import ElementGrooming from "../../../assets/media/dog_digest/american-cocker-spaniel/elements/OE_05.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/american-cocker-spaniel/featured/cocker-spaniel-3981587_1920.jpeg"
import featuredB from "../../../assets/media/dog_digest/american-cocker-spaniel/featured/cocker-spaniel-english-2388265_1920.jpeg"
import featuredC from "../../../assets/media/dog_digest/american-cocker-spaniel/featured/cocker-spaniel-english-2415289_1920.jpeg"
import featuredD from "../../../assets/media/dog_digest/american-cocker-spaniel/featured/english-cocker-spaniel-5937751_1920.jpeg"
import featuredE from "../../../assets/media/dog_digest/american-cocker-spaniel/featured/english-cocker-spaniel-5937757_1920.jpeg"
import featuredF from "../../../assets/media/dog_digest/american-cocker-spaniel/featured/tommy-spfw5bhYcIU-unsplash.jpeg"

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
const recommendedA = "NUTRI CHUNKS Coat Shine with real Salmon meat rich in Omega 3 & 6 for healthy skin and shinier coat."
const recommendedB = "For puppies try NUTRI CHUNKS Hi-Protein that contains 27% of high quality protein to support your puppies’ growth and development. With milky aroma for improved palatability, suitable for all breeds of puppies weaning to 12 months."

const americanCockerSpaniel = {
    name: "AMERICAN COCKER SPANIEL",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "Disney movie Lady and the Tramp have perfectly characterized what the American Cocker Spaniel dogs are - charming, gentle-natured, and of course well pampered!",
        dogDescriptionB: "Long before being coddled up, these dogs hunt birds, explaining how the word \"cocker\" is attached to their name. American Cocker Spaniel descended from the Spaniel family of Spain and was associated with the English Cockers of England. They are very affectionate and sweet.",
        dogDescriptionC: "They are easy to train and very eager to please. Yet, they are very sensitive, positive enforcement and rewards should be given. Keep them well-groomed to further boost their confidence and health.",
        extraElementA: "",
        extraElementB: "",
        extraElementC: "",
        extraElementD: "",
        extraElementE: "",
    },

    statisticsSection: {
        backgroundImage: BackgroundTwo,
        dogType: "Sporting Dogs",
        height: "12 to 36 inches",
        weight: "11 to 13 kg",
        years: "12 to 15 years",
        extraElementA: ElementStatistics,
    },

    physicalNeeds: {
        backgroundImage: BackgroundThree,
        energyLevel: bar80,
        energyLevelDescription: energyLevelHigh,
        potentialPlayfulness: bar80,
        potentialPlayfulnessDescription: potentialPlayfulnessHigh,
        energyNeeds: bar50,
        exerciseNeedsDescription: exerciseNeedsHigh,
        intentsity: bar20,
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
        extraElement: ElementRecommended,
    },

    usualHealthProblem: {
        backgroundImage: BackgroundFive,
        healthlist: [
            "Eye problems",
            "Autoimmune hemolytic anemia (AIHA)",
            "Hypothyroidism",
            "Primary seborrhea",
            "Allergies",
            "Idiopathic epilepsy",
            "Canine hip dysplasia",
            "Patellar luxation"
        ],
        extraElement: ElementUsualHealth,
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "American Cocker Spaniel charm emmanates from its hair care. Professional grooming is recommended since they have a reputation for not being cooperative. To develop their liking to being cleaned, grooming routines should be done as early and fun as possible. To avoid hair matting and tangles, brush them daily. It is also best provide them narrow or shallow water and food bowls to keep prevent their hair being soiled.",
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

export default americanCockerSpaniel;