<script>
export default {
    data() {
        return {
            floorsArray: [5,4,3,2,1]
        }
    },
    methods: {
        callElevator(item) {

        }
    }
}
</script>

<template>
    <div class="floors__wrapper">
        <div class="floor" v-for="(item, index) in floorsArray" :key="index">
            <div class="floor__wrapper">
                <span class="floor__number">{{ item }}</span>
                <button class="floor__button" v-on:click="callElevator(item)" title="Вызвать лифт"></button>
            </div>
        </div>
    </div>
</template>