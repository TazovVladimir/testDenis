<script>
import carousel from "../components/carousel.vue"
import cardItemMenu from "../components/cardItemMenu.vue"

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
        cardItemMenu,
    },
    methods: {

    }
}

</script>
<template>
    <h2 class="h2-title">Каталог</h2>
    <h3 class="h3-catalog-title">Экстремальные товары</h3>
    <carousel :sliderItems="sliderItems" />

    <!-- <h2 class="h2-title">Каталог</h2>
    <h3 class="h3-catalog-title">Спортивные товары</h3> -->

    <cardItemMenu />
</template>
<style scoped>
h1 {
    color: black;
}
</style>