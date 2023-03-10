<script>
import notFoundPage from '../pages/notFoundPage.vue'
export default {
    data() {
        return {
            selectedImg: '',
            isZoom: false,
            x: '',
            y: '',
            checkedColor: 'не выбрано',
            checkedSize: 'не выбрано',
            isBtn: true,
            error: [],
            array: [],
        }
    },
    computed: {
        showImg() {
            if (!this.selectedImg) {
                return this.getItem.img1
            }
            else {
                return this.selectedImg
            }
        },
        cardId() {
            return +this.$route.params.id;
        },
        checkedAll() {
            if (this.checkedSize != 'не выбрано' && this.checkedColor != 'не выбрано') {
                this.isBtn = false
            }
        },
        getItem() {
            return this.$store.getters.getProduct(this.cardId)
        },
        discountCount(){
            if(this.getItem.oldPrice >= 0 ){
                return Math.round(((this.getItem.oldPrice-this.getItem.newPrice)/this.getItem.oldPrice)*100)
            }            
        },
        // addToCart(){
        //     return this.$store.dispatch('getCart', this.getItem);
        // }





    },
    methods: {
        zoomImgLeave() {
            this.isZoom = false
        },
        pos(e) {
            this.x = 600 - e.clientX
            this.y = 300 - e.clientY
            this.isZoom = true
        },
        checkedItems() {
            if (this.checkedSize != 'не выбрано' && this.checkedColor != 'не выбрано') {
                this.array = this.checkedSize
                this.error = this.checkedColor

                // console.log('нажата')
                this.$store.dispatch('getCart', this.getItem)

            }
            else {
                this.error = 'не выбран один параметр'
            }
        },
    },
    components: {
        notFoundPage
    }
}

</script>
<template>
    <div v-if="getItem">
        <h2 class="h2-title">Карточка товара</h2>
        <h3 class="h3-catalog-title">
            {{ getItem.category }} - <span class="span_value">{{ getItem.title }}</span>
        </h3>
        <div class="card_product">
            <div class="product_images">
                <ul class="main_img">
                    <li v-if="getItem.oldPrice" class="discountCount">-{{discountCount}}%</li>
                    <li>
                        <img :src="'../src/img/' + showImg" :class="{ hideMainIng: isZoom }">
                    </li>
                    <li class="zoom" @mousemove="pos" @mouseleave="zoomImgLeave">
                        <img class="hide" :class="{ show: isZoom }" :src="'../src/img/' + showImg"
                            :style="{ transform: 'scale(1.8) translate(' + x / 2.5 + 'px,' + y / 2.5 + 'px)' }">
                    </li>
                </ul>
                <!-- <ul class="item_img">
                <li class="item_img" v-for="item in itemImg" key="item">
                    <label :for="item.path">
                        <img :src="'../src/img/' + item.path">
                    </label>
                    <input class="input_img" type="radio" :value="item.path" v-model="selectedImg" :id="item.path">
                </li>
            </ul> -->

                <ul class="item_img">
                    <li class="item_img">
                        <label for="img1">
                            <img :src="'../src/img/' + getItem.img1">
                        </label>
                        <input class="input_img" type="radio" :value="getItem.img1" v-model="selectedImg" id="img1">
                    </li>
                    <li class="item_img">
                        <label for="img2">
                            <img :src="'../src/img/' + getItem.img2">
                        </label>
                        <input class="input_img" type="radio" :value="getItem.img2" v-model="selectedImg" id="img2">
                    </li>
                    <li class="item_img">
                        <label for="img3">
                            <img :src="'../src/img/' + getItem.img3">
                        </label>
                        <input class="input_img" type="radio" :value="getItem.img3" v-model="selectedImg" id="img3">
                    </li>
                    <li class="item_img">
                        <label for="img4">
                            <img :src="'../src/img/' + getItem.img4">
                        </label>
                        <input class="input_img" type="radio" :value="getItem.img4" v-model="selectedImg" id="img4">
                    </li>
                    <li class="item_img">
                        <label for="img5">
                            <img :src="'../src/img/' + getItem.img5">
                        </label>
                        <input class="input_img" type="radio" :value="getItem.img5" v-model="selectedImg" id="img5">
                    </li>
                </ul>
            </div>
            <ul class="product_param_ul">
                <li class="product_param_li">
                    <span class="span_main">Название: </span>
                    <span class="span_value">{{ getItem.title }} </span>
                </li>
                <li class="product_param_li">
                    <span class="span_main">Артикул: </span>
                    <span class="span_value">{{ getItem.id }}</span>
                </li>
                <li class="product_param_li">
                    <span class="span_main">Цена: </span>
                    <span class="span_value">{{ getItem.newPrice }} р</span>
                </li>
                <li class="product_param_li" v-if="getItem.oldPrice">
                    <span class="span_main">Старая цена: </span>
                    <span class="span_value" style="text-decoration: line-through;">{{ getItem.oldPrice }} р</span>
                </li>
                <li class="product_param_li">
                    <span class="span_main">Пол: </span>
                    <span class="span_value">{{ getItem.sex }}</span>
                </li>
                <li class="product_param_li">
                    <span class="span_main">О товаре: </span>
                    <span class="span_value">{{ getItem.text }}</span>
                </li>
                <li class="product_param_li">
                    <span class="span_main">Рейтинг: </span>
                    <span class="span_value">{{ getItem.rating }}</span>
                </li>
                <li class="product_param_li">
                    <span class="span_main">Отзывы: </span>
                    <span class="span_value">{{ getItem.msg }}</span>
                </li>
                <li class="product_param_li">
                    <span class="span_main">Цвет: </span>
                    <span class="span_value">{{ checkedColor }}</span>
                    <ul class="colors">
                        <li>
                            <input type="radio" id="choose_color_black" value="black" v-model="checkedColor">
                            <label for="choose_color_black">
                                <span class="choose_color choose_color_black"></span>
                            </label>
                        </li>
                        <li>
                            <input type="radio" id="choose_color_white" value="white" v-model="checkedColor">
                            <label for="choose_color_white">
                                <span class="choose_color choose_color_white"></span>
                            </label>
                        </li>
                    </ul>
                </li>
                <li class="product_param_li">
                    <span class="span_main">Размер: </span>
                    <span class="span_value">{{ checkedSize }}</span>
                    <ul class="colors">
                        <li>
                            <input type="radio" id="choose_size_39" value="39" v-model="checkedSize">
                            <label for="choose_size_39">
                                <span class="choose_color">39</span>
                            </label>
                        </li>
                        <li>
                            <input type="radio" id="choose_size_40" value="40" v-model="checkedSize">
                            <label for="choose_size_40">
                                <span class="choose_color">40</span>
                            </label>
                        </li>
                        <li>
                            <input type="radio" id="choose_size_41" value="41" v-model="checkedSize">
                            <label for="choose_size_41">
                                <span class="choose_color">41</span>
                            </label>
                        </li>
                        <li>
                            <input type="radio" id="choose_size_42" value="42" v-model="checkedSize">
                            <label for="choose_size_42">
                                <span class="choose_color">42</span>
                            </label>
                        </li>
                        <li>
                            <input type="radio" id="choose_size_43" value="43" v-model="checkedSize">
                            <label for="choose_size_43">
                                <span class="choose_color">43</span>
                            </label>
                        </li>
                        <li>
                            <input type="radio" id="choose_size_44" value="44" v-model="checkedSize">
                            <label for="choose_size_44">
                                <span class="choose_color">44</span>
                            </label>
                        </li>

                    </ul>
                </li>
                <li :class="{ btn_disabled: isBtn }" v-bind="checkedAll" @click="checkedItems" class="btn">
                    Добавить в корзину
                </li>
            </ul>
            {{ error }}
            {{ array }}
        </div>
    </div>
    <div v-else>
        <h2 class="h2-title">Карточка товара</h2>
        <h3 class="h3-catalog-title">
            Товар « {{ cardId }} » не найден
        </h3>
        <notFoundPage />
    </div>
