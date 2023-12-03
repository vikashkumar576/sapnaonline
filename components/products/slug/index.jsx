import Layout from "@/components/shared/layout"
import { useRouter } from "next/router"

const Slug = ()=>{
    const router = useRouter();

    return(
        <Layout title={`Buy ${router.query.slug.toLowerCase().split("-").join(" ")}`}>
            <div className="grid md:grid-cols-10 gap-12 w-[88%] mx-auto">
                <div className="col-span-4 p-10 bg-black">
                    
                </div>
                <div className="col-span-6 p-10 bg-black"></div>
            </div>            
        </Layout>
    )
}
export default Slug