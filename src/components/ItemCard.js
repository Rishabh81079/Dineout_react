function ItemCard({value}){
    return(
        <div className="flex mt-10 justify-between">
            <div>
                <h1 className=" font-bold ">{value?.name}</h1>
                <h1 className="text-sm mt-3 font-semibold text-gray-600">{"₹"+ ("defaultPrice" in value ? value?.defaultPrice/100 :  value?.price/100)}</h1>
                <h1 className="text-sm mt-3 font-medium text-gray-400">{value?.description}</h1>


            </div>   
            <div className="relative">
                <img className="w-75 h-40 object-cover rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+value?.imageId}></img>
                <button className="absolute -bottom-3 font-bold border border-gray-300 left-5 bg-white px-5 py-1 rounded">Add</button>
            </div>
            
        </div>
    )
}


export default ItemCard