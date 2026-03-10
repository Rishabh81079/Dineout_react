
function Foodcart({fooddata}){

    return (
        <>
            <img className="w-36 h-45" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+fooddata?.imageId}></img>
        </>
    )
}

export default Foodcart