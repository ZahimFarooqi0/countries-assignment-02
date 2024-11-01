import Link from "next/link";

export default function Button(){
    return(
        <>       <br/>
        <button className="bg-blue-950 hover:bg-blue-600 hover:-translate-y-1 hover:scale-110    transition ease-out delay-100 rounded-full px-[20px] ml-[50px]">
            <Link href="/">HOME</Link>
        </button>
        </>
 
    )
}