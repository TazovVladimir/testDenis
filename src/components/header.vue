<script setup>
import filters from '../components/filter.vue'
</script>
<script>
export default {
    data() {
        return {
            // id: this.$route.params['id'],
            nav_main: true,
            nav_acc: false,
            nav_cat: false,
            nav_set: false,
            path: '',
            isDark: false,
            isDarkBtn: false,
            isSwitch: false,
        }
    },
    methods: {
        nav_toggle_main() {
            this.nav_main = true
            this.nav_acc = false
            this.nav_cat = false
        },
        nav_toggle_acc() {
            this.nav_acc = !this.nav_acc
            this.nav_main = false

        },
        nav_toggle_cat() {
            this.nav_cat = !this.nav_cat
            this.nav_main = false
        },
        nav_toggle_set() {
            this.nav_set = !this.nav_set
        },
        setDark() {
            if (this.isDark == false) {
                document.documentElement.setAttribute('data-theme-name', 'dark');
                this.isDark = true
                this.isDarkBtn = true
                this.isSwitch = true
                localStorage.theme = 'dark';
            }
            else {
                document.documentElement.setAttribute('data-theme-name', 'light');
                this.isDark = false
                this.isDarkBtn = false
                this.isSwitch = false
                localStorage.theme = 'light';
            }
        }
    },
    mounted() {
        if (localStorage.theme == 'light') {
            document.documentElement.setAttribute('data-theme-name', 'light');
            this.isDark = false
            this.isDarkBtn = false
            this.isSwitch = false
        }
        else {
            document.documentElement.setAttribute('data-theme-name', 'dark');
            this.isDark = true
            this.isDarkBtn = true
            this.isSwitch = true
        }
    },
    watch: {
        '$route.path'(paths) {
            this.path = paths
            // console.log(this.path)
            if (this.path == '/account') {
                this.nav_acc = true
                this.nav_main = false
            }
            if (this.path == '/') {
                this.nav_main = true
                this.nav_acc = false
                this.nav_cat = false
            }
            if (this.path == '/sport-items') {
                this.nav_cat = true
                this.nav_main = false
            }
            if (this.path == '/extreme-items') {
                this.nav_cat = true
                this.nav_main = false
            }
            if (this.path == '/cart') {
                this.nav_acc = true
                this.nav_main = false
            }
        }
    },
    components: {
        filters
    },
}
</script>
<template>
    <header id="header">
        <ul class="nav">
            <li class="logo">
                <router-link to="/home">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="62.000000pt" height="28.000000pt"
                        viewBox="0 0 62.000000 28.000000" preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,28.000000) scale(0.100000,-0.100000)" fill="" stroke="none">
                            <path
                                d="M302 230 c-32 -39 -34 -39 -58 -24 -29 20 -30 20 -156 -118 l-80 -88 302 0 303 0 -129 133 c-71 72 -133 133 -139 134 -5 2 -25 -15 -43 -37z m-64 -32 c18 -18 15 -29 -18 -68 l-29 -35 2 45 c4 65 19 84 45 58z m332 -180 c0 -4 -31 -8 -68 -8 -67 0 -68 0 -112 45 l-45 45 35 -6 34 -7 -34 43 c-34 44 -31 45 22 8 39 -27 41 -23 13 30 -25 44 -20 40 64 -47 50 -52 91 -98 91 -103z" />
                        </g>
                    </svg>
                    <span class="name-comp">SPORTRENT</span>
                </router-link>
            </li>
            <li class="nav-link">
                <router-link to="/home">
                    <ul class="dropdownn" :class="{ dropdownn_show: nav_main }">
                        <li class="dropdownnBtn" @click="nav_toggle_main()">
                            <i class='bx bx-home-alt bx-sm'></i>
                            <span class="nav-span-link">??????????????</span>
                        </li>
                    </ul>
                </router-link>
            </li>
            <li class="nav-link">
                <ul class="dropdownn" :class="{ dropdownn_show: nav_acc }">
                    <li class="dropdownnBtn" @click="nav_toggle_acc()">
                        <i class='bx bx-user bx-sm'></i>
                        <span class="nav-span-link">??????????????</span>
                        <div v-if="nav_acc == false">
                            <i class='arrow-right bx bx-chevron-down bx-sm'></i>
                        </div>
                        <div v-else>
                            <i class='arrow-right bx bx-chevron-up bx-sm'></i>
                        </div>
                    </li>
                    <li class="dropdownn-li">
                        <router-link to="/account" active-class="active-cat" class="dropdownn-a">
                            <i class='p-icon-catalog bx bx-user-circle bx-xs'></i>
                            ????????????????
                        </router-link>
                    </li>
                    <li class="dropdownn-li">
                            <router-link to="/cart" active-class="active-cat" class="dropdownn-a">
                                <i class='p-icon-catalog bx bx-cart bx-xs'></i>
                                ??????????????
                            </router-link>
                    </li>
                </ul>
            </li>
            <li class="nav-link">
                <ul class="dropdownn" :class="{ dropdownn_show: nav_cat }">
                    <li class="dropdownnBtn" id="btn-to-filter" @click="nav_toggle_cat()">
                        <i class='bx bx-category bx-sm'></i>
                        <span class="nav-span-link">??????????????</span>
                        <div v-if="nav_cat == false">
                            <i class='arrow-right bx bx-chevron-down bx-sm'></i>
                        </div>
                        <div v-else>
                            <i class='arrow-right bx bx-chevron-up bx-sm'></i>
                        </div>
                    </li>
                    <li class="dropdownn-li">
                        <router-link to="/sport-items" active-class="active-cat" class="dropdownn-a">
                            <i class='p-icon-catalog bx bx-football bx-xs'></i>
                            ???????????????????? ????????????
                        </router-link>
                    </li>
                    <li class="dropdownn-li">
                        <router-link to="/extreme-items" active-class="active-cat" class="dropdownn-a">
                            <i class='p-icon-catalog bx bx-cart bx-xs'></i>
                            ?????????????????????????? ????????????
                        </router-link>
                    </li>
                </ul>
            </li>
            <ul class="nav-ul">
                <li class="nav-link">
                    <ul class="dropdownn" :class="{ dropdownn_show: nav_set }">
                        <li class="dropdownnBtn" @click="nav_toggle_set()">
                            <i class='bx bx-cog bx-sm'></i>
                            <span class="nav-span-link">??????????????????</span>
                            <div v-if="nav_set == false">
                                <i class='arrow-right bx bx-chevron-down bx-sm'></i>
                            </div>
                            <div v-else>
                                <i class='arrow-right bx bx-chevron-up bx-sm'></i>
                            </div>
                        </li>
                        <li class="dropdownn-li">
                            <i class='p-icon-catalog bx bx-moon bx-xs'></i>
                            <span class="dropdownn-span">???????????? ????????</span>
                            <ul class="theme-mode" :class="{ 'theme_mode_dark': isDark }" @click="setDark()">
                                <li class='theme-mode-switch'>
                                    <div class="wrapper-switch" :class="{ wrapper_switch_dark: isSwitch }">
                                        <div class="btn-switch" :class="{ btn_switch_dark: isDarkBtn }"></div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li class="dropdownn-li">
                            <i class='p-icon-catalog bx bx-dock-left bx-xs'></i>
                            <span class="dropdownn-span">???????????? ????????</span>
                            <i id="arrow-close" class='size-icon bx bx-expand-horizontal'></i>
                        </li>
                    </ul>
                </li>
            </ul>
        </ul>
        <filters />
    </header>
