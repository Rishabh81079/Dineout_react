import { Link } from "react-router"

function Restaurants({carddata}){
    return(
        <div className="flex-none">
        <Link to={"/city/delhi/"+carddata.info.id}>
        <div className="font-serif transform transition hover:scale-95 duration-200">
        <img  className="w-70 h-45 object-cover rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+carddata?.info?.cloudinaryImageId}></img>
        <h1 className="font-bold">{carddata?.info?.name}</h1>
        <h1 className="text-base font-medium">{carddata?.info?.avgRating}</h1>
        <h1 className="text-sm text-gray-500">{carddata?.info?.cuisines.join(',')}</h1>
        <h1 className="text-sm text-gray-500">{carddata?.info?.areaName}</h1>

    </div>
    </Link>
    </div>
    )
}

export default Restaurants