import { useEffect, useState } from "react";
import Layout from "@/components/shared/layout"
import { useRouter } from "next/router"
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

const Slug = ()=>{
    const router = useRouter();

    return(
        <Layout title={`Buy ${router.query.slug && router.query.slug.toLowerCase().split("-").join(" ")}`}>
            <div className="grid md:grid-cols-10 gap-12 w-[88%] mx-auto">
                <div className="col-span-4 p-10 bg-white">
                    
                </div>
                <div className="col-span-6 p-10 bg-black"></div>
            </div>            
        </Layout>
    )
}
export default Slug