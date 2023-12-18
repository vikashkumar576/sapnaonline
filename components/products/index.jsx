import Head from "next/head"
import Layout from "../shared/layout"
import { Collapse, Rate, Select } from "antd"
import Image from "next/image"
import { useRouter } from "next/router"
import Link from "next/link"
import { useSelector } from "react-redux"

const Products = ()=>{

    const allProducts = useSelector((state)=> state.booksSlice.books)
    const router = useRouter()

    const onProductClick = (id, label)=>{
        router.push(`/shop/products/${label.toLowerCase().split(" ").join("-")}~${id}`)
    }

  return (
    <Layout title="Buy new releases online, discount">
        <div className="container w-[88%] mx-auto grid grid-cols-9 gap-6 items-start">
            <div className="col-span-2 p-3 bg-white sticky top-24 z-50">
                <div className="">
                    <div className="flex justify-between">
                        <button className="capitalize font-semibold text-sm">filter applied</button>
                        <button className="text-gray-500 text-xs">Clear all</button>
                    </div>
                    <p className="text-gray-500 text-[13px] pt-4">Add Filters for more accurate results</p>
                </div>
                <Collapse expandIconPosition="end" ghost='true' accordion defaultActiveKey={1}>
                    <Collapse.Panel  header={(<p className="font-semibold capitalize">availablity</p>)} key={1}>
                        <div className="flex gap-2 items-center">
                            <input type="checkbox" />
                            <p>Include Out of Stock items</p>
                        </div>
                    </Collapse.Panel>
                    <Collapse.Panel  header={(<p className="font-semibold capitalize">authors</p>)} key={2}>
                        <div className="flex gap-2 items-center">
                            <Select
                            mode="multiple"
                            style={{
                                width: '100%',
                                height: '30px'
                            }}
                            placeholder="apply filters"
                            dropdownStyle={{ maxHeight: '120px', overflowY: 'auto'}}
                            optionLabelProp="label"
                            optionFilterProp="value"
                            >
                            <Select.Option key={1} label={<p>authors</p>} value="authors">
                                <input type="checkbox" /> authors
                            </Select.Option>
                            <Select.Option key={2} label={<p>authors</p>} value="authors">
                                <input type="checkbox" /> authors
                            </Select.Option>
                            <Select.Option key={3} label={<p>authors</p>} value="authors">
                                <input type="checkbox" /> authors
                            </Select.Option>
                            <Select.Option key={4} label={<p>authors</p>} value="authors">
                                <input type="checkbox" /> authors
                            </Select.Option>
                            <Select.Option key={5} label={<p>authors</p>} value="authors">
                                <input type="checkbox" /> authors
                            </Select.Option>
                            <Select.Option key={6} label={<p>authors</p>} value="authors">
                                <input type="checkbox" /> authors
                            </Select.Option>
                            <Select.Option key={7} label={<p>authors</p>} value="authors">
                                <input type="checkbox" /> authors
                            </Select.Option>
                            <Select.Option key={8} label={<p>authors</p>} value="authors">
                                <input type="checkbox" /> authors
                            </Select.Option>
                            <Select.Option key={9} label={<p>authors</p>} value="authors">
                                <input type="checkbox" /> authors
                            </Select.Option>
                            <Select.Option key={10} label={<p>authors</p>} value="authors">
                                <input type="checkbox" /> authors
                            </Select.Option>
                            
                            </Select>
                        </div>
                    </Collapse.Panel>
                    <Collapse.Panel  header={(<p className="font-semibold capitalize">binding</p>)} key={3}>
                        <div className="flex gap-2 items-center">
                            <Select
                            mode="multiple"
                            style={{
                                width: '100%',
                                height: '30px'
                            }}
                            placeholder="search"
                            dropdownStyle={{ maxHeight: '120px', overflowY: 'auto'}}
                            optionLabelProp="label"
                            optionFilterProp="value"
                            >
                            <Select.Option key={1} label={<p>authors</p>} value="authors">
                                <input type="checkbox" /> authors
                            </Select.Option>
                            <Select.Option key={2} label={<p>authors</p>} value="authors">
                                <input type="checkbox" /> authors
                            </Select.Option>
                            <Select.Option key={3} label={<p>authors</p>} value="authors">
                                <input type="checkbox" /> authors
                            </Select.Option>
                            <Select.Option key={4} label={<p>authors</p>} value="authors">
                                <input type="checkbox" /> authors
                            </Select.Option>
                            <Select.Option key={5} label={<p>authors</p>} value="authors">
                                <input type="checkbox" /> authors
                            </Select.Option>
                            <Select.Option key={6} label={<p>authors</p>} value="authors">
                                <input type="checkbox" /> authors
                            </Select.Option>
                            <Select.Option key={7} label={<p>authors</p>} value="authors">
                                <input type="checkbox" /> authors
                            </Select.Option>
                            <Select.Option key={8} label={<p>authors</p>} value="authors">
                                <input type="checkbox" /> authors
                            </Select.Option>
                            <Select.Option key={9} label={<p>authors</p>} value="authors">
                                <input type="checkbox" /> authors
                            </Select.Option>
                            <Select.Option key={10} label={<p>authors</p>} value="authors">
                                <input type="checkbox" /> authors
                            </Select.Option>
                            
                            </Select>
                        </div>
                    </Collapse.Panel>
                    <Collapse.Panel  header={(<p className="font-semibold capitalize">Publishers</p>)} key={4}>
                        <div className="flex gap-2 items-center">
                            <Select
                            mode="multiple"
                            style={{
                                width: '100%',
                                height: '30px'
                            }}
                            placeholder="search"
                            dropdownStyle={{ maxHeight: '120px', overflowY: 'auto'}}
                            optionLabelProp="label"
                            optionFilterProp="value"
                            >
                            <Select.Option key={1} label={<p>authors</p>} value="authors">
                                <input type="checkbox" /> authors
                            </Select.Option>
                            <Select.Option key={2} label={<p>authors</p>} value="authors">
                                <input type="checkbox" /> authors
                            </Select.Option>
                            <Select.Option key={3} label={<p>authors</p>} value="authors">
                                <input type="checkbox" /> authors
                            </Select.Option>
                            <Select.Option key={4} label={<p>authors</p>} value="authors">
                                <input type="checkbox" /> authors
                            </Select.Option>
                            <Select.Option key={5} label={<p>authors</p>} value="authors">
                                <input type="checkbox" /> authors
                            </Select.Option>
                            <Select.Option key={6} label={<p>authors</p>} value="authors">
                                <input type="checkbox" /> authors
                            </Select.Option>
                            <Select.Option key={7} label={<p>authors</p>} value="authors">
                                <input type="checkbox" /> authors
                            </Select.Option>
                            <Select.Option key={8} label={<p>authors</p>} value="authors">
                                <input type="checkbox" /> authors
                            </Select.Option>
                            <Select.Option key={9} label={<p>authors</p>} value="authors">
                                <input type="checkbox" /> authors
                            </Select.Option>
                            <Select.Option key={10} label={<p>authors</p>} value="authors">
                                <input type="checkbox" /> authors
                            </Select.Option>
                            
                            </Select>
                        </div>
                    </Collapse.Panel>
                </Collapse>
            </div>
            <div className="col-span-7 mr-6 ">
                <div className="flex justify-between gap-2 bg-white p-2 px-3 rounded items-center">
                    <div className="flex justify-between w-full items-center">
                        <h1 className="uppercase font-semibold text-sm">new releases
                            <span className="text-xs lowercase text-gray-400 ml-3">(233 results found)</span>
                        </h1>
                        <Select defaultValue={'By Relevance'} className="w-44" >
                            <Select.Option key={1}>By Relevance</Select.Option>
                            <Select.Option key={2}>Price: High or Low</Select.Option>
                            <Select.Option key={3}>Price: Low or High</Select.Option>
                        </Select>
                    </div>
                    <div className="relative">
                        <input type="text" placeholder="Search titles" className="py-1 px-3 rounded border outline-none"/>
                        <i className='bx bx-search absolute top-2.5 right-2 text-lg text-gray-200'></i>
                    </div>
                </div>
                <div className="grid grid-cols-4 py-2 gap-2">
                    {
                        allProducts.map((product, productIndex)=>(
                            <div key={productIndex} className="card flex flex-col gap-4 justify-center items-start p-5 col-span-1 bg-white relative">
                                <button className="mx-auto w-[120px] h-[195px] relative" onClick={()=>onProductClick(product._id, product.book.title)}>
                                    <Image alt="book-image" src={process.env.NEXT_PUBLIC_S3_BUCKET_ENDPOINT+product.book.image} layout="fill" />
                                </button>
                                <div className="flex gap-1 flex-col">
                                    <Link  href={`/shop/products/${product.book.title.toLowerCase().split(" ").join("-")}~${product._id}`} legacyBehavior >
                                        <a className="font-semibold text-sm">{product.book.title}</a>
                                    </Link>
                                    <p className="text-xs text-gray-400 font-semibold">By: <span className="text-indigo-500 capitalize">{product.book.author.authorName}, <span className="text-gray-500">{product.book.publisher.publisherName}</span></span></p>
                                    <div className="flex gap-3 items-center">
                                        <Rate disabled defaultValue={4} character={(<i className='bx bxs-star'></i>)} style={{fontSize: '20px', letterSpacing: '-7px'}} />
                                        <p className="text-[10px] text-gray-400">(234)</p>
                                    </div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <p className="text-xl font-semibold text-[#2e3292]">&#8377;{ Math.floor(product.sellPrice - ((product.sellPrice * product.discount) / 100))}</p>
                                    <p className="line-through text-gray-400">&#8377;{product.sellPrice}</p>
                                    <p className="text-green-600">&#40;{product.discount}% off&#41;</p>
                                </div>
                                <button className="flex text-white w-full mt-3">
                                    <i className='bx bxs-shopping-bag-alt py-2 px-3 bg-[#ec991e] rounded-l '></i>
                                    <p className="py-1.5 px-4 bg-[#f7a937] rounded-r uppercase text-sm w-full font-semibold">add to cart</p>
                                </button>
                                <button className=" absolute top-3 right-3">
                                    <i className='bx bx-bookmark border p-1 rounded-full bg-gray-50 text-lg'></i>
                                </button>
                                <Image alt="offer-banner" src='/sapnaHome/newrelease.svg' width={80} height={10} className="absolute top-4 left-0"/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Products