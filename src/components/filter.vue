<script>

export default {
    data() {
        return {
            isFilter: false,
        }
    },
    watch: {
        '$route.path'(paths) {
            this.path = paths
            if ((this.path == '/sport-items') || (this.path == '/extreme-items')) {
                this.isFilter = true
            }
            else {
                this.isFilter = false
            }
        }
    },
    computed: {
        // todosByTitle() {
        //     return this.todos.filter(item => item.title.indexOf(this.search) !== -1)
        // },

    },
    computed: {
        titleItem: {
            get() {
                return this.$store.state.titleItem
            },
            set(value) {
                this.$store.commit('getTitleItem', value)
            }
        },



        priceItem: {
            get() {
                return this.$store.state.priceItem
            },
            set(value) {
                this.$store.commit('getPriceItem', value)
            }
        }



    },
    methods: {
        getTitleItem(e) {
            this.$store.commit('getTitleItem', e.target.value)
        },
        getPriceItem(e) {
            this.$store.commit('getPriceItem', e.target.value)
        }
    },
    components: {

    },
}
</script>
<template>
    <form class="form-filter" :class="{ form_filter_show: isFilter }">
        <h3 class="h3-filter border-b">
            Фильтрация
        </h3>
        <div class="form-filter-name">
            <label class="filter-label" for="filter-name">Название:</label>
            <!-- <input :value="title" @input="getTitleItem" class="filter-input" name="filter-name" type="text"
                placeholder="Введите название..."> -->
        </div>
        <div class="form-filter-price">
            <label class="filter-label" for="filter-price">Цена:</label>
            <!-- <input :value="price" @input="getPriceItem" class="filter-input" name="filter-price" type="text" placeholder="Введите сумму..."> -->
        </div>
        <div class="form-filter-rating">
            <label class="filter-label" for="filter-rating">Рейтинг:</label>
            <ul class="filter-radio-rating">
                <li><input class="filter-input-radio" name="filter-rating" type="radio"><label
                        class="filter-radio-label" for="1">1-2</label></li>
                <li><input class="filter-input-radio" name="filter-rating" type="radio"><label
                        class="filter-radio-label" for="1">2-3</label></li>
                <li><input class="filter-input-radio" name="filter-rating" type="radio"><label
                        class="filter-radio-label" for="1">3-4</label></li>
                <li><input class="filter-input-radio" name="filter-rating" type="radio"><label
                        class="filter-radio-label" for="1">4-5</label></li>
                <li><input class="filter-input-radio" name="filter-rating" type="radio"><label
                        class="filter-radio-label" for="1">5</label></li>
            </ul>
        </div>
        <div class="form-filter-type">
            <label class="filter-label" for="filter-type">Тип:</label>
            <input class="filter-input-radio" name="filter-type" type="radio">
            <input class="filter-input-radio" name="filter-type" type="radio">
            <input class="filter-input-radio" name="filter-type" type="radio">
            <input class="filter-input-radio" name="filter-type" type="radio">
        </div>
        <button class="btn">Поиск</button>
    </form>
</template>
<style scoped>
.form-filter {
    padding: 14px;
    flex-direction: column;
    display: none;
}

.form_filter_show {
    display: flex;
}

.form-filter>div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 10px;
}

.filter-input {
    padding: 12px;
    border: none;
    border-radius: 6px;
    background-color: var(--nav-back);
    font-size: 18px;
    font-weight: 400;
    color: var(--color-text);
    width: auto;
}

.filter-input::placeholder {
    color: var(--place-col);
    font-size: 16px;
}

.filter-label {
    color: var(--h3);
    font-size: 18px;
    font-weight: 400;
    margin: 10px 0;
}

.h3-filter {
    color: var(--h3);
    padding: 10px 0 10px 0;
    font-size: 20px;
    font-weight: 400;
    border-bottom: 1px solid var(--border);
    margin-bottom: 10px;
}

.filter-radio-rating li {
    padding: 5px 0;
}

.filter-radio-label {
    padding-left: 10px;
    color: var(--radio-label);
    font-size: 18px;
}
</style>