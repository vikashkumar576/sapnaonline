import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { BackTop } from 'antd';

const PageNotFound = () => {
    const router = useRouter(null)
    const backToHome = ()=>{
        router.push("/")
    }
  return (
    <>
        <Head>  
            <link rel="icon" href="/sapnaHome/sapna-logo.png" />
            <title>PageNotFound - {process.env.NEXT_PUBLIC_DOMAIN}</title>
        </Head>

        <div className="bg-[#f1f3f6] min-h-screen flex justify-center items-center flex-col gap-6">
            <button onClick={backToHome}>
                <Image alt='sapna-logo' src={'/sapnaHome/logo-black.png'} width={180} height={100}/>
            </button>
            <button>
                <Image alt='notfound' src={'/sapnaHome/notfound.png'} width={400} height={200}/>
            </button>
            <h1 className='font-bold text-center'>Oops! It looks like you are on the wrong planet<br/>&#40;or page&#41;</h1>
            <p className='text-sm text-center w-96'>Seems like there's a problem! Our mission to launch you to your destination has been tampered by the aliens from the outer space!</p>
            <Link href="/" legacyBehavior>
                <button className='flex gap-2 uppercase bg-[#2e3292] text-white px-3 items-baseline py-2 font-semibold'><i className='bx bx-arrow-back'></i> back to home</button>
            </Link>
        </div>
        <i className='bx bx-arrow-back absolute top-3 bg-white p-1 rounded-md left-2 font-bold text-lg text-[#2e3292]' onClick={backToHome}></i>
    </>
  );
};

export default PageNotFound;