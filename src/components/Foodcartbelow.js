

function Foodcartbelow({fooddatatwo}){
    return (
        <div className="flex-none">
        <a href={fooddatatwo?.action?.link} target="_blank">
            <img className="w-36 h-45 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+fooddatatwo?.imageId}></img>
            <h1 className="text-center">{fooddatatwo.action.text}</h1>
            </a>
            </div>
        
    )
}

export default Foodcartbelow