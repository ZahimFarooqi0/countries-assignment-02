
import Link from "next/link";

export default function Home(){
  return(
  <div className="flex justify-center ">
   <div className="rounded-lg ">
    <div className="mt-[100px] pt-[100px] text-2xl " >
      <div className="bg-gray-900 rounded-lg p-[50px] ">
    <ol>    
      <li className="text-neutral-600 hover:text-red-700">
    <Link href="/country/pakistan " >Pakistan</Link></li>
    <br/>
    <li  className="text-neutral-600 hover:text-red-700"><Link href="/country/india" >India</Link></li>
    <br/>
    <li  className="text-neutral-600 hover:text-red-700"><Link href="/country/bangladesh" >Bangladesh</Link></li>
    <br/>
   <li  className="text-neutral-600 hover:text-red-700"> <Link href="/country/turkey" >Turkey</Link>
    </li>
    </ol>

    </div>
    </div>
    </div>
  </div>
  )
}