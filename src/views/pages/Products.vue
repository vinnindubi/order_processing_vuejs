<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { useCartStore } from '@/stores/cart';
import { storeToRefs } from 'pinia';

const products = ref([])
const cartStore=useCartStore()
const {cart ,cartCount} =storeToRefs(cartStore) //object destructuring also same as const cart = cartStore.cart

onMounted(async () => {
  const url = "http://localhost:8000/api/products"
  const response = await axios.get(url);
  products.value = response.data.data;

  cartStore.loadCartInstance()
})
function addToCart(product){
  cartStore.addToCart({id:product.id,price:product.price,quantity:1})
}
function removeItem(product){
  cartStore.removeFromCart(product.id)
  alert('removed successfully')
}

console.log(cartCount.value);
</script>

<template>
  <div>
    <h3 class="mb-4">Our Products</h3>

    <!-- Card grid -->
    <v-container fluid>
      <v-row>
        <v-col
          v-for="product in products"
          :key="product.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <v-card class="d-flex flex-column pa-2" height="250" elevation="3">
            <v-card-item>
              <v-card-title>{{ product.name }}</v-card-title>
              <v-card-subtitle>Price: ${{ product.price }}</v-card-subtitle>
            </v-card-item>

            <v-card-text >
              {{ product.description }}
            </v-card-text>

            <v-card-actions>
              <v-btn color="primary" @click="addToCart(product)">
                Add To Cart
              </v-btn>
              <v-card v-if="cartStore.getQuantity(product.id).value > 0">
                {{ cartStore.getQuantity(product.id).value }}
              </v-card>
           
              <v-btn color="primary" @click='removeItem(product)'>
                 Remove
              </v-btn>

            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

