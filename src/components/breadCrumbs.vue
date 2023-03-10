<script>
export default {
    // data() {
    //     return {
    //         path: '',
    //         items: [
    //             {
    //                 breadTitle: 'Начало', breadPath: '/'
    //             }
    //         ]
    //     }
    // },
    // watch: {
    //     '$route.name'(paths) {
    //         this.path = paths
    //         console.log(this.path)
    //         this.items.push([0],{breadTitle: this.path}, {breadPath: this.path})
    //     }
    // }

}
</script>
<template>
    <!-- <ul class="bread-crumbs">
        <li class="crumbs-items" v-for="item in items">
                <router-link to="`$root`">
                    {{ item.breadTitle }}
                </router-link>
        </li>
    </ul> -->

    


</template>
<style scoped>
.bread-crumbs {
    display: flex;
}

.crumbs-items {
    padding-right: 10px;
    color: aliceblue;
}

.crumbs-items::after {
    content: '/';
}
li:last-child{
    opacity: 70%;
}
</style>