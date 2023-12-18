import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

const allExams = [
    {
        label: 'UPSC',
        path: '/sapnaHome/exam-1.png'
    },
    {
        label: 'banking',
        path: '/sapnaHome/exam-2.png'
    },
    {
        label: 'GOVT Exam',
        path: '/sapnaHome/exam-3.png'
    },
    {
        label: 'State Level Administration',
        path: '/sapnaHome/exam-4.png'
    },
    {
        label: 'Engineering',
        path: '/sapnaHome/exam-5.png'
    },
    {
        label: 'Management',
        path: '/sapnaHome/exam-6.png'
    },
    {
        label: 'Medical',
        path: '/sapnaHome/exam-7.png'
    },
    {
        label: 'Law',
        path: '/sapnaHome/exam-8.png'
    },
    {
        label: 'International Exams',
        path: '/sapnaHome/exam-9.png'
    },
    {
        label: 'Defence',
        path: '/sapnaHome/exam-10.png'
    },
    {
        label: 'Software Certifications',
        path: '/sapnaHome/exam-11.png'
    },
    {
        label: 'Finance',
        path: '/sapnaHome/exam-12.png'
    },
]

const jeffyBooks =[
    {
        path: '/sapnaHome/jeffy-book-1.jpg',
        label : 'Diary Of A Wimpy Kid 17 : Diper Overlode',
        author: 'by Jeff Kinney'
    },
    {
        path: '/sapnaHome/jeffy-book-2.jpg',
        label : 'Diary Of A Wimpy Kid 14 : Wrecking Ball',
        author: 'by Jeff Kinney'
    },
    {
        path: '/sapnaHome/jeffy-book-3.jpg',
        label : 'Rowley Jeffersons Awesome Friendly Spooky Stories',
        author: 'by Jeff Kinney'
    },
    {
        path: '/sapnaHome/jeffy-book-4.jpg',
        label : 'Diary Of A Wimpy Kid 18 : No Brainer',
        author: 'by Jeff Kinney'
    }

]

const Exam = ()=>{
    return(
        <div className="container w-[88%] mx-auto">
            <div className="shadow-md">
                <div className="border-b bg-white flex justify-between px-3 py-2 items-center">
                    <p className="capitalize text-[#282c96] font-semibold">shop by Exams</p>
                    <Link href={'/'} legacyBehavior >
                        <button className="uppercase bg-[#282c96] px-2.5 rounded py-1.5 font-semibold text-white text-sm">view all</button>
                    </Link>
                </div>
                <div className="grid grid-cols-6 py-4  bg-white">
                    {
                        allExams.map((exam, examIndex)=>(
                            <div key={examIndex} className="flex flex-col py-8 justify-center items-center gap-1 font-semibold">
                                <button className="bg-white p-6 border-orange-500 border rounded-full hover:shadow-lg hover:shadow-orange-500/20 hover:-translate-y-1 transform duration-500 ">
                                    <Image src={exam.path} alt={exam.label} width={40} height={50} />
                                </button>
                                <button className="text-sm">{exam.label}</button>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="shadow-md mt-3">
                <div className="border-b bg-white flex justify-between px-3 py-1.5 items-center">
                    <p className="capitalize text-[#282c96] font-semibold text-lg">Jeff Kinney</p>
                    <Link href={'/'} legacyBehavior >
                        <button className="uppercase bg-[#282c96] px-2.5 rounded py-1.5 font-semibold text-white text-sm">view all</button>
                    </Link>
                </div>
                <div className="grid grid-cols-8">
                    <button className="col-span-2 bg-white px-5 py-8 border flex flex-col items-center gap-3 justify-center">
                        <Image alt="/" src={'/sapnaHome/author-1.png'} width={100} height={100}/>
                        <p className="font-semibold">Jeff Kinney</p>
                        <p className="text-[13px] text-center">Jeffrey Patrick Kinney is an American author and cartoonist. He is best known for creating, writing and illustrating the children&apos;s book series Diary of a Wimpy Kid.</p>
                    </button>
                    <div className="col-span-6">
                        <div className="relative bg-white">
                            <Swiper 
                                watchSlidesProgress={true}
                                slidesPerView={4} 
                                spaceBetween={20} 
                                className="mySwiper flex justify-center items-center"
                                cssMode={true}
                                navigation={false}
                                mousewheel={true}
                                keyboard={true}
                                modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
                                loop={true}
                            >
                                {
                                    jeffyBooks.map((banner, bannerIndex)=>(
                                    <SwiperSlide key={bannerIndex} className="py-8 cursor-pointer">
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
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Exam