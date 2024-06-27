<script>
import TheElevator from '@/components/TheElevator.vue';
import TheWalls from '@/components/TheWalls.vue';
export default {
  components: {
    TheElevator,
    TheWalls
  }
}
</script>

<template>
  <section class="section section__floors">
    <TheElevator />
    <TheWalls />
  </section>
</template>