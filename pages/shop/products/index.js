import axios from "axios";
import Products from "@/components/products";
import { useDispatch } from "react-redux";
import { setBooks } from "@/redux/slices/books.slice";

const AllProducts = ({books})=>{
    const dispatch = useDispatch();
    dispatch(setBooks(books))
    return(
        <Products />
    )
}

export default AllProducts;

export const getStaticProps = async ()=>{
    try {
        const {data:books} = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/books`);
        return{
            props: {
                books
            }
        }
    } 
    catch (err) 
    {
        console.log("Error in fetching", err.message);
        return{
            props: {
                books: []
            }
        }
    }
}