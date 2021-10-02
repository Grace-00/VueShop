import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import productsList from './components/productsList.vue'
import cart from './components/cart.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/products' },
        { path: '/products', component: productsList },
        { path: '/cart', component: cart }
    ]
})

const app = createApp(App)

app.use(router);
app.mount('#app')