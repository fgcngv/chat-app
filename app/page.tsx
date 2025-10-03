
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  
  return (
    <div className="max-w-3lx mx-auto md:py-10 h-screen  items-center justify-center align-middle  flex flex-col">
       <h1 className="font-bold text-2xl text-center text-gray-400">THANKS FOR CHOOSING OUR APPLICATION TO COMMUNICATE WIHT YOUR FRIENDS</h1>
     <div  className="flex justify-center p-2 m-2">
     <Link href="/about-developer" className="decoration-2 bg-gray-600 p-3 rounded font-bold" >About  Developer</Link>
     </div>
    </div>
  );
}
