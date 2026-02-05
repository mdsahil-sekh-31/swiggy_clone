import { imageGridCards } from "./assets/Bestfooddata"
export default function Bestfood(){
    const flink="https://media-assets.swiggy.com/swiggy/image/upload/"
    return(
        
        <div className="w-[80%] mx-auto mt-[100px]">
            <div className=" text-2xl font-bold">Order our best food options</div>
            <div className=" flex overflow-x-scroll  container  scrollbar-none gap-1 mt-10">
            {imageGridCards.map((data)=>{
            return(
               <div key={data.id} >
                    <img className=" w-[150px]  container" src={flink + data?.imageId} alt="" />
                </div>
            )
        })}
        
        </div>
        </div>
        
    )
}
