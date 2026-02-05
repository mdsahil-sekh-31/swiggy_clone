import { useEffect, useState } from "react"
import Simmereffect from "./Simmereffect"
import { Link } from "react-router";
export default function Restaurants(){
    const[data,setData]=useState([])
    const linkdata="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/"
    useEffect(()=>{
        
        async function fetchdata(){
            const proxyServer="https://cors-anywhere.herokuapp.com/"
            const swiggyAPI="https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true"
            const response=await fetch(proxyServer+swiggyAPI)            
            const responsedata=await response.json()
            setData(
  responsedata?.data?.cards
    ?.find(
      (c) =>
        c?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )
    ?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
);
            
        }
    fetchdata()
    },[])
    if(data.length==0) return <Simmereffect/>
    return(
        <div className="w-full">
            
           <div className="w-[80%] flex flex-wrap justify-center container mx-auto gap-4 mt-10 scrollbar-none">
            {
                data.map((sdata, index)=>{
                return(
                    <div className="min-w-81.5" key={index}>
                        <div className="hover:scale-95 transition-transform duration-400 w-81.5 mt-2">
                           {/* <Link  to={`/city/kolkata/${sdata?.info?.id}`}> */}
                           <Link to={"/city/kolkata/"+sdata?.info?.id}>
                            <img className="w-81.5 h-[189px] object-cover rounded-2xl " src={linkdata+sdata?.info?.cloudinaryImageId} alt="" />
                           </Link>
                            <div className="w-[95%] mx-auto mt-3">
                                <div className="font-bold">{sdata?.info?.name}</div>
                                <div className="flex justify-between">
                                    <div>{sdata?.info?.avgRating}</div>
                                    <div className="font-bold">{sdata?.info?.sla?.slaString}</div>
                                </div>
                                <div className="text-gray-500">{sdata?.info?.cuisines.join(" ")}</div>
                                                                <div>{sdata?.info?.areaName}</div>

                            </div>
                        </div>
                    </div>
                )
            })
            }
           </div>
        </div>
    )
    
}
