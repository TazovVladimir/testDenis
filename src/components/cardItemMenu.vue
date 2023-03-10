<script>
import axios from 'axios'
export default {
    data() {
        return {
            isFull: false,
            array: [],
            info: []
        }
    },
    components: {

    },
    methods: {
        full() {
            this.isFull = true
            localStorage.cardFull = 'full'

        },
        short() {
            this.isFull = false
            localStorage.cardFull = 'short'
        },
        getCardItemId() {
            console.log(item.id)
        },
    },
    mounted() {
        if (localStorage.cardFull == 'short') {
            this.isFull = false
        }
        else {
            this.isFull = true
        }
        axios
            .get('http://restapi/sportitems')
            .then(response => (this.info = response.data))
            .catch(error => console.log(error))
    },
    computed: {
        cardLength() {
            return this.getData.length
        },
        getData() {
            return this.$store.getters.getData

        },
        discountCount() {
            // return Math.round(((this.getData.oldPrice-this.getData.newPrice)/this.getData.oldPrice)*100)
            // return this.getData.id
        },




        // todosByTitle() {
        //     return this.sportItems.filter(item => item.title.indexOf(this.$store.state.titleItem) !== -1)
        // },

    }

}


</script>
<template>
    <div v-for="item in info">
        {{ item }}
    </div>
    <div class="flex" style="display: flex; align-items: center;">
        <h3 class="h3-catalog-title">Список всех товаров</h3>
        <span style="padding: 22px 0 20px 10px;" class="count-all">{{ cardLength }}</span>
    </div>
    <ul class="sorting">
        <li class="sorting-title">Сортировать по:</li>
        <li class="sorting-item"><a class="sorting-item-a" href="#">рейтингу</a></li>
        <li class="sorting-item"><a class="sorting-item-a" href="#">цене</a></li>
    </ul>
    <ul class="display">
        <li class="sorting-title">Отображение:</li>
        <li @click="short()" class="sorting-item">
            <i class='bx bxs-grid-alt bx-sm view_mode_color'></i>
        </li>
        <li @click="full()" class="sorting-item">
            <i class='bx bxs-collection bx-sm view_mode_color'></i>
        </li>
    </ul>




    <ul class="cards" :class="{ cards_full: isFull }">
        <router-link tag="li" class="card-item" :class="{ card_item_full: isFull }" v-for="sportItem in getData"
            :key="sportItem.id" :to="`/sport-item-card/${sportItem.id}`">
            <div class="card_img_top">
                <img class="card-img" :src="'../src/img/' + sportItem.img1">
                <div v-if="sportItem.oldPrice" class="discountCount">
                    -{{ Math.round(((sportItem.oldPrice - sportItem.newPrice) / sportItem.oldPrice) * 100) }}%</div>
            </div>
            <ul class="mini-card">
                <li class="card-item-title">{{ sportItem.title }}</li>
                <li class="card-text">{{ sportItem.text }}</li>
                <li class="card-price">
                    <span class="item-price-new">{{ sportItem.newPrice }} р</span>
                    <span v-if="sportItem.oldPrice" class="item-price-old">{{ sportItem.oldPrice }} р</span>
                </li>
                <li class="card-icons">
                    <i class='bx bx-star'></i>
                    <span class="rating-value">{{ sportItem.rating }}</span>
                </li>
                <li class="card-icons">
                    <i class='bx bx-message-square-dots'></i>
                    <span class="rating-value">{{ sportItem.msg }}</span>
                </li>
                <button class="btn btn-card">Перейти</button>
            </ul>
        </router-link>
    </ul>
</template>
<style scoped>
.discountCount {
    position: absolute;
    bottom: 10px;
    right: 10px;
    z-index: 999;
    padding: 4px 8px 4px 8px;
    border-radius: 5px;
    background-color: var(--discountCount_back);
    color: var(--discountCount_color);
    ;
}

.card_img_top {
    position: relative;
}

.card_item_full .card_img_top {
    min-width: 370px;
    height: 224px;
}
</style>