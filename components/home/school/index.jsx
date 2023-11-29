import Image from "next/image"

const School = ()=>{
    return(
        <div className="container w-[88%] mx-auto">
            <div className="relative mx-auto w-fit  my-3">
                <Image alt="back-to-school" src={'/sapnaHome/back-to-school.png'} width={200} height={30}/>
                <p className="capitalize font-semibold absolute top-1 left-10">back to school</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <button className="hover:-translate-y-1 col-span-1 hover:shadow-lg duration-300">
                    <Image src={'/sapnaHome/school-1.webp'} alt="advertise1" width={680} height={100} />
                </button>
                <button className="hover:-translate-y-1 col-span-1 hover:shadow-lg duration-300">
                    <Image src={'/sapnaHome/school-2.webp'} alt="advertise1" width={680} height={100} />
                </button>
            </div>
        </div>
    )
}

export default School