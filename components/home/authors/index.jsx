import Link from "next/link"
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

const allAuthors =[
    {
        path: '/sapnaHome/author1.jpg',
        label : 'amish tripathi',
    },
    {
        path: '/sapnaHome/author-2.jpg',
        label : 'sudha murty',
    },
    {
        path: '/sapnaHome/author-3.jpg',
        label : 'robin sharma',
    },
    {
        path: '/sapnaHome/author-4.jpg',
        label : 'J.K rowling',
    },
    {
        path: '/sapnaHome/author-5.png',
        label : 'durjoy datta',
    },
    {
        path: '/sapnaHome/author-6.png',
        label : 'ashwin sanghi',
    },
    {
        path: '/sapnaHome/author-7.png',
        label : 'raskin bond',
    },
    {
        path: '/sapnaHome/author-8.png',
        label : 'sudeep nagarkar',
    },
    {
        path: '/sapnaHome/author-9.jpg',
        label : 'chetan bhagat',
    },
    {
        path: '/sapnaHome/author-10.jpg',
        label : 'paul ceolho',
    },
    {
        path: '/sapnaHome/author-11.jpg',
        label : 'saisuthe',
    },
    {
        path: '/sapnaHome/author-12.jpg',
        label : 'K p poornachandra tejasvi',
    },
    {
        path: '/sapnaHome/author-13.jpg',
        label : 's l bhyrappa',
    },
    {
        path: '/sapnaHome/author-14.jpg',
        label : 'nora roberts',
    },
    {
        path: '/sapnaHome/author-15.jpg',
        label : 'jhon grisham',
    },
    {
        path: '/sapnaHome/author-16.jpg',
        label : 'ravi belagere',
    },
    {
        path: '/sapnaHome/author-17.jpg',
        label : 'kuvempu',
    },
    {
        path: '/sapnaHome/author-18.jpeg',
        label : 'd v guruprasad',
    },
    {
        path: '/sapnaHome/author-19.jpeg',
        label : 'k shivarama kranath',
    },
    {
        path: '/sapnaHome/author-20.jpg',
        label : 'sadhguru',
    },
    {
        path: '/sapnaHome/author-21.jpg',
        label : 'cecelia ahern',
    },
    {
        path: '/sapnaHome/author-22.jpg',
        label : 'chandrashekhra kambara',
    },
]

const Authors = ()=>{
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
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                    loop={true}
                >
                    {
                        allAuthors.map((author, authorIndex)=>(
                        <SwiperSlide key={authorIndex} className="py-2 cursor-pointer">
                            <div className="bg-white flex justify-center items-center flex-col py-4 gap-3 hover:-translate-y-2 hover:shadow-xl duration-500 ">
                                <button className="w-[100px] h-[100px] bg-white relative mx-auto">
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
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div> 
        </div>
        </div>
    )
}
export default Authors