import BackgroundOne from "../../../assets/media/dog_digest/miniature-schnauzer/background/BG_00.jpeg"
import BackgroundTwo from "../../../assets/media/dog_digest/miniature-schnauzer/background/BG_01.jpeg"
import BackgroundThree from "../../../assets/media/dog_digest/miniature-schnauzer/background/BG_02.jpeg"
import BackgroundFour from "../../../assets/media/dog_digest/miniature-schnauzer/background/BG_03.jpeg"
import BackgroundFive from "../../../assets/media/dog_digest/miniature-schnauzer/background/BG_04.jpeg"
import BackgroundSix from "../../../assets/media/dog_digest/miniature-schnauzer/background/BG_05.jpeg"
import DogImage from "../../../assets/media/dog_digest/miniature-schnauzer/header/Miniature Schnuazer.png"
import ElementStatistics from "../../../assets/media/dog_digest/miniature-schnauzer/elements/OE_01.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/miniature-schnauzer/elements/OE_02.svg"
import ElementRecommended from "../../../assets/media/dog_digest/miniature-schnauzer/elements/OE_03.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/miniature-schnauzer/elements/OE_04.svg"
import ElementGrooming from "../../../assets/media/dog_digest/miniature-schnauzer/elements/OE_05.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/miniature-schnauzer/featured/chris-curry-c7JBpJfG52A-unsplash.jpeg"
import featuredB from "../../../assets/media/dog_digest/miniature-schnauzer/featured/katja-rooke-o4JgsxTZFxk-unsplash.jpeg"
import featuredC from "../../../assets/media/dog_digest/miniature-schnauzer/featured/sebastian-coman-travel-aFDgHo2u10M-unsplash (1).jpeg"
import featuredD from "../../../assets/media/dog_digest/miniature-schnauzer/featured/sebastian-coman-travel-JgKfmp9uq9w-unsplash.jpeg"
import featuredE from "../../../assets/media/dog_digest/miniature-schnauzer/featured/sebastian-coman-travel-nufybs_HQKc-unsplash.jpeg"
import featuredF from "../../../assets/media/dog_digest/miniature-schnauzer/featured/simon-moore--UYxvgUJc8k-unsplash.jpeg"

import bar20 from "../../../assets/media/dog_digest/common-assets/bar-20.svg"
import bar40 from "../../../assets/media/dog_digest/common-assets/bar-40.svg"
import bar50 from "../../../assets/media/dog_digest/common-assets/bar-50.svg"
import bar60 from "../../../assets/media/dog_digest/common-assets/bar-60.svg"
import bar80 from "../../../assets/media/dog_digest/common-assets/bar-80.svg"
import bar100 from "../../../assets/media/dog_digest/common-assets/bar-100.svg"


const energyLevelHigh = "Energy filled dogs need mental and physical stimulation. They are at their happiest when activities are action packed. They are the best buddies to bring with you when running, hiking, and other kinds of adventures."
const potentialPlayfulnessHigh = "From simple catch, sit and stay training, to more advanced lessons for tricks and agility, these dogs are up for the challenge. They are always looking forward to having playmates and playdates."
const exerciseNeedsHigh = "Pumped up dogs who are very agile, active and prefer outdoors. They are historically bred to hunt, work or sport. Though all dogs need exercise, they require regular exercise not just to keep them in shape and healthy."
const intensityHigh = "Forceful dogs are virougus; they may strain themselves wearing the leash, break obstacle courses and devour their food. If not properly trained, they are not advised around kids and the elderly without supervision."
const energyLevelLow = "LowA"
const potentialPlayfulnessLow = "LowB"
const exerciseNeedsLow = "LowC"
const intensityLow = "LDowD"
const recommendedA = "Promotes better digestion with Optimum energy and nourishment for adult dogs. Specifically formulated for dogs' satiety, NUTRI CHUNKS OPTIMUM ADULT comes in Lamb, and Beef + Chicken Liver Flavor!"
const recommendedB = "For puppies try NUTRI CHUNKS Hi-Protein that contains 27% of high quality protein to support your puppies’ growth and development. With milky aroma for improved palatability, suitable for all breeds of puppies weaning to 12 months."

const miniatureSchnauzer = {
    name: "MINIATURE SCHNAUZER",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "The Miniature Schnauzer is a fur baby that got it all: intelligent, affectionate, extroverted temper and humorous–a personality that’s twice as big as their size. A moment with them will surely bring joy and laughter for the whole family.",
        dogDescriptionB: "With their energy and personality, Miniature Schnauzer is known to be a “people person” all the way. He just wants to have fun. And being with you is fun, no matter what you do. He's incredibly loyal to his family — and he requires a great deal of attention and care. You’ll never be bored with one of these pups around. Just make sure you can give them plenty of exercise to keep up with their high energy!",
        dogDescriptionC: "",
        extraElementA: "",
        extraElementB: "",
        extraElementC: "",
        extraElementD: "",
        extraElementE: "",
    },

    statisticsSection: {
        backgroundImage: BackgroundTwo,
        dogType: "Terrier Dogs",
        height: "13 to 14 inches ",
        weight: "5 to 9 kg",
        years: "12 to 14 years",
        extraElementA: ElementStatistics,
    },

    physicalNeeds: {
        backgroundImage: BackgroundThree,
        energyLevel: bar100,
        energyLevelDescription: energyLevelHigh,
        potentialPlayfulness: bar80,
        potentialPlayfulnessDescription: potentialPlayfulnessHigh,
        energyNeeds: bar100,
        exerciseNeedsDescription: exerciseNeedsHigh,
        intentsity: bar50,
        intentsityDescription: intensityHigh,
        extraElementA: ElementPhysicalNeeds,
        extraElementB: "",
    },

    recommendedVariants:{
        backgroundImage: BackgroundFour,
        productsImageA: HiProteinA,
        productsImageB: OlambA,
        productsImageC: "",
        recommendationA: recommendedA,
        recommendationB: recommendedB,
        extraElement: ElementRecommended
    },
    usualHealthProblem: {
        backgroundImage: BackgroundFive,
        healthlist: [
                "Cataracts",
                "Entropion",
                "Progressive Retinal Atrophy (PRA)",
                "Urinary Stones",
                "Myotonia Congenita",
                "Von Willebrand's Disease",
                "Congenital Megaesophagus"
            ],
        extraElement: ElementUsualHealth
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "Miniature Schnauzers are low-shedding, but high-maintenance in terms of grooming and they need to be clipped every five to eight weeks to keep them looking their best. You can take your Miniature Schnauzers to professional groomers to get a beautiful Schnauzer look. But, you can learn to do it yourself. In brushing their teeth, you can brush it two or three times a week so it doesn't get matted. Be sure to check his armpits, since this is a place where mats often form. It's also a good idea to wash his beard after he eats. Daily brushing is even better if you want to prevent gum disease and bad breath. Also, trim their nails once or twice a month if your dog doesn't wear them down naturally to prevent painful tears and other problems. His ears should be checked weekly for redness or a bad odor. When you check your dog's ears, wipe the outer ear with a cotton ball dampened with gentle cleaner to help prevent infections.",
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

export default miniatureSchnauzer;