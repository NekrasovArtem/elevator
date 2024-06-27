<script>
export default {
  data() {
    return {
      floorsQuantity: null,
      error: false
    }
  },
  mounted() {
    this.floorsQuantity = this.$refs.floorsQuantity.value
  },
  methods: {
    startProject() {
      this.floorsQuantity = this.$refs.floorsQuantity.value
      console.log(this.floorsQuantity)

      if (this.floorsQuantity < 2 || this.floorsQuantity > 20) {
        this.error = true
      } else {
        this.error = false
        this.$router.push('/about')
      }
    }
  }
}
</script>

<template>
  <section class="section section__settings">
    <div class="errors" v-if="error === true">
        <span class="error">Количество этажей должно быть от 2 до 20</span>
    </div>
    <div class="settings">
        <h2 class="settings__title">Выберите количество этажей</h2>
        <input class="settings__input" ref="floorsQuantity" type="number" placeholder="0">
        <button class="settings__button" v-on:click="startProject()">Начать</button>
    </div>
  </section>
</template>
