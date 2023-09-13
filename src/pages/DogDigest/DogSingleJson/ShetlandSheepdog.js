import BackgroundOne from "../../../assets/media/dog_digest/shetland-sheepdog/background/BG_00.jpeg"
import BackgroundTwo from "../../../assets/media/dog_digest/shetland-sheepdog/background/BG_01.jpeg"
import BackgroundThree from "../../../assets/media/dog_digest/shetland-sheepdog/background/BG_02.jpeg"
import BackgroundFour from "../../../assets/media/dog_digest/shetland-sheepdog/background/BG_03.jpeg"
import BackgroundFive from "../../../assets/media/dog_digest/shetland-sheepdog/background/BG_04.jpeg"
import BackgroundSix from "../../../assets/media/dog_digest/shetland-sheepdog/background/BG_05.jpeg"
import DogImage from "../../../assets/media/dog_digest/shetland-sheepdog/header/Shetland Sheepdog.png"
import Kibble from "../../../assets/media/dog_digest/shetland-sheepdog/header/Magic Kibble.png"
import ElementStatistics from "../../../assets/media/dog_digest/shetland-sheepdog/elements/OE_01.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/shetland-sheepdog/elements/OE_02.svg"
import ElementRecommended from "../../../assets/media/dog_digest/shetland-sheepdog/elements/OE_03.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/shetland-sheepdog/elements/OE_04.svg"
import ElementGrooming from "../../../assets/media/dog_digest/shetland-sheepdog/elements/OE_05.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/shetland-sheepdog/featured/echo-grid-coheb5v8c0M-unsplash.jpeg"
import featuredB from "../../../assets/media/dog_digest/shetland-sheepdog/featured/jacob-thorson-ftb7BBFISEc-unsplash.jpeg"
import featuredC from "../../../assets/media/dog_digest/shetland-sheepdog/featured/kanashi-1zmdbC-8T6s-unsplash.jpeg"
import featuredD from "../../../assets/media/dog_digest/shetland-sheepdog/featured/krisztian-tabori-6RuArbLtvLU-unsplash.jpeg"
import featuredE from "../../../assets/media/dog_digest/shetland-sheepdog/featured/krisztian-tabori-DYtPHEvlRyo-unsplash.jpeg"
import featuredF from "../../../assets/media/dog_digest/shetland-sheepdog/featured/krisztian-tabori-Qh1rPSVUxjI-unsplash.jpeg"

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

const shetlandSheepdog = {
    name: "SHETLAND SHEEPDOG",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "Shetland Sheepdog is once the Scottish farmer’s best friend, keeping the hungry birds and sheep out of its owner’s garden.",
        dogDescriptionB:"Despite their shy and reserved energy, Shelties are undeniable loving companions and members of the family that makes them quite affectionate with just about everybody but protective of their families. They are sensitive and shouldn’t spend too many hours home alone without companionship. Because of their protective nature, they are quick to bark if they sense anything unusual or amiss in their territory. Good thing that they are smart and love to train!",
        dogDescriptionC: "",
        extraElementA: Kibble,
        extraElementB: "",
        extraElementC: "",
        extraElementD: "",
        extraElementE: "",
    },

    statisticsSection: {
        backgroundImage: BackgroundTwo,
        dogType: "Herding Dogs",
        height: "13 to 16 inches ",
        weight: "9 kg",
        years: "12 to 15 years",
        extraElementA: ElementStatistics,
    },

    physicalNeeds: {
        backgroundImage: BackgroundThree,
        energyLevel: bar80,
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
                "Hypothyroidism",
                "Collie Eye Anomaly",
                "Von Willebrand's Disease",
                "Canine hip dysplasia",
                "Dermatomyositis"
            ],
        extraElement: ElementUsualHealth
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "Start grooming your Sheltie when he's a puppy to get him used to it. The Scottie’s coat requires a thorough weekly brushing with a pin brush. Be sure to get right down to the skin and never brush a dry coat. You can use a spray bottle to mist their hair to prevent any damage. Handle his paws frequently — dogs are touchy about their feet — and look inside his mouth and ears. Dental hygiene is also important. That's why you need to brush their teeth at least two to three times a week. Make grooming a positive experience filled with praise and rewards, and you'll lay the groundwork for easy veterinary exams and other handling when he's an adult.",
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

export default shetlandSheepdog;