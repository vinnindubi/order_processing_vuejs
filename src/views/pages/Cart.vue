<script setup>
import { ref, onMounted } from 'vue'
import { useCartStore } from '@/stores/cart';
import { storeToRefs } from 'pinia';
import { on } from 'events';
const cartStore=useCartStore()
const {cart}=storeToRefs(cartStore)

onMounted(async ()=>{
    cartStore.loadCartInstance()
});

</script>
<template>
    <v-card>
        <v-card-item v-for="product in cart.products" :key="product.id" margin="0" class="bd-3px">
            <v-card-text>
               Product price: {{product.price}}
            <v-card-text>
            </v-card-text> 
             Total number of items:{{ product.quantity }}
            </v-card-text>
        </v-card-item>
    </v-card>
</template>