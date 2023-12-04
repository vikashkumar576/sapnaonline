import { useRouter } from "next/router"
import Image from "next/image"
import Link from "next/link"

const Checkout = ()=>{
    const router = useRouter(null)

    const handleSelectChange = (value) => {
        setSelectedValue(value);
    }


    const backToHome = ()=>{
    router.push("/")
    }
    return(
        <>
            <nav className='middle-nav border-b pb-2 pt-2  bg-white shadow-md'>
                <div className="container w-[88%] mx-auto py-2 flex justify-between">
                    <button onClick={backToHome}>
                        <Image src={'/sapnaHome/logo-black.png'} width={130} height={90}></Image>
                    </button>
                    <div className="flex gap-6">
                        <div className="flex w-32 items-center gap-2">
                            <i className='bx bx-badge-check text-[#2e3292] text-3xl'></i>
                            <p className="text-sm font-semibold">Authentic Products</p>
                        </div>
                        <div className="flex w-32 items-center gap-2">
                            <i className='bx bx-check-shield text-[#2e3292]  text-3xl'></i>
                            <p className="text-sm font-semibold">Secure Payments</p>
                        </div>
                        <div className="flex w-32 items-center gap-2">
                            <i className='bx bx-memory-card text-[#2e3292] text-3xl'></i>
                            <p className="text-sm font-semibold">Home Delivery</p>
                        </div>
                    </div>
                </div>
            </nav>
            <section className="min-h-screen  bg-gray-100 py-2 relative">
                <div className="container w-[88%] mx-auto grid grid-cols-7 gap-2 ">
                    <div className="col-span-5 p-5 bg-white sticky top-0 z-50"></div>
                    <div className="col-span-2 p-5  bg-white"></div>
                </div>
            </section>
            <footer className="bg-white py-4 container w-[88%] mx-auto flex justify-between">
                <p className="text-xs text-gray-500">© 2001-2022 Sapna Infoway Private Limited. All rights reserved.</p>
                <div className="flex gap-12">
                    <Link href="/contact" legacyBehavior>
                        <a className="text-xs text-gray-400">Need Help ?</a>
                    </Link>
                    <Link href="/terms-conditions" legacyBehavior>
                        <a className="text-xs text-gray-400">Terms & Conditions</a>
                    </Link>
                    <Link href="/privacy-policy" legacyBehavior>
                        <a className="text-xs text-gray-400">Privacy Policy</a>
                    </Link>
                </div>
            </footer>
        </>
    )
}

export default Checkout