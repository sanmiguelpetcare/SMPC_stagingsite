import React from "react"
import CoatshineA from "./assets/media/1_3kg/coatshine.png"
import HiProteinA from "./assets/media/1_3kg/hi-protein.png"
import MaintenanceA from "./assets/media/1_3kg/maintenance.png"
import ObeefA from "./assets/media/1_3kg/o-beef.png"
import OlambA from "./assets/media/1_3kg/o-lamb.png"
import CoatshineB from "./assets/media/5kg/coatshine.png"
import HiProteinB from "./assets/media/5kg/hi-protein.png"
import MaintenanceB from "./assets/media/5kg/maintenance.png"
import ObeefB from "./assets/media/5kg/o-beef.png"
import OlambB from "./assets/media/5kg/o-lamb.png"
import CoatshineC from "./assets/media/10kg/coatshine.png"
import HiProteinC from "./assets/media/10kg/hi-protein.png"
import MaintenanceC from "./assets/media/10kg/maintenance.png"
import ObeefC from "./assets/media/10kg/o-beef.png"
import OlambC from "./assets/media/10kg/o-lamb.png"
import CoatshineD from "./assets/media/20kg/coatshine.png"
import HiProteinD from "./assets/media/20kg/hi-protein.png"
import MaintenanceD from "./assets/media/20kg/maintenance.png"
import ObeefD from "./assets/media/20kg/o-beef.png"
import OlambD from "./assets/media/20kg/o-lamb.png"
import WaterDispenserB from "./assets/media/premium/blue-water-dis.png"
import WaterDispenserR from "./assets/media/premium/red-water-dis.png"
import ProtekPlusL from "./assets/media/premium/protek-plus-l.png"
import ProtekPlusM from "./assets/media/premium/protek-plus-m.png"
import ProtekPlusS from "./assets/media/premium/protek-plus-s.jpg"
import SlowFeederB from "./assets/media/premium/slowfeeder-b.jpg"
import SlowFeederR from "./assets/media/premium/slowfeeder-r.jpg"
import { StarPurple500 } from "@mui/icons-material"

