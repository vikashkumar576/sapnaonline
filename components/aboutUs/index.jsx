import Layout from "../shared/layout"

const About = ()=>{
    return(
       <Layout title="About Us" description="welcome to the about page of sapna online" keywords="sapnaonline about, about sapna online, sapnaonline about">
             <div className="container w-[88%] mx-auto px-8 py-5 bg-white">
                <div className="flex flex-col gap-3">
                    <h1 className="font-bold text-xl py-2 text-gray-800">About SapnaOnline</h1>
                    <p className="text-[14px] font-[400] text-gray-800">SapnaOnline.com is operated by Sapna Infoway Private Limited, an eCommerce Company based out of Bangalore. It is also the online wing of India's Largest Retail Book Mall - Sapna Book House Pvt Ltd.</p>
                    <p className="text-[14px] font-[400] text-gray-800">We are an e-commerce or rather an e-tailing store working on the Mission to give people the most convenient, easy and secure shopping experience on the web.</p>
                    <p className="text-[14px] font-[400] text-gray-800">SapnaOnline.com has been noted as India's fastest growing book retailer on the web and currently has a catalogue spread of over 10 million books to browse from.</p>
                    <p className="text-[14px] font-[400] text-gray-800">We have a team of experienced people from diverse backgrounds working together to fulfil 3 main objective's - benefiting customers of low prices, providing a vast catalogue selection and products and lastly a fast, reliable and very safe payment and delivery option to the customers.</p>
                    <h1 className="font-bold text-sm pt-2 text-gray-800">Brief Stats of SapnaOnline</h1>
                    <p className="text-[14px] font-[400] text-gray-800">Currently, we have over Half a Million monthly active & happy users and have over a Million (1,000,000) registered users.</p>
                    <p className="text-[14px] font-[400] text-gray-800">We ship over a thousand orders a day and are growing every day!</p>
                    <p className="text-[14px] font-[400] text-gray-800">SapnaOnline.com is Headquartered in Bangalore and has it's warehouses in New Delhi, Chennai and Bangalore.</p>
                    <p className="text-[14px] font-[400] text-gray-800">This eCommerce store has been awarded the most promising e-tailing company 2013 and has got the unique tag of the most Prompt Order and Delivery channel.</p>
                    <p className="text-[14px] font-[400] text-gray-800">Our Mission is to give you the most convenient , easy and secure shopping experience on the web.</p>
                </div>
                <div className="flex flex-col gap-2 mt-3">
                    <h1 className="font-bold text-lg py-2 text-gray-800">CAN I WORK FOR SAPNAONLINE?</h1>
                    <p className="text-[14px] font-[400] text-gray-800">If you are smart and dynamic, yes you can work with us. We are growing at a very fast pace and are seeking extremely smart people to come work with us. Send an e-mail at cs@sapnaonline.com and we will get back to you shortly.</p>
                </div>
                <div className="flex flex-col mt-3">
                    <h1 className="font-bold text-xl py-2 text-gray-800">REGISTERED OFFICE:</h1>
                    <h1 className="font-bold text-sm py-2 text-gray-800">Sapna Infoway Private Limited</h1>
                    <p className="text-[14px] font-[400] text-gray-800">No: 24, 2nd Cross</p>
                    <p className="text-[14px] font-[400] text-gray 700">Gandhinagar</p>
                    <p className="text-[14px] font-[400] text-gray-800">Bangalore - 560 009</p>
                    <p className="text-[14px] font-[400] text-gray-800">Karnataka.</p>
                    <p className="text-[14px] font-[400] text-gray-800">India.</p>


                </div>
            </div>
       </Layout>
    )
}
export default About