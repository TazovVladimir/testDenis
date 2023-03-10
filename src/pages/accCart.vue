<script>
export default {
    data() {
        return {
            count: 1,
            btn_del: false
        }
    },
    computed: {
        cartItem() {
            return this.$store.getters.getCart

        },
        cartLength() {
            return this.cartItem.length
        },
    },
    methods: {
        countPlus() {
            this.count++
        },
        countMin() {
            if (this.count <= 1) {
                return 1
            }
            else
                this.count--
        },
        btn_del_all() {
            this.btn_del = true
        }
    },
}
</script>
<template>
    <h2 class="h2-title" style="position: relative;">Корзина <span class="count_all_in_Cart">{{ cartLength }}</span>
    </h2>
    <div v-if="cartItem != ''">
        <h3 class="h3-catalog-title">Добро Пожаловать, Владимир</h3>

        <div class="carts">
            <div class="cart_items">
                <div class="check">
                    <label class="check_label" for="checkbox_select_all">
                        <input class="main_checkbox" type="checkbox" id="checkbox_select_all" />
                        <span class="checkbox_el"></span>
                        Выбрать все
                    </label>
                    <label class="button_select_sel" for="button_select_del">
                        <input class="btn_del_all" type="button" id="button_select_del" @click="btn_del_all" />
                        Удалить выбранные
                    </label>
                </div>
                <div class="cart_all cart_block">
                    <!-- <h2 class="h2-title_cart">Список всех товаров</h2> -->
                    <ul>
                        <li v-for="(item, index) in cartItem" key="cart" class="cartItem">
                            <ul class="cart_main_ul">
                                <li class="index">
                                    <label class="check_label" :for="checkbox_select_all">
                                        <input class="main_checkbox" type="checkbox" :id="checkbox_select_all"
                                            v-model="checked" />
                                        <span class="checkbox_el"></span>
                                    </label>
                                </li>
                                <li>
                                    <img class="cart_img" :src="'../src/img/' + item.img1">
                                </li>
                                <li class="title_and_par">
                                    <ul class="text_ul">
                                        <li>{{ item.title }}</li>
                                        <li class="par_text">Цвет: {{ item.newPrice }}</li>
                                        <li class="par_text">Размер: {{ item.rating }}</li>
                                    </ul>
                                </li>
                                <li class="counter">
                                    <ul class="counter_ul">
                                        <li>
                                            <span>–</span>
                                        </li>
                                        <li>
                                            <span class="count_item">1</span>
                                        </li>
                                        <li>
                                            <span>+</span>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <ul class="text_ul" style="text-align:right;">
                                        <li>{{ item.newPrice }} р</li>
                                        <li class="par_text">Осталось: {{ item.rating }}</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="cart_block cart_total">
                <h2 class="h2-title_cart">Итого <span style="float:right">23232 р</span></h2>
                <ul сlass="total_ul">
                    <li class="total_li">Товары <span style="float:right">234</span></li>
                    <li class="total_li">Скидка <span style="float:right">232</span></li>
                    <li class="total_li">Доставка <span style="float:right">253</span></li>
                    <li class="total_li">Оплата <span style="float:right">Карта</span></li>
                    <li style='margin-bottom: 20px;' class="btn">Перейти к оплате</li>
                    <li>
                        <label class="check_label check_argee" for="check_argee">
                            <input class="main_checkbox" type="checkbox" id="check_argee" />
                            <span class="checkbox_el"></span>
                            Согласен с условиями Правил пользования торговой площадкой и правилами возврата
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div v-else>
        <h3 class="h3-catalog-title">В корзине пока пусто</h3>
        <router-link to="/sport-items">
            <p>Перейти в каталог</p>
        </router-link>
    </div>
</template>
<style scoped>
.cart_main_ul {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
}


.cart_img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 7px;
    border: 1px solid var(--nav-back);
}

.text_ul {
    margin-left: 20px;
    color: var(--color-text);
}

.text_ul li {
    margin-bottom: 10px;
}

.par_text {
    font-size: 15px;
    color: var(--drop-a);
}

.cartItem {
    margin-bottom: 20px;
    border-bottom: 1px solid var(--border);
}

.cartItem:last-child {
    margin-bottom: 0;
    border: none;
}

.index {
    color: var(--color-text);
    margin-right: 5px;
    display: flex;
    align-items: center;
}



.count_all_in_Cart {
    font-size: 18px;
    color: var(--drop-a);
    font-weight: 400;
    position: absolute;
    top: 15px;
    left: 102px;

}






.carts {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.cart_block {
    background-color: var(--back);
    padding: 20px;
    border-radius: 7px;
    box-shadow: 0px 5px 13px -3px rgb(34 60 80 / 10%);
}

.cart_items {
    width: 65%;
}



.cart_total {
    width: 33%;
    height: 100%;
}


.check {
    margin-bottom: 10px;
    background-color: var(--back);
    padding: 20px;
    border-radius: 7px;
    box-shadow: 0px 5px 13px -3px rgb(34 60 80 / 10%);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.button_select_sel {
    color: var(--drop-a);
}

.button_select_sel:hover {
    color: var(--btn-back-a-hover);
    cursor: pointer;
}

.btn_del_all {
    width: 30px;
}

.h2-title_cart {
    padding: 0 0 10px 0;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    border-bottom: 1px solid var(--border);
    margin-bottom: 10px;
    color: var(--color-text);
}

.cart_all {
    max-height: 65vh;
    overflow: scroll;
}

.cart_all::-webkit-scrollbar {
    display: none;
}

.total_ul {
    display: flex;
    flex-direction: column;
}

.total_li {
    padding-bottom: 15px;
    color: var(--drop-a);
    font-size: 16px;
    font-weight: 400;
}

.check_argee {
    font-size: 14px;
    color: var(--drop-a);
}

.counter {
    display: flex;
    align-items: center;
}

.counter_ul {
    display: flex;
    background-color: var(--nav-back);
    border-radius: 5px;
}

.counter_ul li {
    width: 35px;
    height: 35px;
    color: var(--logo);
    font-weight: 500;
    border-right: 1px solid var(--border);
    position: relative;
}

.counter_ul li span {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
}

.counter_ul li:last-child {
    border: none;
}

.counter_ul li:hover {
    opacity: 70%;
    cursor: pointer;
}
.title_and_par{
    width: 165px;
}
.count_item{
    color: var(--color-text);
}
</style>