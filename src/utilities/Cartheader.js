import { Outlet } from "react-router"
import Insideheader from "./Insideheader"


function Cartheader(){

    return(
        <>
        <Insideheader></Insideheader>
        <Outlet></Outlet>
        </>
    )
}

export default Cartheader