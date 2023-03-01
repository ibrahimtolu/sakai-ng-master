import {createFeatureSelector, createSelector} from "@ngrx/store";
import {SHOP_REDUCER, ShopState} from "../../app/demo/model/shop";


export const shopCounterSelector=createFeatureSelector<ShopState>(SHOP_REDUCER);

export const selectCurrentShop=createSelector(
    shopCounterSelector,
    (state:ShopState)=>state.current
);
