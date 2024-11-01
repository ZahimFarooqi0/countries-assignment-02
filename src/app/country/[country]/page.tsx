import Button from "@/app/components/button/Button";
// import { count } from "console";

export default function Country1({params}:{params:{country:string}})
{
    const country2 :{
        name:string;
        population : number;
        language :string;
    
    }[]=[
    
        {
            name:"pakistan",
            population:200000,
            language:"urdu"
        },
        {
            name:"india",
            population:200000,
            language:"hindi"
        },
        {
            name:"bangladesh",
            population:200000,
            language:"bengali"
        },
        {
            name:"turkey",
            population:200000,
            language:"turkish"
        },
    ]



    function findcountry(country_url:string)
    {
        return country2.find((country)=>country.name===country_url)
    }
    const country1=findcountry(params.country);
    return(
        <div className="flex justify-center ">
         <div className="mt-[100px] pt-[65px]">   
            {
        country1?
        (<> 
       
       <div className="text-5xl text-black font-bold mb-[40px]" > <h1 >Country : { country1.name.toUpperCase()}</h1></div>
            <div className="bg-gray-900 rounded-2xl p-[100px] flex justify-center ">
                <div className="gap-8 text-2xl">
            <h1> Name : {country1.name.toLocaleUpperCase()}</h1>
            <br/>
            <h1>Population : {country1.population}</h1>
            <br/>
            <h1>Language : {country1.language}</h1>
            <Button/>
            </div>
            </div>
            </>
           
        )
        :<div className="bg-gray-800 rounded-3xl text-xl p-[50px] "><h1>Country not found</h1>
          <div className="ml-[-20px]"><Button/></div>
          </div>}
             </div>
             </div>
        
    )

}