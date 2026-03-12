import ItemCard from "./ItemCard"


function MenuCard({menuitems}){
    return(
        <div className="w-[80%] mx-auto container mt-10">
        <h1 className="font-bold text-xl">{menuitems?.title}</h1>
        <div>
            {
                menuitems?.itemCards?.map((carditems)=><ItemCard key={carditems?.card?.info?.id} value={carditems?.card?.info}></ItemCard>)
            }
        </div>
        </div>
    )
}


export default MenuCard