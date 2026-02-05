import Bestfood from "./Bestfood"
import { Link } from "react-router";
import Groceries from "./Groceries"
import Bestrestaurant from "./Bestrestaurant"
import Restaurants from "./Restaurants"

export default function Body(){
    return(<>
    <div className="flex-wrap flex flex-col">
        <div className="bg-[#ff5200] pt-17 pb-8 relative">
        <div className=" flex justify-center ">
             <div className="font-bold  text-5xl text-white   max-w-5/10 text-center ">Order food & groceries. Discover best restaurants. Swiggy it!</div>
            
        </div>
        <img className="w-[250px] h-[450px] absolute left-0 top-0  object-cover" 
         src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="" />
        <img className="w-[250px] h-[450px] absolute right-0 top-0"
       src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="" />
        <div className="flex justify-center gap-4 mt-6 w-full flex-wrap">
            <div className="flex items-center justify-center w-76.5 h-15 bg-white text-gray-600 rounded-2xl">Enter your delivery location</div>
            <div className="flex items-center pl-3  w-120 h-15 bg-white text-gray-600 rounded-2xl">Search for restaurant, item or more</div>
        </div>
        
    </div>
        
<div className="bg-[#ff5200] pb-[80px]">
            <div className="flex justify-center w-full h-84 px-[8px] pb-[20px] flex-wrap">
                <Link to="/restaurant" >
                    <img className="w-100 object size-fit" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" alt="" />
                </Link>             
                <img className="w-100 object size-fit" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" alt="" />
                <img className="w-100 object size-fit" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" alt="" />
            </div>
        </div>

        <Bestfood/>
        <Groceries/>
        <Bestrestaurant/>
        
    </div>
    </>)
}
