<script setup>
import { useElevatorStore } from "@/stores/elevator";
import { storeToRefs } from "pinia";

const elevatorStore = useElevatorStore();
const { doorLeft, doorRight, transition, nextFloor } = storeToRefs(elevatorStore);
</script>

<template>
  <div
    class="elevator"
    :style="{
      transition: `all ${transition}s ease-in-out`,
      transform: `translateY(${(nextFloor - 1) * -200}px)`,
    }"
  >
    <div class="door door__left" ref="doorLeft"></div>
    <div class="door door__right" ref="doorRight"></div>
  </div>
</template>
