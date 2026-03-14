import {createRoot} from "react-dom/client"
import Header from "./components/Header"
import Main from "./components/Main"
import Restcard from "./components/Restcard"
import {BrowserRouter, Route , Routes} from "react-router"
import Restaurantmenu from "./components/Restaurantmenu"
import Searchdishes from "./components/Searchdishes"
import Cartheader from "./utilities/Cartheader"
import {Provider} from "react-redux"
import { globalStore } from "./Store/GlobalStore"
import Checkout from "./utilities/Checkout"
function App(){
    return(
        <Provider store={globalStore}>
        <BrowserRouter>
        <Routes>
            <Route path="/"  element={<Main></Main>}></Route>
            <Route element={<Cartheader></Cartheader>}>
            <Route path="/restaurant" element={<Restcard></Restcard>}></Route>
            <Route path="/city/delhi/:id" element={<Restaurantmenu></Restaurantmenu>}></Route>
            <Route path="/city/delhi/:id/search" element={<Searchdishes></Searchdishes>}></Route>
            <Route path="/checkout" element={<Checkout></Checkout>}></Route>
            </Route>
        </Routes>
        </BrowserRouter>
        </Provider>
        

        
    )
}

createRoot(document.getElementById('root')).render(<App></App>)