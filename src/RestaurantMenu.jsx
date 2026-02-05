import { useParams } from "react-router";
import { useState, useEffect } from "react";
export default function RestaurantMenu(){
     let {id}=useParams()
      console.log(id)
    const[resposedata,setRensponseData]=useState(null)
    useEffect(()=>{
        async function fun(){
            const proxy2="https://cors-anywhere.herokuapp.com/"
        const swiggyapi2=`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.56430&lng=88.36930&restaurantId=${id}`
        const response=await fetch(proxy2 + swiggyapi2)
        const dataresponse=await response.json();
        setRensponseData(dataresponse)
        }

        fun()
    },[])
console.log(resposedata)
    return(
        <>
      <h1>Restaurant ID: {id}</h1>

    </>
    )
}

// import { useEffect, useState } from "react";
// import { useParams } from "react-router";


// export default function RestaurantMenu(){
   
//     let {id} = useParams();
//     console.log(id);

//     const [RestData, setRestData] = useState(null);

//     useEffect(()=>{
    
//         async function fetchData() {
           
//            const proxyServer = "https://cors-anywhere.herokuapp.com/"
//            const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
//            const response = await fetch(proxyServer+swiggyAPI);
//            const data = await response.json();
//            setRestData(data);
//         }
   
//         fetchData();
//        },[])

//        console.log(RestData);

//     return(
//         <>
//         <h1>Hello Coder Army</h1>
//         <h2>{id}</h2>
//         </>
//     )

// }