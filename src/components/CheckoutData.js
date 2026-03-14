import { useSelector } from "react-redux"


export default function CheckoutData({value}){
    const counter = useSelector((state)=>state.slice1.items)
        const total = counter.reduce(
 (acc,item)=> acc + (("defaultPrice" in item ? item.defaultPrice : item.price)/100) * item.quantity,0)



    return(
        <div className="container mx-auto mb-5">
        <div className=" font-bold flex justify-between">
        <div>
        <h1>{value.name}</h1>
        <h1>x{value.quantity}</h1>
        <h1>₹{(value?.defaultPrice || value?.price) / 100}</h1>
        </div>

        <img className="w-60 h-40 object-cover rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+value?.imageId}></img>
        </div>
        </div>
    )
}