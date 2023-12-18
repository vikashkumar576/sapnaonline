import axios from "axios";
import Home from "@/components/home";
import { useDispatch } from "react-redux";
import { setAuthors } from "@/redux/slices/authors.slice";
import { setPublishers } from "@/redux/slices/publishers.slice";
import { setBooks } from "@/redux/slices/books.slice";

const AllHomepageDatas = ({authors, publishers, books})=>{
        // console.log(authors);
        const dispatch = useDispatch()
        dispatch(setAuthors(authors))
        dispatch(setPublishers(publishers))
        dispatch(setBooks(books))
    return <Home />
} 
export default AllHomepageDatas;

export const getStaticProps = async ()=>{
    try {
        const {data: authors} = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/author`);
        const {data:publishers} = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/publisher`);
        const {data:books} = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/books`);
        return{
            props: {
                authors,
                publishers,
                books
            }
        }
    } 
    catch (err) 
    {
        console.log("Error in fetching", err.message);
        return{
            props: {
                authors: [],
                publishers: [],
                books: []
            }
        }
    }
}