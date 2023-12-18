import Layout from "../shared/layout";
import Hero from "./hero";
import Releases from "./releases";
import Advertise from "./advertise";
import Exam from "./exam";
import School from "./school";
import Sellers from "./sellers";
import Authors from "./authors";
import Publishers from "./publishers";
import ScrollToTopButton from "../shared/scroll";

 const Home = ({authors, publishers, newReleases})=>{
   return (
        <Layout title="Buy Books Online,Bookstore In Convinient price" description="welcome to sapnaonline store" keywords="sapnaonline, onlinebook store, newonline book store, sapnabooks, books estore">
            <Hero/>
            <Releases newReleases={newReleases} />
            <Advertise />
            <Exam />
            <School />
            <Sellers />
            <Authors allAuthors={authors} />
            <Publishers allPublishers={publishers}/>
            <ScrollToTopButton />
        </Layout>
   )
 }
 
 export default Home