<script setup>
import { useElevatorStore } from "@/stores/elevator";
import { storeToRefs } from "pinia";
import TheFloor from "./TheFloor.vue";

const elevatorStore = useElevatorStore();
const {
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
const { changeElevatorPosition } = elevatorStore;

// Функция движения лифта
function moveElevator() {
  if (floorsQueue.value.length === 0) {
    // Вызвать лифт на первый этаж
    elevatorToFirstFloor();
    return false;
  } else {
    // Вызвать лифт на следующий в очереди этаж
    changeElevatorPosition(floorsQueue.value.shift());

    // Открыть двери лифта после того, как лифт прибыл на следующий этаж
    setTimeout(openElevatorDoors, transition.value * 1000 + 500);
  }
}

// Функция открытия дверей лифта
function openElevatorDoors() {
  doorLeft.value.classList.add("door__left_open");
  doorRight.value.classList.add("door__right_open");

  currentFloor.value = nextFloor.value;

  console.log(`Текущий этаж: ${currentFloor.value}`);

  // Закрыть двери лифта через 4 секунды
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
      floorsButtons.value[
        floorsQuantity.value - currentFloor.value
      ].disabled = false;
    }, 2500);
  }
}

// Функция перевода лифта на первый этаж
function elevatorToFirstFloor() {
  changeElevatorPosition(1);
  statusMovement.value = false;

  // Открыть двери лифта
  setTimeout(openElevatorDoors, transition.value * 1000 + 500);
}
</script>

<template>
  <div class="floors__wrapper">
    <div class="floor" v-for="(item, index) in floorsArray" :key="index">
      <TheFloor :floorNumber="item" @moveElevator="moveElevator" />
    </div>
  </div>
</template>
