import {TreeNode} from "primeng/api";

export interface Address {
    address: string;
}

export interface Friends {
    id: number;
    name: string;
}

export interface User extends TreeNode{
    index: number;
    quid: string;
    name: string;
    egeColor: string
    phone: number;
    address: Address;
    company: string;
    balance: string;
    age: number;
    email: string;
    isActive: boolean;
    longitude: number;
    registered: Date;
    guid: string;
    about: string;
    tag?: string;

    friends?: Friends[];

}
