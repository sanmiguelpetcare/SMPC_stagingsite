import React from "react"
import HeroSection from "./SectionHero"
import Statistics from "./SectionStatistics"
import PhysicalNeeds from "./SectionPhysicalNeeds"
import RecommendedVariants from "./SectionRecommendedVariants"
import HealthProblems from "./SectionHealthProblems"
import Grooming from "./SectionGrooming"
import Featured from "./FeaturedSection/SectionFeaturedImage"
import DogListMapping from "./DogListMapping"
import { useParams } from "react-router-dom"

export default function DogDigestSingle() {

    let { param } = useParams()

    const DogListMap = DogListMapping[Object.keys(DogListMapping).find(key => key == param)];

    console.log("DogListMap", DogListMap)
    console.log("param", param)
    console.log("DogListMapping", Object.keys(DogListMapping))

    return (
        <>
            <div className={`dog-digest-single ${param}`}>
                <HeroSection 
                    className="section"
                    param={param}
                    DogListMap={DogListMap.hero}
                    name={DogListMap.name}
                />
                <Statistics 
                    className="section"
                    param={param}
                    DogListMap={DogListMap.statisticsSection}
                />
                <PhysicalNeeds 
                    className="section"
                    param={param}
                    DogListMap={DogListMap.physicalNeeds}
                />
                <RecommendedVariants 
                    className="section"
                    param={param}
                    DogListMap={DogListMap.recommendedVariants}
                />
                <HealthProblems 
                    className="section"
                    param={param}
                    DogListMap={DogListMap.usualHealthProblem}
                    name={DogListMap.name}
                />
                <Grooming 
                    className="section"
                    param={param}
                    DogListMap={DogListMap.grooming}
                    name={DogListMap.name}
                />
                <Featured 
                    className="section"
                    param={param}
                    DogListMap={DogListMap.featured}
                    name={DogListMap.name}
                />
            </div>
        </>
    )
}