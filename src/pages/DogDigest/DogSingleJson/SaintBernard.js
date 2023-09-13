import BackgroundOne from "../../../assets/media/dog_digest/saint-bernard/background/BG_00.jpeg"
import BackgroundTwo from "../../../assets/media/dog_digest/saint-bernard/background/BG_01.jpeg"
import BackgroundThree from "../../../assets/media/dog_digest/saint-bernard/background/BG_02.jpeg"
import BackgroundFour from "../../../assets/media/dog_digest/saint-bernard/background/BG_03.jpeg"
import BackgroundFive from "../../../assets/media/dog_digest/saint-bernard/background/BG_04.jpeg"
import BackgroundSix from "../../../assets/media/dog_digest/saint-bernard/background/BG_05.jpeg"
import DogImage from "../../../assets/media/dog_digest/saint-bernard/header/Saint Bernard.png"
import Kibble from "../../../assets/media/dog_digest/saint-bernard/header/Masarap na Kibble.png"
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
import featuredA from "../../../assets/media/dog_digest/saint-bernard/featured/alex-motoc-KaZmCqgirSY-unsplash.jpeg"
import featuredB from "../../../assets/media/dog_digest/saint-bernard/featured/animal-6781351_1920.jpeg"
import featuredC from "../../../assets/media/dog_digest/saint-bernard/featured/saint-bernard-1040957_1920.jpeg"
import featuredD from "../../../assets/media/dog_digest/saint-bernard/featured/saint-bernard-5005614_1920.jpeg"
import featuredE from "../../../assets/media/dog_digest/saint-bernard/featured/vlad-rudkov-LMMl9GCPdok-unsplash.jpeg"
import featuredF from "../../../assets/media/dog_digest/saint-bernard/featured/vlad-rudkov-rAU1LXDvN_M-unsplash.jpeg"

import bar20 from "../../../assets/media/dog_digest/common-assets/bar-20.svg"
import bar40 from "../../../assets/media/dog_digest/common-assets/bar-40.svg"
import bar50 from "../../../assets/media/dog_digest/common-assets/bar-50.svg"
import bar60 from "../../../assets/media/dog_digest/common-assets/bar-60.svg"
import bar80 from "../../../assets/media/dog_digest/common-assets/bar-80.svg"
import bar100 from "../../../assets/media/dog_digest/common-assets/bar-100.svg"


const energyLevelHigh = "Energy filled dogs need mental and physical stimulation. They are at their happiest when activities are action packed. They are the best buddies to bring with you when running, hiking, and other kinds of adventures. "
const potentialPlayfulnessHigh = "From simple catch, sit and stay training, to more advanced lessons for tricks and agility, these dogs are up for the challenge. They are always looking forward to having playmates and playdates."
const exerciseNeedsHigh = "Dogs, and even humans, need exercise, yet these dog breeds are just fine in a less active lifestyle. They are not huge fans of adrenaline rush rather they are fond of solitude."
const intensityHigh = "Gentle natured dogs are easy to handle.They are family dogs - best with kids, elderly and even other animals. Since, they are not loud and rowdy, they are a manageable company when you live in an apartment."
const energyLevelLow = "LowA"
const potentialPlayfulnessLow = "LowB"
const exerciseNeedsLow = "LowC"
const intensityLow = "LDowD"
const recommendedA = "Promotes better digestion with Optimum energy and nourishment for adult dogs. Specifically formulated for dogs' satiety, NUTRI CHUNKS Optimum Adult comes in Lamb and Beef + Chicken Liver!"
const recommendedB = "For puppies try NUTRI CHUNKS Hi-Protein that contains 27% of high quality protein to support your puppies’ growth and development. With milky aroma for improved palatability, suitable for all breeds of puppies weaning to 12 months."

const saintBernard = {
    name: "SAINT BERNARD",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "In 1660, a hospice keeper found a tiny St. Bernard puppy at his doorstep and took him in as a pet. One day, the monk and his dog came upon a group of lost travelers. The little dog broke his fast with some brandy he found in the monk's satchel, then ran off to gather more men for them to follow so they could get help.",
        dogDescriptionB:"These dogs were imported to England in 1853, where they gained popularity with Queen Victoria, who owned several. Before that, they were listed with other draft dogs rather than as a distinct breed.",
        dogDescriptionC: "St. Bernard's' are noted for their enormous size and strength. They can also be stubborn, which is why early training and socialization are important.",
        extraElementA: Kibble,
        extraElementB: "",
        extraElementC: "",
        extraElementD: "",
        extraElementE: "",
    },

    statisticsSection: {
        backgroundImage: BackgroundTwo,
        dogType: "Working Dogs",
        height: "26 to 30 inches ",
        weight: "55 to 85 kg",
        years: "8 to 10 years",
        extraElementA: ElementStatistics,
    },

    physicalNeeds: {
        backgroundImage: BackgroundThree,
        energyLevel: bar50,
        energyLevelDescription: energyLevelHigh,
        potentialPlayfulness: bar80,
        potentialPlayfulnessDescription: potentialPlayfulnessHigh,
        energyNeeds: bar20,
        exerciseNeedsDescription: exerciseNeedsHigh,
        intentsity: bar20,
        intentsityDescription: intensityHigh,
        extraElementA: ElementPhysicalNeeds,
        extraElementB: "",
    },

    recommendedVariants:{
        backgroundImage: BackgroundFour,
        productsImageA: OlambA,
        productsImageB: ObeefA,
        productsImageC: HiProteinA,
        recommendationA: recommendedA,
        recommendationB: recommendedB,
        extraElement: ElementRecommended
    },
    usualHealthProblem: {
        backgroundImage: BackgroundFive,
        healthlist: [
                "Hip dysplasia",
                "Elbow Dysplasia",
                "Epilepsy",
                "Dilated Cardiomyopathy",
                "Cataracts",
                "Allergies",
                "Gastric Dilatation-Volvulus (GDV)"
            ],
        extraElement: ElementUsualHealth
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "Saint Bernards' have an undercoat and guard hair that keeps them protected from the extreme cold. Since they are heavy droolers, it's important to clean their neck and facial folds on a daily basis. Otherwise, they can become infected. During their seasonal shedding phase, expect your house to look like a snowstorm has just blown through!",
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

export default saintBernard;