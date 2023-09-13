import React from "react"
import PupstarheroImage from "../../assets/media/Pupstar/Puppies_2x.png"
import PupstarLogo from "../../assets/media/Pupstar/Pupstar_Logo_2x.png"
import PupstarWhitelogo from "../../assets/media/Pupstar/Subscribe.png"
import Subscribe from "../../common/cta/Subscribe"
import EatplayLoveicon from "./EatplayLoveicon"
import PupstarEat from "../../assets/media/Pupstar/eat.svg"
import PupstarPlay from "../../assets/media/Pupstar/play.svg"
import PupstarLove from "../../assets/media/Pupstar/love.svg"
import FeaturedArticle  from "./FeaturedArticle"
import { Link } from "react-router-dom"

import EatplayLove from "./EatplayLove"

export default function Pupstar() {
    return (
        <>
            
            <div className="pupstar">
                <div className="pupstar-banner-section">
                    <div className="container">
                        <div className="pupstar-banner-content-container">
                            <div className="text-content-container">
                                <img className="pupstar-logo-image" src={PupstarLogo} alt="" />
                                <div className="text-heading-container">
                                    <h1>Step up your <span>pawrenting skills!</span></h1>
                                </div>
                                <EatplayLove />
                            </div>
                            <div className="hero0image-container">
                                <img className="pupstar-hero-image" src={PupstarheroImage} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pupstar-main-content-section">
                    <div className="container">
                        <div className="pupstar-main-content-container">
                            <div className="pupstar-main-content">
                               <div className="welcome-to-pupstar">
                                    <h1>WELCOME TO <span>PUP-STAR</span></h1>
                                    <p>Welcoming a new puppy into your home is the beginning of a long and rewarding journey for both of you. What happens in the first twelve months of this journey is vital to making sure your puppy becomes a healthy, happy dog. So we’ve developed the PUP STAR program, with simple activities relating to different stages of your puppy’s life, breaking down their development into three core principles: EAT. PLAY. LOVE.</p>
                               </div>
                               <div className="eat-play-love-content-container">
                                    <div className="eat-play-love-content eat-content-container">
                                        <EatplayLoveicon
                                            IconImage={PupstarEat}
                                        />
                                        <p><span>EAT</span> - Premium dog food for a worry-free meal time. Give them all of the energy and nourishment they need to continue living life to the fullest with NUTRI CHUNKS.</p>
                                    </div>
                                    <div className="eat-play-love-content play-content-container">
                                        <EatplayLoveicon
                                            IconImage={PupstarPlay}
                                        />
                                        <p><span>PLAY</span> - It’s not hard to enjoy playtime every day with your puppy! There are ways to make learning activity and times when you need to limit play to.</p>
                                    </div>
                                    <div className="eat-play-love-content love-content-container">
                                        <EatplayLoveicon
                                            IconImage={PupstarLove}
                                        />
                                        <p><span>LOVE</span> - Everything you need to know to help keep them in the best health every stage of their life, like feeding, grooming and medical care.</p>
                                    </div>
                               </div>
                                <div className="welcome-to-pupstar">
                                    <p>Over the next 12 months you’ll see a host of new content and tools appearing on a dedicated puppy section of www.sanmiguelpetcare.com, the integration of social functionality and open development with our Nutri Chunks Community Facebook page.</p>
                                    <p>Our ambition is to make NUTRI CHUNKS PUP STAR as an insightful and progressive as possible. Oh and cute. Really, really cute.</p>
                                </div>
                            </div>
                            <div className="pupstar-article-content">
                                <div className="blue-box">
                                    <img src={PupstarWhitelogo} />
                                    <p>This first step was to simplify  the often complicated  world of puppy development into the three simple areas of EAT PLAY LOVE. It is under these three headings that all of our expertise will sit, as we look to encourage and enable people to do something from each, every day.</p>
                                    <Link to="/pupstar-signup">
                                        <Subscribe />
                                    </Link>
                                </div>
                                <div className="featured-article-container">
                                    <div className="featured-article-title">
                                        <p>Featured Article</p>
                                        <p>View All</p>
                                    </div>
                                    <div className="featured-article-content-container">
                                        <div className="featured-article-content">
                                            <FeaturedArticle />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}