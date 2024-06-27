<script>
export default {
    methods: {
        reset() {
            this.$router.push('/')
        }
    }
}
</script>

<template>
    <header class="header">
        <div class="header__wrapper">
            <h1 class="logo">Web-Elevator</h1>
            <button class="reset" v-on:click="reset()" title="Вернуться"></button>
        </div>
    </header>
</template>