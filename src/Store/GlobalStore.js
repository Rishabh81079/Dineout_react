import {configureStore} from "@reduxjs/toolkit"
import Slicer from "./Slice"

export const globalStore = configureStore({
    reducer:{
        slice1:Slicer
    }
})