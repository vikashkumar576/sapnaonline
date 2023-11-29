import Image from "next/image";
import Link from "next/link";
import Layout from "../shared/layout"
import { Button, Form, Input, Select } from 'antd';
import { InfoCircleOutlined, PhoneOutlined } from '@ant-design/icons';
const { Option } = Select;

const contactNow = [
    {
        icon: '',
        label: ''
    }
]

const Contact = ()=>{
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return(
        <Layout title="Contact Us">
            <div className="container w-[88%] mx-auto px-16 py-8 bg-white grid grid-cols-2">
                <div className="col-span-1 flex flex-col gap-1">
                    <h1 className="capitalize text-xl font-bold border-b pb-4 mb-2">Contact us</h1>
                    <p className="font-semibold">Leave us a message</p>
                    <p className="text-sm mb-2">We love to hear from our customers!</p>
                    <Form
                        form={form}
                        name="contact"
                        onFinish={onFinish}
                        scrollToFirstError
                        className="pr-20"
                    >
                        <label htmlFor="" className='capitalize font-semibold text-gray-600 text-lg'>full name</label>
                        <Form.Item
                            name="fullname"
                            rules={[
                            {
                                required: true,
                                message: (
                                    <div className="flex font-semibold gap-2">
                                        <InfoCircleOutlined/>
                                        <h1 className="capitalize text-xs">Please input your nickname!</h1>
                                    </div>
                                ),
                                whitespace: true,
                            },
                            ]}
                        >
                            <Input className='focus:placeholder:text-gray-500 placeholder:text-gray-400 py-2 mt-2' placeholder='Write your full name' />
                        </Form.Item>

                        <label htmlFor="" className='capitalize font-semibold text-gray-600 text-lg'>email address</label>
                        <Form.Item
                            name="email"
                            rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: (
                                    <div className="flex font-semibold gap-2">
                                        <InfoCircleOutlined/>
                                        <h1 className="capitalize text-xs">Please input your E-mail!</h1>
                                    </div>
                                ),
                            },
                            ]}
                        >
                            <Input placeholder='Type your email address' className='focus:placeholder:text-gray-500 placeholder:text-gray-400 py-2 mt-2' />
                        </Form.Item>

                        <label htmlFor="" className='capitalize font-semibold text-gray-600 text-lg'>subject</label>
                        <Form.Item
                            name="subject"
                            rules={[
                            {
                                required: true,
                                message: (
                                    <div className="flex font-semibold gap-2">
                                        <InfoCircleOutlined/>
                                        <h1 className="capitalize text-xs">Subject is required!</h1>
                                    </div>
                                ),
                            },
                            ]}
                        >
                            <Select placeholder="Choose subject" className='placeholder:capitalize'>
                                <Option value="Availability of Book">Availability of Book</Option>
                                <Option value="Price of Product">Price of Product</Option>
                                <Option value="Shopping Cart Issues">Shopping Cart Issues</Option>
                                <Option value=" Order Related Query"> Order Related Query</Option>
                                <Option value="Payment Related Query">Payment Related Query</Option>
                                <Option value="Damaged/Defective or Wrong Shipment">Damaged/Defective or Wrong Shipment</Option>
                                <Option value="Courier Related Query">Courier Related Query</Option>
                                <Option value="College Library Query">College Library Query</Option>
                                <Option value="Corporate / Bulk Orders">Corporate / Bulk Orders</Option>
                                <Option value="Features, Suggestions & Feedback">Features, Suggestions & Feedback</Option>
                                <Option value="Complements / Good Service">Complements / Good Service</Option>
                                <Option value="Product Inquiry">Product Inquiry</Option>
                                <Option value="Business Requirements">Business Requirements</Option>
                                <Option value="International Shipping">International Shipping</Option>
                                <Option value="Other Queries or Comments">Other Queries or Comments</Option>
                            </Select>
                        </Form.Item>

                        <label htmlFor="" className='font-semibold text-gray-600'>Write your message</label>
                        <Form.Item
                            name="message"
                            rules={[
                            {
                                required: true,
                                message: (
                                    <div className="flex font-semibold gap-2">
                                        <InfoCircleOutlined/>
                                        <h1 className="capitalize text-xs">Please input your Queries or Messsages!</h1>
                                    </div>
                                ),
                            },
                            ]}
                        >
                            <Input.TextArea rows={5} style={{resize: "none"}} placeholder='Write your message here ...' className='focus:placeholder:text-gray-500 placeholder:text-gray-400 py-2 mt-2' />
                        </Form.Item>

                        <Form.Item >
                            <Button type="primary" size="middle" htmlType="submit" className="bg-orange-500 uppercase text-xs font-semibold">
                                send message
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                <div className="col-span-1 p-6 bg-white flex flex-col justify-start items-start pl-36 gap-4">
                    <Image alt="contact-image" src={'/sapnaHome/contact-image.png'} width={420} height={100} />
                    <div className="flex flex-col pl-10 gap-3">
                        <h1 className="font-semibold text-xl">Sapna Infoway Pvt Ltd.</h1>
                        <div className="text-sm mb-2">
                            <p>No: 24, 2nd Cross Gandhinagar,</p>
                            <p>Bangalore, Karnataka,</p>
                            <p>India - 560 009</p>
                        </div>
                        <div className="flex items-start text-[14px] font-semibold text-[#2e3292] flex-col gap-3">
                            <button className="flex gap-2 items-center">
                                <i className='bx bx-envelope text-lg'></i>
                                <p>cs@sapnaonline.com</p>
                            </button>
                            <button className="flex gap-2 items-center">
                                <PhoneOutlined rotate={90} className='text-lg' />
                                <p>+91 80 4011 4411</p>
                            </button>
                            
                            <button className="flex gap-2 items-center">
                                <i className='bx bx-time-five text-lg'></i>
                                <p>9:30 AM to 6:30 PM (Mon-Sat)</p>
                            </button>

                            <button className="flex gap-2 items-center">
                                <i className='bx bxl-telegram text-xs p-0.5 rounded-full bg-[#2e3292] text-white'></i>
                                <p>Get Directions</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contact