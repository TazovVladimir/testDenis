<script>
</script>
<template>
    <h1>ОЙ! что-то пошло не так...</h1>
    <p class="notfound">
        404
    </p>
    <p class="p">
        Похоже, мы не можем найти нужную вам страницу...
    </p>
    <router-link to="/">
        <span>На главную</span>
    </router-link>
</template>
<style scoped>
h1 {
    color: var(--color-text);
    font-size: 30px;
}

.notfound {
    font-size: 200px;
    font-weight: 500;
    color: var(--color-404);
}

p {
    margin: 10px 0;
}

.p {
    font-weight: 200;
    font-size: 18px;
    color: var(--drop-a);
}

span {
    color: var(--btn-b);
    font-weight: 400;
}

span:hover {
    opacity: 70%;
}
</style>