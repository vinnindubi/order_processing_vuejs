 <script setup>
    import axios from 'axios'
    import {ref, onMounted} from 'vue'
    const customers =ref([]);
    const isLoading=ref(true) 
    onMounted( 
        async()=>{
            try{
            const url= 'http://localhost:8000/api/customers';
            const response = await axios.get(url);
            customers.value=response.data;
        } catch(error){
            console.error("Failed to fetch customers:", error)
        }
        finally{
            isLoading.value=false
        }
    }
    );
</script>
<template>
    <h3>This is the customers page</h3>
    <div v-if="isLoading">
        <p>Loading Customers ...</p>
    </div>
    <v-table  v-else density="compact" striped="even">
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