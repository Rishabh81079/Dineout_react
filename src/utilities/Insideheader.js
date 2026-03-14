import { useSelector } from "react-redux"
import { Link } from "react-router";




function Insideheader(){

    const counter = useSelector((state)=>state.slice1.items)
    const total = counter.reduce((acc,item)=>acc+item.quantity,0)

    console.log(counter);
    
    return(
        <>
                   <div className="flex px-15  justify-between py-8 bg-orange-400 " >
                <img className="w-40 h-12" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"></img>
                <div className="text-white flex gap-10 items-center font-bold">
                        <Link to="/checkout" className="border-2 border-white rounded-xl px-6 py-2">Cart({total})</Link>
                </div>
            </div>
        </>
    )
}

export default Insideheader