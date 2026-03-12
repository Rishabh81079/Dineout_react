import { useEffect, useState } from "react"
import { useParams } from "react-router"
import MenuCard from "./MenuCard"

function Restaurantmenu(){

    let {id} = useParams()
    

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
        },[])

        // console.log(data);
        

    return(
        <>
        {
            data.map((menuitems)=><MenuCard key={menuitems?.card?.card?.title} menuitems={menuitems?.card?.card}></MenuCard>)
        }
        </>
    )
} 

export default Restaurantmenu