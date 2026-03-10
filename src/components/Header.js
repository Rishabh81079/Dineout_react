
function Header(){
    return(
        <header className="bg-[#ff5200] w-full font-serif">
            <div className="flex container mx-auto justify-between py-8" >
                <img className="w-40 h-12" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"></img>
                <div className="text-white flex gap-10 items-center font-bold">
                    <a href="https://www.swiggy.com/corporate/" target="_blank">Swiggy Corporate</a>
                    <a href="https://partner.swiggy.com/food/login" target="_blank">Partner with us</a>
                    <a href="" className="border border-white rounded-xl px-6 py-2">Get the App</a>
                    <a href="" className="border-black bg-black rounded-xl px-6 py-2">Sign in</a>
                </div>
            </div>
            <div className="relative pt-16 pb-9">
                
                    <img className="top-0 left-0 w-62 h-101 absolute" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
                    <img className="top-0 right-0 w-62 h-101 absolute" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>
                <div className="mx-auto text-5xl text-white font-bold max-w-[60%]">
                Order food & groceries. Discover best restaurants. Swiggy it!
                </div>
                <div className="mx-auto container max-w-[60%] flex gap-10 mt-5">
                <input className="border rounded-xl border-white bg-white px-6 py-4 w-[50%]" placeholder="Enter your delivery location"></input>
                <input className="border rounded-xl border-white bg-white px-4 py-4 w-[50%]" placeholder="Search for restaurant item or more"></input>
                </div>

                
            </div>
            
            <div className="flex justify-center">
                <img className="w-81 h-80" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"></img>
                <img className="w-81 h-80" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"></img>
                <img className="w-81 h-80" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"></img>
                
            </div>
        </header>
    )

}

export default Header