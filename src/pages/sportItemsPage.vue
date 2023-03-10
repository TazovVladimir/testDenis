<script>
import carousel from "../components/carousel.vue"
import pageTitle from "../components/pageTitle.vue"
import cardItemMenu from "../components/cardItemMenu.vue"
// import { mapState } from 'vuex'

export default {
    data() {
        return {
            sliderItems: [
                { id: 0, img: 'sl1.jpg' },
                { id: 1, img: 'sl2.jpg' },
                { id: 2, img: 'sl3.jpg' }
            ],
        }
    },
    components: {
        carousel,
        pageTitle,
        cardItemMenu,
    },


}


</script>
<template>

    <pageTitle />

    <!-- <h2 class="h2-title">Каталог</h2>
    <h3 class="h3-catalog-title">Спортивные товары</h3> -->



    <carousel :sliderItems="sliderItems" />



    <cardItemMenu/>







    <!-- 

    <div class="flex" style="display: flex; align-items: center;">
        <h3 class="h3-catalog-title">Список товаров</h3>
        <span style="padding: 22px 0 20px 10px;" id="count-all" class="count-all"></span>
    </div>
    <ul class="sorting">
        <li class="sorting-title">Сортировать по:</li>
        <li class="sorting-item"><a class="sorting-item-a" href="#">рейтингу</a></li>
        <li class="sorting-item"><a class="sorting-item-a" href="#">цене</a></li>
    </ul>
    <ul class="display">
        <li class="sorting-title">Отображение:</li>
        <li id="display-short" class="sorting-item"><img class="icon-hover" src="../img/display-short-img.png"
                alt="display-short-img"></li>
        <li id="display-full" class="sorting-item"><img class="icon-hover" src="../img/display-full-img.png"
                alt="display-full-img"></li>
    </ul> -->

    <!-- <ul class="cards">
        <li class="card-item" v-for="sportItem in sportItems">
            <img class="card-img" :src="'../src/img/' + sportItem.img">
            <ul class="mini-card">
                <li class="card-item-title">{{ sportItem.title }}</li>
                <li class="card-text">{{ sportItem.text }}</li>
                <li class="card-price">
                    <span class="item-price-new">{{ sportItem.newPrice }} р</span>
                    <span class="item-price-old">{{ sportItem.oldPrice }} р</span>
                </li>
                <li class="card-icons">
                    <i class='bx bx-star'></i>
                    <span class="rating-value">{{ sportItem.rating }}</span>
                </li>
                <li class="card-icons">
                    <i class='bx bx-message-square-dots'></i>
                    <span class="rating-value">{{ sportItem.msg }}</span>
                </li>
                <button class="btn btn-card">В корзину</button>
            </ul>
        </li>
    </ul> -->
    <!-- <ul class="cards">
        <li class="card-item">
            <img class="card-img" src="../img/card1.png" alt="1">
            <ul class="mini-card">
                <li class="card-item-title">Кроссовки Nike</li>
                <li class="card-text">Классические кеды модели премиум качества. Выполнены из приятной эко материалов с
                    вентиляцией, который хорошо пропускает воздух и позволяет коже дышать.</li>
                <li class="card-price">
                    <span class="item-price-new">3 999 ₽</span>
                    <span class="item-price-old">4 322 ₽</span>
                </li>
                <li class="card-icons">
                    <i class='bx bx-star'></i>
                    <span class="rating-value">4.5</span>
                </li>
                <li class="card-icons">
                    <i class='bx bx-message-square-dots'></i>
                    <span class="rating-value">0</span>
                </li>
                <button class="btn btn-card">В корзину</button>
            </ul>
        </li>
    </ul> -->
</template>
<style scoped>
h1 {
    color: black;
}
</style>