import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import Test from "../test";

const offerBanners = [
    {
        label: '/sapnaHome/mainSlider1.webp'
    },
    {
        label: '/sapnaHome/mainSlider2.webp'
    },
    {
        label: '/sapnaHome/mainSlider3.webp'
    },
    {
        label: '/sapnaHome/mainSlider4.webp'
    }
]

const fictionBanners =[
    {
        label: '/sapnaHome/subBanner1.webp'
    },
    {
        label: '/sapnaHome/subBanner2.webp'
    },
    {
        label: '/sapnaHome/subBanner3.webp'
    },
    {
        label: '/sapnaHome/subBanner4.webp'
    },

]

const Hero = ()=>{
    return(
        <div className="container w-[88%] mx-auto pb-2">
            <button>
                <Image src={'/sapnaHome/heroTop.webp'} alt="hero-banner-1" width={2000} height={50}/>    
            </button>
            <div className='mx-auto pt-2 relative'>
                <Swiper
                    cssMode={true}
                    navigation={{
                        prevEl: '.swiper-button-prev',
                        nextEl: '.swiper-button-next',
                    }}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 8000,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper hover:shadow-md"
                    >
                    {
                        offerBanners.map((banner, bannerIndex)=>(
                            <SwiperSlide key={bannerIndex}>
                                <button>
                                <Image src={banner.label} alt={banner.label} width={1500} height={100}/>
                                </button>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
            </div>  
            <div className='mx-auto pt-4 relative'>
            <Swiper watchSlidesProgress={true} slidesPerView={4} spaceBetween={10} className="mySwiper">
                {
                    fictionBanners.map((banner, bannerIndex)=>(
                        <SwiperSlide key={bannerIndex}>
                            <button>
                                <Image src={banner.label} alt={banner.label} width={350} height={100}/>
                            </button>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            </div>     
        </div>
    )
}
export default Hero