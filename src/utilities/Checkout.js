import { useSelector } from "react-redux"
import CheckoutData from "../components/CheckoutData"


export default function Checkout(){
    const data = useSelector(state=>state.slice1.items)
     const total = data.reduce((acc,item)=>
        acc + ((item?.defaultPrice || item?.price)/100) * item.quantity
    ,0)

    return(
        <div className="mt-20   ">
        {
            data.map((value)=><CheckoutData value={value} key={value.id}></CheckoutData>)
        }
        <h1 className="font-bold mt-10 text-center text-2xl">
            Total Price: ₹{total}
        </h1>
        
        </div>
    )

}