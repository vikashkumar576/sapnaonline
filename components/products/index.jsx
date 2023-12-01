import Head from "next/head"
import Layout from "../shared/layout"
import { Collapse } from "antd"

const Products = ()=>{
  return (
    <Layout title="Buy new releases online, discount">
        <div className="container w-[88%] mx-auto grid grid-cols-9 gap-8">
            <div className="col-span-2 p-3 bg-white">
                <div className="">
                    <div className="flex justify-between">
                        <button className="capitalize font-semibold text-sm">filter applied</button>
                        <button className="text-gray-500 text-xs">Clear all</button>
                    </div>
                    <p className="text-gray-500 text-[13px] pt-4">Add Filters for more accurate results</p>
                </div>
                <Collapse expandIconPosition="end">
                    <Collapse.Panel  header={()=><h1>hello</h1>}>

                    </Collapse.Panel>
                </Collapse>
            </div>
            <div className="col-span-7 p-5 bg-black"></div>
        </div>
    </Layout>
  )
}

export default Products