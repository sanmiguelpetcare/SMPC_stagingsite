import BackgroundOne from "../../../assets/media/dog_digest/newfoundland/background/BG_00.jpeg"
import BackgroundTwo from "../../../assets/media/dog_digest/newfoundland/background/BG_01.jpeg"
import BackgroundThree from "../../../assets/media/dog_digest/newfoundland/background/BG_02.jpeg"
import BackgroundFour from "../../../assets/media/dog_digest/newfoundland/background/BG_03.jpeg"
import BackgroundFive from "../../../assets/media/dog_digest/newfoundland/background/BG_04.jpeg"
import BackgroundSix from "../../../assets/media/dog_digest/newfoundland/background/BG_05.jpeg"
import DogImage from "../../../assets/media/dog_digest/newfoundland/header/Newfoundland.png"
import ElementStatistics from "../../../assets/media/dog_digest/newfoundland/elements/OE_01.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/newfoundland/elements/OE_02.svg"
import ElementRecommended from "../../../assets/media/dog_digest/newfoundland/elements/OE_03.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/newfoundland/elements/OE_04.svg"
import ElementGrooming from "../../../assets/media/dog_digest/newfoundland/elements/OE_05.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/newfoundland/featured/adorable-chocolate-brown-newfoundland-dog-laying-grass-with-patriotic-bow-tie.jpeg"
import featuredB from "../../../assets/media/dog_digest/newfoundland/featured/dog-1062335_1920.jpeg"
import featuredC from "../../../assets/media/dog_digest/newfoundland/featured/newfoundland-609531_1920.jpeg"
import featuredD from "../../../assets/media/dog_digest/newfoundland/featured/newfoundland-dog-6809305_1920.jpeg"
import featuredE from "../../../assets/media/dog_digest/newfoundland/featured/dog-1062335_1920.jpeg"
import featuredF from "../../../assets/media/dog_digest/newfoundland/featured/newfoundland-609531_1920.jpeg"

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

const newfoundland = {
    name: "NEWFOUNDLAND",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "The Newfoundland is a large, strong dog breed from a place with the same name as them, Newfoundland. They were originally used as working dogs to pull nets for fishermen and haul wood from the forest.",
        dogDescriptionB: "They’re capable and hardworking dogs, well suited to work on land or water. They’re a strong swimmer and equally strong “pack horses.” He has a strong work ethic and needs exercise and mental stimulation. Ongoing training and dog sports are a perfect outlet for his working abilities. But Newfoundland is equally sweet in nature and responsive plus they surely make a wonderful family companion as well.",
        dogDescriptionC: "",
        extraElementA: "",
        extraElementB: "",
        extraElementC: "",
        extraElementD: "",
        extraElementE: "",
    },

    statisticsSection: {
        backgroundImage: BackgroundTwo,
        dogType: "Working Dogs",
        height: "25 t5o 30 inches",
        weight: "45 to 68 kg",
        years: "8 to 10 years",
        extraElementA: ElementStatistics,
    },

    physicalNeeds: {
        backgroundImage: BackgroundThree,
        energyLevel: bar50,
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
            "Addison's Disease",
            "Cataracts",
            "Cherry eye",
            "Subvalvular Aortic Stenosis",
            "Epilepsy",
            "Hip Dysplasia",
            "Elbow Dysplasia",
            "Hypothyroidism",
            "Cystinuria",
            "Cancer",
            "Gastric Torsion",
            "Ruptured Anterior Cruciate Ligament"
        ],
        extraElement: ElementUsualHealth,
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "Newfoundland’s thick coat requires brushing two to three times a week. Bathe as needed, every one to two months. As pawrents, you still need to brush regularly. Like all dogs with a fluffy coat, Newfoundland gets dirty easily. Expect muddy paws, leaves or burrs stuck in the coat, and stools on the hindquarters. In terms of their teeth, brush at least two or three times a week to remove tartar buildup. Do not forget to also trim their nails once every month or so if your dog doesn't wear them down naturally to prevent painful tears and other problems. Their ears should be checked weekly for redness or a bad odor, which can indicate an infection.",
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

export default newfoundland;