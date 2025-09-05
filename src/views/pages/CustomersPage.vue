 <script setup>
    import axios from 'axios'
    import {ref, onMounted} from 'vue'
    const customers =ref([]);
    onMounted(
        async()=>{
            const url= 'http://localhost:8000/api/customers';
            const response = await axios.get(url);
            customers.value=response.data;
        }
    );
</script>
<template>
    <h3>This is the customers page</h3>
    <v-table density="compact" striped="even">
        <thead>
            <tr>
                <th class="text-left">#ID</th>
                <th>Name</th>
                <th>Phone Number</th>
            </tr>
        </thead>       
        <tbody>
            <tr v-for="customer in customers" :key="customer.id">
                <td>{{ customer.id }}</td>
                <td>{{customer.name}}</td>
                <td>{{ customer.phone_number }}</td>
            </tr>
        </tbody>
    </v-table>
</template>