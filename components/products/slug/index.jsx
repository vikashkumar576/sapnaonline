import { useState } from "react";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/navigation';
import { useRouter } from "next/router"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import { Breadcrumb, Form, Input, Rate, Select, Tooltip, Button, Progress, Tabs } from "antd";
import Layout from "@/components/shared/layout"

const cartImgs = [
    {
        path: '/sapnaHome/cartImg1.png',
        decoration: '',
        label: 'In Stock',
        desc: ''
    },
    {
        path: '/sapnaHome/cartImg2.png',
        decoration: '',
        label: 'Guaranteed Service',
        desc: ''
    },
    {
        path: '/sapnaHome/cartImg3.png',
        decoration: 'transform hover:-translate-y-1 cursor-pointer duration-300',
        label: 'international shipping',
        desc: 'know more'
    },
    {
        path: '/sapnaHome/cartImg4.png',
        decoration: '',
        label: 'Free Home Delivery',
        desc: 'above ₹499'
    },
]

const bookSpex = [
    {
        label: 'ISBN-13',
        value: '9780007527502'
    },
    {
        label: 'Publishing Date',
        value: '2013-09-26'
    },
    
    {
        label: 'Language',
        value: 'English'
    },
    
    {
        label: 'Product Edition',
        value: '1'
    },
    {
        label: 'Binding',
        value: 'Paper Back'
    },
    {
        label: 'Total Pages',
        value: '288'
    },
    {
        label: 'Publisher',
        value: 'Harper Collins : Uk'
    },
]

