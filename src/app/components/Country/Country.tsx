import Button from "../button/Button"
export default function CountryCard(reciever:any){
    return(
          <div className="flex justify-center ">
          <div className="mt-[100px] pt-[65px]">   
             { 
        reciever.Sender?
        (<> 
       
       <div className="text-5xl text-black font-bold mb-[40px]" > <h1 >Country : { reciever.Sender.name.toUpperCase()}</h1></div>
            <div className="bg-gray-900 rounded-2xl p-[100px] flex justify-center ">
                <div className="gap-8 text-2xl">
            <h1> Name :{reciever.Sender.name}</h1>
            <br/>
            <h1>Population : {reciever.Sender.population}</h1>
            <br/>
            <h1>Language : {reciever.Sender.language}</h1>
            <Button/>
            </div>
            </div>
            </>
           
        )
        :<div className="bg-gray-800 rounded-3xl text-xl p-[100px] "><h1 className="text-3xl uppercase ">{reciever.url}</h1> <h1 className="uppercase text-xl"> not found</h1>
          <div className="ml-[-20px]"><Button/></div>
          </div>}
             </div>
             </div>
 
    )
}