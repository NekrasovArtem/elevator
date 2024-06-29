<script setup>
import { defineEmits } from "vue";
import { storeToRefs } from "pinia";
import { useElevatorStore } from "@/stores/elevator";

const elevatorStore = useElevatorStore();
const { floorsQueue, statusMovement } = storeToRefs(elevatorStore);
const { sortQueue, addFloorButton } = elevatorStore;

const props = defineProps({
  floorNumber: Number,
});

const emit = defineEmits(["moveElevator"]);

// Функция вызова лифта
function callElevator(floorNumber, event) {
  console.log(`Вызвать на ${floorNumber} этаж`);

  event.srcElement.disabled = true;
  floorsQueue.value.push(floorNumber);
  sortQueue();

  if (statusMovement.value !== true) {
    statusMovement.value = true;
    emit('moveElevator');
  }
}
</script>

<template>
  <div class="floor__wrapper">
    <span class="floor__number">{{ floorNumber }}</span>
    <button
      class="floor__button"
      title="Вызвать лифт"
      @click="callElevator(floorNumber, $event)"
      :ref="addFloorButton"
    ></button>
  </div>
</template>
