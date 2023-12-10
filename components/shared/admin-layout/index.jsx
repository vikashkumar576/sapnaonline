import React, { useState } from 'react';
import { BarChartOutlined, DashboardOutlined,  LoginOutlined,  MenuFoldOutlined, MenuUnfoldOutlined, ShopOutlined, UserOutlined, } from '@ant-design/icons';
import { Layout, Menu, Button, theme, Dropdown, Tooltip } from 'antd';
import {useRouter} from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const { Header, Sider, Content } = Layout;

const AdminLayout = ({children, pageName, title, header}) => {
  const route = useRouter()
  const product = ()=>{
    route.push('/admin/products')
  }
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/sapnaHome/sapna-logo.png" />
        </Head>
        <nav className="bg-[#5358f0] p-3 border-b border-white shadow-lg sticky top-0 z-50">
            <ul className="flex justify-between px-16">
                <li className="text-2xl font-bold text-slate-700 flex gap-4 items-center">
                    <Image alt='logo' src={'/sapnaHome/invertLogo.png'} width={100} height={100} />
                    Admin 
                </li>
                <Tooltip 
                    title={
                        <div className='w-32 p-2 flex flex-col gap-2 font-bold'>
                            <p className='hover:bg-blue-600 px-2 py-1 rounded cursor-pointer'> <UserOutlined className='mr-2'/> Profile</p>
                            <p className='hover:bg-blue-600 px-2 py-1 rounded cursor-pointer'> <LoginOutlined  className='mr-2'/> logout</p>
                        </div>
                    } 
                    className="flex items-center" 
                    placement='bottomRight' 
                    color='#8387ff'
                >
                    <p className='capitalize font-semibold rounded-l py-1 px-2 bg-gray-100'><UserOutlined className='mr-1'/>admin name</p>
                    <i className='bx bx-dots-horizontal-rounded text-black bg-gray-100 py-1.5 px-2 text-xl rounded-r'></i>
                </Tooltip>
            </ul>
        </nav>
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed} style={{background: '#8387ff'}} >
                <Menu
                    style={{background: '#8387ff'}}
                    mode="inline"
                    defaultSelectedKeys={pageName}
                    items={[
                        {
                        key: '1',
                        icon: <DashboardOutlined style={{fontWeight: 'bold'}} />,
                        label: <Link href={'/admin'}>Dashboard</Link>,
                        },
                        {
                        key: '2',
                        icon: <ShopOutlined />,
                        label: <Link href={'/admin/products'}>Stocks</Link>,
                        },
                        {
                        key: '3',
                        icon: <BarChartOutlined />,
                        label: <Link href={'/admin/statistics'}>Statistics</Link>,
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                className='bg-white p-0 w-full'
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        className='text-[16px] capitalize font-semibold'
                    >
                        {header}
                    </Button>
                </Header>
                <Content className='bg-gray-100 p-3'>
                    <div className='overflow-auto h-screen bg-white thumb controller scrollbar scroll'>{children}</div>
                </Content>
            </Layout>
        </Layout>
    </>
  );
};
export default AdminLayout