import { groceriesdata } from "../Groceriesdata"

export default function Groceries(){
    const linkdata="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"
    return(
        <div className="m-auto w-[80%] mt-30">
            <div className="text-2xl font-bold ">Shop groceries on Instamart</div>
             <div className="  flex overflow-x-scroll scrollbar-none container  gap-10 mt-8">
            {groceriesdata.map((data)=>{
                return(
                    <div key={data.id}>
                        <img className="w-[150px]  container" src={linkdata+data.imageId} alt="" />
                    </div>
                )
            })}
        </div>
        </div>
    )
}