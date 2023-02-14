import {createFeatureSelector, createSelector} from "@ngrx/store";

import {NAME_REDUCER, Name} from "../../app/demo/model/name";

export const nameChange=createFeatureSelector<Name>(NAME_REDUCER);

export const selectNameChange=createSelector(
    nameChange,
    (state:Name)=>state.name
);
