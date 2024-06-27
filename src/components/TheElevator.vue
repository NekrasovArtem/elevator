<script>
export default {
    data() {
        return {
            elevator: null,
            leftDoor: null,
            rightDoor: null,
        }
    },
    mounted() {
        this.elevator = this.$refs.elevator
        this.leftDoor = this.$refs.leftDoor
        this.rightDoor = this.$refs.rightDoor
    }
}
</script>

<template>
    <div class="elevator" id="elevator" ref="elevator">
        <div class="door door__left" ref="leftDoor"></div>
        <div class="door door__right" ref="rightDoor"></div>
    </div>
</template>