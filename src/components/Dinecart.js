
function Dinecart({dinedata}){
return(
    <a href={dinedata.cta.link} target="_blank" className="border border-gray-200 flex-none max-w-[30%] rounded-2xl shadow-md">
        
        <div className="relative">
        <img className="rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+dinedata?.info?.mediaFiles[0]?.url}></img>
            <div className="bg-linear-to-t bottom-0 left-0 right-0 absolute from-black h-16"></div>
            <h1 className="absolute bottom-2 text-xl left-4 text-white">{dinedata?.info?.name}</h1>
            <h1 className="absolute bottom-2 right-4 text-xl text-white">{dinedata?.info?.rating?.value}</h1>
        
        </div>
        
        <div className="flex justify-between font-medium text-sm text-gray-500 px-2">
            <h1>{dinedata?.info?.cuisines.join(",")}</h1>
            <h1>{dinedata.info.costForTwo}</h1>
        </div>

        <div className="flex justify-between font-medium text-sm text-gray-500 px-2">
            <h1>{dinedata.info.locality}</h1>
            <h1>{dinedata.info.locationInfo.distanceString}</h1>
        </div>
    </a>
)
}

export default Dinecart