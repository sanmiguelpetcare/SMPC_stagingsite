import BackgroundOne from "../../../assets/media/dog_digest/saluki/background/BG_00.jpeg"
import BackgroundTwo from "../../../assets/media/dog_digest/saluki/background/BG_01.jpeg"
import BackgroundThree from "../../../assets/media/dog_digest/saluki/background/BG_02.jpeg"
import BackgroundFour from "../../../assets/media/dog_digest/saluki/background/BG_03.jpeg"
import BackgroundFive from "../../../assets/media/dog_digest/saluki/background/BG_04.jpeg"
import BackgroundSix from "../../../assets/media/dog_digest/saluki/background/BG_05.jpeg"
import DogImage from "../../../assets/media/dog_digest/saluki/header/Saluki.png"
import Kibble from "../../../assets/media/dog_digest/saluki/header/Masarap na Kibble.png"
import ElementStatistics from "../../../assets/media/dog_digest/saluki/elements/OE_01.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/saluki/elements/OE_02.svg"
import ElementRecommended from "../../../assets/media/dog_digest/saluki/elements/OE_03.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/saluki/elements/OE_04.svg"
import ElementGrooming from "../../../assets/media/dog_digest/saluki/elements/OE_05.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/saluki/featured/pexels-chandre-d'oliveira-4842557.jpeg"
import featuredB from "../../../assets/media/dog_digest/saluki/featured/pexels-milica-popovic-1573919.jpeg"
import featuredC from "../../../assets/media/dog_digest/saluki/featured/saluki-dogs-head-black-beige-near-river-side-view-brown-eyes-devoted-persian-greyhound-close-up-portrait-high-quality-photo.jpeg"
import featuredD from "../../../assets/media/dog_digest/saluki/featured/saluki-dogs-head-brown-beige-close-up-portrait.jpeg"
import featuredE from "../../../assets/media/dog_digest/saluki/featured/saluki-dogs-head-black-beige-near-river-side-view-brown-eyes-devoted-persian-greyhound-close-up-portrait-high-quality-photo.jpeg"
import featuredF from "../../../assets/media/dog_digest/saluki/featured/pexels-chandre-d'oliveira-4842557.jpeg"

import bar20 from "../../../assets/media/dog_digest/common-assets/bar-20.svg"
import bar40 from "../../../assets/media/dog_digest/common-assets/bar-40.svg"
import bar50 from "../../../assets/media/dog_digest/common-assets/bar-50.svg"
import bar60 from "../../../assets/media/dog_digest/common-assets/bar-60.svg"
import bar80 from "../../../assets/media/dog_digest/common-assets/bar-80.svg"
import bar100 from "../../../assets/media/dog_digest/common-assets/bar-100.svg"


const energyLevelHigh = "Energy filled dogs need mental and physical stimulation. They are at their happiest when activities are action packed. They are the best buddies to bring with you when running, hiking, and other kinds of adventures. "
const potentialPlayfulnessHigh = "From simple catch, sit and stay training, to more advanced lessons for tricks and agility, these dogs are up for the challenge. They are always looking forward to having playmates and playdates."
const exerciseNeedsHigh = "Pumped up dogs who are very agile,active and prefer outdoors. They are historically bred to hunt, work or sport. Though all dogs need exercise, they require regular exercise not just to keep them in shape and healthy."
const intensityHigh = "Gentle natured dogs are easy to handle.They are family dogs - best with kids, elderly and even other animals. Since, they are not loud and rowdy, they are a manageable company when you live in an apartment."
const energyLevelLow = "LowA"
const potentialPlayfulnessLow = "LowB"
const exerciseNeedsLow = "LowC"
const intensityLow = "LDowD"
const recommendedA = "Promotes better digestion with Optimum energy and nourishment for adult dogs. Specifically formulated for dogs' satiety, NUTRI CHUNKS Optimum Adult comes in Lamb and Beef + Chicken Liver!"
const recommendedB = "For puppies try NUTRI CHUNKS Hi-Protein that contains 27% of high quality protein to support your puppies’ growth and development. With milky aroma for improved palatability, suitable for all breeds of puppies weaning to 12 months."

const saluki = {
    name: "SALUKI",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "Saluki is the oldest of all breeds, dating back as far as 9000 B.C. Salukis are known for their extremely powerful sense of smell, speed, and endurance. Salukis were used for many things throughout ancient history, such as hunting gazelle, hare, and fox.",
        dogDescriptionB:"Salukis love the sun and enjoy laying outside in warm weather. Salukis can survive in both hot and cold weather, but not below 20 degrees Fahrenheit. The muzzle contains lips that go past the teeth as well as prick ears that look like they're blushing.",
        dogDescriptionC: "Salukis are also known to be very kind and gentle dogs that get along well with children and other animals. Yet they do not like being left alone for long periods of time.",
        extraElementA: Kibble,
        extraElementB: "",
        extraElementC: "",
        extraElementD: "",
        extraElementE: "",
    },

    statisticsSection: {
        backgroundImage: BackgroundTwo,
        dogType: "Toy Dogs",
        height: "23 to 28 inches ",
        weight: "16 to 32 kg",
        years: "12 to 14 years",
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
                "Anesthesia Sensitivity",
                "Hemangiosarcoma",
                "Cardiomyopathy",
                "Hypothyroidism"
            ],
        extraElement: ElementUsualHealth
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "During the summer months, Salukis only need bathed once every two weeks unless they smell or stinky. If you bathe your Saluki too often or don't bathe them long enough, you can strip oils from their coat which will make them look dull and dry. If this happens, they will need an oatmeal shampoo treatment until the oils are restored back into their skin.",
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

export default saluki;