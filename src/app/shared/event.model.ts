export class Event {
   
    public id : number;
    public evname: string;
    public cardImageUrl: string;
    public location: string;
    public description: string;
    public date: string;
    public genre: string;
    public price: string;
    public artist : string;

    constructor(id : number,evname : string, cardImageUrl : string,location : string, description :string , date: string,
        genre: string, price: string,artist : string){
        
        this.id=id;
        this.evname=evname;
        this.cardImageUrl=cardImageUrl;
        this.evname=evname;
        this.location=location;
        this.description=description;
        this.date=date;
        this.genre = genre;
        this.price = price;
        this.artist = artist;
    }
}