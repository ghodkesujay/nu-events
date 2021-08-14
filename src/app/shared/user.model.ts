export class User {
   
    public id : number;
    public firstName: string;
    public lastName: string;
    public phone: string;
    public numberOfPeople: string;
    public email: string;
 

    constructor(id : number,firstName : string, lastName : string,phone : string, numberOfPeople :string , email: string){
        
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.phone=phone;
        this.numberOfPeople=numberOfPeople;
        this.email=email;
        
    }
}