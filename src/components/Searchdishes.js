import { useEffect, useState } from "react"
import { useParams } from "react-router"
import Filterdishes from "./Filterdishes"




function Searchdishes(){
const {id} = useParams()

    const[search, setSearch] = useState("")
    
     const [data,Setdata] = useState([])
        
            useEffect(()=>{
                async function fetchdata(){
                const proxy = "https://cors-anywhere.herokuapp.com/"
                const swiggyapi = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`
                const response = await fetch(proxy+swiggyapi)
                const swiggy = await response.json()
                const tempdata = swiggy?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
                const filterdata = tempdata?.filter((items)=>'title' in items?.card?.card)
                Setdata(filterdata)
                }
        
                fetchdata()
            },[search])

             const filteredDishes = data.filter((item)=>
        item?.card?.card?.title?.toLowerCase().includes(search.toLowerCase())
    )

    // console.log(search);
    

    return(
        <div>
        <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search for dishes" className="flex bg-gray-300 w-[80%] mx-auto mt-10 py-2 px-3 rounded-2xl"></input>

         {
                filteredDishes.map((item,index)=><Filterdishes key={index} item={item}></Filterdishes>)
            }
        </div>
        
    )

}

export default Searchdishes