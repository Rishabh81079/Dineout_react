import {createRoot} from "react-dom/client"
import Header from "./components/Header"
import Main from "./components/Main"

function App(){
    return(
        <>
        <Header></Header>
        <Main></Main>
        </>
    )
}

createRoot(document.getElementById('root')).render(<App></App>)