import BackgroundOne from "../../../assets/media/dog_digest/scottish-terrier/background/BG_00.jpeg"
import BackgroundTwo from "../../../assets/media/dog_digest/scottish-terrier/background/BG_01.jpeg"
import BackgroundThree from "../../../assets/media/dog_digest/scottish-terrier/background/BG_02.jpeg"
import BackgroundFour from "../../../assets/media/dog_digest/scottish-terrier/background/BG_03.jpeg"
import BackgroundFive from "../../../assets/media/dog_digest/scottish-terrier/background/BG_04.jpeg"
import BackgroundSix from "../../../assets/media/dog_digest/scottish-terrier/background/BG_05.jpeg"
import DogImage from "../../../assets/media/dog_digest/scottish-terrier/header/Scottish Terrier.png"
import ElementStatistics from "../../../assets/media/dog_digest/scottish-terrier/elements/OE_01.svg"
import ElementPhysicalNeeds from "../../../assets/media/dog_digest/scottish-terrier/elements/OE_02.svg"
import ElementRecommended from "../../../assets/media/dog_digest/scottish-terrier/elements/OE_03.svg"
import ElementUsualHealth from "../../../assets/media/dog_digest/scottish-terrier/elements/OE_04.svg"
import ElementGrooming from "../../../assets/media/dog_digest/scottish-terrier/elements/OE_05.svg"
import CoatshineA from "../../../assets/media/1_3kg/coatshine.png"
import HiProteinA from "../../../assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "../../../assets/media/1_3kg/maintenance.png"
import ObeefA from "../../../assets/media/1_3kg/o-beef.png"
import OlambA from "../../../assets/media/1_3kg/o-lamb.png"
import featuredA from "../../../assets/media/dog_digest/scottish-terrier/featured/cairn-terrier-7164194_1920.jpeg"
import featuredB from "../../../assets/media/dog_digest/scottish-terrier/featured/chris-arthur-collins-dalum0O0AzU-unsplash.jpeg"
import featuredC from "../../../assets/media/dog_digest/scottish-terrier/featured/dog-427952_1920.jpeg"
import featuredD from "../../../assets/media/dog_digest/scottish-terrier/featured/featured.jpeg"
import featuredE from "../../../assets/media/dog_digest/scottish-terrier/featured/nina-hill-yb0iSLAxBUQ-unsplash.jpeg"
import featuredF from "../../../assets/media/dog_digest/scottish-terrier/featured/scottish-terrier-puppy-posing-cute-black-doggy-pet-playing-with-christmas-new-year-decoration.jpeg"

import bar20 from "../../../assets/media/dog_digest/common-assets/bar-20.svg"
import bar40 from "../../../assets/media/dog_digest/common-assets/bar-40.svg"
import bar50 from "../../../assets/media/dog_digest/common-assets/bar-50.svg"
import bar60 from "../../../assets/media/dog_digest/common-assets/bar-60.svg"
import bar80 from "../../../assets/media/dog_digest/common-assets/bar-80.svg"
import bar100 from "../../../assets/media/dog_digest/common-assets/bar-100.svg"


const energyLevelHigh = "Energy filled dogs need mental and physical stimulation. They are at their happiest when activities are action packed. They are the best buddies to bring with you when running, hiking, and other kinds of adventures."
const potentialPlayfulnessHigh = "From simple catch, sit and stay training, to more advanced lessons for tricks and agility, these dogs are up for the challenge. They are always looking forward to having playmates and playdates."
const exerciseNeedsHigh = "Pumped up dogs who are very agile, active and prefer outdoors. They are historically bred to hunt, work or sport. Though all dogs need exercise, they require regular exercise not just to keep them in shape and healthy."
const intensityHigh = "Gentle natured dogs are easy to handle.They are family dogs - best with kids, elderly and even other animals. Since, they are not loud and rowdy, they are a manageable company when you live in an apartment."
const energyLevelLow = "LowA"
const potentialPlayfulnessLow = "LowB"
const exerciseNeedsLow = "LowC"
const intensityLow = "LDowD"
const recommendedA = "NUTRI CHUNKS Coat Shine with real Salmon meat rich in Omega 3 & 6 for healthy skin and shinier coat."
const recommendedB = "For puppies try NUTRI CHUNKS Hi-Protein that contains 27% of high quality protein to support your puppies’ growth and development. With milky aroma for improved palatability, suitable for all breeds of puppies weaning to 12 months."

const scottishTerrier = {
    name: "SCOTTISH TERRIER",
    hero: {
        heroBackgroundImage: BackgroundOne,
        dogImage: DogImage,
        dogDescriptionA: "You might have seen them in Disney’s Lady and the Tramp. Scottish Terriers are easily recognizable with undeniable kawainess. Despite their dignified seriousness, they are independent, intelligent, and loyal, which makes them excellent watchdogs. Despite their small size, this short-legged wonder has a powerful bark that can shoo away unsuspecting burglars.",
        dogDescriptionB: "Scottie is known for their aloofness, but he decides to befriend you, it will be for life. They surely love family companionship and are known for being playful and considerate with children and the elderly.",
        dogDescriptionC: "Today, they are known as family dogs, but in essence, they are working dogs and are much happier with a job to do.",
        extraElementA: "",
        extraElementB: "",
        extraElementC: "",
        extraElementD: "",
        extraElementE: "",
    },

    statisticsSection: {
        backgroundImage: BackgroundTwo,
        dogType: "Terrier Dogs",
        height: "10 inches ",
        weight: "8 to 10 kg",
        years: "11 to 13 years",
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
                "Scottie cramp",
                "Von Willebrand's disease",
                "Craniomandibular osteopathy",
                "Patellar luxation"
            ],
        extraElement: ElementUsualHealth
    },
    grooming:{
        backgroundImage: BackgroundSix,
        grooming: "Many believe that the Scottish Terrier is easy to maintain, but in reality, the breed needs significant grooming. Although their fur easily grows, they do not shed as short-coated breeds, but their coat takes time to maintain with grooming weekly for pets and daily for show dogs. In terms of bruising their teeth, Scotties have bad reactions to fleas and have been known to chew themselves bald. For this, brushing regularly and using a flea comb could be a good idea. Scottish Terriers have large teeth that are close together, which is why their teeth should be cleaned frequently. If the teeth aren't cleaned, the dog can suffer from tooth decay and gum disease. As pawrents, you need to start grooming your dog at a young age and make use of positive reinforcement in making grooming like bathing and cleaning, a fun experience with your Scottie.",
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

export default scottishTerrier;