

function Foodcartbelow({fooddatatwo}){
    return (
        <>
            <img className="w-36 h-45" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+fooddatatwo?.imageId}></img>
            {/* <h1>{fooddatatwo.action.text}</h1> */}
        </>
    )
}

export default Foodcartbelow