const mainProducList = [
    {
        id: 0,
        image: HiProteinA,
        name: "Hi-Protein Puppy Lamb, Chicken Liver, and Milk Flavor",
        description: "Suitable for all breeds of puppies weaning to 12 months.",
        price: 299,
        category: "Dog food",
        weight: "1.3kg",
        discount: null,
        discountType: "percent",
        isInStock: true,
        feedingGuide: [],
        guaranteedAnalysis: [],
        ingredients: "Lorem"
    },
    {
        id: 1,
        image: HiProteinB,
        name: "Hi-Protein Puppy Lamb, Chicken Liver, and Milk Flavor",
        description: "Lorem",
        price: 899,
        category: "Dog food", 
        weight: "5kg", 
        discount: null,
        discountType: "percent",
        isInStock: true,
        feedingGuide: [],
        guaranteedAnalysis: [],
        ingredients: "Lorem"
    },
    {
        id: 2,
        image: HiProteinC,
        name: "Hi-Protein Puppy Lamb, Chicken Liver, and Milk Flavor",
        description: "Lorem",
        price: 1550,
        category: "Dog food",  
        weight: "10kg", 
        discount: null,
        discountType: "percent",
        isInStock: true,
        feedingGuide: [],
        guaranteedAnalysis: [],
        ingredients: "Lorem"
    },
    {
        id: 3,
        image: HiProteinD,
        name: "Hi-Protein Puppy Lamb, Chicken Liver, and Milk Flavor",
        description: "Lorem",
        price: 3100,
        category: "Dog food", 
        weight: "20kg", 
        discount: null,
        discountType: "percent",
        isInStock: true,
        feedingGuide: [],
        guaranteedAnalysis: [],
        ingredients: "Lorem"
    },
    {
        id: 4,
        image: CoatshineA,
        name: "Coatshine Adult Salmon",
        description: "Lorem",
        price: 289,
        category: "Dog food", 
        weight: "1.3kg", 
        discount: null,
        discountType: "percent",
        isInStock: true,
        feedingGuide: [],
        guaranteedAnalysis: [],
        ingredients: "Lorem"
    },
    {
        id: 5,
        image: CoatshineB,
        name: "Coatshine Adult Salmon",
        description: "Lorem",
        price: 899,
        category: "Dog food", 
        weight: "5kg",
        discount: null,
        discountType: "percent",
        isInStock: true,
        feedingGuide: [],
        guaranteedAnalysis: [],
        ingredients: "Lorem"
    },
    {
        id: 6,
        image: CoatshineC,
        name: "Coatshine Adult Salmon",
        description: "Lorem",
        price: 1550,
        category: "Dog food",  
        weight: "10kg", 
        discount: null,
        discountType: "percent",
        isInStock: true,
        feedingGuide: [],
        guaranteedAnalysis: [],
        ingredients: "Lorem"
    },
    {
        id: 7,
        image: CoatshineD,
        name: "Coatshine Adult Salmon",
        description: "Lorem",
        price: 3100,
        category: "Dog food", 
        weight: "20kg", 
        discount: null,
        discountType: "percent",
        isInStock: true,
        feedingGuide: [],
        guaranteedAnalysis: [],
        ingredients: "Lorem"
    },
    {
        id: 8,
        image: OlambA,
        name: "Optimum Adult Lamb",
        description: "Lorem",
        price: 279,
        category: "Dog food", 
        weight: "1.3kg", 
        discount: null,
        discountType: "percent",
        isInStock: true,
        feedingGuide: [],
        guaranteedAnalysis: [],
        ingredients: "Lorem"
    },
    {
        id: 9,
        image: OlambB,
        name: "Optimum Adult Lamb",
        description: "Lorem",
        price: 819,
        category: "Dog food",
        weight: "5kg", 
        discount: null,
        discountType: "percent",
        isInStock: true,
        feedingGuide: [],
        guaranteedAnalysis: [],
        ingredients: "Lorem"
    },
    {
        id: 10,
        image: OlambC,
        name: "Optimum Adult Lamb",
        description: "Lorem",
        price: 1350,
        category: "Dog food",  
        weight: "10kg",
        discount: null,
        discountType: "percent",
        isInStock: true,
        feedingGuide: [],
        guaranteedAnalysis: [],
        ingredients: "Lorem"
    },
    {
        id: 11,
        image: OlambD,
        name: "Optimum Adult Lamb",
        description: "Lorem",
        price: 2700,
        category: "Dog food",  
        weight: "20kg",
        discount: null,
        discountType: "percent",
        isInStock: true,
        feedingGuide: [],
        guaranteedAnalysis: [],
        ingredients: "Lorem"
    },
    {
        id: 12,
        image: ObeefA,
        name: "Optimum Adult Beef + Chicken Liver",
        description: "Lorem",
        price: 259,
        category: "Dog food",  
        weight: "1.3kg",
        discount: null,
        discountType: "percent",
        isInStock: true,
        feedingGuide: [],
        guaranteedAnalysis: [],
        ingredients: "Lorem"
    },
    {
        id: 13,
        image: ObeefB,
        name: "Optimum Adult Beef + Chicken Liver",
        description: "Lorem",
        price: 789,
        category: "Dog food",
        weight: "5kg",
        discount: null,
        discountType: "percent",
        isInStock: true,
        feedingGuide: [],
        guaranteedAnalysis: [],
        ingredients: "Lorem"
    },
    {
        id: 14,
        image: ObeefC,
        name: "Optimum Adult Beef + Chicken Liver",
        description: "Lorem",
        price: 1300,
        category: "Dog food", 
        weight: "10kg",
        discount: null,
        discountType: "percent",
        isInStock: true,
        feedingGuide: [],
        guaranteedAnalysis: [],
        ingredients: "Lorem"
    },
    {
        id: 15,
        image: ObeefD,
        name: "Optimum Adult Beef + Chicken Liver",
        description: "Lorem",
        price: 2600,
        category: "Dog food", 
        weight: "20kg",
        discount: null,
        discountType: "percent",
        isInStock: true,
        feedingGuide: [],
        guaranteedAnalysis: [],
        ingredients: "Lorem"
    },
    {
        id: 16,
        image: MaintenanceA,
        name: "Maintenance Adult Beef",
        description: "Lorem",
        price: 239,
        category: "Dog food",
        weight: "1.3kg",
        discount: null,
        discountType: "percent",
        isInStock: true,
        feedingGuide: [],
        guaranteedAnalysis: [],
        ingredients: "Lorem"
    },
    {
        id: 17,
        image: MaintenanceB,
        name: "Maintenance Adult Beef",
        description: "Lorem",
        price: 699,
        category: "Dog food", 
        weight: "5kg",
        discount: null,
        discountType: "percent",
        isInStock: true,
        feedingGuide: [],
        guaranteedAnalysis: [],
        ingredients: "Lorem"
    },
    {
        id: 18,
        image: MaintenanceC,
        name: "Maintenance Adult Beef",
        description: "Lorem",
        price: 1150,
        category: "Dog food",
        weight: "10kg",
        discount: null,
        discountType: "percent",
        isInStock: true,
        feedingGuide: [],
        guaranteedAnalysis: [],
        ingredients: "Lorem"
    },
    {
        id: 19,
        image: MaintenanceD,
        name: "Maintenance Adult Beef",
        description: "Lorem",
        price: 2300,
        category: "Dog food",
        weight: "20kg",
        discount: null,
        discountType: "percent",
        isInStock: true,
        feedingGuide: [],
        guaranteedAnalysis: [],
        ingredients: "Lorem"
    },
    {
        id: 20,
        image: ProtekPlusS,
        name: "Protect Plus",
        description: "Lorem",
        price: 70,
        category: "disinfectants",  
        weight: null,
        discount: null,
        discountType: "percent",
        isInStock: true,
        feedingGuide: [],
        guaranteedAnalysis: [],
        ingredients: "Lorem"
    },
    {
        id: 21,
        image: ProtekPlusM,
        name: "Protect Plus",
        description: "Lorem",
        price: 75,
        category: "disinfectants",   
        weight: null,
        discount: null,
        discountType: "percent",
        isInStock: true,
        feedingGuide: [],
        guaranteedAnalysis: [],
        ingredients: "Lorem"
    },
    {
        id: 22,
        image: ProtekPlusL,
        name: "Protect Plus",
        description: "Lorem",
        price: 1615,
        category: "disinfectants",   
        weight: null,
        discount: null,
        discountType: "percent",
        isInStock: true,
        feedingGuide: [],
        guaranteedAnalysis: [],
        ingredients: "Lorem"
    },
    {
        id: 23,
        image: SlowFeederR,
        name: "Nutri Chunks Slow Feeding Dog Dish",
        description: "Lorem",
        price: 249,
        category: "Premium", 
        weight: null,
        discount: null,
        discountType: "percent",
        isInStock: true,
        feedingGuide: [],
        guaranteedAnalysis: [],
        ingredients: "Lorem"
    },
    {
        id: 24,
        image: SlowFeederB,
        name: "Nutri Chunks Slow Feeding Dog Dish",
        description: "Lorem",
        price: 249,
        category: "Premium",  
        weight: null,
        discount: null,
        discountType: "percent",
        isInStock: true,
        feedingGuide: [],
        guaranteedAnalysis: [],
        ingredients: "Lorem"
    },
    {
        id: 25,
        image: WaterDispenserB,
        name: "Nutri Chunks Automatic Water Dispensing Dish",
        description: "Lorem",
        price: 149,
        category: "Premium",  
        weight: null,
        discount: null,
        discountType: "percent",
        isInStock: true,
        feedingGuide: [],
        guaranteedAnalysis: [],
        ingredients: "Lorem"
    },
    {
        id: 26,
        image: WaterDispenserR,
        name: "Nutri Chunks Automatic Water Dispensing Dish",
        description: "Lorem",
        price: 149,
        category: "Premium", 
        weight: null,
        discount: null,
        discountType: "percent",
        isInStock: true,
        feedingGuide: [],
        guaranteedAnalysis: [],
        ingredients: "Lorem"
    },
    
]

export default mainProducList;