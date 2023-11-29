import Image from "next/image"

const Advertise = ()=>{
    return(
        <div className="container w-[88%] mx-auto py-4 flex flex-col gap-3">
            <div className="flex gap-2">
                <button className="hover:-translate-y-1 hover:shadow-lg duration-300">
                    <Image src={'/sapnaHome/advertise1.webp'} alt="advertise1" width={680} height={100} />
                </button>
                <button className="flex gap-2">
                    <Image src={'/sapnaHome/advertise.webp'} alt="advertise" width={320} height={100} className="hover:-translate-y-1 hover:shadow-lg duration-300" />
                    <Image src={'/sapnaHome/advertise2.webp'} alt="advertise2" width={320} height={100} className="hover:-translate-y-1 hover:shadow-lg duration-300" />
                </button>
            </div>
            <div className="flex gap-2">
                <button className="flex gap-2">
                    <Image src={'/sapnaHome/advertise4.webp'} alt="advertise" width={320} height={100} className="hover:-translate-y-1 hover:shadow-lg duration-300" />
                    <Image src={'/sapnaHome/advertise5.webp'} alt="advertise2" width={320} height={100} className="hover:-translate-y-1 hover:shadow-lg duration-300" />
                </button>
                <button className="">
                    <Image src={'/sapnaHome/advertise6.webp'} alt="advertise1" width={680} height={100} className="hover:-translate-y-1 hover:shadow-lg duration-300" />
                </button>
            </div>
            
        </div>
    )
}

export default Advertise