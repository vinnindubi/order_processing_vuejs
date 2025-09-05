export interface Cart{
    customerId:number,
    products:Array<Product>
}
export interface Product {id:number,price:number,quantity:number}