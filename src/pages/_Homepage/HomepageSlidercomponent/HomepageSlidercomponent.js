import HeaderheroImage from "../../../assets/media/HomepageBannerSlider/header_image.png"
import HomeBanner from "../../../assets/media/HomepageBannerSlider/homebanner_slider.jpg"

import NCProtectheroImage from "../../../assets/media/nc-protect/NC_Protect_Asset.png"
import NCProtectBanner from "../../../assets/media/nc-protect/NC_Protect_BG.jpg"

import PawprintheroImage from "../../../assets/media/paw-prints/chunky_image.png"
import PawprintsBanner from "../../../assets/media/paw-prints/pawprint_banner_bg.jpg"
import PawprintsContentImage from "../../../assets/media/paw-prints/program_title.png"

import PawmilyheroImage from "../../../assets/media/pawmily/NC_Join_our_Pawmily_Asset.png"
import PawmilyBanner from "../../../assets/media/pawmily/NC_Join_our_Pawmily_BG.jpg"
import PawmilyContentImage from "../../../assets/media/pawmily/join_our_pawmily.png"

import PupstarheroImage from "../../../assets/media/Pupstar/NC_Pupstar_Asset.png"
import PupstarBanner from "../../../assets/media/Pupstar/NC_Pupstar_BG.jpg"

import DogdigestheroImage from "../../../assets/media/dog_digest/NC_Dog_Digest_Asset.png"
import DogdigestBanner from "../../../assets/media/dog_digest/Dog_Digest_BG.jpg"
import DogdigestContentImage from "../../../assets/media/dog_digest/dog_digest_logo.svg"


const SliderComponents =  [
    {
        id: 0,
        name: 'home-page',
        heroImage: HeaderheroImage,
        sliderBg: HomeBanner,
        contentImage: "",
        link: "",
    },
    {
        id: 1,
        name: 'nc-protect',
        heroImage: NCProtectheroImage,
        sliderBg: NCProtectBanner,
        contentImage: "",
        link: "",
    },
    {
        id: 2,
        name: 'pawmily',
        heroImage: PawmilyheroImage,
        sliderBg: PawmilyBanner,
        contentImage: PawmilyContentImage,
        link: "",
    },
    {
        id: 3,
        name: 'paw-print',
        heroImage: PawprintheroImage,
        sliderBg: PawprintsBanner,
        contentImage: PawprintsContentImage,
        link: "",
    },
    {
        id: 4,
        name: 'pupstar',
        heroImage: PupstarheroImage,
        sliderBg: PupstarBanner,
        contentImage: "",
        link: "",
    },
    {
        id: 5,
        name: 'dog-digest',
        heroImage: DogdigestheroImage,
        sliderBg: DogdigestBanner,
        contentImage: DogdigestContentImage,
        link: "",
    },
]

export default SliderComponents