import BackgroundOne from "../../../assets/media/dog_digest/akita-inu/background/BG_00.jpeg"
import BackgroundTwo from "../../../assets/media/dog_digest/akita-inu/background/BG_01.jpeg"
import BackgroundThree from "../../../assets/media/dog_digest/akita-inu/background/BG_02.jpeg"
import BackgroundFour from "../../../assets/media/dog_digest/akita-inu/background/BG_03.jpeg"
import BackgroundFive from "../../../assets/media/dog_digest/akita-inu/background/BG_04.jpeg"
import BackgroundSix from "../../../assets/media/dog_digest/akita-inu/background/BG_05.jpeg"
import DogImage from "../../../assets/media/dog_digest/akita-inu/header/Akita Inu.png"
import ElementStatistics from "../../../assets/media/dog_digest/saint-bernard/elements/OE_01.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/saint-bernard/elements/OE_02.svg"
import ElementRecommended from "../../../assets/media/dog_digest/saint-bernard/elements/OE_03.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/saint-bernard/elements/OE_04.svg"
import ElementGrooming from "../../../assets/media/dog_digest/saint-bernard/elements/OE_05.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/akita-inu/featured/akita-inu-young-dog-is-posing-cute-white-braun-doggy-pet-is-lying-looking-happy-isolated-white-background-studio-photoshot-negative-space-insert-your-text-image-front-view.jpeg"
import featuredB from "../../../assets/media/dog_digest/akita-inu/featured/akita-inu-young-dog-is-posing-cute-white-braun-doggy-pet-is-lying-looking-happy-isolated-white-background-studio-photoshot-negative-space-insert-your-text-image.jpeg"
import featuredC from "../../../assets/media/dog_digest/akita-inu/featured/japanese-dog-akita-inu-portrait-with-young-woman-outdoors.jpeg"
import featuredD from "../../../assets/media/dog_digest/akita-inu/featured/woman-takes-care-akita-inu-puppy-grooming-table.jpeg"
import featuredE from "../../../assets/media/dog_digest/akita-inu/featured/akita-inu-young-dog-is-posing-cute-white-braun-doggy-pet-is-lying-looking-happy-isolated-white-background-studio-photoshot-negative-space-insert-your-text-image.jpeg"
import featuredF from "../../../assets/media/dog_digest/akita-inu/featured/akita-inu-young-dog-is-posing-cute-white-braun-doggy-pet-is-lying-looking-happy-isolated-white-background-studio-photoshot-negative-space-insert-your-text-image-front-view.jpeg"

import bar20 from "../../../assets/media/dog_digest/common-assets/bar-20.svg"
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
const recommendedA = "Promotes better digestion with Optimum energy and nourishment for adult dogs. Specifically formulated for dogs' satiety, NUTRI CHUNKS OPTIMUM ADULT comes in Lamb, and Beef + Chicken Liver Flavor!"
const recommendedB = "For puppies try NUTRI CHUNKS Hi-Protein that contains 27% of high quality protein to support your puppies’ growth and development. With milky aroma for improved palatability, suitable for all breeds of puppies weaning to 12 months."

const akitaInu = {
    name: "AKITA INU",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "The Akita comes from Japan and has two different types, the Akita Inu (or Japanese Akita) and the Akita Kensha (or American Akita). They were bred up until World War II for fighting in bear pits.",
        dogDescriptionB: "Akitas are known to have a very bold nature with their owners but can be very defensive when they are around strangers. Akitas can be very independent minded so you need to be firm with training and early socialization is important as well.",
        dogDescriptionC: "Akitas love children though they must be taught how to handle and approach them. They enjoy cuddling with their owners as well as receiving attention each day. Akitas usually won't eat much in one sitting so serve in small portions.",
        extraElementA: "",
        extraElementB: "",
        extraElementC: "",
        extraElementD: "",
        extraElementE: "",
    },

    statisticsSection: {
        backgroundImage: BackgroundTwo,
        dogType: "Companion Dogs",
        height: "25 to 28 inches",
        weight: "32 to 39 kg",
        years: "12 to 16 years",
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
        intentsity: bar60,
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
            "Hip dysplasia",
            "Gastric Dilatation-Volvulus (GDV)",
            "Hypothyroidism",
            "Progressive retinal atrophy (PRA)",
            "Sebacecous adenitis (SA)"
        ],
        extraElement: ElementUsualHealth,
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "Good hygiene is essential for all dogs, but it is especially important for those with thicker coats like the Akita. Their coat should be brushed once or twice per week to keep it clean and free of mats. A brush with rough bristles should be used to work out large knots in mats or tangles, rather than pulling on them which can damage the coat.",
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

export default akitaInu;