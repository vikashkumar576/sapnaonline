import axios from "axios";
import Slug from "@/components/products/slug";
import { useDispatch } from "react-redux";
import { setSlug } from "@/redux/slices/slug.slice";
import { setBooks } from "@/redux/slices/books.slice";

const SingleProduct = ({book, books})=>{
    const dispatch = useDispatch();
    dispatch(setSlug(book));
    dispatch(setBooks(books));
    return(
        <Slug />
    )
}

export default SingleProduct;

export const getStaticPaths = async ()=>{
    const res  = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/books`);
    const data = await res.json()
    let paths = data.map((item)=>({
        params:  {slug: `${(item.book.title).toLowerCase().split(" ").join("-")}~${item._id}`}
    }))
    console.log(paths);
    return {
        paths : paths,
        fallback: true
    }
}

export const getStaticProps = async ({params})=>{
    try {
        const {slug} = params
        const id = slug.split("~")[1]
        const {data:book} = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/books/${id}`);
        const {data:books} = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/books/?limit=10`);
        return{
            props: {
                book,
                books
            }
        }
    } 
    catch (err) 
    {
        console.log("Error in fetching", err.message);
        return{
            props: {
                book: [],
                books: []
            }
        }
    }
}
