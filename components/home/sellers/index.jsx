import Link from "next/link"
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

const fictionBanners =[
    {
        path: '/sapnaHome/seller-1.jpg',
        label : 'Maarikaadu',
        author: 'by Chandrashekhara Kambara '
    },
    {
        path: '/sapnaHome/seller-2.jpg',
        label : 'Jugari Cross',
        author: 'by Kp Poornachandra Thejasvi'
    },
    {
        path: '/sapnaHome/seller-3.jpg',
        label : 'Malenadina Chitragalu',
        author: 'by Kuvempu'
    },
    {
        path: '/sapnaHome/seller-4.jpg',
        label : 'Sanyasiya Baduku',
        author: 'by K Shivarama Karanth'
    },
    {
        path: '/sapnaHome/seller-5.jpg',
        label : 'Yerilitada Dariyalli',
        author: 'by Sudha Murty'
    },
    {
        path: '/sapnaHome/seller-6.jpg',
        label : 'Nanna Devaru Mattu Itara Kathegalu',
        author: 'by Kuvempu'
    },
    {
        path: '/sapnaHome/seller-7.jpg',
        label : 'Karvalho',
        author: 'by Kp Poornachandra Thejasvi'
    },
    {
        path: '/sapnaHome/seller-8.jpg',
        label : 'Naayi Neralu',
        author: 'by Sl Bhyrappa'
    },
    {
        path: '/sapnaHome/seller-9.jpg',
        label : 'Kannada Rathnakosha',
        author: 'by NA'
    },
    {
        path: '/sapnaHome/seller-10.jpg',
        label : 'Amma Helida Entu Sullugalu',
        author: 'by Ar Manikanth'
    },

]


const Sellers = ()=>{
    return(
        <div className="container w-[88%] mx-auto shadow-lg my-4">
            <div className="shadow-lg Sapna-Best-Seller">
            <div className="border-b bg-white flex justify-between px-3 py-2 items-center">
                <p className="capitalize text-[#282c96] font-semibold">Sapna Best Seller</p>
                <Link href={'/'} legacyBehavior >
                    <button className="uppercase bg-[#282c96] px-2.5 rounded py-1.5 font-semibold text-white text-sm">view all</button>
                </Link>
            </div>
            <div className="relative bg-white">
            <Swiper 
                watchSlidesProgress={true}
                slidesPerView={5} 
                spaceBetween={20} 
                className="mySwiper flex justify-center items-center"
                cssMode={true}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                loop={true}
            >
                    {
                        fictionBanners.map((banner, bannerIndex)=>(
                        <SwiperSlide key={bannerIndex} className="py-3 cursor-pointer">
                            <div className="bg-white flex justify-center items-center flex-col py-6 gap-3 hover:-translate-y-2 hover:shadow-xl duration-500 ">
                                <button className="border-2 w-[124px] h-[175px] bg-purple-600 relative mx-auto">
                                    <Image src={banner.path} alt={banner.label} layout="fill"  className="w-full h-full"/>
                                </button>
                                <div className="flex flex-col items-center px-8">
                                <p className="text-[14.5px] w-56 text-center capitalize font-semibold  whitespace-nowrap overflow-hidden overflow-ellipsis">{banner.label}</p>
                                <p className="text-[13px] capitalize text-gray-400">{banner.author}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div> 
        </div>
        </div>
    )
}
export default Sellers