import React, {useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Badge, Form, Input, InputNumber, Menu, Modal, Tabs } from 'antd'
import { InfoCircleOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import { useRouter } from 'next/router'

const menus = [
  {
    title: 'about us',
    href: '/about-us'
  },
  {
    title: 'Contact Us',
    href: '/contact'
  },
  {
    title: 'Policies & Terms',
    href: '/terms-conditions'
  },
  {
    title: 'FAQs',
    href: '/faqs'
  },
]

const social = [
  {
    title: 'facebook',
    href: 'https://www.facebook.com/sapnaonline/'
  },
  {
    title: 'instagram',
    href: 'https://www.instagram.com/sapnaonline_india/'
  }
]

const features = [
  {
    title: '52+ Years of Retail Expertise',
  },
  {
    title: 'International Shipping',
  },
  {
    title: 'Express Delivery',
  },
  {
    title: 'Bulk Enquiries',
  },
  {
    title: 'Free Shipping',
  },
  {
    title: '20 Million+ Titles',
  },
  {
    title: '100% Genuine Products',
  },
  {
    title: '100% Secure Checkout',
  }
]

const navmenus = [
  {
      label: <Link href="/" legacyBehavior><a className="uppercase font-semibold">kannada</a></Link>,
      key : '1'
  },
  {
      label: <Link href="/" legacyBehavior><a className="uppercase font-semibold">stationery <i className='bx bx-chevron-down' ></i></a></Link>,
      key : "2" ,
      children: [
          {
              key: "Exercise Books",
              label: "Exercise Books"

          },
          {
              key: "Files & Folders",
              label: "Files & Folders"
          },
          {
              key: "Premium Diaries",
              label: "Premium Diaries"
          },
          {
              key: "Note Pads & Blocks",
              label: "Note Pads & Blocks"
          },
          {
              key: "Sketch Books",
              label: "Sketch Books"
          },
          // {
          //     key: "Note Pads & Blocks",
          //     label: "Note Pads & Blocks"
          // },
          // {
          //     key: "Mugs",
          //     label: "Mugs"
          // },
          // {
          //     key: "Bags & Pouches",
          //     label: "Bags & Pouches"
          // },
          // {
          //     key: "Gifts Wrappers",
          //     label: "Gifts Wrappers"
          // },
          // {
          //     key: "Art & Craft",
          //     label: "Art & Craft"
          // },
          // {
          //     key: "Back To School",
          //     label: "Back To School"
          // },
          // {
          //     key: "Calculator",
          //     label: "Calculator"
          // },
          // {
          //     key: "Office Stationery",
          //     label: "Office Stationery"
          // },
          // {
          //     key: "Pens & Writing",
          //     label: "Pens & Writing"
          // },
          // {
          //     key: "Students Notebooks",
          //     label: "Students Notebooks"
          // },
      ],      
                            
  },
  {
      label: <Link href="/" legacyBehavior><a className="uppercase font-semibold">toys <i className='bx bx-chevron-down' ></i></a></Link>,
      key : "3",
      children: [
        {
            key: "Exercise Books",
            label: "Exercise Books"

        },
        {
            key: "Files & Folders",
            label: "Files & Folders"
        },
        {
            key: "Premium Diaries",
            label: "Premium Diaries"
        },
        {
            key: "Note Pads & Blocks",
            label: "Note Pads & Blocks"
        },
        {
            key: "Sketch Books",
            label: "Sketch Books"
        }
      ]
  },
  {
      label: <Link href="/" legacyBehavior><a className="uppercase font-semibold">health care <i className='bx bx-chevron-down' ></i></a></Link>,
      key : "4",
      children: [
        {
            key: "Exercise Books",
            label: "Exercise Books"

        },
        {
            key: "Files & Folders",
            label: "Files & Folders"
        },
        {
            key: "Premium Diaries",
            label: "Premium Diaries"
        },
        {
            key: "Note Pads & Blocks",
            label: "Note Pads & Blocks"
        },
        {
            key: "Sketch Books",
            label: "Sketch Books"
        }
      ]
  },
  {
      label: <Link href="/" legacyBehavior><a className="uppercase font-semibold">baby care</a></Link>,
      key : "5"
  },
];

const Layout = ({children, title='', description='', keywords=''}) => {
  const [selectedValue, setSelectedValue] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter(null)
  const backToHome = ()=>{
    router.push("/")
  }
  const [activeTab , setActiveTab] = useState({
    key: '1',
    modalImg: 'signupNew'
  })
  const [loginForm] = Form.useForm(null)
  const [signupForm] = Form.useForm(null)


  const handleSelectChange = (value) => {
    setSelectedValue(value);
  }

  const onTabChange = (key, modalImg) => {
    setActiveTab({
      ...activeTab,
      key,
      modalImg
    });
  }
  const onTabChangebytab = (key) => {
    setActiveTab({
      ...activeTab,
      key,
    });
  }

  const showModal = () => {
    setIsModalOpen(true);
  }

  const handleOk = () => {
    setIsModalOpen(false);
    loginForm.resetFields();
    signupForm.resetFields();
  }

  const handleCancel = () => {
    setIsModalOpen(false);
    loginForm.resetFields();
    signupForm.resetFields();
  }

  const items = [
    {
      label: (
        <Link target="_blank" href="/om" legacyBehavior >
           <a className='capitalize font-semibold'>&gt; exam</a>
        </Link>
      ),
      key: '0',
    },
    {
      label: (
        <Link target="_blank" href="/" legacyBehavior >
           <a className='capitalize font-semibold'>&gt; academics</a>
        </Link>
      ),
      key: '1',
    },
    {
      label: (
        <Link target="_blank" href="/" legacyBehavior >
           <a className='capitalize font-semibold'>&gt; novels</a>
        </Link>
      ),
      key: '2',
    },
    {
      label: (
        <Link target="_blank" href="/" legacyBehavior >
           <a className='capitalize font-semibold'>&gt; bussiness</a>
        </Link>
      ),
      key: '3',
    },
    {
      label: (
        <Link target="_blank" href="/" legacyBehavior >
           <a className='capitalize font-semibold'>&gt; regional</a>
        </Link>
      ),
      key: '4',
    },
    {
      label: (
        <Link target="_blank" href="/" legacyBehavior >
           <a className='capitalize font-semibold'>&gt; children</a>
        </Link>
      ),
      key: '5',
    },
    {
      label: (
        <Link target="_blank" href="/" legacyBehavior >
          <a className='capitalize font-semibold'>&gt; health care</a> 
        </Link>
      ),
      key: '6',
    },
    {
      label: (
        <Link target="_blank" href="/" legacyBehavior >
          <a className='capitalize font-semibold'>&gt; Stationary</a>
        </Link>
      ),
      key: '7',
    },
    {
      label: (
        <Link target="_blank" href="/" legacyBehavior >
          <a className='capitalize font-semibold'>&gt; toys</a>
        </Link>
      ),
      key: '8',
    },
  ];
  
  return (
    <>
      <Head>
        <link rel="icon" href="/sapnaHome/sapna-logo.png" />
        <title>{title+'-' +process.env.NEXT_PUBLIC_DOMAIN } </title>
        <meta name="description" content={description}/>
        <meta name="keywords" content={keywords}/>
        <meta name="robots" content="index,follow"/>
        <meta property="og:title" content={process.env.NEXT_PUBLIC_BRAND_NAME}/>
        <meta property="og:description" content={description}/>
        <meta property="og:image" content={process.env.NEXT_PUBLIC_BRAND_LOGO}/>
        <meta property="og:url" content="website"/>
      </Head>

      <nav className='bg-[#2e3292] text-white top-nav'>
        <div className='container w-[88%] mx-auto py-1 flex items-center justify-between pr-9'>
          <Link href={'/'} legacyBehavior>
            <p className='text-[11px] text-gray-200 hidden md:block'>Express Delivery Available on selected Pin Codes! Shop Now!</p>
          </Link>
          
          <div className="flex text-[11px] gap-4 items-center">
            <Link href={'/'} legacyBehavior>
              <button className="flex gap-1 items-center font-thin">
                <i className='bx bx-gift text-sm'></i>
                <span className='capitalize font-semibold'>E-Gift Cards</span>
              </button>
            </Link>

            <Link href={'/'} legacyBehavior>
              <button className="flex gap-1 items-center font-thin">
                <i className='bx bxs-truck text-sm'></i>
                <span className='capitalize font-semibold'>track order</span>
              </button>
            </Link>

            <div className='flex gap-1 items-center font-thin'>
              <i className='bx bx-mobile-alt text-sm'></i>
              <span className='capitalize font-semibold'>download app : </span>
              <div className="flex gap-2 items-baseline text-lg text-gray-300">
                <Link href={'https://play.google.com/store/apps/details?id=com.sapnaonline&hl=en_IN'} legacyBehavior>
                  <button><i className='bx bxl-android'></i></button>
                </Link>

                <Link href={'https://apps.apple.com/us/app/sapnaonline-com/id1503289703'} legacyBehavior>
                  <button><i className='bx bxl-apple'></i></button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav className='middle-nav border-b pb-2 pt-2 sticky top-0 z-50 bg-white shadow-sm'>
        <div className="container w-[88%] mx-auto py-2 flex justify-between">
          <div className="flex gap-32">
            <button onClick={backToHome}>
              <Image src={'/sapnaHome/logo-black.png'} width={130} height={90}></Image>
            </button>
            <div className="relative md:flex hidden items-center ">
                <input type="search" className='border border-blue-700 w-[600px] py-2 rounded-l bg-gray-100 focus:placeholder:text-black outline-none px-3 text-sm' placeholder='Search books by title, author, ISBN' />
                <select
                  className="w-fit outline-none border-none absolute right-12 text-blue-950"
                  onChange={handleSelectChange}
                  style={{color:'#2e3292',fontSize:'13px',fontWeight:'500',backgroundColor:'#f3f4f6'}}
                >
                  <option value="option2">Refine Search</option>
                  <option value="option1" > All (default)</option>
                  <option value="option2">By Author</option>
                  <option value="option3">By Publisher</option>
                  {/* <option value="option4">View all Publishers</option> */}
                </select>
                <i className='bx bx-search bg-[#2e3292] py-2 text-white text-[22px] px-2.5 rounded-r'></i>
            </div>
          </div>
          <div className="flex items-center gap-10 pr-12">
              <button className='flex items-center font-semibold gap-2' onClick={showModal}>
                <UserOutlined className='px-2 py-1.5 rounded-md duration-300 hover:bg-gray-200 text-xl text-blue-900' />
                <p className='capitalize text-blue-900 text-sm'>my account</p>
              </button>

            <Link href={'/login'} legacyBehavior>
              <button className='flex items-center font-semibold gap-3'>
                <Badge count={1} size='small' color='lime' className='text-black'>
                  <i className='bx bx-shopping-bag text-2xl text-blue-900 '></i>
                </Badge>
                <p className='capitalize text-blue-900 text-sm'>my cart</p>
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <nav className='bottom-nav shadow-md pl-2 hidden md:block'>
        <div className="className='container w-[88%] mx-auto">
          <ul className='inline-flex gap-6 uppercase items-center font-semibold text-sm '>
            <Dropdown
              menu={{
                items,
              }}
            >
              <li className='bg-[#2e3292] text-white text-[13.5px] font-bold w-[240px] px-3 py-3 flex items-center gap-2'>
                <i className='bx bx-menu text-lg'></i>
                shop by category
              </li>
            </Dropdown>
            <Menu className="w-full text-[14px] "
              theme="light"
              mode="horizontal"
              items={navmenus}
            />
          </ul>
        </div>
      </nav>
      <section className="min-h-screen bg-[#f1f3f6] py-4">
        {children}
      </section>
      <footer className='border-t-2 shadow-lg pt-4'>
        <div className="container w-[88%] mx-auto py-2 grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2 flex flex-col md:flex-row md:gap-0 gap-8 items-start">
            <Image src={'/sapnaHome/52years.png'} alt='footer-image' width={200} height={100}/>
            <div className="col-span-1 flex flex-col gap-2">
              <h1 className='text-[#2e3292] font-semibold'>About SapnaOnline</h1>
              <p className='text-xs leading-5 text-gray-500'>At SapnaOnline.com we are working towards bringing our retail experience to the web and we strive to uphold this prestige by serving our customers better.</p>
              <Link href="/about-us" legacyBehavior>
                <a className='text-[#2e3292] font-semibold text-xs'>Know More</a>
              </Link>
            </div>
          </div>

          <div className="col-span-1 flex flex-col gap-2 text-gray-500">
            <h1 className='text-[#2e3292] font-semibold'>Support</h1>
            <div className="flex text-center text-xs gap-2">
              <PhoneOutlined rotate={90} className=' text-lg text-gray-500' />
              <Link href={'/'} legacyBehavior>
                <a className='hover:text-[#2e3292]'>+91 80 4011 4411</a>
              </Link>
            </div>
            <div className="flex text-center text-xs gap-2">
              <i className='bx bx-envelope text-lg text-gray-500' ></i>
              <Link href={'/'} legacyBehavior>
                <a className='hover:text-[#2e3292]'>cs@sapnaonline.com</a>
              </Link>
            </div>
            <div className="flex text-center text-xs gap-2">
              <i className='bx bx-time-five text-lg text-gray-500' ></i>
              <Link href={'/'} legacyBehavior>
                <a className='hover:text-[#2e3292]'>9:30 AM to 6:30 PM (Mon-Sat)</a>
              </Link>
            </div>
            
            
          </div>

          <div className="col-span-1 flex flex-col gap-2.5 text-gray-500">
            <h1 className='text-[#2e3292] font-semibold'>More Services</h1>
            <div className="flex text-center text-xs gap-2">
              <i className='bx bx-gift text-gray-500 text-xl'></i>
              <Link href={'/'} legacyBehavior>
                <a className='hover:text-[#2e3292]'>E-Gift Cards</a>
              </Link>
            </div>
            <div className="flex text-center text-xs gap-2">
              <i className='bx bx-info-circle text-gray-500 text-xl' ></i>
              <Link href={'/'} legacyBehavior>
                <a className='hover:text-[#2e3292]'>Check E-Gift Card Balance</a>
              </Link>
            </div>
            <div className="flex text-center text-xs gap-2">
              <i className='bx bxs-truck text-gray-500 text-xl'></i>
              <Link href={'/'} legacyBehavior>
                <a className='hover:text-[#2e3292]'>Track your Order</a>
              </Link>
            </div>
            <div className="flex text-center text-xs gap-2">
              <i className='bx bx-location-plus text-gray-500 text-xl'></i>
              <Link href={'/'} legacyBehavior>
                <a className='hover:text-[#2e3292]'>Retail Stores</a>
              </Link>
            </div>
            
            
          </div>

          <div className="col-span-1 flex flex-col gap-2.5 text-gray-500">
            <h1 className='text-[#2e3292] font-semibold'>Security & Payment</h1>
            <Image src={'/sapnaHome/accepted-payment.png'} alt='' height={100} width={250}/>
          </div>
        </div>
      </footer>
      <footer className='bg-[#2e3292] p-3'>
        <div className="container w-[90%] mx-auto flex justify-between font-semibold flex-col md:flex-row md:gap-0 gap-6">
          <div>
            <p className='text-white  text-xs'>© 2001-2022 Sapna Infoway Private Limited. All rights reserved.</p>
          </div>

          <div className="flex gap-4 md:flex-row flex-col">
            {
              menus.map((title, titleIndex)=>(
                <Link href={title.href} key={titleIndex} legacyBehavior>
                  <a className='text-white text-xs capitalize hover:text-gray-300'>{title.title}</a>
                </Link>
              ))
            }
          </div>

          <div className="flex gap-4">
            {
              social.map((title, titleIndex)=>(
                <Link href={title.href} key={titleIndex} legacyBehavior>
                  <a className='text-white text-xs capitalize hover:text-gray-300'>{title.title}</a>
                </Link>
              ))
            }
          </div>
          
        </div>
      </footer>

      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null} closeIcon={false} width={'650px'}>
        <div className="flex relative">
            <div className=" bg-[#2e3292] px-10 h-[534px] absolute -top-5 -left-6 flex flex-col gap-8 justify-center items-center">
              <Image src={'/sapnaHome/invertLogo.png'} width={130} height={90} alt='inverted-logo'></Image>
              <div className="flex flex-col gap-3">
                {
                  features.map((feature, fetatureIndex)=>(
                    <div key={fetatureIndex} className="flex text-xs items-center gap-2 text-white">
                      <i className='bx bx-check-circle text-lg'></i>
                      <p>{feature.title}</p>
                    </div>
                  ))
                }
              </div>
              <Image src={`/sapnaHome/${activeTab.modalImg}.png`} width={150} height={90} alt='signup-logo'></Image>
            </div>

            <div className="relative ml-auto w-3/5 h-[494px]">
                <Tabs type='card' activeKey={activeTab.key} onTabClick={onTabChangebytab}>
                  <Tabs.TabPane 
                    key={1} 
                    tab={
                      <h1 className='capitalize text-[#2e3292] font-semibold'>new user</h1>
                    }>
                    <div className="px-2">
                      <Form onFinish={(values)=>console.log(values)}
                        name='new-user'
                        className='border-b border-gray-300'
                        form={signupForm}
                      >
                        <Form.Item
                        name='fullname'
                          rules={[
                            {
                              required: true,
                              message: (
                                <div className='flex gap-1 items-center'>
                                  <InfoCircleOutlined/>
                                  <span>Input a valid fullname</span>
                                </div>
                              )
                            }
                          ]}
                        >
                          <Input placeholder='full name' className='py-2 focus:placeholder:text-gray-600  placeholder:text-gray-500 font-semibold capitalize'/>
                        </Form.Item>
                        <Form.Item 
                        name='mobile'
                          rules={[
                            {
                              required: true,
                              message: (
                                <div className='flex gap-1 items-center'>
                                  <InfoCircleOutlined/>
                                  <span>Input a valid Number</span>
                                </div>
                              )
                            }
                          ]}
                        >
                          <InputNumber id='custom-mob' placeholder='enter 10 digit mobile' className='py-1 w-full'/>
                        </Form.Item>
                        <Form.Item
                        name='email'
                          rules={[
                            {
                              required:true,
                              message: (
                                <div className='flex gap-1 items-center'>
                                  <InfoCircleOutlined/>
                                  <span>Input a valid email</span>
                                </div>
                              )
                            },
                            {
                              type: 'email',
                              message: 'The input is not valid E-mail !'
                            }
                          ]}
                        >
                          <Input placeholder='email address' className='py-2 focus:placeholder:text-gray-600  placeholder:text-gray-500 font-semibold capitalize'/>
                        </Form.Item>
                        <Form.Item
                        name='password'
                          rules={[
                            {
                              required: 'true',
                              message: (
                              <div className='flex gap-1 items-center'>
                                <InfoCircleOutlined /> <span>Input a valid password</span>
                              </div>
                              )
                            },
                            {
                              type: 'string',
                              message: 'The input is not valid Password !'
                            }
                          ]}
                        >
                          <Input.Password id='custom-pass' placeholder='Set a password' className='py-2 '/>
                        </Form.Item>
                        <p className='justify-center text-[16px] flex gap-1 text-gray-400 mb-6'>
                          <InfoCircleOutlined />
                          Password must be atleast 6 characters
                        </p>
                        <Form.Item>
                          <button type='submit' className='bg-orange-500 rounded py-2 w-full font-semibold uppercase text-white'>signup & verify number</button>
                        </Form.Item>
                      </Form>
                      <button className='text-[#2e3292] text-center font-semibold w-full py-4 hover:text-[#585c97]' onClick={()=>onTabChange('2','loginNew')}>Click here if you are an existing user</button>
                    </div>
                  </Tabs.TabPane>

                  <Tabs.TabPane 
                    key={2} 
                    tab={
                      <h1 className='capitalize text-[#2e3292] font-semibold'>existing user</h1>
                    }>
                    <div className="px-2 overflow-y-auto h-[450px]">
                      <Form onFinish={(values)=>alert(values)} form={loginForm}>
                      <Form.Item
                        name='email'
                          rules={[
                            {
                              required:true,
                              message: (
                                <div className='flex gap-1 items-center'>
                                  <InfoCircleOutlined/>
                                  <span>Input a valid email</span>
                                </div>
                              )
                            },
                            {
                              type: 'email',
                              message: 'The input is not valid E-mail !'
                            }
                          ]}
                        >
                          <Input placeholder='email address' className='py-2 focus:placeholder:text-gray-600 placeholder:text-gray-500 capitalize font-semibold'/>
                        </Form.Item>
                        <Form.Item
                        name='password'
                          rules={[
                            {
                              required: 'true',
                              message: (
                              <div className='flex gap-1 items-center'>
                                <InfoCircleOutlined /> <span>Input a valid password</span>
                              </div>
                              )
                            },
                            {
                              type: 'string',
                              message: 'The input is not valid Password !'
                            }
                          ]}
                        >
                          <Input.Password id='custom-pass' placeholder='Enter password' className='py-2 '/>
                        </Form.Item>
                        <Form.Item>
                           <button type='submit' className='bg-orange-500 w-full py-2 uppercase font-bold text-white rounded'>continue</button>
                        </Form.Item>
                        <Link href={'/forgot-password'} legacyBehavior>
                          <a className='font-bold ml-56 text-[#2e3292]'>forgot password ?</a>
                        </Link>
                      </Form>
                      <div className="relative py-6">
                        <div className="border border-gray-300"></div>
                        <p className='absolute top-3 left-40 rounded-full bg-white px-3'>or</p>
                      </div>
                      <div className="flex gap-2 items-center text-gray-700">
                        <i className='bx bx-globe text-[21px]'></i>
                        <span className='font-semibold text-[15px]'>Login via your social network</span>
                      </div>
                      <div className="p-5">
                        <button className='flex border-2 shadow-sm px-3 py-1 rounded-md gap-4'>
                          <Image src={'/sapnaHome/Google-logo.png'} alt='google-logo' width={26} height={30}/>
                          <span className='font-semibold'>Google</span>
                        </button>
                      </div>
                      <button className='text-[#2e3292] text-center font-semibold w-full py-4 hover:text-[#585c97]' onClick={()=>onTabChange('1', 'signupNew')}>New Users can click here to signup</button>
                    </div>
                  </Tabs.TabPane>
                </Tabs>
            </div>
        </div>
        <i className='bx bx-x-circle text-xl absolute top-3 right-2.5 text-gray-400' onClick={handleCancel}></i>
      </Modal>

    </>
  )
}

export default Layout 

  