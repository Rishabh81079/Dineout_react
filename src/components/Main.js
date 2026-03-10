import { Imagebelowgrid } from "../utilities/Imagebelowgrid"
import { Imagegridcard } from "../utilities/Imagegrid"
import Foodcart from "./Foodcart"
import Foodcartbelow from "./Foodcartbelow"

function Main(){
    return(
        <div className="container mx-auto w-[80%] mt-30 font-bold">
        <h1 className="text-2xl mb-10">Order our best food options</h1>
        <div className="flex object-cover overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none]">
        {
            Imagegridcard.map((fooddata)=>{
            return <Foodcart fooddata={fooddata} key={fooddata.id}></Foodcart>
        })
        }
        </div>
        <h1 className="text-2xl mb-10 mt-20">Shop Groceries on Instamart</h1>
        <div className="flex object-cover overflow-x-auto gap-2 [scrollbar-width:none] [-ms-overflow-style:none] ">
        {
            Imagebelowgrid.map((fooddatatwo)=>{
            return <Foodcartbelow fooddatatwo={fooddatatwo} key={fooddatatwo.id}></Foodcartbelow>
        })
        }
        </div>
        </div>
    )
}

export default Main