import React from "react"
import DogDigestLogo from "../../assets/media/dog_digest/dog-digest-hero-section/dog-digest-logo.svg"
import DogIcon from "./DogIcon"

export default function DogDigest() {  

    return(
        <>
            <div className="dog-digest">
                <div className="dog-digest-hero-section">
                    <div className="container">
                        <div className="hero-image-container">
                            <h1>DOG DIGEST</h1>
                            <img src={DogDigestLogo} alt="" />
                        </div>
                    </div>
                </div>
                <div className="dog-digest-content-section">
                    <div className="container">
                        <div className="subheading-container">
                            <p>We at NUTRI CHUNKS Pawmily, believe that in order to truly show our love for dogs, we must immerse ourselves first learning about their nature. We specifically created Dog Digest to feature each of the dog breed’s unique personality, temperament and maintenance needs.</p>
                        </div>
                        <div className="dog-digest-content-container">
                            <DogIcon index={0}/>
                            <DogIcon index={1}/>
                            <DogIcon index={2}/>
                            <DogIcon index={3}/>
                            <DogIcon index={4}/>
                            <DogIcon index={5}/>
                            <DogIcon index={6}/>
                            <DogIcon index={7}/>
                            <DogIcon index={8}/>
                            <DogIcon index={9}/>
                            <DogIcon index={10}/>
                            <DogIcon index={11}/>
                            <DogIcon index={12}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}