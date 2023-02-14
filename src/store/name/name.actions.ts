import {createAction, props, Store} from "@ngrx/store";
import {Name} from "../../app/demo/model/name";
export const change=createAction('[Name Component] Name', props<{name:string}>());



