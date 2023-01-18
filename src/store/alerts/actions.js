import { createAction } from "@reduxjs/toolkit";


const mingaAlert = createAction(

    "mingaAlert",
    (data)=>{
        return {payload: data}
    }
)
const alertActions = {mingaAlert}
export default alertActions