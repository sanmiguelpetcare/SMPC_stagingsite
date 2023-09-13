import BackgroundOne from "../../../assets/media/dog_digest/afghan-hound/background/BG_00.jpeg"
import BackgroundTwo from "../../../assets/media/dog_digest/afghan-hound/background/BG_01.jpeg"
import BackgroundThree from "../../../assets/media/dog_digest/afghan-hound/background/BG_02.jpeg"
import BackgroundFour from "../../../assets/media/dog_digest/afghan-hound/background/BG_03.jpeg"
import BackgroundFive from "../../../assets/media/dog_digest/afghan-hound/background/BG_04.jpeg"
import BackgroundSix from "../../../assets/media/dog_digest/afghan-hound/background/BG_05.jpeg"
import DogImage from "../../../assets/media/dog_digest/afghan-hound/header/Afghan Hound.png"
import Kibble from "../../../assets/media/dog_digest/afghan-hound/header/Masarap na Kibble.png"
import ElementStatistics from "../../../assets/media/dog_digest/afghan-hound/elements/OE_01.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/afghan-hound/elements/OE_02.svg"
import ElementRecommended from "../../../assets/media/dog_digest/afghan-hound/elements/OE_03.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/afghan-hound/elements/OE_04.svg"
import ElementGrooming from "../../../assets/media/dog_digest/afghan-hound/elements/OE_05.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/afghan-hound/featured/afghan-hound-portrait.jpeg"
import featuredB from "../../../assets/media/dog_digest/afghan-hound/featured/afghan-hound-sitting-asphalt-walkway-park.jpeg"
import featuredC from "../../../assets/media/dog_digest/afghan-hound/featured/beautiful-afghan-hound-dog-summer-runs-across-meadow-hair-flying-wind.jpeg"
import featuredD from "../../../assets/media/dog_digest/afghan-hound/featured/pexels-mladen-šćekić-5029639.jpeg"
import featuredE from "../../../assets/media/dog_digest/afghan-hound/featured/afghan-hound-sitting-asphalt-walkway-park.jpeg"
import featuredF from "../../../assets/media/dog_digest/afghan-hound/featured/pexels-mladen-šćekić-5029639.jpeg"

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

const afghanHound = {
    name: "AFGHAN HOUND",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "In Afghanistan's dry hot climate hot days can be followed by cold nights which make it comfortable to get under the Afghan's thick coat during sleeping hours. In hot weather, they can get really hot though!",
        dogDescriptionB:"They are among the oldest breeds in the world. It was used for hunting gazelles, antelopes, and hares in the hot deserts of Asia thousands of years ago. They are known for their distinctive patterned white fur which helps them to blend into snowy landscapes.",
        dogDescriptionC: "Afghan hounds are known for being smart dogs. These dogs get along very well with children of all ages but they tend to be loud barkers. They are for experienced dog owners who can dedicate enough time to training and bonding.",
        extraElementA: Kibble,
        extraElementB: "",
        extraElementC: "",
        extraElementD: "",
        extraElementE: "",
    },

    statisticsSection: {
        backgroundImage: BackgroundTwo,
        dogType: "Hound Dogs",
        height: "24 to 26 inches ",
        weight: "23 to 27 kg",
        years: "10 to 12 years",
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
        productsImageB: CoatshineA,
        productsImageC: "",
        recommendationA: recommendedA,
        recommendationB: recommendedB,
        extraElement: ElementRecommended
    },
    usualHealthProblem: {
        backgroundImage: BackgroundFive,
        healthlist: [
                "Allergies",
                "Cancer",
                "Juvenile cataracts",
                "Hypothyroidism"
            ],
        extraElement: ElementUsualHealth
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "Afghan hound shed twice a year, but having regular brushing sessions should help to remove dead hair. It is also important to use a large brush when doing so in order not to hurt their skin which is very sensitive. It is also advisable to avoid using shampoo on them since it might irritate their skin even more.",
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

export default afghanHound;