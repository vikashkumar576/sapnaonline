import { useRouter } from "next/router"
import Image from "next/image"
import Link from "next/link"
import { Button, Collapse, Form, Input, Radio, Select, Tabs, Tooltip } from "antd"
import { useState } from "react"
import Head from "next/head"

const Checkout = ()=>{
    const router = useRouter(null)
    const [activeKey, setActiveKey] = useState('1')
    const [value, setValue] = useState(1)
    const [formData, setFormData] = useState({})
    const [addAddress, setAddAddress] = useState('hidden')

    const handleSelectChange = (value) => {
        setSelectedValue(value);
    }

    const backToHome = ()=>{
    router.push("/")
    }

    const onFormSubmit = (values)=>{
        console.log(values)
        setFormData(values)
        setAddAddress('hidden')
        setActiveKey(2)
    }

    const states = [
            "Andhra Pradesh",
            "Arunachal Pradesh",
            "Assam",
            "Bihar",
            "Chhattisgarh",
            "Goa",
            "Gujarat",
            "Haryana",
            "Himachal Pradesh",
            "Jammu and Kashmir",
            "Jharkhand",
            "Karnataka",
            "Kerala",
            "Madhya Pradesh",
            "Maharashtra",
            "Manipur",
            "Meghalaya",
            "Mizoram",
            "Nagaland",
            "Odisha",
            "Punjab",
            "Rajasthan",
            "Sikkim",
            "Tamil Nadu",
            "Telangana",
            "Tripura",
            "Uttarakhand",
            "Uttar Pradesh",
            "West Bengal",
            "Andaman and Nicobar Islands",
            "Chandigarh",
            "Dadra and Nagar Haveli",
            "Daman and Diu",
            "Delhi",
            "Lakshadweep",
            "Puducherry"
    ]

    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    }

    return(
        <>
            <Head>
                <title>Checkout - SapnaOnline.com</title>
                <link rel="icon" href="/sapnaHome/sapna-logo.png" />
            </Head>

            <nav className='middle-nav pb-2 pt-2 border-b-[3px] border-gray-300 bg-white shadow-md'>
                <div className="container w-[88%] mx-auto py-2 flex justify-between">
                    <button onClick={backToHome}>
                        <Image alt="logo" src={'/sapnaHome/logo-black.png'} width={130} height={90}></Image>
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
                <div className="container w-[88%] mx-auto grid grid-cols-7 gap-3">
                    <div className="col-span-5 flex flex-col">
                       <div className="bg-white flex justify-between py-3 px-3 items-center mb-2">
                            <div className="flex gap-2 items-center">
                                <i className='bx bxs-check-circle text-orange-400 text-5xl'></i>
                                <div className="">
                                    <p className="text-gray-500 text-[18px] font-semibold">Logged In</p>
                                    <p className="text-sm text-gray-400 font-semibold">Hey Vikash Kumar, your number is +91 9973156836</p>
                                </div>
                            </div>
                            <button className="uppercase text-[13.5px] font-semibold px-8 border text-blue-600 bg-[#e9e9e9] py-1 rounded">change</button>
                       </div>
                       
                        <Collapse defaultActiveKey={['1']} accordion activeKey={activeKey} >
                            <Collapse.Panel header={(
                                <div className="bg-white flex justify-between py-3 items-center mb-2">
                                    <div className="flex gap-2 items-center">
                                        <i className='bx bxs-check-circle text-orange-400 text-5xl'></i>
                                        <div className="">
                                            <p className="text-gray-500 text-[18px] font-semibold">Your Selected Address</p>
                                            <p className="text-sm text-gray-400 font-semibold">We will deliver your order on below address</p>
                                        </div>
                                    </div>
                                    <button className="uppercase text-[13.5px] font-semibold px-8 border text-blue-600 bg-[#e9e9e9] py-1 rounded" onClick={()=>setActiveKey(1)}>change</button>
                                </div>
                                )} 
                                key="1" showArrow={false} 
                                style={{background: '#fff'}}
                            >
                                
                                <div className="flex justify-between items-center">
                                    <p className="text-[15px] font-semibold">Choose your delivery address</p>
                                    <Button onClick={()=>setAddAddress('inline-block')} type="ttt" className="uppercase bg-[#4183c4] font-semibold text-white flex items-center">
                                        <i className='bx bx-plus text-xl'></i> 
                                        add new address
                                    </Button>
                                </div>
                                {/* address */}
                                {formData &&
                                <div className={`bg-slate-50 ${formData ? 'inline-block' : 'hidden'} p-4 border border-[#2e3292] rounded mt-4 flex items-center justify-between`}>
                                    <div className="">
                                        <h1 className="font-bold text-[18px]">{formData.fullname}</h1>
                                        <div className="flex gap-2 items-center">
                                            <p className="font-semibold">{formData.contact}</p>
                                            <span className="bg-gray-200 text-[#2e3292] font-semibold px-2 py-1 text-xs rounded">Home</span>
                                        </div>
                                    </div>
                                    <div className="capitalize">
                                        <p>{formData.address1},{formData.address2},{formData.landmark}</p>
                                        <p>{formData.city}, {formData.state}, india {formData.pincode}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <h1 className="text-lg font-semibold text-gray-500"><i class='bx bx-pencil'></i>Edit</h1>
                                        <i className='bx bxs-check-circle text-3xl text-[#2e3292]'></i>
                                    </div>
                                </div>}
                                {/* address */}
                                
                                {/* add address form */}
                                <div className={`relative -top-36 ${addAddress} z-50 bg-white w-full h-[570px]  pt-8`}>
                                    <Form onFinish={onFormSubmit} className="grid grid-cols-2 gap-x-6 gap-y-2 px-3">
                                        
                                        <div>
                                            <label htmlFor="" className="font-semibold text-gray-500">Full Name on Address</label>
                                            <Form.Item
                                                name="fullname"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: (
                                                            <h1 className="text-[13px] font-semibold flex items-center gap-1"><i class='bx bx-info-circle text-base'></i>Full name is required !</h1>
                                                        )
                                                    }
                                                ]}
                                                className="col-span-1"
                                            >
                                                <Input className="py-1.5" />
                                            </Form.Item>
                                        </div>
                                        <div>
                                            <label htmlFor="" className="font-semibold text-gray-500">Contact Number &#40;Mobile&#41;</label>
                                            <Form.Item
                                                name="contact"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: (
                                                            <h1 className="text-[13px] font-semibold flex items-center gap-1">
                                                                <i class='bx bx-info-circle text-base'></i>
                                                                Contact Number is required !
                                                            </h1>
                                                        )
                                                    }
                                                ]}
                                                className="col-span-1"
                                            >
                                                <Input className="py-1.5" />
                                            </Form.Item>
                                        </div>
                                        <div>
                                            <label htmlFor="" className="font-semibold text-gray-500">Address Line 1</label>
                                            <Form.Item
                                                name="address1"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: (
                                                            <h1 className="text-[13px] font-semibold flex items-center gap-1">
                                                                <i class='bx bx-info-circle text-base'></i>
                                                                Address line 1 is required !
                                                            </h1>
                                                        )
                                                    }
                                                ]}
                                                className="col-span-1"
                                            >
                                                <Input className="py-1.5" />
                                            </Form.Item>
                                        </div>
                                        <div>
                                            <label htmlFor="" className="font-semibold text-gray-500">Address Line 2</label>
                                            <Form.Item
                                                name="address2"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: (
                                                            <h1 className="text-[13px] font-semibold flex items-center gap-1">
                                                                <i class='bx bx-info-circle text-base'></i>
                                                                Address line 1 is required !
                                                            </h1>
                                                        )
                                                    }
                                                ]}
                                                className="col-span-1"
                                            >
                                                <Input className="py-1.5" />
                                            </Form.Item>
                                        </div>
                                        <div>
                                            <label htmlFor="" className="font-semibold text-gray-500">Landmark</label>
                                            <Form.Item
                                                name="landmark"
                                                className="col-span-1"
                                            >
                                                <Input className="py-1.5" />
                                            </Form.Item>
                                        </div>
                                        <div>
                                            <label htmlFor="" className="font-semibold text-gray-500">Pincode</label>
                                            <Form.Item
                                                name="pincode"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: (
                                                            <h1 className="text-[13px] font-semibold flex items-center gap-1">
                                                                <i class='bx bx-info-circle text-base'></i>
                                                                Pincode is required !
                                                            </h1>
                                                        )
                                                    }
                                                ]}
                                                className="col-span-1"
                                            >
                                                <Input className="py-1.5" />
                                            </Form.Item>
                                        </div>
                                        <div>
                                            <label htmlFor="" className="font-semibold text-gray-500">State</label>
                                            <Form.Item
                                                name="state"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: (
                                                            <h1 className="text-[13px] font-semibold flex items-center gap-1">
                                                                <i class='bx bx-info-circle text-base'></i>
                                                                State is required !
                                                            </h1>
                                                        )
                                                    }
                                                ]}
                                                className="col-span-1"
                                            >
                                                <Select>
                                                    {
                                                        states && states.map((state, stateIndex)=>(
                                                            <Select.Option key={stateIndex} value={state}>{state}</Select.Option>
                                                        ))
                                                    }
                                                </Select>
                                            </Form.Item>
                                        </div>
                                        <div>
                                            <label htmlFor="" className="font-semibold text-gray-500">City</label>
                                            <Form.Item
                                                name="city"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: (
                                                            <h1 className="text-[13px] font-semibold flex items-center gap-1">
                                                                <i class='bx bx-info-circle text-base'></i>
                                                                City is required !
                                                            </h1>
                                                        )
                                                    }
                                                ]}
                                                className="col-span-1"
                                            >
                                                <Input className="py-1.5" />
                                            </Form.Item>
                                        </div>
                                        <div className="col-span-2">
                                            <label htmlFor="" className="font-semibold text-gray-500">Set your address type</label>
                                            <Form.Item
                                                name='address-type'
                                            >
                                                <Radio.Group className="my-3" onChange={onChange} value={value} defaultValue={'home'}>
                                                    <Radio value='home' className="text-[#2e3292] font-bold">Home</Radio>
                                                    <Radio value='office' className="text-[#2e3292] font-bold">Office</Radio>
                                                </Radio.Group>
                                            </Form.Item>
                                        </div>
                                        <div className="flex justify-around">
                                            <Button htmlType="submit" size="large" className="bg-orange-500">
                                                <p className="uppercase text-xs font-bold text-white px-4">save & deliver</p>
                                            </Button>
                                            <Button onClick={()=>setAddAddress('hidden')} type="ttt" size="large" className="bg-[#c8c8c8]">
                                                <p className="uppercase text-xs font-bold text-white px-3">cancel & go back</p>
                                            </Button>
                                        </div>
                                    </Form>
                                </div>
                                {/* add address form */}

                            </Collapse.Panel>
                            <Collapse.Panel  
                                header={(
                                    <div className="bg-white flex justify-between py-3 items-center mb-2">
                                        <div className="flex gap-2 items-center">
                                            <i className='bx bxs-check-circle text-orange-400 text-5xl'></i>
                                            <div className="">
                                                <p className="text-gray-500 text-[18px] font-semibold">Order Summary</p>
                                                <p className="text-sm text-gray-400 font-semibold">Confirm your items and delivery</p>
                                            </div>
                                        </div>
                                        <button className={`uppercase ${activeKey == 2 ? 'hidden': 'inline-block'} text-[13.5px] font-semibold px-8 border text-blue-600 bg-[#e9e9e9] py-1 rounded`} onClick={()=>setActiveKey(2)}>view</button>
                                    </div>
                                    )}
                                key="2" 
                                showArrow={false} 
                                className="bg-white my-2"
                            >
                                <div className="flex flex-col">
                                    <div className="flex bg-white px-4 relative capitalize font-semibold text-sm rounded py-2 mb-2">
                                        <div className="text-start w-[58%] pb-8">
                                            <div className="flex items-center gap-4">
                                                <Image alt="newRelease1" src={'/sapnaHome/newRelease1.jpg'} width={60} height={100} />
                                                <div className="flex flex-col">
                                                    <p>book name</p>
                                                    <p className="text-[#2e3292] font-bold">&#8377;120&nbsp; <span className="line-through text-gray-500">&#8377;160</span></p>
                                                </div>
                                            </div>
                                            <button className="hover:text-slate-950 text-slate-800 capitalize mt-3 mb-1 text-end absolute right-0 bottom-0">Dispatched in 2-4 working days for pincode 821311</button>
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
                                    <button className="bg-orange-500 text-white mt-2 py-2 px-8 font-bold uppercase rounded ml-auto hover:bg-[#ef8c29]" onClick={()=>setActiveKey(3)} >proceed to payment</button>   
                                </div> 
                            </Collapse.Panel>
                            <Collapse.Panel 
                                header={(
                                    <div className="bg-white flex justify-between py-3 items-center mb-2">
                                        <div className="flex gap-2 items-center">
                                            <i className='bx bxs-check-circle text-orange-400 text-5xl'></i>
                                            <div className="">
                                                <p className="text-gray-500 text-[18px] font-semibold">Payment Options</p>
                                                <p className="text-sm text-gray-400 font-semibold">100% Secure Payment Gateway, checkout with confidence</p>
                                            </div>
                                        </div>
                                    </div>
                                    )}
                                key="3" 
                                showArrow={false} 
                                className="bg-white my-2"
                            >
                                <Tabs tabPosition={'left'} defaultActiveKey="3">
                                    <Tabs.TabPane 
                                        tab={
                                            <div className="flex gap-3 items-center">
                                                <Image alt="e-gift-card" src={'/sapnaHome/payment-egift.png'} width={30} height={20}/>
                                                <p className="text-[#2e3292] font-semibold">E-Gift Card</p>
                                            </div>
                                        } 
                                        key={1}
                                    
                                    >
                                        <h1>welcome</h1>
                                    </Tabs.TabPane>
                                    <Tabs.TabPane 
                                        disabled
                                        tab={
                                            <div className="flex gap-3 items-center">
                                                <Image alt="e-gift-card" src={'/sapnaHome/payment-wallet.png'} width={30} height={20}/>
                                                <p className="text-[#ccc] font-semibold capitalize">sapna wallet</p>
                                            </div>
                                        } 
                                        key={2}
                                    
                                    >
                                    </Tabs.TabPane>
                                    <Tabs.TabPane 
                                        tab={
                                            <div className="flex gap-3 items-center">
                                                <Image alt="e-gift-card" src={'/sapnaHome/payment-addcard.png'} width={30} height={20}/>
                                                <p className="text-[#2e3292] font-semibold capitalize">pay by Card</p>
                                            </div>
                                        } 
                                        key={3}
                                    
                                    >
                                            <h1 className="mb-5 font-semibold">Pay using your Visa, Mastercard or Amex Cards</h1>
                                            <Form onFinish={onFormSubmit} className="grid grid-cols-2 gap-x-6 px-3">
                                                
                                                <div className="col-span-2">
                                                    <label htmlFor="" className="font-semibold text-gray-500">Card Number</label>
                                                    <Form.Item
                                                        name="card-number"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: (
                                                                    <h1 className="text-[13px] font-semibold flex items-center gap-1"><i class='bx bx-info-circle text-base'></i>Card Number is required !</h1>
                                                                )
                                                            }
                                                        ]}
                                                        className="col-span-1"
                                                    >
                                                        <Input className="py-1.5 placeholder:capitalize focus:placeholder:text-gray-600" placeholder='card number' />
                                                    </Form.Item>
                                                </div>
                                                <div className="col-span-2">
                                                    <label htmlFor="" className="font-semibold text-gray-500">Name on Card</label>
                                                    <Form.Item
                                                        name="cardholder"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: (
                                                                    <h1 className="text-[13px] font-semibold flex items-center gap-1">
                                                                        <i class='bx bx-info-circle text-base'></i>
                                                                        Name on Card is required !
                                                                    </h1>
                                                                )
                                                            }
                                                        ]}
                                                        className="col-span-1"
                                                    >
                                                        <Input className="py-1.5 placeholder:capitalize focus:placeholder:text-gray-600" placeholder='cardholder name' />
                                                    </Form.Item>
                                                </div>
                                                <div>
                                                    <label htmlFor="" className="font-semibold text-gray-500">Expiry</label>
                                                    <Form.Item
                                                        name="expiry"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: (
                                                                    <h1 className="text-[13px] font-semibold flex items-center gap-1">
                                                                        <i class='bx bx-info-circle text-base'></i>
                                                                        Expiry is required !
                                                                    </h1>
                                                                )
                                                            }
                                                        ]}
                                                        className="col-span-1"
                                                    >
                                                        <Input className="py-1.5 placeholder:capitalize focus:placeholder:text-gray-600" placeholder='MM/YY'/>
                                                    </Form.Item>
                                                </div>
                                                <div>
                                                    <label htmlFor="" className="font-semibold text-gray-500">
                                                        <Tooltip color="#fff" placement="right" title={<p className="text-[11px] text-gray-500">The CVV code is on the back of your card, or in the front for American Express credit cards</p>}>
                                                            CVV or CVC
                                                            <i class='bx bx-info-circle text-base ml-1'></i>
                                                        </Tooltip>
                                                    </label>
                                                    <Form.Item
                                                        name="cvv"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: (
                                                                    <h1 className="text-[13px] font-semibold flex items-center gap-1">
                                                                        <i class='bx bx-info-circle text-base'></i>
                                                                        CVV or CVC is required !
                                                                    </h1>
                                                                )
                                                            }
                                                        ]}
                                                        className="col-span-1"
                                                    >
                                                        <Input className="py-1.5" />
                                                    </Form.Item>
                                                </div>
                                                <div className="col-span-2 ml-auto">
                                                    <Button htmlType="submit" size="large" className="bg-orange-500 flex gap-10 items-center" style={{borderRadius: '3px'}}>
                                                        <p className="uppercase text-[13px] font-bold text-white px-4">pay now</p>
                                                        <i className='bx bx-arrow-back bx-rotate-180 text-white' style={{fontWeight: '600'}}></i>
                                                    </Button>
                                                </div>
                                            </Form>
                                    </Tabs.TabPane>
                                    <Tabs.TabPane 
                                        tab={
                                            <div className="flex gap-3 items-center">
                                                <Image alt="e-gift-card" src={'/sapnaHome/payment-banking.png'} width={30} height={20}/>
                                                <p className="text-[#2e3292] font-semibold capitalize">net banking</p>
                                            </div>
                                        } 
                                        key={4}
                                    
                                    >
                                        <h1>welcome</h1>
                                    </Tabs.TabPane>
                                    <Tabs.TabPane 
                                        tab={
                                            <div className="flex gap-3 items-center">
                                                <Image alt="e-gift-card" src={'/sapnaHome/payment-wallet.png'} width={30} height={20}/>
                                                <p className="text-[#2e3292] font-semibold capitalize">wallet</p>
                                            </div>
                                        } 
                                        key={5}
                                    
                                    >
                                        <h1>welcome</h1>
                                    </Tabs.TabPane>
                                    <Tabs.TabPane 
                                        tab={
                                            <div className="flex gap-3 items-center">
                                                <Image alt="e-gift-card" src={'/sapnaHome/payment-upiicon.png'} width={30} height={20}/>
                                                <p className="text-[#2e3292] font-semibold uppercase">upi</p>
                                            </div>
                                        } 
                                        key={6}
                                    
                                    >
                                        <h1>welcome</h1>
                                    </Tabs.TabPane>
                                    <Tabs.TabPane 
                                        disabled
                                        tab={
                                            <div className="flex gap-3 items-center">
                                                <Image alt="e-gift-card" src={'/sapnaHome/payment-cod.png'} width={30} height={20}/>
                                                <p className="text-[#ccc] font-semibold capitalize">cash on delivery</p>
                                            </div>
                                        } 
                                        key={7}
                                    >
                                    </Tabs.TabPane>
                                    <Tabs.TabPane 
                                        tab={
                                            <div className="flex gap-3 items-center">
                                                <Image alt="e-gift-card" src={'/sapnaHome/payment-cod.png'} width={30} height={20}/>
                                                <p className="text-[#2e3292] font-semibold capitalize">DD OR cheque</p>
                                            </div>
                                        } 
                                        key={8}
                                    
                                    >
                                        <h1>welcome</h1>
                                    </Tabs.TabPane>
                                </Tabs>
                                
                            </Collapse.Panel>
                        </Collapse>
                    </div>
                    <div className="col-span-2">
                        <div className="px-3 py-2 font-semibold border-b bg-white rounded-t">
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
                            </div>
                        </div>
                        <div className="p-2 flex gap-3 bg-white justify-center items-center rounded-md">
                            <Image alt="shipBox" src={'/sapnaHome/shipBox.png'} width={35} height={30}/>
                            <p className="text-sm font-semibold">Shop for ₹267 more to get free shipping on this order. Free Shipping above ₹499</p>
                        </div>
                    </div>
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