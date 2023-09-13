import BackgroundOne from "../../../assets/media/dog_digest/mastiff/background/BG_00.jpeg"
import BackgroundTwo from "../../../assets/media/dog_digest/mastiff/background/BG_01.jpeg"
import BackgroundThree from "../../../assets/media/dog_digest/mastiff/background/BG_02.jpeg"
import BackgroundFour from "../../../assets/media/dog_digest/mastiff/background/BG_03.jpeg"
import BackgroundFive from "../../../assets/media/dog_digest/mastiff/background/BG_04.jpeg"
import BackgroundSix from "../../../assets/media/dog_digest/mastiff/background/BG_05.jpeg"
import DogImage from "../../../assets/media/dog_digest/mastiff/header/Mastiff.png"
import ElementOne from "../../../assets/media/dog_digest/mastiff/header/Plant.svg"
import ElementStatistics from "../../../assets/media/dog_digest/mastiff/elements/OE_01.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/mastiff/elements/OE_02.svg"
import ElementRecommended from "../../../assets/media/dog_digest/mastiff/elements/OE_03.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/mastiff/elements/OE_04.svg"
import ElementGrooming from "../../../assets/media/dog_digest/mastiff/elements/OE_05.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/mastiff/featured/boerboel-ga8d8392f3_1920.jpeg"
import featuredB from "../../../assets/media/dog_digest/mastiff/featured/burgundy-g0dae74500_1920.jpeg"
import featuredC from "../../../assets/media/dog_digest/mastiff/featured/burgundy-g3fcf515d2_1920.jpeg"
import featuredD from "../../../assets/media/dog_digest/mastiff/featured/burgundy-gfde38c70d_1920.jpeg"
import featuredE from "../../../assets/media/dog_digest/mastiff/featured/dogue-de-bordeaux-gf4a6a2131_1920.jpeg"
import featuredF from "../../../assets/media/dog_digest/mastiff/featured/large-bullmastiff-dog-with-big-tongue-hanging-out.jpeg"

import bar20 from "../../../assets/media/dog_digest/common-assets/bar-20.svg"
import bar40 from "../../../assets/media/dog_digest/common-assets/bar-40.svg"
import bar50 from "../../../assets/media/dog_digest/common-assets/bar-50.svg"
import bar60 from "../../../assets/media/dog_digest/common-assets/bar-60.svg"
import bar80 from "../../../assets/media/dog_digest/common-assets/bar-80.svg"
import bar100 from "../../../assets/media/dog_digest/common-assets/bar-100.svg"


const energyLevelHigh = "Energy filled dogs need mental and physical stimulation. They are at their happiest when activities are action packed. They are the best buddies to bring with you when running, hiking, and other kinds of adventures."
const potentialPlayfulnessHigh = "From simple catch, sit and stay training, to more advanced lessons for tricks and agility, these dogs are up for the challenge. They are always looking forward to having playmates and playdates."
const exerciseNeedsHigh = "Pumped up dogs who are very agile, active and prefer outdoors. They are historically bred to hunt, work or sport. Though all dogs need exercise, they require regular exercise not just to keep them in shape and healthy."
const intensityHigh = "Forceful dogs are vigorous; they may strain themselves wearing the leash, break obstacle courses and devour their food. If not properly trained, they are not advised around kids and the elderly without supervision."
const energyLevelLow = "LowA"
const potentialPlayfulnessLow = "LowB"
const exerciseNeedsLow = "LowC"
const intensityLow = "LDowD"
const recommendedA = "NUTRI CHUNKS Coat Shine with real Salmon meat rich in Omega 3 & 6 for healthy skin and shinier coat."
const recommendedB = "For puppies try NUTRI CHUNKS Hi-Protein that contains 27% of high quality protein to support your puppies’ growth and development. With milky aroma for improved palatability, suitable for all breeds of puppies weaning to 12 months."

const mastiff = {
    name: "MASTIFF",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "Mastiffs are big dogs. They are descended from ancient war dogs and were bred for their strength, size, and courage. Mastiffs are excellent family pets and make good guard dogs.",
        dogDescriptionB: "They require a lot of exercise and need a lot of space to run. They can be aggressive with other animals, so proper socialization is important. Mastiffs typically live for eight to ten years.",
        dogDescriptionC: "Mastiffs come in a variety of colors, including black, brindle, fawn, and white. They have a short coat that is easy to care for. They are gentle giants and make great companions. If you are interested in owning a mastiff, be sure to do your research and find a reputable breeder. They are not the right pet for everyone.",
        extraElementA: "",
        extraElementB: ElementOne,
        extraElementC: "",
        extraElementD: "",
        extraElementE: "",
    },

    statisticsSection: {
        backgroundImage: BackgroundTwo,
        dogType: "Working Dogs",
        height: "27 to 32 inches ",
        weight: "59 to 100 kg",
        years: "10 to 12 years",
        extraElementA: ElementStatistics,
    },

    physicalNeeds: {
        backgroundImage: BackgroundThree,
        energyLevel: bar50,
        energyLevelDescription: energyLevelHigh,
        potentialPlayfulness: bar80,
        potentialPlayfulnessDescription: potentialPlayfulnessHigh,
        energyNeeds: bar80,
        exerciseNeedsDescription: exerciseNeedsHigh,
        intentsity: bar40,
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
                "Hip Dysplasia",
                "Progressive Retinal Atrophy (PRA)",
                "Seisures",
                "Cystinuria",
                "Gastric Torsion (Bloat)",
                "Cancer"
            ],
        extraElement: ElementUsualHealth
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "Grooming a mastiff can be a daunting task, but with a little bit of know-how, it can be a breeze. Start by brushing its coat to remove any dirt or debris. Then, carefully brush through the coat, making sure to get rid of any mats or tangles. Be careful not to brush too hard, as this can damage the coat and skin. Once the coat is brushed out, use a high-quality dog shampoo to wash the dog's body. Be sure to lather the shampoo up well and rinse it off completely. Finally, use a dog conditioner to help keep the coat healthy and shiny. Massage the conditioner into the coat and let it sit for a few minutes before rinsing it off.",
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

export default mastiff;