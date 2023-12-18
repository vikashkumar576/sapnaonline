import Link from "next/link"
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import { useSelector } from "react-redux";


const Authors = ()=>{
    const allAuthors = useSelector((state)=>state.authorsSlice.authors)
    return(
        <div className="container w-[88%] mx-auto shadow-lg my-2">
            <div className="shadow-lg Sapna-authors">
            <div className="border-b bg-white flex justify-between px-3 py-2 items-center">
                <p className="capitalize text-[#282c96] font-semibold">Featured Authors on SapnaOnline</p>
                <Link href={'/'} legacyBehavior >
                    <button className="uppercase bg-[#282c96] px-2.5 rounded py-1.5 font-semibold text-white text-sm">view all</button>
                </Link>
            </div>
            <div className="relative bg-white">
                <Swiper 
                    watchSlidesProgress={true}
                    slidesPerView={7} 
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
                        allAuthors && allAuthors.map((author, authorIndex)=>(
                        <SwiperSlide key={authorIndex} className="py-2 cursor-pointer">
                            <div className="bg-white flex justify-center items-center flex-col py-4 gap-3 hover:-translate-y-2 hover:shadow-xl duration-500 ">
                                <button className="w-[100px] h-[100px] bg-white relative mx-auto">
                                    <Image src={`${process.env.NEXT_PUBLIC_S3_BUCKET_ENDPOINT}${author.image}`} alt={author.authorName} layout="fill"  className="w-full h-full"/>
                                </button>
                                <div className="flex flex-col items-center px-8">
                                <p className="text-[14.5px] w-56 text-center capitalize font-semibold  whitespace-nowrap overflow-hidden overflow-ellipsis">{author.authorName}</p>
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
export default Authors