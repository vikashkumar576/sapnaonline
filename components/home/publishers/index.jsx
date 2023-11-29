import Link from "next/link"
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

const allPublishers =[
    {
        path: '/sapnaHome/publisher-1.jpg',
    },
    {
        path: '/sapnaHome/publisher-2.jpg',
    },
    {
        path: '/sapnaHome/publisher-3.jpg',
    },
    {
        path: '/sapnaHome/publisher-4.jpg',
    },
    {
        path: '/sapnaHome/publisher-5.jpg',
    },
    {
        path: '/sapnaHome/publisher-6.jpg',
    },
]

const Publishers = ()=>{
    return(
        <div className="container w-[88%] mx-auto shadow-lg mt-3">
            <div className="shadow-lg Sapna-Publishers">
            <div className="border-b bg-white flex justify-between px-3 py-2 items-center">
                <p className="capitalize text-[#282c96] font-semibold">Featured Publishers</p>
                <Link href={'/'} legacyBehavior >
                    <button className="uppercase bg-[#282c96] px-2.5 rounded py-1.5 font-semibold text-white text-sm">view all</button>
                </Link>
            </div>
            <div className="relative bg-white">
                <Swiper 
                    watchSlidesProgress={true}
                    slidesPerView={6} 
                    spaceBetween={0} 
                    className="mySwiper flex justify-center items-center"
                    cssMode={true}
                    navigation={{
                        prevEl: '.swiper-button-prev',
                        nextEl: '.swiper-button-next',
                    }}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                    loop={true}
                >
                    {
                        allPublishers.map((author, authorIndex)=>(
                        <SwiperSlide key={authorIndex} className="cursor-pointer">
                            <div className="bg-white flex justify-center items-center flex-col  gap-3 hover:-translate-y-2 hover:shadow-xl duration-500 ">
                                <button className="w-[200px] h-[170px] bg-white  relative mx-auto">
                                    <Image src={author.path} alt={author.label} layout="fill"  className="w-full h-full"/>
                                </button>
                                <div className="flex flex-col items-center px-8">
                                <p className="text-[14.5px] w-56 text-center capitalize font-semibold  whitespace-nowrap overflow-hidden overflow-ellipsis">{author.label}</p>
                                <p className="text-[13px] capitalize text-gray-400">{author.author}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div> 
        </div>
        </div>
    )
}
export default Publishers