</template>
<style scoped>
.zoom {
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 450px;
    height: 300px;
    cursor: pointer;
    border: 1px solid var(--nav-back);
}

.card_product {
    display: flex;
    border-radius: 8px;
    padding: 20px;
    background-color: var(--back);
}

.product_images {
    width: 450px;
}

.product_param_ul {
    margin-left: 20px;
}

.span_main {
    color: var(--color-text);
    font-weight: 400;
    font-size: 18px;
}

.product_param_li {
    padding-bottom: 10px;
}

.span_value {
    font-size: 16px;
    color: var(--drop-a);
}

.main_img {
    margin-bottom: 10px;
    height: 300px;
    width: 450px;
    position: relative;
}

.hide {
    opacity: 0;
}

.show {
    opacity: 1;
}

.main_img li img {
    width: 100%;
    height: 300px;
    object-fit: cover;
}

.item_img {
    display: flex;
    justify-content: space-between;
}

.item_img li {
    border: 1px solid var(--nav-back);
}

.item_img li:hover {
    cursor: pointer;
    opacity: 70%;
}

.item_img li:last-child {
    margin-right: 0;
}

.item_img li img {
    height: 55px;
    width: 74px;
    object-fit: cover;
    cursor: pointer;
}

input {
    display: none;
}

.hideMainIng {
    opacity: 10%;
}

.choose_color {
    display: block;
    width: 35px;
    height: 22px;
    border-radius: 5px;
    border: 1px solid var(--nav-back);
    font-weight: 400;
    background-color: var(--nav-back);
    font-size: 16px;
    color: var(--drop-a);
    text-align: center;
}

.choose_color:hover {
    cursor: pointer;
    opacity: 70%;
}

.choose_color_black {
    background-color: rgb(0, 0, 0);
}

.choose_color_white {
    background-color: rgb(255, 255, 255);
}

.colors {
    padding-top: 10px;
    display: flex;

}

.colors li {
    margin-right: 10px;
    align-items: center;
    justify-content: center
}

label {
    display: flex;
}

.h3-card-title {
    color: var(--color-text);
    padding-top: 10px;
}

.discountCount{
    position: absolute;
    padding: 4px 8px 4px 8px;
    border-radius: 5px;
    background-color: var(--discountCount_back);
    color: var(--discountCount_color);;
    top: 20px;
    left: 20px;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;

}
</style>