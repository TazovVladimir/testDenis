import { createRouter,createWebHistory  } from "vue-router"
import api from "../api/api.js"

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/api', name: 'API', component: api }        
    ]
})