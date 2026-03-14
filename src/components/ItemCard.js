import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { increment,decrement,add } from "../Store/Slice"


function ItemCard({value}){
const items = useSelector(state=>state.slice1.items)
const item = items.find(i=>i.id===value.id)
const count = item ? item.quantity : 0

    const dispatch = useDispatch()

    function addhandle(){
        dispatch(add(value))
    }
    function incrementhandle(){
        dispatch(increment(value))
    }
    function decrementhandle(){
        dispatch(decrement(value))
    }


    return(
        <div className="flex mt-10 justify-between">
            
            <div className="w-[70%]">
                <h1 className=" font-bold ">{value?.name}</h1>
                <h1 className="text-sm mt-3 font-semibold text-gray-600">{"₹"+ ("defaultPrice" in value ? value?.defaultPrice/100 :  value?.price/100)}</h1>
                <h1 className="text-sm mt-3 font-medium text-gray-400">{value?.description}</h1>
            </div>   
            <div className="relative w-[30%]">
                <img className="w-60 h-40 object-cover rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+value?.imageId}></img>
                {
                    (count==0)?( <button className="absolute -bottom-3 font-bold border border-gray-300 left-20 bg-white px-5 py-1 rounded" onClick={()=>addhandle()}>Add</button>):(
                        <div  className="text-green-500 font-bold absolute -bottom-3 border flex justify-between border-gray-300 left-20 bg-white px-7 py-1 rounded">
                        <button  onClick={()=>decrementhandle()}>-</button>
                        <span>{count}</span>
                        <button  onClick={()=>incrementhandle()}>+</button>
                        </div>
                    )
                }
               
            </div>
            
        </div>
    )
}


export default ItemCard