</template>
  
<style scoped>
header {
    position: fixed;
    overflow: scroll;
    background-color: var(--back);
    width: 340px;
    min-height: 100vh;
    max-height: 100vh;
    padding: 20px;
    border-right: 2px solid var(--border-right);
    padding-bottom: 130px;
}

header::-webkit-scrollbar {
    display: none;
}

.logo a {
    display: flex;
    align-items: center;
    color: var(--color-text);
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
    margin-bottom: 20px;
    width: 200px;
}

.logo .name-comp {
    padding-left: 10px;
    font-weight: 500;
    letter-spacing: 1px;
}

.dropdownnBtn {
    display: flex;
    padding: 14px;
}

.dropdownnBtn:hover {
    background: var(--nav-back);
    color: var(--color-text);
    border-radius: 7px;
    cursor: pointer;
}

.dropdownn-li {
    padding: 7px 0 7px 14px;
    font-size: 18px;
    font-weight: 300;
    color: var(--drop-a);
    display: flex;
    align-items: center;
}

.nav-span-link {
    padding-left: 15px;
    font-size: 20px;
}

.logo path {
    fill: var(--logo);
}

.logo svg {
    min-width: 50px;
    max-width: 50px;
}

.p-icon-catalog {
    padding-left: 2px;
    padding-right: 18px;
}

.arrow-right {
    position: absolute;
    right: 30px;
    rotate: 360deg;
    transform: rotate(360deg) translate(0px, 0px);
}

.dropdownn {
    color: var(--color-text);
    margin-bottom: 4px;
    border-radius: 7px;
    overflow: hidden;
    height: 52.8px;
    opacity: 1;
}

.dropdownn-li:last-child {
    padding-bottom: 20px;
}

.dropdownn_show {
    height: 100%;
    background-color: var(--nav-back);
    border-radius: 8px;
}

.dropdownn-a {
    color: var(--drop-a);
}

.dropdownn-a:hover {
    color: var(--btn-back-a-hover);
}

.active-cat {
    color: var(--btn-back-a-hover);
}

.theme-mode {
    border-radius: 7px;
    font-size: 18px;
    padding-left: 75px;
}

.theme-mode li {
    display: flex;
}

.theme-mode li .bx {
    color: #000;
}

.theme-mode-switch {
    position: relative;
    cursor: pointer;
}

.theme-mode-switch:hover {
    opacity: 70%;
}

.wrapper-switch {
    background-color: #AAAAAA;
    width: 54px;
    height: 24px;
    border-radius: 32px;
}

.btn-switch {
    position: absolute;
    background-color: #fff;
    border-radius: 100%;
    width: 19px;
    height: 19px;
    left: 3px;
    top: 50%;
    transform: translate(0px, -50%);
    transition: transform 200ms ease-out;
}

.theme_mode_dark {
    background-color: #303436;
    color: #fff;
}

.theme_mode_dark li .bx {
    color: #fff;
}

.wrapper_switch_dark {
    background-color: #fff;
}

.btn_switch_dark {
    position: absolute;
    background-color: #303436;
    top: 50%;
    transform: translate(29px, -50%);
    transition: transform 200ms ease-out;
}

.theme-mode-title-dark {
    color: #fff;
}

.dropdownn-span {
    color: var(--drop-a);
    cursor: default;
}

.size-icon {
    margin-left: 102px;
    color: var(--drop-a);
}

.size-icon:hover {
    opacity: 70%;
    cursor: pointer;
}
</style>