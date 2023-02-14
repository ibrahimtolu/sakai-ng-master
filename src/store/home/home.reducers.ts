import {createReducer, on} from "@ngrx/store";
import {state} from "@angular/animations";
import {CounterState} from "../../app/demo/model/counter";
import {decrement, increment, reset} from "./home.actions";


const  initialState:CounterState={
    current:0

}

export const counterReducer =createReducer(
    initialState,
    on(increment,(state)=>({
        ...state,
        current: state.current+1,
    })),
    on(decrement,(state)=>({
        ...state,
        current: state.current-1,
    })),
    on(reset,() => initialState)
)

