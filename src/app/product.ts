export class Product {
    id?:any;
    name?:any;
    brand?:any;
    price?:any;
    stock?:any;
    catagory?:any;
    details?:any;
    picture?:any;

    constructor(id?:any, name?:any, brand?:any, price?:any, stock?:any, catagory?:any, details?:any, picture?:any) {
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.stock = stock;
        this.catagory = catagory;
        this.details = details;
        this.picture = picture;
    }
}
