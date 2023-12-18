import { Collapse } from "antd"
import Layout from "../shared/layout"
import Image from "next/image"
import { PhoneOutlined } from "@ant-design/icons"
import Link from "next/link"

const Faqs = ()=>{
    return(
        <Layout title="Frequently Asked Questions" description="welcome to the self support page of sapnaonline. With Frequently Asked Questions" keywords="sapnaonline support, sapnaonline customer support, sapnaonline Frequently Asked Questions">
            <div className="container w-[88%] mx-auto bg-white px-5 py-6 flex md:flex-row flex-col-reverse ">
                <div className="col-span-4">
                    <Collapse ghost='true' accordion expandIcon={() => <i style={{fontWeight: "bold", color: '#2e3291'}} className='bx bx-right-arrow-alt border-2 border-[#2e3291] py-[7px] px-[1px] rounded-full'></i>}>

                        <h1 className="text-xl font-semibold py-3 text-gray-600">Frequently Asked Questions</h1>

                        <Collapse.Panel header={(<p className="text-[#2e3291] font-bold capitalize">Can i check or track my order?</p>)} key={1} >
                            <p className="pl-8 font-semibold text-[15px]">Yes, Sapnaonline registered user will be able to check and track his/her current or previous orders by clicking &quot;My Account&quot; button on the top of the site (visible on each page). By clicking on this link you will be asked to enter your Login details. If already entered or once entered, the user lands in &quot;My Shopping Cart&quot;, where he / she can check the Status of all his/her Orders. Get a link to do the payment directly & Print an Invoice of the order.</p>
                        </Collapse.Panel>

                        <Collapse.Panel header={(<p className="text-[#2e3291] font-bold capitalize">What are the different stages of &apos;Order Status&apos;?</p>)} key={2} >
                                <h1 className="pl-8 font-semibold pb-2">Sapnaonline users can know these different stages of &quot;Order&quot;</h1>
                            <ul className="list-disc pl-16 flex flex-col gap-1 font-semibold">
                                <li>
                                    <p>Sapnaonline users can know these different stages of &quot;Order&quot;</p>
                                </li>
                                <li>
                                    <p>Pending Order - We have received the order from you and are waiting for the authorization from the bank or in case of Cheque / DD / MO till its realization.</p>
                                </li>
                                <li>
                                    <p>Processing Order - After we receive the payment approval from the bank we will start processing your order after the necessary procurement of the products.</p>
                                </li>
                                <li>
                                    <p>Shipped - After the procurement of the products we have given it to our logistics partner to be delivered it to you.</p>
                                </li>
                                <li>
                                    <p>Delivered - The order has been delivered to destination specified by you.</p>
                                </li>
                            </ul>   
                            <p className="pl-8 font-semibold pt-2"><b className="capitalize">note:</b> We do not store any of your Credit Card &amp; Debit Card information details. We have a 128Bit SSL certificate server which facilitates 100% secure online payments.</p>                 
                        </Collapse.Panel>

                        <Collapse.Panel header={(<p className="text-[#2e3291] font-bold capitalize">What are my payments options?</p>)} key={3} >
                            <h1 className="pl-8 font-semibold pb-2">You get the following options for payment. Choose the desired.</h1>
                        <ul className="list-disc pl-16 flex flex-col gap-1 font-semibold">
                            <li>
                                <p>Online Payment: You can Use your Credit Card/ Debit Card.</p>
                            </li>
                            <li>
                                <p>Net Banking</p>
                            </li>
                            <li>
                                <p>E-Gift Voucher</p>
                            </li>
                            <li>
                                <p>Demand Draft</p>
                            </li>
                            <li>
                                <p>Money Order</p>
                            </li>
                        </ul>
                            <p className="pl-8 font-semibold pt-4"><b className="capitalize">note:</b> We do not store any of your Credit Card &amp; Debit Card information details. We have a 128Bit SSL certificate server which facilitates 100% secure online payments.</p>
                        </Collapse.Panel>

                        <Collapse.Panel header={(<p className="text-[#2e3291] font-bold capitalize">Can I cancel my order after submitting it?</p>)} key={4} >
                            <p className="pl-8 font-semibold">No, an order cannot be cancelled once submitted.*</p>
                        </Collapse.Panel>

                        <Collapse.Panel header={(<p className="text-[#2e3291] font-bold capitalize">How do I contact Sapnaonline?</p>)} key={5} >
                            <p className="pl-8 font-semibold"> Please <a href="#">click here</a> to contact us. We will be in touch with you as soon as we receive your mail, or you can call us on our LandLine to speak with our customer service support - Monday to Saturday 9am 6pm 
                            <a href="Tel:+918040114411">(+91 80 4011 4411)</a>
                            </p>
                        </Collapse.Panel>

                        <Collapse.Panel header={(<p className="text-[#2e3291] font-bold capitalize">What is Sapnaonline&apos;s Policy, Terms & Conditions?</p>)} key={6} >
                        <p className="pl-8 font-semibold">At Sapnaonline we are committed to safeguard &amp; protect your privacy. We have provided a user-friendly site for easy shopping. Please <Link href="/terms-conditions">click here</Link> to see further details of our Policies, Terms &amp; Conditions. Note: We do not store any of your Credit Card &amp;amps; Debit Card information details. We have a 128Bit SSL certificate server which facilitates 100% secure online payments.</p>
                        </Collapse.Panel>

                        <Collapse.Panel header={(<p className="text-[#2e3291] font-bold capitalize">How much does a shipping cost? What are the Shipment charges?</p>)} key={7} >
                            <p className="pl-8 font-semibold">We are providing free shipping across India on all orders which are above Rs 499/- Else, Rs 60/- will be charged per order.</p>
                        </Collapse.Panel>

                        <h1 className="text-xl font-semibold py-3 text-gray-600">Express Delivery Guide</h1>

                        <Collapse.Panel header={(<p className="text-[#2e3291] font-bold capitalize">How to avail &apos;Express Delivery&apos; on a product?</p>)} key={8} >
                            <p className="pl-8 font-semibold">Currently this service is available for select products and in select cities only. To check whether Express delivery is applicable in your area, just enter your pin code on the product page and check for delivery options.</p>
                        </Collapse.Panel>

                        <Collapse.Panel header={(<p className="text-[#2e3291] font-bold capitalize">Are there any charges for &apos;Express Delivery&apos; services?</p>)} key={9} >
                            <p className="pl-8 font-semibold">The cost for Express Delivery is Rs.50/- but as an Inaugural offer, this service is being offered at no extra cost! It&paos;s completely Free!.</p>
                        </Collapse.Panel>

                        <Collapse.Panel header={(<p className="text-[#2e3291] font-bold capitalize">When can I expect my &apos;Express Delivery&apos; order to arrive?</p>)} key={10} >
                            <p className="pl-8 font-semibold">Order placed next business day are expected to be delivered. Public Holidays and Weekend &#40;Sunday&apos;s&#41; can expect a day delay.</p>
                        </Collapse.Panel>

                        <Collapse.Panel header={(<p className="text-[#2e3291] font-bold capitalize">How to identify &apos;Express Delivery&apos; products before and after placing the order?</p>)} key={11} >
                            <p className="pl-8 font-semibold">In every product page you can find an icon by the name &apos;Express Delivery&apos;.These products are available for the next day delivery.</p>
                        </Collapse.Panel>

                        <Collapse.Panel header={(<p className="text-[#2e3291] font-bold capitalize">What is the cut-off time for getting &apos;Express Delivery&apos; and what happens if the order placed post cut-off time?</p>)} key={12} >
                            <p className="pl-8 font-semibold">You should order on or before 4PM. Any order post the cut-off time will be treated as next day order and you will receive the delivery accordingly.</p>
                        </Collapse.Panel>

                        <Collapse.Panel header={(<p className="text-[#2e3291] font-bold capitalize">Is this a guaranteed service?</p>)} key={13} >
                            <p className="pl-8 font-semibold">This is an add-on service provided for specific products and for specific locations. We try our best to give our customers the prompt delivery under this offer. However, there might be delays due to logistic challenges beyond our control.SapnaOnline process the orders within the timeline committed but we do not guarantee &apos;Express Delivery&apos; if there are any Logistical partner delay or any unfortunate/unavoidable natural calamity or state bandh.</p>
                        </Collapse.Panel>

                        <Collapse.Panel header={(<p className="text-[#2e3291] font-bold capitalize">On which day &apos;Express Delivery&apos; is not applicable?</p>)} key={14} >
                            <p className="pl-8 font-semibold">Express Delivery time is calculated basis business days i.e. days on which all logistics and supported services are operational. Express delivery may not be available on public holidays and weekends.</p>
                        </Collapse.Panel>

                    </Collapse>
                </div>
                <div className="col-span-2 flex flex-col gap-6 items-center">
                    <Image alt="conatct faqs" src={'/sapnaHome/notfound.png'} width={300} height={100} className="mt-8" />
                    <h1 className='text-[#2e3292] capitalize font-bold'>contact us </h1>
                    <div className="col-span-1 text-[#2e3292]">
                        <div className="flex text-center flex-col items-start text-sm gap-3 font-semibold">
                            <button className="flex gap-2 text-[#2e3292]">
                                <PhoneOutlined rotate={90} className=' text-lg text-[#2e3292]' />
                                <a className='hover:text-[#2e3292]'>+91 80 4011 4411</a>
                            </button>
                            <button className="flex gap-2 text-[#2e3292]">
                                <i className='bx bx-envelope text-lg text-[#2e3292]' ></i>
                                <a className='hover:text-[#2e3292]'>cs@sapnaonline.com</a>
                            </button>
                            <button className="flex gap-2 text-[#2e3292]">
                                <i className='bx bx-time-five text-lg text-[#2e3292]' ></i>
                                <a className='hover:text-[#2e3292]'>9:30 AM to 6:30 PM (Mon-Sat)</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Faqs
