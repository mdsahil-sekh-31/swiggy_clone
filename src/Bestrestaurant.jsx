import { Restaurantinfo } from "./Restaurantrawdata";
import { useState, useEffect } from "react";
export default function Bestrestaurant(){
     const[data,setData]=useState([])
        const linkinfo="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/"
        useEffect(()=>{
            
            async function fetchdata(){
                const proxyServer="https://cors-anywhere.herokuapp.com/"
                const swiggyAPI="https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true"
                const response=await fetch(proxyServer+swiggyAPI)            
                const responsedata=await response.json()
                console.log(responsedata)
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
    return(
        <div className="w-full ">
            <div className="w-[80%] flex overflow-scroll container mx-auto gap-4 mt-30 scrollbar-none">
                {Restaurantinfo.map((data,index)=>{
                    return(
                        <div className="min-w-[326px]" key={index}>
                            <div className="relative ">
                                <img className="w-[326px] h-[189px] object-cover rounded-2xl" src={linkinfo + data.info.mediaFiles[0].url} alt="" />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                                <p className="absolute bottom-3 text-lg font-extrabold text-white left-2">{data.info.name}</p>
                                
                            </div>
                            <div className="flex justify-between">
                                    <p>{data.info.cuisines[0]},{data.info.cuisines[1]}</p>
                                    <p>{data.info.costForTwo}</p>
                            </div>
                            <div className="flex justify-between">
                                <p>{data.info.locality},{data.info.locationInfo.city.name}</p>
                                <p>{data.info.locationInfo.distanceString}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
    
}