<script setup>
import { ref, onMounted } from 'vue'
import { useCartStore } from '@/stores/cart';
import { storeToRefs } from 'pinia';
import axios from 'axios'
const cartStore=useCartStore()
const {cart,cartCount}=storeToRefs(cartStore)

onMounted(async ()=>{
    cartStore.loadCartInstance()
});
function makeOrder(cart){
    const allItems=[];
        cart.products.forEach((product)=>{
            allItems.push({
                product_id:product.id,
                no_goods:product.quantity
            })
        } )   
        let url='http://localhost:8000/api/orders'
        axios.post(url,{
            customer_id:4,
            items:allItems
        }).then((response)=> console.log(response),
        cartStore.resetState()
        ).catch((error)=>console.error(error))

}
function removeItem(product){
  if(confirm('are you sure you want to remove this product?')){
    cartStore.removeFromCart(product.id)
    }else{
      console.log('user cancelled removal')
    }
}
</script>
<template>
    <v-card v-if="cartCount > 0">
        <v-card-item v-for="product in cart.products" :key="product.id" margin="0" class="bd-3px">
            <v-card-text>
               Product price: {{product.price}}
            <v-card-text>
            </v-card-text> 
             Total number of items:{{ product.quantity }}
            </v-card-text>
            <v-btn color="primary" @click='removeItem(product)'>
                 Remove
              </v-btn>
        </v-card-item>
        <v-card-actions >
            <v-btn color="primary" @click="makeOrder(cart)">
                Make Order
            </v-btn>
           
        </v-card-actions>
        
    </v-card>
    <v-card v-else  
        class="pa-6 d-flex flex-column align-center justify-center"
        elevation="8"
        width="1000"
        height="200"
        rounded="xl">
        <router-link to="/products"> Return to make order </router-link>
    </v-card>
</template>