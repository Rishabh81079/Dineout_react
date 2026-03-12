import {createRoot} from "react-dom/client"
import Header from "./components/Header"
import Main from "./components/Main"
import Restcard from "./components/Restcard"
import {BrowserRouter, Route , Routes} from "react-router"
import Restaurantmenu from "./components/Restaurantmenu"

function App(){
    return(
        
        <BrowserRouter>
        <Routes>
            <Route path="/"  element={<Main></Main>}></Route>
            <Route path="/restaurant" element={<Restcard></Restcard>}></Route>
            <Route path="/city/delhi/:id" element={<Restaurantmenu></Restaurantmenu>}></Route>
        </Routes>
        </BrowserRouter>
        

        
    )
}

createRoot(document.getElementById('root')).render(<App></App>)