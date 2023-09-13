import BackgroundOne from "../../../assets/media/dog_digest/caucasian-shepherd-dog/background/BG_00.jpeg"
import BackgroundTwo from "../../../assets/media/dog_digest/caucasian-shepherd-dog/background/BG_01.jpeg"
import BackgroundThree from "../../../assets/media/dog_digest/caucasian-shepherd-dog/background/BG_02.jpeg"
import BackgroundFour from "../../../assets/media/dog_digest/caucasian-shepherd-dog/background/BG_03.jpeg"
import BackgroundFive from "../../../assets/media/dog_digest/caucasian-shepherd-dog/background/BG_04.jpeg"
import BackgroundSix from "../../../assets/media/dog_digest/caucasian-shepherd-dog/background/BG_05.jpeg"
import DogImage from "../../../assets/media/dog_digest/caucasian-shepherd-dog/header/Caucasian Shepherd Dog.png"
import ElementStatistics from "../../../assets/media/dog_digest/caucasian-shepherd-dog/elements/OE_01.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/caucasian-shepherd-dog/elements/OE_02.svg"
import ElementRecommended from "../../../assets/media/dog_digest/caucasian-shepherd-dog/elements/OE_03.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/caucasian-shepherd-dog/elements/OE_04.svg"
import ElementGrooming from "../../../assets/media/dog_digest/caucasian-shepherd-dog/elements/OE_05.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/caucasian-shepherd-dog/featured/pexels-николай-шарлай-8932593.jpeg"
import featuredB from "../../../assets/media/dog_digest/caucasian-shepherd-dog/featured/portrait-caucasian-shepherd-dog-with-his-tongue-hanging-out.jpeg"

import bar20 from "../../../assets/media/dog_digest/common-assets/bar-20.svg"
import bar40 from "../../../assets/media/dog_digest/common-assets/bar-40.svg"
import bar50 from "../../../assets/media/dog_digest/common-assets/bar-50.svg"
import bar60 from "../../../assets/media/dog_digest/common-assets/bar-60.svg"
import bar80 from "../../../assets/media/dog_digest/common-assets/bar-80.svg"
import bar100 from "../../../assets/media/dog_digest/common-assets/bar-100.svg"


const energyLevelHigh = "Low-energy dogs love lounging on the couch as you binge watch your all-time favorite series. They are up for cuddles or naps on your lap. These dogs are ideal company for a quiet afternoon."
const potentialPlayfulnessHigh = "From simple catch, sit and stay training, to more advanced lessons for tricks and agility, these dogs are up for the challenge. They are always looking forward to having playmates and playdates."
const exerciseNeedsHigh = "Dogs, and even humans, need exercise, yet these dog breeds are just fine in a less active lifestyle. They are not huge fans of adrenaline rush rather they are fond of solitude."
const intensityHigh = "Forceful dogs are virougus; they may strain themselves wearing the leash, break obstacle courses and devour their food. If not properly trained, they are not advised around kids and the elderly without supervision."
const energyLevelLow = "LowA"
const potentialPlayfulnessLow = "LowB"
const exerciseNeedsLow = "LowC"
const intensityLow = "LDowD"
const recommendedA = "NUTRI CHUNKS Coat Shine with real Salmon meat rich in Omega 3 & 6 for healthy skin and shinier coat."
const recommendedB = "For puppies try NUTRI CHUNKS Hi-Protein that contains 27% of high quality protein to support your puppies’ growth and development. With milky aroma for improved palatability, suitable for all breeds of puppies weaning to 12 months."

const caucasianShepherdDog = {
    name: "CAUCASIAN SHEPHERD DOG",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "Loyal, strong, and courageous, Caucasian Shepherd Dog is definitely the family protector you need. They were originally bred to defend their home against predators in the Caucasus Mountain region which makes them the perfect watchdogs and protectors in modern times.",
        dogDescriptionB: "With this, you can expect this dog to be highly territorial with a ready-to-fight attitude. They are sometimes overly apprehensive around strangers and don't take well to other animals entering their territory, including other dogs. So be sure to train them in socializing with other humans and pets.Z",
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
        energyLevel: bar20,
        energyLevelDescription: energyLevelHigh,
        potentialPlayfulness: bar50,
        potentialPlayfulnessDescription: potentialPlayfulnessHigh,
        energyNeeds: bar20,
        exerciseNeedsDescription: exerciseNeedsHigh,
        intentsity: bar80,
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
            "Hip Dysplasia",
            "Cataracts",
            "Gastric Dilatation and Volvulus (GDV)",
            "Dental Disease",
            "Pulmonic Stenosis"
        ],
        extraElement: ElementUsualHealth,
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "Brush her coat as needed, at least weekly. Caucasian Ovcharkas generally have good teeth, and you can keep them perfect by brushing them at least twice a week! Clean her ears weekly, even as a puppy. She’s a large smart dog with lots of energy, so keep her mind and body active or she’ll get bored. Talk to your vet about possible eye issues. Caucasian Shepherds are prone to a few eye disorders, like cataracts, so speak to your breeder about any eye problems your Caucasian Shepherd could be predisposed to. Genetic screenings are also available for some heritable eye issues, so speak to your vet regarding those. Watch your Caucasian Shepherd’s weight. One of the most common health issues for Caucasian Shepherds is obesity. Make sure you’re feeding your dog high-quality dog food, and avoid giving them excess treats, especially human food. Also, give your dog regular exercise to help prevent obesity. Be aware that Caucasian Shepherds are prone to bloat. As a large breed dog, Caucasian Shepherds are prone to bloat. Consider gastropexy at the time of spay or neuter, and be mindful of excessive exercise after eating.",
        extraElement: ElementGrooming
    },
    featured: {
        backgroundImage: BackgroundFive,
        imageOne: featuredA,
        imageTwo: featuredB,
        imageThree: featuredA,
        imageFour: featuredB,
        imageFive: featuredA,
        imageSix: featuredB,
        extraElement: ""
    }
}

export default caucasianShepherdDog;