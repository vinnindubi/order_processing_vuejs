import { defineStore } from "pinia";
import {ref,computed,watch } from 'vue';
import type {Cart , Product} from '@/types/interfaces'
import { isTemplateSpan } from "typescript";

export const useCartStore = defineStore('cart',()=> {
            const cart= ref<Cart>({
            customerId: 0,
            products: []
                })
   
function loadCartInstance(){
        const cs= localStorage.getItem('cart');
        if(cs){
            cart.value = JSON.parse(cs) as Cart;
        }
      
    }
 function addToCart(product: Product) {
    const get= (cart.value)as Cart
    const existing = get.products.find(p => p.id === product.id);
    if(existing){
        existing.quantity+=1;
    }
    else{
        get.products.push(product)
    }
    localStorage.setItem('cart',JSON.stringify(cart.value))
    }
    function removeFromCart(id:number){
        const get= (cart.value)as Cart
        get.products= get.products.filter( p =>p.id!==id)
        localStorage.setItem('cart',JSON.stringify(cart.value))
    }
    const cartCount = computed(()=>{
        return(cart.value as Cart).products.reduce((total,product)=>total + product.quantity,0)
    })
    /*Computed: Better if you want the quantity to stick to each product card and
     update only when that product’s data changes, instead of recalculating all the time.
     Vue creates a reactive dependency tracker for that product’s quantity.
    The computed result is cached until its dependencies (cart.value.products) change. */
    function getQuantity(productId: number) {
        return computed(()=>{
        const item = (cart.value as Cart).products.find((p) => p.id === productId);
        return item ? item.quantity : 0;
        })
        }
    return{cart,loadCartInstance,addToCart,removeFromCart,getQuantity,cartCount}
});