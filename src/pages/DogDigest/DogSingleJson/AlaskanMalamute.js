import BackgroundOne from "../../../assets/media/dog_digest/alaskan-malamute/background/BG_00.jpeg"
import BackgroundTwo from "../../../assets/media/dog_digest/alaskan-malamute/background/BG_01.jpeg"
import BackgroundThree from "../../../assets/media/dog_digest/alaskan-malamute/background/BG_02.jpeg"
import BackgroundFour from "../../../assets/media/dog_digest/alaskan-malamute/background/BG_03.jpeg"
import BackgroundFive from "../../../assets/media/dog_digest/alaskan-malamute/background/BG_04.jpeg"
import BackgroundSix from "../../../assets/media/dog_digest/alaskan-malamute/background/BG_05.jpeg"
import DogImage from "../../../assets/media/dog_digest/alaskan-malamute/header/Alaskan Malamute.png"
import ElementStatistics from "../../../assets/media/dog_digest/alaskan-malamute/elements/OE_01.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/alaskan-malamute/elements/OE_02.svg"
import ElementRecommended from "../../../assets/media/dog_digest/alaskan-malamute/elements/OE_03.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/alaskan-malamute/elements/OE_04.svg"
import ElementGrooming from "../../../assets/media/dog_digest/alaskan-malamute/elements/OE_05.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/alaskan-malamute/featured/alaskan-malamute-husky-mix-looking-out-ocean.jpeg"
import featuredB from "../../../assets/media/dog_digest/alaskan-malamute/featured/black-white-husky-dog-snow-winter-s-day.jpeg"
import featuredC from "../../../assets/media/dog_digest/alaskan-malamute/featured/husky-breed-dog-with-tongue-out.jpeg"
import featuredD from "../../../assets/media/dog_digest/alaskan-malamute/featured/husky-dog-sunset-capri-island-italy.jpeg"
import featuredE from "../../../assets/media/dog_digest/alaskan-malamute/featured/large-alaskan-malamute-dog-with-his-tongue-sticking-out.jpeg"
import featuredF from "../../../assets/media/dog_digest/alaskan-malamute/featured/really-sweet-faced-alaskan-malamute-husky-cross-field.jpeg"

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
const recommendedA = "NUTRI CHUNKS Coat Shine with real Salmon meat rich in Omega 3 & 6 for healthy skin and shinier coat."
const recommendedB = "For puppies try NUTRI CHUNKS Hi-Protein that contains 27% of high quality protein to support your puppies’ growth and development. With milky aroma for improved palatability, suitable for all breeds of puppies weaning to 12 months."

const alaskanMalamute = {
    name: "ALASKAN MALAMUTE",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "The Alaskan Malamute is often believed to be part wolf, but they're actually domestic dogs. They possess tremendous strength, energy, endurance, independence, and intelligence. But on top of it, Malamutes regard everyone they meet as a friend. In fact, they are great companion dogs which makes them not suited as watchdogs since their size is the only thing that scares off intruders.",
        dogDescriptionB: "Malamutes do best in situations with a lot of movement. If you're a pawrent of this dog, be ready for a challenge as this dog needs a job and consistent leadership. Alaskan Malamute will surely require you for vigorous exercise. But despite their high needs, you'll definitely have a highly-trainable and active playmate.",
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
        height: "23 to 25 inches",
        weight: "34 to 45 kg",
        years: "12 to 15 years",
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
        intentsity: bar100,
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
            "Cataracts",
            "Chondrodysplasia",
            "Hip Dysplasia",
            "Hypothyroidism",
            "Inherited Polyneuropathy",
            "Hemeralopia (Day Blindness)"
        ],
        extraElement: ElementUsualHealth,
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "With such a dense coat, you may be hesitant that the grooming needs for a Malamute will be quite extensive, but that is surprisingly not the case.\nDon’t be mistaken. These curly-tailed dogs do need brushed multiple times a week, but they do not require frequent baths. Malamutes are not known to carry that “dog smell,” and they even prefer to keep themselves well-maintained. Unless your dog has a run-in with some mud puddles, you could easily go multiple months in between doggy baths.\nAbout once a month, or sometimes more frequently, your dog’s nails will need to be trimmed. On a weekly basis, you should check your dog’s ears for signs of redness or a bad odor, which could be the sign of an infection. To help reduce the chance of ear infections, be sure to clean your dog’s ears regularly—monthly will often suffice.\nAt least once a week, you should brush your dog’s teeth—multiple times a week is even better. Regularly brushing your dog’s teeth can help prevent dental-related health issues, plus it can keep that stinky dog breath at bay.",
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

export default alaskanMalamute;