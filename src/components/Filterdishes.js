import ItemCard from "./ItemCard"


function Filterdishes({item,index}){

    return(
        <>
        <h2 key={index} className="text-center mt-4 font-bold">{item?.card?.card?.title}</h2>
        <div className="w-[80%] mx-auto">
            {
                item?.card?.card?.itemCards?.map((carditems)=><ItemCard key={carditems?.card?.info?.id} value={carditems?.card?.info}></ItemCard>)
            }
        </div>
        </>
    )

}

export default Filterdishes