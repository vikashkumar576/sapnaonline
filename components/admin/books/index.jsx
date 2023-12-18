import axios from "axios";
import AWS from "@/modules/aws.modules";
import useSWR, {mutate} from "swr";
import AdminLayout from "@/components/shared/admin-layout";
import React, { useState } from 'react';
import { PlusCircleTwoTone, PlusOutlined } from '@ant-design/icons';
import { Button, Card, Col, DatePicker, Drawer, Empty, Form, Input, InputNumber, Modal, Pagination, Progress, Row, Select, Tabs, message } from 'antd';
import moment from 'moment';
import Image from "next/image";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const s3 = new AWS.S3()

const fetcher = async (url)=>{
    try {
        const {data} = await axios.get(url)
        return data
    } 
    catch (err) {
        return err
    }
}

const stockfetcher = async (url)=>{
    try {
        const {data} = await axios.get(url)
        return data
    } 
    catch (err) {
        return err
    }
}

const authorLanguages = [
    { "name": "Hindi" },
    { "name": "English" },
    { "name": "Bengali" },
    { "name": "Telugu" },
    { "name": "Sanskrit" },
    { "name": "Marathi" },
    { "name": "Tamil" },
    { "name": "Urdu" },
    { "name": "Gujarati" },
    { "name": "Malayalam" },
    { "name": "Kannada" },
    { "name": "Odia" },
    { "name": "Punjabi" },
    { "name": "Assamese" }
]

const authorGenres = [
    { "genre": "Fiction" },
    { "genre": "Magical Realism" },
    { "genre": "Contemporary Fiction" },
    { "genre": "Fantasy" },
    { "genre": "Classics" },
    { "genre": "Mystery" },
    { "genre": "Dystopian Fiction" },
    { "genre": "Science Fiction" },
    { "genre": "Historical Fiction" },
    { "genre": "Thriller" },
    { "genre": "Romance" },
    { "genre": "Adventure" },
    { "genre": "Horror" },
    { "genre": "Spiritual" },
    { "genre": "Religious" }
]

