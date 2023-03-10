import { createRouter, createWebHistory } from "vue-router"
import mainPage from "../pages/mainPage.vue"
import accPage from "../pages/accPage.vue"
import notFoundPage from "../pages/notFoundPage.vue"
import sportPage from "../pages/sportItemsPage.vue"
import extremePage from "../pages/extremeItemsPage.vue"
import accCart from "../pages/accCart.vue"


import sportPageId from "../pages/sportPageId.vue"




export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home', name: 'Главная страница', component: mainPage, alias: '/', meta: {
                breadcrumb: 'Home'
            },
        },
        { path: '/account', name: 'Аккаунт', component: accPage },
        { path: '/cart', name: 'Корзина', component: accCart },
        { path: '/sport-items', name: 'Спортивные товары', component: sportPage },
        { path: '/extreme-items', name: 'Экстремальные товары', component: extremePage },




        { path: '/sport-item-card/:id', component: sportPageId },




        { path: '/:pathMatch(.*)*', name: 'Ссылки не существует', component: notFoundPage },

    ]
})