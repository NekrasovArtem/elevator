<script setup>
import { ref, onMounted } from "vue";
import { useElevatorStore } from "@/stores/elevator";
import { storeToRefs } from "pinia";

const elevatorStore = useElevatorStore();
const {
  elevator,
  doorLeft,
  doorRight,
  floorsButtons,
  floorsQuantity,
  floorsArray,
  floorsQueue,
  currentFloor,
  statusMovement,
  nextFloor,
  transition,
} = storeToRefs(elevatorStore);
const { sortQueue, addFloorButton, changeElevatorPosition } = elevatorStore;

// Функция вызова лифта
function callElevator(floorNumber, event) {
  event.srcElement.disabled = true;

  floorsQueue.value.push(floorNumber);
  sortQueue();
  console.log(`Вызвать на ${floorNumber} этаж`);

  if (statusMovement.value !== true) {
    statusMovement.value = true;
    moveElevator();
  }
}

// Функция движения лифта
function moveElevator() {
  if (floorsQueue.value.length === 0) {
    elevatorToFirstFloor();
    return false;
  } else {
    changeElevatorPosition(floorsQueue.value.shift());
    setTimeout(openElevatorDoors, transition.value * 1000 + 500);
  }
}

// Функция открытия дверей лифта
function openElevatorDoors() {
  doorLeft.value.classList.add("door__left_open");
  doorRight.value.classList.add("door__right_open");

  currentFloor.value = nextFloor.value;

  console.log(`Текущий этаж: ${currentFloor.value}`);

  setTimeout(closeElevatorDoors, 4000);
}

// Функция закрытия дверей лифта
function closeElevatorDoors() {
  doorLeft.value.classList.remove("door__left_open");
  doorRight.value.classList.remove("door__right_open");

  // Запустить лифт на следующий этаж в очереди
  if (statusMovement.value === true) {
    setTimeout(() => {
      moveElevator();
      floorsButtons.value[floorsQuantity.value - currentFloor.value].disabled = false;
    }, 2500);
  }
}

// Функция перевода лифта на первый этаж
function elevatorToFirstFloor() {
  changeElevatorPosition(1);
  statusMovement.value = false;

  setTimeout(openElevatorDoors, transition.value * 1000 + 500);
}

console.log(floorsButtons);
</script>

<template>
  <div class="floors__wrapper">
    <div class="floor" v-for="(item, index) in floorsArray" :key="index">
      <div class="floor__wrapper">
        <span class="floor__number">{{ item }}</span>
        <button
          class="floor__button"
          title="Вызвать лифт"
          @click="callElevator(item, $event)"
          :ref="addFloorButton"
        ></button>
      </div>
    </div>
  </div>
</template>
