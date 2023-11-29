import React, { useState, useEffect } from 'react';
import Link from "next/link"
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

const fictionBanners =[
    {
        path: '/sapnaHome/newRelease1.jpg',
        label : 'draculla',
        author: 'by bram stoker'
    },
    {
        path: '/sapnaHome/newRelease2.jpg',
        label : 'little book of cookies',
        author: 'by pooja dhingra'
    },
    {
        path: '/sapnaHome/newRelease3.jpg',
        label : 'Practical Programming In Python For Class 11 : Cbse Computer Science Textbook',
        author: 'by Atanu Das, Rajkumar Patra '
    },
    {
        path: '/sapnaHome/newRelease4.jpg',
        label : 'React Cookbook Recipes For Mastering The React Framework',
        author: 'by David Griffiths, Dawn Griffiths '
    },
    {
        path: '/sapnaHome/newRelease5.jpg',
        label : 'Javascript : The Comprehensive Guide',
        author: 'by Philip Ackermann'
    },
    {
        path: '/sapnaHome/newRelease6.jpg',
        label : 'Shodashanitya Yantra Sadhane',
        author: 'by Sri Raghavendra Diddigi Kularni'
    },
    {
        path: '/sapnaHome/newRelease7.jpg',
        label : 'Vanijya Kannada 2 For Bcom 2 Sem : Bu',
        author: 'by NA'
    },
    {
        path: '/sapnaHome/newRelease8.jpg',
        label : 'Popular Mater Guide Lic Ado Preliminary Exam',
        author: 'by R Guptas'
    },
    {
        path: '/sapnaHome/newRelease9.jpg',
        label : 'Paduma Purusha',
        author: 'by Hr Sujatha'
    },
    {
        path: '/sapnaHome/newRelease10.jpg',
        label : 'Murder On The Orient Express.',
        author: 'by Agatha Christie'
    },

]

const allExams = [
    {
        label: 'all exams'
    },
    {
        label: 'JEE'
    },
    {
        label: 'AIEEA'
    },
    {
        label: 'NEET UG'
    },
    {
        label: 'CUET'
    },
    {
        label: 'SSC MTS'
    },
    {
        label: 'SSC CHSL'
    },
    {
        label: 'SSC CGL'
    },
    {
        label: 'SSC CPO'
    },
    {
        label: 'SSC Selection Post'
    },
]

const weekDeals =[
    {
        path: '/sapnaHome/week-deal-1.jpg',
        label : 'Against All Odds',
        author: 'by Sugat Gopnarayan'
    },
    {
        path: '/sapnaHome/week-deal-2.jpg',
        label : 'Pursuit Of Excellence',
        author: 'by Arun Singh '
    },
    {
        path: '/sapnaHome/week-deal-3.jpg',
        label : 'Nothing But The Truth',
        author: 'by Rishabh Shah'
    },
    {
        path: '/sapnaHome/week-deal-4.jpg',
        label : 'Yumi & The Nightmare Painter',
        author: 'by Brandon Sanderson'
    },
    {
        path: '/sapnaHome/week-deal-5.jpg',
        label : 'Art Of Habits : 40 Stories To Uplift The Mind & Transform The Heart',
        author: 'by Gauranga Das '
    },
    {
        path: '/sapnaHome/week-deal-6.jpg',
        label : 'Avatars Of Brahma : Stories Of Indias Greatest Yogis',
        author: 'by Kaudinya Arpan, Pareekshit Dahal'
    },
    {
        path: '/sapnaHome/week-deal-7.jpg',
        label : 'Sisters Under The Rising Sun',
        author: 'by Heather Morris'
    },
    {
        path: '/sapnaHome/week-deal-8.jpg',
        label : 'Scholastic Yearbook : 2024',
        author: 'by NA'
    },
    {
        path: '/sapnaHome/week-deal-9.jpg',
        label : 'Kashmirs Untold Story : Declassified',
        author: 'by Iqbal Chand Malhotra, Maroof Raza'
    },
    {
        path: '/sapnaHome/week-deal-10.jpg',
        label : 'Facts & Fables : Ocean & Plant Life',
        author: 'by NA'
    },

]

