interface  UserType {
    userTypeId:number;
     userTypeName:String;
}

export interface User  {

    userId:number;
    userName:String;
    userPassword:String;
    active:boolean;
    userType:UserType;






}
