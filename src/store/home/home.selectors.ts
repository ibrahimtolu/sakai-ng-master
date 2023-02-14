import {createFeatureSelector, createSelector} from "@ngrx/store";
import {COUNTER_REDUCER, CounterState} from "../../app/demo/model/counter";
import {state} from "@angular/animations";

export const counterSelector=createFeatureSelector<CounterState>(COUNTER_REDUCER);

export const selectCurrentCount=createSelector(
    counterSelector,
    (state:CounterState)=>state.current
);
