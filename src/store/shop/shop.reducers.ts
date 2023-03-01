import {createReducer, on} from "@ngrx/store";
import {state} from "@angular/animations";
import {shopDecrement, shopInctement, shopReset} from "./shop.actions";
import {ShopState} from "../../app/demo/model/shop";


const  initialState:ShopState={
    current:0

}

export const shopcounterReducer =createReducer(
    initialState,
    on(shopInctement,(state)=>({
        ...state,
        current: state.current+1,

    })),
    on(shopDecrement,(state)=>({
        ...state,
        current: state.current-1,
    })),
    on(shopReset,() => initialState)
)

