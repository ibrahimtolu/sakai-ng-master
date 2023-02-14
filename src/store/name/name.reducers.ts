import {createAction, createReducer, on} from "@ngrx/store";
import {state} from "@angular/animations";
import {change} from "./name.actions";
import {Name} from "../../app/demo/model/name";



const  initialState:Name={
    name:"s",
    lastname:"null"
}

export const nameReducer =createReducer(
    initialState, on(change,(state, names)=>{
        return {

        ...state,
        name: names.name

    }
    }
    ),

)

export const testReducer=createReducer(
    name,
    on(createAction("Name"))
)
