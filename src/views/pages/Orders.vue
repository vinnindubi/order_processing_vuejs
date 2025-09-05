<script setup>
import axios from 'axios';
import {ref,onMounted} from 'vue'
    
const orders=ref([]);
onMounted(  async ()=>{
 const url = 'http://localhost:8000/api/orders/list'
 const response = await axios.get(url);
    orders.value=response.data.data;
}
);

</script>
<template>
    <div>
        <p>All Orders</p>
    </div>
    <div>
        <v-table>
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                    <th>payment Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in orders" :key="order.id">
                    <td>{{ order.id }}</td>
                    <td>{{ order.quantity }}</td>
                    <td>{{order.amount}}</td>
                    <td>{{ order.payment_status}}</td>
                </tr>
            </tbody>
        </v-table>
    </div>
    
</template>