const Releases = ()=>{    
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 7);

    const calculateRemainingTime = ()=>{
        const now = new Date()
        let remaining = (targetDate - now)
        return{
            days: Math.floor(remaining / (1000 * 60 * 60 * 24)),
            hours: Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((remaining % (1000 * 60)) / 1000),
        }
    }

    const [timeRemaining, setTimeRemaining] = useState(calculateRemainingTime());

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTimeRemaining(calculateRemainingTime())
        },1000)
        return ()=> clearInterval(intervalId)
    },[])

  return (
    <div className="container w-[88%] mx-auto shadow-lg">
        <div className="shadow-lg new-release">
            <div className="border-b bg-white flex justify-between px-3 py-2 items-center">
                <p className="capitalize text-[#282c96] font-semibold">new Releases</p>
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
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                loop={true}
            >
                    {
                        fictionBanners.map((banner, bannerIndex)=>(
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
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div> 
        </div>
        <div className="upcoming-exam mt-2 shadow-md">
            <div className="border-b bg-white flex justify-between px-3 py-2 items-center">
                <p className="capitalize text-[#282c96] font-semibold">Upcoming Exams Schedule</p>
                <Link href={'/'} legacyBehavior >
                    <button className="uppercase bg-[#282c96] px-2.5 rounded py-1.5 font-semibold text-white text-sm">view all</button>
                </Link>
            </div> 
            <div className="grid grid-cols-8">
                <div className="col-span-2 bg-white px-5 py-8 border flex flex-col items-center gap-3 justify-center">
                    <Image alt="/" src={'/sapnaHome/exam-calendar.png'} width={100} height={100}/>
                    <p className="font-semibold">Exam Calendar</p>
                    <p className="text-[13px]">Find a curated list of upcoming exams.</p>
                    <Link href={'/'} legacyBehavior >
                        <p className="flex items-center uppercase font-semibold gap-1 text-[#282c96] text-sm">all exams <i className='bx bx-right-arrow-alt'></i></p>
                    </Link>
                </div>
                <div className="col-span-6 bg-white">
                    <div className="flex gap-5 border px-4 py-2.5">
                        {
                            allExams.map((exam, examIndex)=>(
                                <button className="bg-[#e5e7eb] border capitalize rounded py-0.5 px-2 text-[13px]" key={examIndex}>
                                    {exam.label}
                                </button>
                            ))
                        }
                    </div>
                </div>
            </div>     
        </div>
        <div className="mt-2">
            <div className="border-b bg-white flex justify-between px-3 py-2 items-center">
                <p className="capitalize text-[#282c96] font-semibold">Deals for the Week</p>
                <Link href={'/'} legacyBehavior >
                    <button className="uppercase bg-[#282c96] px-2.5 rounded py-1.5 font-semibold text-white text-sm">view all</button>
                </Link>
            </div>
            <div className="grid grid-cols-8">
                <div className="col-span-2 py-14 bg-white p-5 border flex flex-col items-center gap-6 justify-center">
                    <div className="flex gap-2 items-center">
                        <i className='bx bx-time-five text-3xl text-[#282c96]'></i>
                        <p className="font-bold text-2xl text-[#282c96]">
                            {
                                `${timeRemaining.days} days, ${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}`
                            }
                        </p>
                    </div>
                    <p className="font-semibold">Deals for the Week</p>
                    <p className="text-[13px] text-center">Here are some of our handpicked titles offered at a special price for a limited period. Hurry the deals run out soon.</p>
                </div>
                <div className="col-span-6 bg-white">
                <div className="relative bg-white">
                    <Swiper 
                        watchSlidesProgress={true}
                        slidesPerView={4} 
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
                            weekDeals.map((deal, dealIndex)=>(
                            <SwiperSlide key={dealIndex} className="py-4 cursor-pointer">
                                <div className="bg-white flex justify-center items-center flex-col py-2 gap-3 hover:-translate-y-2 hover:shadow-xl duration-500 ">
                                    <button className="border-2 w-[124px] h-[175px] bg-purple-600 relative mx-auto">
                                        <Image src={deal.path} alt={deal.label} layout="fill"  className="w-full h-full"/>
                                    </button>
                                    <div className="flex flex-col items-center px-8">
                                    <p className="text-[14.5px] w-56 text-center capitalize font-semibold  whitespace-nowrap overflow-hidden overflow-ellipsis">{deal.label}</p>
                                    <p className="text-[13px] capitalize text-gray-400">{deal.author}</p>
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
        </div>
    </div>
  )
}

export default Releases