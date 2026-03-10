
function Foodcart({fooddata}){

    return (
        <div className="flex-none">
        <a href={fooddata?.action?.link} target="_blank">
            <img className="w-36 h-45" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+fooddata?.imageId}></img>
        </a>
        </div>
    )
}

export default Foodcart