const Products = () => {

    const [open, setOpen] = useState(false);
    const [openBook, setOpenBook] = useState(false);
    const [publisherOpen, setPublisherOpen] = useState(false)
    const [authorOpen, setAuthorOpen] = useState(false)
    const [formData , setFormData] = useState(null)
    const [bookFormData , setBookFormData] = useState(null)
    const [publisherEdit , setPublisherEdit] = useState(null)
    const [authorEdit , setAuthorEdit] = useState(null)
    const [uploading, setUploading] = useState({
        state: null,
        progress: 0
    })
    const [pagination, setPagination] = useState({
        page: 1,
        pageLimit: 10
    })

    const {data: allPublishers, error: publishersErr , isLoading: publishersLoading } = useSWR(`/api/publisher`, fetcher)
    const {data: allAuthors, error: authorsErr , isLoading: authorsLoading } = useSWR(`/api/author`, fetcher)
    const {data: allStocks, error: stocksErr , isLoading: stocksLoading } = useSWR(`/api/purchase/?page=${pagination.page}&pageLimit=${pagination.pageLimit}`, stockfetcher)
    const {data: bookOption, error: selectErr , isLoading: selectLoading } = useSWR(`/api/purchase/?page=${pagination.page}&pageLimit=0`, stockfetcher)
    const {data: allBooks, error: booksErr , isLoading: booksLoading } = useSWR(`/api/books`, fetcher)

    const [publisherForm] = Form.useForm(null)
    const [authorForm] = Form.useForm(null)
    const [addBookForm] = Form.useForm(null)
    const [createPrdForm] = Form.useForm(null);

    // purchase drawer codes
    const showDrawer = async () => {
        setFormData(null)
        setOpen(true);
    };

    const onClose = () => {
        createPrdForm.resetFields();
        setFormData(null)
        setOpen(false);
    };
    // purchase drawer codes
    // book drawer codes
    const showBookDrawer = async () => {
        setFormData(null)
        setOpenBook(true);
    };

    const onBookClose = () => {
        createPrdForm.resetFields();
        setFormData(null)
        setOpenBook(false);
    };
    // book drawer codes

    // purchase form
    const onFinishForm = async (values)=>{
        try {
            if(!formData) return(
                await axios.post('/api/purchase', values),
                createPrdForm.resetFields(),
                setOpen(false),
                message.success("Purchase success !"),
                setFormData(null),
                mutate(`/api/purchase/?page=${pagination.page}&pageLimit=${pagination.pageLimit}`)
            )

            await axios.put(`/api/purchase/${formData._id}`, values),
            createPrdForm.resetFields(),
            setFormData(null)
            setOpen(false)
            message.success("Purchase updated !"),
            mutate(`/api/purchase/?page=${pagination.page}&pageLimit=${pagination.pageLimit}`)
        } 
        catch (err) {
            console.log(err);
            message.error("something went wrong !")
        }
    }

    // book form
    const onBookFormFinish = async (values)=>{
        try {
            if(!formData) return(
                await axios.post('/api/books', values),
                addBookForm.resetFields(),
                setOpenBook(false),
                message.success("Book added !"),
                setBookFormData(null)
            )

            await axios.put(`/api/books/${bookFormData._id}`, values),
            addBookForm.resetFields(),
            setBookFormData(null)
            setOpenBook(false)
            message.success("Book updated !")
        } 
        catch (err) {
            console.log(err);
            message.error("something went wrong !")
        }
        finally{
            mutate('/api/books')
        }
    }

    // all author related codes starts

    const onEditAuthor = (authorData)=>{
        setAuthorEdit(authorData);
        authorForm.setFieldsValue({
            ...authorData,
            birthDate: moment(authorData.birthDate)
        })
        setAuthorOpen(true)
    }

    const onDeleteAuthor = async (_id)=>{
        try {
            await axios.delete(`/api/author/${_id}`)
            message.success("Author deleted ")
        } 
        catch (err) 
        {
            message.error("Something went wrong")
            console.log(err.message);
        }
        finally{
            mutate('/api/author')
        }
    }

    const addAuthor = ()=>{
        setAuthorOpen(true)
    }

    const authorDropdownRender = (menu) => (
        <div>
          {menu}
          <div style={{ padding: '8px', display: 'flex', justifyContent: 'center' }}>
            <Button
              type="tt"
              icon={<PlusCircleTwoTone />}
              className="bg-green-500 capitalize text-white"
              onClick={addAuthor}
            >
              Add Author
            </Button>
          </div>
        </div>
    )

    const onAuthorFormCancel = ()=>{
        authorForm.resetFields()
        setAuthorOpen(false)
    }

    const onAuthorFormFinish = async (values)=>{
        try {
            if (!authorEdit) return(
                await axios.post('api/author', values),
                message.success("Author added successfully !"),
                authorForm.resetFields()
            )

            await axios.put(`api/author/${authorEdit._id}`, values);
            message.success("Author updated successfully !");
            authorForm.resetFields()
            
        } 
        catch (err) {
            console.log({"Error": err});
            message.error("Failed something went wrong !");
        }
        finally{
            setAuthorOpen(false);
            mutate('/api/author')
        }
    }

    // all author related codes end

    // all publisher related codes starts
    const onEditPublisher = (publisherData)=>{
        setPublisherEdit(publisherData);
        publisherForm.setFieldsValue({
            ...publisherData,
            established: moment(publisherData.established)
        })
        setPublisherOpen(true)
    }

    const onDeletePublisher = async (_id)=>{
        try {
            await axios.delete(`/api/publisher/${_id}`)
            message.success("Publisher deleted ")
        } 
        catch (err) 
        {
            message.error("Something went wrong")
            console.log(err.message);
        }
        finally{
            mutate('/api/publisher')
        }
    }

    const addPublishers = ()=>{
        setPublisherOpen(true)
    }

    const dropdownRender = (menu) => (
        <div>
          {menu}
          <div style={{ padding: '8px', display: 'flex', justifyContent: 'center' }}>
            <Button
              type="tt"
              icon={<PlusCircleTwoTone />}
              className="bg-green-500 capitalize text-white"
              onClick={addPublishers}
            >
              Add Publisher
            </Button>
          </div>
        </div>
      )

    const onPublisherFormCancel = ()=>{
        publisherForm.resetFields()
        setPublisherEdit(null)
        setPublisherOpen(false)
    }

    const onPublisherFormFinish = async (values)=>{
        try {
            if (!publisherEdit) return(
                await axios.post('api/publisher', values),
                message.success("Publisher added successfully !")
                
            )

            await axios.put(`api/publisher/${publisherEdit._id}`, values);
            message.success("Publisher saved successfully !")
        
        } 
        catch (err) {
            console.log({"Error": err});
            message.error("Publisher added failed !");
        }
        finally{
            mutate('/api/publisher')
            setPublisherEdit(null)
            publisherForm.resetFields()
            setPublisherOpen(false)
        }
    }
    // all publisher related codes end

    // all purchase related codes starts
    const onPurchaseItemEdit = (editdata)=>{
        console.log(editdata);
        setFormData(editdata)
        setOpen(true);
        createPrdForm.setFieldsValue({
            ...editdata,
            publishDate : moment(editdata.publishDate)
        })
    }

    const onPurchaseItemDelete = async (id)=>{
        try {
            const resoponse = await axios.delete(`/api/purchase/${id}`)
            console.log(resoponse);
            message.success("Deleted successfully !")
            mutate('/api/purchase')
        } 
        catch (err) {
            message.error("Failed to delete !")
            console.log(err.message);
        }
    }

    // publisher image upload
    const onPublisherImgUpload = (id , index)=>{
        const input = document.createElement("input")
        input.type = "file"
        input.click()
        input.onchange = async ()=>{
            const file = input.files[0]
            input.remove()
            let path = `publishers/${file.name}`
            const uploader = s3.upload({
            Bucket: process.env.NEXT_PUBLIC_S3_BUCKET,
            Key: path,
            Body: file,
            ACL: 'public-read'
            })
            uploader.on('httpUploadProgress',({total, loaded})=>{
            const percent = Math.floor((loaded*100)/total)
            setUploading({
                ...uploading,
                state: index,
                progress: percent
            })
            })
            try {
            const {Key} = await uploader.promise()
            await axios.put(`/api/publisher/${id}`, {$set: {image : Key}})
            mutate(`/api/publisher`)
            setUploading({
                state: null,
                progress: 0
            })
            }
            catch(err)
            {
            console.log(err)
            }
        }
    }

    // purchase image upload
    const onStockImgUpload = (id , index)=>{
        const input = document.createElement("input")
        input.type = "file"
        input.click()
        input.onchange = async ()=>{
            const file = input.files[0]
            input.remove()
            const uploader = s3.upload({
            Bucket: process.env.NEXT_PUBLIC_S3_BUCKET,
            Key: file.name,
            Body: file,
            ACL: 'public-read'
            })
            uploader.on('httpUploadProgress',({total, loaded})=>{
            const percent = Math.floor((loaded*100)/total)
            setUploading({
                ...uploading,
                state: index,
                progress: percent
            })
            })
            try {
            const {Key} = await uploader.promise()
            await axios.put(`/api/purchase/${id}`, {$set: {image : Key}})
            mutate(`/api/purchase/?page=${pagination.page}&pageLimit=${pagination.pageLimit}`)
            setUploading({
                state: null,
                progress: 0
            })
            }
            catch(err)
            {
            console.log(err)
            }
        }
    }

    // author image upload
    const onAuthorImgUpload = (id , index)=>{
        const input = document.createElement("input")
        input.type = "file"
        input.click()
        input.onchange = async ()=>{
        const file = input.files[0]
        input.remove()
        const path = `authors/${file.name}`
        const uploader = s3.upload({
          Bucket: process.env.NEXT_PUBLIC_S3_BUCKET,
          Key: path,
          Body: file,
          ACL: 'public-read'
        })
        uploader.on('httpUploadProgress',({total, loaded})=>{
          const percent = Math.floor((loaded*100)/total)
          setUploading({
            ...uploading,
            state: index,
            progress: percent
          })
        })
        try {
          const {Key} = await uploader.promise()
          await axios.put(`/api/author/${id}`, {$set: {image : Key}})
          mutate(`/api/author`)
          setUploading({
            state: null,
            progress: 0
          })
        }
        catch(err)
        {
          console.log(err)
        }
        
        }
    }

    // stock pagination change
    const onPaginationChange = (page, pageLimit)=>{
        setPagination({
            ...pagination,
            page,
            pageLimit
        })
    }

    // pagination 
    const itemRender = (_, type, originalElement) => {
        if (type === 'prev') {
        return <a>Previous</a>;
        }
        if (type === 'next') {
        return <a>Next</a>;
        }
        return originalElement;
    };

  return (
    <AdminLayout pageName="2" title='Products - Admin' header='stocks'>
        <Tabs>
            <Tabs.TabPane
                tab={(
                    <Button className="pl-2 ml-2" icon={<PlusOutlined />} onClick={showDrawer}>Add stocks</Button>
                )}
                key={1}
            >
                <div className="p-2 ">
                    {
                        allStocks && allStocks.data.length && <div className="grid grid-cols-5 gap-6">
                            {
                                allStocks && allStocks.data.map((stock, stockIndex)=>(
                                    <Card 
                                        key={stockIndex} 
                                        className="shadow-md hover:shadow-xl"
                                        cover={
                                        (uploading.state === stockIndex) ? 
                                        <Progress type="circle" percent={uploading.progress} size={90} /> :
                                            <div className="w-20 h-52 relative">
                                                <Image 
                                                    alt="product" 
                                                    src={stock.image ? (process.env.NEXT_PUBLIC_S3_BUCKET_ENDPOINT+stock.image) : "/upload.png"}
                                                    onClick={()=>onStockImgUpload(stock._id,stockIndex)} 
                                                    layout="fill"
                                                />
                                            </div>
                                        }
                                    >
                                        <p className="capitalize font-semibold">title :  <span className="font-[400]">{stock.title}</span></p>
                                        <p className="capitalize font-semibold">price : <span className="font-[400]">{stock.price}</span></p>
                                        <p className="capitalize font-semibold">amount :  <span className="font-[400]">{stock.amount}</span></p>
                                        <p className="capitalize font-semibold">quantity : <span className="font-[400]">{stock.quantity}</span></p>
                                        <div className="flex justify-between mt-3">
                                            <Button type="primary" className="bg-blue-400" onClick={()=> onPurchaseItemEdit(stock)} >Edit</Button>
                                            <Button type="primary" className="bg-rose-400" onClick={()=>onPurchaseItemDelete(stock._id)} >Delete</Button>
                                        </div>
                                    </Card>
                                ))
                            }
                        </div>
                    }
                    {
                        allStocks && !allStocks.data.length && <div className="">
                            not available
                        </div>
                    }
                </div>
                <div className="fixed bottom-0 w-full ">
                    <Pagination 
                        className="text-center"
                        total={allStocks && allStocks.total} 
                        itemRender={itemRender} 
                        current={pagination.page}
                        pageSize={pagination.pageLimit}
                        onChange={(page, pageLimit)=>onPaginationChange(page, pageLimit)}
                    />
                </div>
            </Tabs.TabPane>
            <Tabs.TabPane
                tab={(
                    <Button className="pl-2 ml-2" icon={<PlusOutlined />} onClick={showBookDrawer}>Add books</Button>
                )}
            >
                <div className="p-3">
                    {
                        allBooks && <div className="grid grid-cols-4 gap-12">
                            {
                                allBooks && allBooks.map((book, bookIndex)=>(
                                    <Card key={bookIndex}
                                        className="col-span-1 transform hover:shadow-indigo-500/20 hover:shadow-lg hover:-translate-y-3 duration-300"
                                    >
                                        <div className="pb-4">
                                            <Image 
                                                src={process.env.NEXT_PUBLIC_S3_BUCKET_ENDPOINT+book.book.image}
                                                alt={String(book.book.image).split(".")[0]}
                                                width={120}
                                                height={100}
                                                className="mx-auto"
                                            />
                                        </div>
                                         <p className="capitalize font-semibold">book name :  <span className="font-[400]">{book.book.title}</span></p>
                                        <p className="capitalize font-semibold">cost price : <span className="font-[400]">{book.book.price}</span></p>
                                        <p className="capitalize font-semibold">selling price : <span className="font-[400]">{book.sellPrice}</span></p>
                                        <p className="capitalize font-semibold">discount &#40;in %&#41;: <span className="font-[400]">{book.discount}</span></p>
                                        <p className="capitalize font-semibold">book language : <span className="font-[400]">{book.book.language}</span></p>
                                        <p className="capitalize font-semibold">author : <span className="font-[400]">{book.book.author.authorName}</span></p>
                                        <p className="capitalize font-semibold">publisher : <span className="font-[400]">{book.book.publisher.publisherName}</span></p>
                                        <div className="flex justify-between mt-3">
                                            <Button type="primary" className="bg-blue-400" onClick={()=> onEditAuthor(author)} >Edit</Button>
                                            <Button type="primary" className="bg-rose-400" onClick={()=>onDeleteAuthor(author._id)} >Delete</Button>
                                        </div>
                                    </Card>
                                ))
                            }
                        </div>
                    }
                    {
                        allBooks && !allBooks.length && <div className="flex justify-center">
                            <Empty className="mt-44"/>
                        </div>
                    }
                </div>
            </Tabs.TabPane>
            <Tabs.TabPane
                tab={(
                    <button  className="pl-2 capitalize">Manage publisher</button>
                )}
                key={2}
            >
                <div className="p-2">
                    {
                        allPublishers && <div className="grid grid-cols-6 gap-3">
                           {
                                allPublishers && allPublishers.map((publisher, publisherIndex)=>(
                                    <Card 
                                        key={publisherIndex} 
                                        className="shadow-md hover:shadow-xl"
                                        cover={
                                        (uploading.state === publisherIndex) ? 
                                        <Progress type="circle" percent={uploading.progress} size={90} /> :
                                            <div className="w-20 h-52 relative">
                                                <Image 
                                                    alt={publisher.image}
                                                    src={publisher.image ? (process.env.NEXT_PUBLIC_S3_BUCKET_ENDPOINT+publisher.image) : "/upload.png"}
                                                    onClick={()=>onPublisherImgUpload(publisher._id,publisherIndex)} 
                                                    layout="fill"
                                                />
                                            </div>
                                        }
                                        >
                                        {
                                            console.log(publisher._id)
                                        }
                                        <p className="capitalize font-semibold">name :  <span className="font-[400]">{publisher.publisherName}</span></p>
                                        <p className="capitalize font-semibold">mobile : <span className="font-[400]">{publisher.mobile}</span></p>
                                        <p className="capitalize font-semibold">established on  : <span className="font-[400]">{publisher.established}</span></p>
                                        <div className="flex justify-between mt-3">
                                            <Button type="primary" className="bg-blue-400" onClick={()=> onEditPublisher(publisher)} >Edit</Button>
                                            <Button type="primary" className="bg-rose-400" onClick={()=>onDeletePublisher(publisher._id)} >Delete</Button>
                                        </div>
                                    </Card>
                                ))
                            }
                        </div>
                    }
                    {
                        allPublishers && !allPublishers.length && <div className="">
                            not available
                        </div>
                    }
                </div>
            </Tabs.TabPane>
            <Tabs.TabPane
                tab={(
                    <button  className="pl-2 capitalize">Manage author</button>
                )}
                key={3}
            >
                <div className="p-2">
                    {
                        allAuthors && <div className="grid grid-cols-4 gap-6">
                            {
                                allAuthors && allAuthors.map((author, authorIndex)=>(
                                    <Card 
                                        key={authorIndex} 
                                        className="shadow-md hover:shadow-xl"
                                        cover={
                                        (uploading.state === authorIndex) ? 
                                        <Progress type="circle" percent={uploading.progress} size={90} /> :
                                            <div className="w-20 h-52 relative">
                                                <Image 
                                                    alt={author.image}
                                                    src={author.image ? (process.env.NEXT_PUBLIC_S3_BUCKET_ENDPOINT+author.image) : "/upload.png"}
                                                    onClick={()=>onAuthorImgUpload(author._id,authorIndex)} 
                                                    layout="fill"
                                                />
                                            </div>
                                        }
                                    >
                                        <p className="capitalize font-semibold">name :  <span className="font-[400]">{author.authorName}</span></p>
                                        <p className="capitalize font-semibold">mobile : <span className="font-[400]">{author.image}</span></p>
                                        <p className="capitalize font-semibold">genre :  <span className="font-[400]">{author.genre.join(", ")}</span></p>
                                        <p className="capitalize font-semibold">date of birth : <span className="font-[400]">{author.birthDate}</span></p>
                                        <div className="flex justify-between mt-3">
                                            <Button type="primary" className="bg-blue-400" onClick={()=> onEditAuthor(author)} >Edit</Button>
                                            <Button type="primary" className="bg-rose-400" onClick={()=>onDeleteAuthor(author._id)} >Delete</Button>
                                        </div>
                                    </Card>
                                ))
                            }
                        </div>
                    }
                    {
                        !allStocks && <div className="">
                            not available
                        </div>
                    }
                </div>
            </Tabs.TabPane>
        </Tabs>
        {/* purchase drawer */}
        <Drawer
            title="Add a book stock"
            width={560}
            onClose={onClose}
            open={open}
        >
            <Form layout="vertical" 
                hideRequiredMark 
                form={createPrdForm} 
                onFinish={onFinishForm}
            >
                <Row gutter={16}>
                    <Col span={12}>
                    <Form.Item
                        name="title"
                        label="Title"
                        rules={[
                        {
                            required: true,
                            message: 'Please enter title',
                        },
                        ]}
                    >
                        <Input placeholder="Please enter title" />
                    </Form.Item>
                    </Col>
                    <Col span={12}>
                    <Form.Item
                        name="language"
                        label="Book language"
                        rules={[
                        {
                            required: true,
                            message: 'Please select language',
                        },
                        ]}
                    >
                        <Select placeholder="Choose language">
                            {
                                authorLanguages.map((language, lanIndex)=>(
                                    <Select.Option key={lanIndex} value={language.name}>
                                        {language.name}
                                    </Select.Option>
                                ))
                            }
                        </Select>
                    </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                    <Form.Item
                        name="price"
                        label="Price"
                        rules={[
                        {
                            required: true,
                            message: 'Please enter price',
                        },
                        ]}
                    >
                        <InputNumber 
                            // onChange={(value)=> onPriceChange(value)} 
                            placeholder="Please enter price" className="w-full"
                        />
                    </Form.Item>
                    </Col>
                    <Col span={12}>
                    <Form.Item
                        name="binding"
                        label="Binding"
                    >
                        <Input placeholder="Please enter binding" className="w-full"/>
                    </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                    <Form.Item
                            name="author"
                            label="Author"
                            rules={[
                            {
                                required: true,
                                message: 'Please select an author',
                            },
                            ]}
                        >
                            <Select dropdownRender={authorDropdownRender} placeholder="Select an author" >
                                {
                                    allAuthors && allAuthors.map((author , authorIndex)=>(
                                        <Select.Option key={authorIndex} value={author._id}>
                                            <p className="capitalize">{author.authorName}</p>
                                        </Select.Option>
                                    ))
                                }
                                <Select.Option value={'na'}>
                                    <p className="capitalize">na</p>
                                </Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                    <Form.Item
                        name="subject"
                        label="Subject (if any)"
                    >
                        <Input placeholder="Please enter subject" className="w-full"/>
                    </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="publisher"
                            label="Publisher"
                            rules={[
                            {
                                required: true,
                                message: 'Please select a publisher',
                            },
                            ]}
                        >
                            <Select dropdownRender={dropdownRender} placeholder="Select an publisher" >
                                {
                                    allPublishers && allPublishers.map((publisher , publisherIndex)=>(
                                        <Select.Option key={publisherIndex} value={publisher._id}>
                                            <p className="capitalize">{publisher.publisherName}</p>
                                        </Select.Option>
                                    ))
                                }
                                <Select.Option value={'na'}>
                                    <p className="capitalize">na</p>
                                </Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                    <Form.Item
                        name="edition"
                        label="Edition"
                    >
                        <InputNumber placeholder="Please enter edition" className="w-full"/>
                    </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                    <Form.Item
                        name="pages"
                        label="Pages"
                        rules={[
                        {
                            required: true,
                            message: 'Please enter the pages',
                        },
                        ]}
                    >
                        <InputNumber className="w-full" placeholder="Please enter the pages"/>
                        
                    </Form.Item>
                    </Col>
                    <Col span={12}>
                    <Form.Item
                        name="publishDate"
                        label="Published date"
                        rules={[
                        {
                            required: true,
                            message: 'Please choose the date',
                        },
                        ]}
                    >
                        <DatePicker
                        style={{
                            width: '100%',
                        }}
                        
                        getPopupContainer={(trigger) => trigger.parentElement}
                        />
                    </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                    <Form.Item
                        name="quantity"
                        label="Quantity"
                        rules={[
                        {
                            required: true,
                            message: 'Please enter the quantity',
                        },
                        ]}
                    >
                        <InputNumber 
                            // onChange={(value)=> onQtyChange(value)} 
                            className="w-full" placeholder="Please enter the quantity"
                        />
                    </Form.Item>
                    </Col>
                    <Col span={12}>
                    <Form.Item
                        name="amount"
                        label="Amount"
                        rules={[
                        {
                            required: true,
                            message: 'Please enter the amount',
                        },
                        ]}
                    >
                        <InputNumber  className="w-full" placeholder="Please enter the amount"/>
                    </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                    <Form.Item
                        name="description"
                        label="Description"
                    >
                        <Input.TextArea rows={4} placeholder="Please enter product description" />
                    </Form.Item>
                    </Col>
                </Row>
                <Form.Item>
                    {
                        !formData &&   <Button htmlType="submit" className="capitalize bg-green-600 font-bold text-white">create product</Button>
                    }
                    {
                        formData &&   <Button htmlType="submit" className="capitalize bg-green-600 font-bold text-white">update product</Button>
                    }
                </Form.Item>
            </Form>
        </Drawer>
        {/* purchase drawer */}
        {/* books drawer */}
        <Drawer
            title="Add a book"
            width={500}
            onClose={onBookClose}
            open={openBook}
        >
            <Form layout="vertical" 
                hideRequiredMark 
                form={addBookForm} 
                onFinish={onBookFormFinish}
            >
                <Form.Item
                    name="book"
                    label="Select a book"
                    rules={[
                    {
                        required: true,
                        message: 'Please select a book',
                    },
                    ]}
                >
                    <Select placeholder="Select a book" >
                        {
                            bookOption && bookOption.data.map((stock , stockIndex)=>(
                                <Select.Option key={stockIndex} value={stock._id}>
                                    <p className="capitalize">{stock.title}</p>
                                </Select.Option>
                            ))
                        }
                    </Select>
                </Form.Item>
                <Form.Item
                    name="sellPrice"
                    label="Selling Price"
                    rules={[
                    {
                        required: true,
                        message: 'Please enter price',
                    },
                    ]}
                >
                    <InputNumber 
                        // onChange={(value)=> onPriceChange(value)} 
                        placeholder="Please enter price" className="w-full"
                    />
                </Form.Item>
                <Form.Item
                    name="discount"
                    label="Discount"
                >
                    <InputNumber 
                        // onChange={(value)=> onPriceChange(value)} 
                        placeholder="Please enter discount" className="w-full"
                    />
                </Form.Item>
                <Form.Item
                    name="keywords"
                    label="Keywords"
                >
                    <Input.TextArea rows={4} placeholder="Please enter product keywords" />
                </Form.Item>
                <Form.Item>
                    {
                        !formData &&   <Button htmlType="submit" className="capitalize bg-green-600 font-bold text-white">add book</Button>
                    }
                    {
                        formData &&   <Button htmlType="submit" className="capitalize bg-green-600 font-bold text-white">save book</Button>
                    }
                </Form.Item>
            </Form>
        </Drawer>
        {/* books drawer */}
        {/* publishers and auther models */}

        <Modal
            title="Add Author"
            style={{
            top: 20,
            right: -100,
            }}
            closeIcon={false}
            open={authorOpen}
            footer={null}
            zIndex={1001}
        >
            <Form onFinish={onAuthorFormFinish} form={authorForm} className="grid grid-cols-2 gap-2">
                <Form.Item
                    name='authorName'
                    rules={[
                        {
                            required: true,
                            message: 'Author name required'
                        }
                    ]}
                >
                    <Input className="placeholder:capitalize placeholder:text-gray-400" placeholder="enter author name"/>
                </Form.Item>
                <Form.Item
                    name='mobile'
                    rules={[
                        {
                            required: true,
                            message: 'Mobile required'
                        }
                    ]}
                >
                    <InputNumber className="w-full"  placeholder="Enter Mobile"/>
                </Form.Item>
                <Form.Item
                    name='language'
                    rules={[
                        {
                            required: true,
                            message: 'Please select language'
                        }
                    ]}
                >
                    
                    <Select placeholder="Choose language" mode="multiple" >
                        {
                            authorLanguages.map((language, lanIndex)=>(
                                <Select.Option key={lanIndex} value={language.name}>
                                    {language.name}
                                </Select.Option>
                            ))
                        }
                    </Select>
                </Form.Item>
                <Form.Item
                    name='gender'
                    rules={[
                        {
                            required: true,
                            message: 'Please select gender'
                        }
                    ]}
                >
                    
                    <Select placeholder="Select gender">
                       <Select.Option value="male">Male</Select.Option>
                       <Select.Option value="female">Female</Select.Option>
                       <Select.Option value="custom">Custom</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name='genre'
                    rules={[
                        {
                            required: true,
                            message: 'Please select genre'
                        }
                    ]}
                >
                    
                    <Select placeholder="Select genre" mode="multiple" >
                        {
                            authorGenres.map((author, genreIndex)=>(
                                <Select.Option key={genreIndex} value={author.genre}>
                                    {author.genre}
                                </Select.Option>
                            ))
                        }
                    </Select>
                </Form.Item>
                <Form.Item
                    name="birthDate"
                    rules={[
                    {
                        required: true,
                        message: 'Please choose the date',
                    },
                    ]}
                >
                    <DatePicker
                    style={{
                        width: '100%',
                    }}
                    getPopupContainer={(trigger) => trigger.parentElement}
                    />
                </Form.Item>
                <Form.Item
                    name="address"
                    rules={[
                    {
                        required: true,
                        message: 'Please enter publisher full address',
                    },
                    ]}
                >
                    <Input.TextArea rows={3} className="placeholder:text-gray-400" placeholder="Please enter publisher full address" />
                </Form.Item>
                <Form.Item
                    name="keywords"
                    rules={[
                    {
                        required: true,
                        message: 'Please enter publisher keywords',
                    },
                    ]}
                >
                    <Input.TextArea rows={3} className="placeholder:text-gray-400" placeholder="Please enter keywords" />
                </Form.Item>
                <div className="col-span-2 ml-auto">
                    <Button type="default" className=" font-semibold mr-4 border capitalize" onClick={onAuthorFormCancel}>cancel</Button>
                    {
                        !authorEdit && <Button htmlType="submit" className="bg-blue-500 font-semibold text-white capitalize">add</Button>
                    }
                    {
                        authorEdit && <Button htmlType="submit" className="bg-blue-500 font-semibold text-white capitalize">save</Button>

                    }
                </div>
            </Form>
        </Modal>

        <Modal
            title="Add Publisher"
            style={{
            top: 20,
            right: -100,
            }}
            closeIcon={false}
            open={publisherOpen}
            footer={null}
            zIndex={10000}
        >
            <Form onFinish={onPublisherFormFinish} form={publisherForm} className="grid grid-cols-2 gap-2">
                <Form.Item
                    name='publisherName'
                    rules={[
                        {
                            required: true,
                            message: 'Publisher name required'
                        }
                    ]}
                >
                    <Input className="placeholder:capitalize placeholder:text-gray-400" placeholder="enter publisher name"/>
                </Form.Item>
                <Form.Item
                    name='mobile'
                    rules={[
                        {
                            required: true,
                            message: 'Mobile required'
                        }
                    ]}
                >
                    <InputNumber className="w-full"  placeholder="Enter Mobile"/>
                </Form.Item>
                <Form.Item
                    name='slogan'
                >
                    <Input className="placeholder:text-gray-400" placeholder="Enter slogan"/>
                </Form.Item>
                <Form.Item
                    name="established"
                    rules={[
                    {
                        required: true,
                        message: 'Please choose the date',
                    },
                    ]}
                >
                    <DatePicker
                    style={{
                        width: '100%',
                    }}
                    getPopupContainer={(trigger) => trigger.parentElement}
                    />
                </Form.Item>
                <Form.Item
                    name="address"
                    rules={[
                    {
                        required: true,
                        message: 'Please enter publisher full address',
                    },
                    ]}
                >
                    <Input.TextArea rows={3} className="placeholder:text-gray-400" placeholder="Please enter publisher full address" />
                </Form.Item>
                <Form.Item
                    name="keywords"
                    rules={[
                    {
                        required: true,
                        message: 'Please enter publisher keywords',
                    },
                    ]}
                >
                    <Input.TextArea rows={3} className="placeholder:text-gray-400" placeholder="Please enter keywords" />
                </Form.Item>
                <div className="col-span-2 ml-auto">
                    <Button type="default" className=" font-semibold mr-4 border capitalize" onClick={onPublisherFormCancel}>cancel</Button>
                    {
                        !publisherEdit && <Button htmlType="submit" className="bg-blue-500 font-semibold text-white capitalize">add</Button>
                    }
                    {
                        publisherEdit && <Button htmlType="submit" className="bg-blue-500 font-semibold text-white capitalize">save</Button>
                    }
                    
                </div>
            </Form>
        </Modal>

        {/* publishers and auther models */}
    </AdminLayout>
  )
}

export default Products