const Slug = ()=>{
    const router = useRouter();
    const beardcrum = [
        {
            title: 'Home',
        },
        {
            title: 'FICTION',
            href: '',
        },
        {
            title: 'FICTION INTERNATIONAL',
            href: '',
        },
        {
            title: 'All',
        },
    ]

    return(
        <Layout title={`Buy ${router.query.slug && router.query.slug.toLowerCase().split("-").join(" ")}`}>
            <div className="w-[88%] mx-auto">
                <div className="grid md:grid-cols-10">
                    <div className="col-span-4 px-5 pt-10 bg-white relative">
                        <div className="flex">
                            <div className="w-[120px]">
                                <Swiper 
                                    watchSlidesProgress={true}
                                    slidesPerView={2} 
                                    spaceBetween={10} 
                                    direction="vertical"
                                    className="mySwiper max-h-64"
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
                                    <SwiperSlide>
                                        <Image alt="book-image" src={'/sapnaHome/newRelease2.jpg'} width={75} height={100}/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image alt="book-image" src={'/sapnaHome/newRelease2back.jpg'} width={75} height={100}/>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="w-[320px] h-[320px] flex items-center">
                                <Swiper 
                                    watchSlidesProgress={true}
                                    slidesPerView={1} 
                                    spaceBetween={10} 
                                    direction="horizontal"
                                    className="mySwiper"
                                    cssMode={true}
                                    navigation={{
                                        prevEl: '.swiper-button-prev',
                                        nextEl: '.swiper-button-next',
                                    }}
                                    pagination={{
                                        clickable: true,
                                        dynamicBullets: true
                                    }}
                                    mousewheel={true}
                                    keyboard={true}
                                    modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                                    loop={true}
                                >
                                    <SwiperSlide>
                                        <Image alt="book-image" src={'/sapnaHome/newRelease2.jpg'} width={200} height={300} className="mx-auto"/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image alt="book-image" src={'/sapnaHome/newRelease2back.jpg'} width={200} height={100} className="mx-auto"/>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <Image alt="release-banner" src={"/sapnaHome/newrelease.svg"} width={100} height={20} className="absolute top-1.5 left-0 z-50"/>
                            <button className="absolute top-5 right-4">
                                <i className="bx bx-bookmark p-1.5 bg-gray-50 rounded-full border text-lg"></i>
                            </button>
                        </div>
                        <Tooltip 
                            title={(
                                <div className="text-white gap-3 flex ">
                                    <i className='bx bxl-facebook bg-blue-500 p-1.5 rounded-full transform hover:-translate-y-1 duration-300 hover:shadow-md text-lg'></i>
                                    <i className='bx bxl-whatsapp p-1.5 rounded-full bg-green-500 transform hover:-translate-y-1 duration-300 hover:shadow-md text-lg' ></i>
                                    <i className='bx bxl-twitter p-1.5 rounded-full bg-sky-500 transform hover:-translate-y-1 duration-300 hover:shadow-md text-lg' ></i>
                                </div>
                            )} 
                            color={'#fff'} 
                            placement="right" 
                        >
                            <button className="flex mb-6 mt-12 items-center gap-3 capitalize text-gray-500">
                                <i className='bx bx-share-alt'></i>
                                <p>share</p>
                            </button>
                        </Tooltip>
                    </div>
                    <div className="col-span-6 border bg-white">
                        <div className="py-4 px-10">
                            <Breadcrumb
                                className="text-xs"
                                separator=">"
                                items={beardcrum}
                            />
                            <div className="leading-4 relative -top-3">
                                <p className="text-lg text-gray-600 font-semibold capitalize">{router.query.slug && router.query.slug.split("-").join(" ")}</p>
                                <p className="text-[14px]">by <a href="/" className="text-[#2e3292]">Agatha Christie</a> (Author), <a href="/" className="text-[#2e3292]"> Harper Collins</a> : Uk (Publisher)</p>
                            </div>
                            <div className="flex gap-2">
                                <Rate defaultValue={4} disabled style={{letterSpacing: '-5px', filter: 'drop-shadow(0px 0px 0.5px #222)'}} character={(<i className="bx bxs-star text-[16px]"></i>)} />
                                <p className="text-sm capitalize text-[#2e3292]">&#40;{123} customers&#41; </p>
                            </div>
                        </div>
                        <div className="border-gray-100 grid md:grid-cols-5">
                            <div className="col-span-3 flex flex-col ">
                                <div className="gap-2 flex flex-col border border-gray-100 pt-2 pb-4">
                                    <div className="flex justify-between px-10">
                                        <div className="flex flex-col">
                                            <div className="flex items-center gap-2">
                                                <h1 className="text-[28px] font-semibold text-[#2e3292]">&#8377;258</h1>
                                                <p className="text-lg text-gray-500 line-through">&#8377;324</p>
                                                <p className="text-xs text-green-600">&#40;17% off&#41;</p>
                                            </div>
                                            <p className="text-xs text-gray-600">Inclusive of all taxes</p>
                                        </div>
                                        <div className="flex flex-col items-start mt-3">
                                            <div className="flex items-center gap-4 font-semibold">
                                                <p className="text-gray-700">Qty</p>
                                                <Select
                                                    className="w-20 text-center"
                                                    defaultValue="1"
                                                    size="large"
                                                    onChange={(values)=>console.log(values)}
                                                >
                                                    <Select.Option key={1}>1</Select.Option>
                                                    <Select.Option key={2}>2</Select.Option>
                                                    <Select.Option key={3}>3</Select.Option>
                                                    <Select.Option key={4}>4</Select.Option>
                                                    <Select.Option key={5}>5</Select.Option>
                                                </Select>
                                            </div>
                                            <button className="text-[#2e3292] font-bold text-[15px]">Buying in bulk?</button>
                                        </div>
                                    </div>
                                    <div className="flex gap-6 pl-10 pr-2">
                                        <button className="flex text-white w-full mt-3">
                                            <i className='bx bx-archive py-2 px-3 bg-[#ec991e] rounded-l text-2xl'></i>
                                            <p className="py-2.5 px-4 bg-[#f7a937] rounded-r uppercase text-sm w-full font-semibold">add to cart</p>
                                        </button>
                                        <button className="flex text-white w-full mt-3">
                                            <i className='bx bxs-bolt py-2 px-3 bg-[#ef6c00] rounded-l text-2xl'></i>
                                            <p className="py-2.5 px-4 bg-[#f57c00] rounded-r uppercase text-sm w-full font-semibold">buy now</p>
                                        </button>
                                    </div>
                                </div>
                                <div className="border border-gray-100 p-10 grid grid-cols-4">
                                    {
                                        cartImgs.map((cartImg, cartImgIndex)=>(
                                            <div className="col-span-1 flex flex-col items-center ">
                                                <Image alt={cartImg.label} src={cartImg.path} width={40} height={20} className={` ${cartImg.decoration}`}/>
                                                <p className={`text-[#2e3292] text-xs font-semibold text-center`}>{cartImg.label}</p>
                                                <p className={`text-[9px] font-semibold text-center text-gray-400`}>{cartImg.desc}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="col-span-2 px-6 py-3 flex flex-col gap-0">
                                <h1 className="font-semibold text-sm">Check Delivery</h1>
                                <Form onFinish={(values)=>console.log(values)} className="flex relative mt-3">
                                    <Form.Item
                                        name='pincode'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'PIN code is required !'
                                            }
                                        ]}
                                    >
                                        <Input className="bg-red-50 border-t-0 rounded-none border-x-0 border-b-2 pl-10 border-[#2e3292] focus:border-b-2 focus:border-[#2e3292] focus:placeholder:text-gray-600" placeholder="Enter Pincode" />
                                    </Form.Item>
                                    <Button htmlType="submit" type="null">
                                        <i className='bx bx-arrow-back bx-rotate-180 text-[#2e3292] text-2xl' style={{fontWeight: '400'}}></i>
                                    </Button>
                                    <i class='bx bxs-truck absolute text-2xl top-1 left-1 text-[#2e3292]'></i>
                                </Form>
                                <p className="text-xs font-semibold">Enter pincode for exact delivery dates / charges and to know if express delivery is available</p>
                                <button className="flex gap-2 bg-gray-100 mt-6 w-full p-2 rounded-md hover:bg-gray-200">
                                    <Image alt="available-store" src={'/sapnaHome/storeAvbl.svg'} width={40} height={30} />
                                    <div className="flex flex-col items-start">
                                        <p className="text-[13px] font-semibold text-[#2e3292]">Check Availability at Stores</p>
                                        <p className="text-[10px] font-semibold uppercase">click here</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>    
                <div className="bg-white mt-2">
                    <h1 className="text-lg font-semibold px-4 py-2">Product Specifications</h1>
                    <div className="border-y px-4 py-2">
                        <p className="font-semibold py-1">Book Description</p>
                        <p className="text-sm py-1">&#40;No description available for this product.&#41;</p>
                    </div>
                    <div className="px-5">
                        <h1 className="font-semibold py-1">Book Specifications</h1>
                        <ul className="grid grid-cols-4 pl-4 gap-x-12">
                            <div className="col-span-3 grid grid-cols-2 gap-x-12 gap-y-1 pt-2 pb-4">
                                {
                                    bookSpex.map((book, bookIndex)=>(
                                        <li key={bookIndex} className="list-disc col-span-1 text-sm">
                                            <div className="flex justify-start">
                                                <h1 className="font-semibold mr-32 w-28">{book.label}</h1>
                                                <span>{book.value}</span>
                                            </div>
                                        </li>
                                    ))
                                }
                            </div>
                        </ul>
                    </div>
                </div>   
                <div className="grid md:grid-cols-9 mt-2">
                    <div className="col-span-2 bg-white">
                        <h1 className="font-semibold text-lg border-b px-5 py-1">Reviews & Ratings</h1>
                        <div className="p-5">
                            <div className="flex gap-2 pb-4">
                                <Rate defaultValue={4} disabled style={{letterSpacing: '-5px', filter: 'drop-shadow(0px 0px 0.5px #222)'}} character={(<i className="bx bxs-star text-[16px]"></i>)} />
                                <p className="text-sm capitalize text-[#2e3292]">4 out of 5 stars</p>
                            </div>
                            <div>
                                <div className="flex items-baseline gap-1">
                                    <p className="text-sm">{5}</p>
                                    <Rate defaultValue={1} count={1} disabled className="text-[15px]" />
                                    <Progress percent={45} strokeColor={'#52c41a'} strokeWidth={'4.5px'} className="px-1" showInfo={false} />
                                    <p className="text-sm">{47}</p>
                                </div>
                                <div className="flex items-baseline gap-1">
                                    <p className="text-sm">{4}</p>
                                    <Rate defaultValue={1} count={1} disabled className="text-[15px]" />
                                    <Progress percent={60} strokeColor={'#52c41a'} strokeWidth={'4.5px'} className="px-1" showInfo={false} />
                                    <p className="text-sm">{49}</p>
                                </div>
                                <div className="flex items-baseline gap-1">
                                    <p className="text-sm">{3}</p>
                                    <Rate defaultValue={1} count={1} disabled className="text-[15px]" />
                                    <Progress percent={50} strokeColor={'#52c41a'} strokeWidth={'4.5px'} className="px-1" showInfo={false} />
                                    <p className="text-sm">{0}</p>
                                </div>
                                <div className="flex items-baseline gap-1">
                                    <p className="text-sm">{2}</p>
                                    <Rate defaultValue={1} count={1} disabled className="text-[15px]" />
                                    <Progress percent={0} strokeColor={'#52c41a'} strokeWidth={'4.5px'} className="px-1" showInfo={false} />
                                    <p className="text-sm">{0}</p>
                                </div>
                                <div className="flex items-baseline gap-1">
                                    <p className="text-sm">{1}</p>
                                    <Rate defaultValue={1} count={1} disabled className="text-[15px]" />
                                    <Progress percent={0} strokeColor={'#52c41a'} strokeWidth={'4.5px'} className="px-1" showInfo={false} />
                                    <p className="text-sm">{0}</p>
                                </div>
                            </div>
                            <button className="flex w-full border my-8 bg-gray-100 rounded-md py-2 items-center justify-center gap-2">
                                <i className='bx bx-pencil text-xl text-gray-400'></i>
                                <h1 className="uppercase font-semibold text-sm">write your review</h1>
                            </button>
                        </div>
                    </div>
                    <div className="col-span-7 p-5 bg-white border h-[450px] overflow-y-auto">
                        {
                            Array(14).fill('').map((review, reviewIndex)=>(
                                <div className="border-b my-4 py-2" key={reviewIndex}>
                                    <div className="flex text-[14px] text-gray-400 items-center gap-2">
                                        <p>usrname.</p>
                                        <Rate disabled defaultValue={4} style={{letterSpacing: '-6px'}} character={(<i className="bx bxs-star text-[14px]"></i>)} />
                                        <p>.november 2, 2023</p>
                                    </div>
                                    <p className="text-sm text-gray-500 py-2">I&apos;m pretty astounded by how much fun this was.</p>
                                    <p className="text-sm text-gray-500 py-2">I mean, this may be just me, but “early-to-mid-twentieth century mystery about train crime” doesn&apos;t exactly scream nonstop thrill ride. But here we are!</p>
                                    <p className="text-sm text-gray-500 py-2">I&apos;m also not sure why it took me so long to write this review &#40;two months, to be exact, so actually n <a href="#" className="text-blue-600 font-semibold">...more</a></p>
                                </div>
                            ))
                        }
                    </div>
                </div>  
                <Tabs>
                    <Tabs.TabPane
                        key={1}
                        tab={
                            <h1 className='capitalize text-[#2e3292] font-semibold'>new user</h1>
                        }
                    >
                        <div className="">
                            tab 1
                        </div>

                    </Tabs.TabPane>
                    <Tabs.TabPane
                        key={2}
                        tab={
                            <h1 className='capitalize text-[#2e3292] font-semibold'>new user</h1>
                        }
                    >
                        <div className="">
                            tab 2
                        </div>

                    </Tabs.TabPane>
                </Tabs>
            </div>       
        </Layout>
    )
}
export default Slug