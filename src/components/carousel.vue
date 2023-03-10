<script>
export default {
    props: ['sliderItems'],
    data() {
        return {
            slideShow: 0,
            isAcive: false
        }
    },
    methods: {
        next: function () {
            if (this.slideShow <= 1) {
                this.slideShow++
                this.isAcive = true
            }
            else this.slideShow = 0

        }
    },
    created() {
        setInterval(() => {
            this.next()
        }, 3000)
    }
}


// v-show="item.id == slideShow"
</script>
<template>
    <ul class="slider">
        <li class="slider-item" v-for="item in sliderItems" v-show="item.id == slideShow">
            <img :src="'../src/img/' + item.img" >
        </li>
    </ul>
    <p class="catalog-about">
        Спортивные товары — группа товаров для всех видов физической культуры, туризма, спортивных занятий и игр.
        Включает инвентарь, оборудование, одежду и обувь
    </p>
</template>

<style scoped>
.slider {
    position: relative;
    height: 250px;
    width: 100%;
}

.slider-item {
    opacity: 1;
    transition: opacity 1s ease 0s;
    position: absolute;
    width: 100%;
    height: 250px;
}

.sl_active {
    opacity: 1;
}

.slider-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
}
</style>