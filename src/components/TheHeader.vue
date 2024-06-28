<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <header class="header">
        <div class="header__wrapper">
            <RouterLink to="/" class="logo">Web-Elevator</RouterLink>
            <RouterLink to="/" class="reset" title="Вернуться"></RouterLink>
        </div>
    </header>
</template>