import Link from "next/link"
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import { useSelector } from "react-redux";

const Publishers = ()=>{
    const allPublishers = useSelector((state)=>state.publisherSlice.publishers)
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
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                    loop={true}
                >
                    {
                        allPublishers && allPublishers.map((publisher, publisherIndex)=>(
                        <SwiperSlide key={publisherIndex} className="cursor-pointer">
                            <div className="bg-white flex justify-center items-center flex-col  gap-3 hover:-translate-y-2 hover:shadow-xl duration-500 ">
                                <button className="w-[200px] h-[170px] bg-white  relative mx-auto">
                                    <Image src={process.env.NEXT_PUBLIC_S3_BUCKET_ENDPOINT+publisher.image} alt={publisher.publisherName} layout="fill"  className="w-full h-full"/>
                                </button>
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