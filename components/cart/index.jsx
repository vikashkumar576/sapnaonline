import { Button, Empty, Form, Input, Select } from "antd"
import Layout from "../shared/layout"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"

const cartItems = ['1']

const Cart = ()=>{
    const router = useRouter(null)

    const backToHome = ()=>{
        router.push('/')
    }

    return(
        <Layout title="My Cart" isIncart={true}>
            {
                cartItems && !cartItems.length ? (
                    <div className="">
                        <div className="bg-[#f1f3f6] p-5"></div>
                            <div className="flex container flex-col pt-28 pb-72 justify-center items-center bg-white w-[88%] mx-auto">
                                <Empty
                                    image="/sapnaHome/emptyCart.png"
                                    imageStyle={{
                                    height: 120,
                                    marginLeft: 65
                                    }}
                                    description={
                                    <span className="text-gray-400 font-semibold">
                                        No items in your cart, continue shopping
                                    </span>
                                    }
                                >
                                    <Link href={'/products'}>
                                        <button  className="bg-[#2e3291] ml-3 px-5 py-2 flex gap-8 rounded uppercase text-white items-center font-semibold text-[14px]">
                                            <i className='bx bx-arrow-back text-xl'></i>
                                            continue shopping
                                        </button>
                                    </Link>
                                </Empty>
                            </div>
                    </div>
                ) : (
                    <div className="container w-[83%] ml-[6%]">
                        <h1 className="capitalize text-[22px] font-semibold py-2">my cart </h1>
                        <div className="grid md:grid-cols-10 gap-8">
                            <div className="col-span-7">
                                <div className="table w-full">
                                    <div className="row flex bg-white px-4 capitalize font-semibold text-sm rounded py-2 mb-2">
                                        <div className="text-start  w-[58%]">title</div>
                                        <div className="flex gap-32 bg-white">
                                            <h1>quantity</h1>
                                            <h1>price</h1>
                                        </div>
                                    </div>    
                                    <div className="row flex bg-white px-4 relative capitalize font-semibold text-sm rounded py-2 mb-2">
                                        <div className="text-start w-[58%]">
                                            <div className="flex items-center gap-4">
                                                <Image alt="newRelease1" src={'/sapnaHome/newRelease1.jpg'} width={60} height={100} />
                                                <div className="flex flex-col">
                                                    <p>book name</p>
                                                    <p className="text-[#2e3292] font-bold">&#8377;120&nbsp; <span className="line-through text-gray-500">&#8377;160</span></p>
                                                </div>
                                            </div>
                                            <button className="hover:text-slate-950 text-slate-800 capitalize mt-3 mb-1">move to wishlist</button>
                                        </div>
                                        <div className="flex gap-32 bg-white items-center">
                                            <select className="px-3.5 py-1.5 border rounded-md outline-none">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            <h1 className="text-[#2e3292] text-[16px] font-semibold">&#8377;140</h1>
                                        </div>
                                        <button className="px-1 py-0.5 rounded-full border absolute right-2">
                                            <i className='bx bx-trash'></i>
                                        </button>
                                    </div>   
                                    <button className="bg-[#2e3291] my-4 px-5 py-2 flex gap-8 rounded uppercase text-white items-center font-semibold text-[14px]" onClick={backToHome}>
                                        <i className='bx bx-arrow-back text-xl'></i>
                                        continue shopping
                                    </button>
                                </div>                            
                            </div>
                            <div className="col-span-3">
                                <div className="px-3 py-1 font-semibold border-b bg-white rounded-t">
                                    <h1>Coupons & Offers &#40;if any&#41;</h1>
                                </div>
                                <div className="flex p-2 bg-white mb-4">
                                    <input type="text" className="py-1.5 px-2.5 border rounded-l placeholder:capitalize outline-none w-full focus:placeholder:text-gray-800 text-gray-600" placeholder="enter coupon code" />
                                    <button className="text-white bg-[#2e3292] px-4 py-1.5 rounded-r uppercase font-semibold">apply</button>
                                </div>
                                <div className="flex gap-2 bg-white p-2 items-center mb-2">
                                    <input type="checkbox" className="w-[19px] h-[19px]"/>
                                    <i className='bx bx-gift text-[22px] text-gray-700'></i>
                                    <p className="font-semibold">Gift wrap this for ₹30</p>
                                </div>
                                <div className="rounded-t bg-white capitalize p-2 border-b font-semibold">
                                    <h1>order summary</h1>
                                </div>
                               <div className="flex flex-col gap-2 bg-white py-4">
                                    <div className="flex justify-between px-2 text-sm">
                                        <p>MRP (2 Items)</p>
                                        <p className="line-through">&#8377;160</p>
                                    </div>
                                    <div className="flex justify-between px-2 text-sm">
                                        <p>Discounted Price (Subtotal)</p>
                                        <p>&#8377;140</p>
                                    </div>
                                    <div className="flex justify-between px-2 text-sm">
                                        <p>Shipping Charges</p>
                                        <p>+ &#8377;60</p>
                                    </div>
                               </div>
                               <div className="p-2 bg-white mb-2">
                                    <div className="capitalize flex  font-[600]  justify-between">
                                        <p className="text-black">to pay</p>
                                        <p className="text-[#2e3292] text-[17.5px]">&#8377;599</p>
                                    </div>
                                    <div className="py-3 flex flex-col gap-3">
                                        <div className="border-dashed border border-[#2e3292] bg-gray-100 font-semibold rounded-md text-sm text-[#2e3292] text-center py-1.5 ">You have saved ₹77 on this order</div>
                                        <Button type="primary" className="w-full hover:bg-orange-600 relative uppercase font-semibold text-white bg-orange-500" size="large">proceed to checkout <i className='bx bx-arrow-back bx-rotate-180 absolute right-10 top-3'></i></Button>
                                    </div>
                               </div>
                               <div className="p-2 flex gap-3 bg-white justify-center items-center rounded-md">
                                    <Image alt="shipBox" src={'/sapnaHome/shipBox.png'} width={35} height={30}/>
                                    <p className="text-sm font-semibold">Shop for ₹267 more to get free shipping on this order. Free Shipping above ₹499</p>
                               </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </Layout>
    )
}

export default Cart