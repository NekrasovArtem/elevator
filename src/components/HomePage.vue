<script>
export default {
    
}
</script>

<template>
    <section class="section section__settings" v-if="screen === 'main'">
        <div class="errors" v-if="error !== null">
            <span class="error">{{ error }}</span>
        </div>
        <div class="settings">
            <h2 class="settings__title">Выберите количество этажей</h2>
            <input class="settings__input" type="number" placeholder="0" v-model="floors">
            <button class="settings__button" v-on:click="startProject()">Начать</button>
        </div>
    </section>
</template>