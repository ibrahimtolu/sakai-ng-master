export interface eProdoct{
    id:string;
    name:string;
    description?:string;
    image?:string;
    price:number;
    category?:string;
    inventoryStatus?: InventoryStatus;
    amount:number;
    stock:number;
}
interface InventoryStatus {
    label: string;
    value: string;
}
