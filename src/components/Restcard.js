import { useEffect, useState } from "react"
import Restaurants from "./Restaurants"


function Restcard(){

    const [data,Setdata] = useState([])

    useEffect(()=>{
        async function fetchdata(){
        const proxy = "https://cors-anywhere.herokuapp.com/"
        const swiggyapi = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        const response = await fetch(proxy+swiggyapi)
        const swiggy = await response.json()
        Setdata(swiggy?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }

        fetchdata()
    },[])


    if(data.length==0){
        return <h1 className="text-center text-2xl font-bold">Data is Loading....</h1>
    }



    // console.log(data);
    

    return(
        <div className="w-[80%] mx-auto mt-20">
            <h1 className="font-bold text-2xl mb-10">Top restaurant chains in Delhi</h1>
        <div className="flex flex-wrap overflow-hidden gap-5">
        {
            data.map((carddata)=>{
            return <Restaurants key={carddata?.info?.id} carddata={carddata}></Restaurants>})
        } 
        </div>
        </div>
    )


}

export default Restcard