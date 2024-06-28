import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useElevatorStore = defineStore("elevator", () => {
  // Элементы DOM
  const elevator = ref(null);
  const doorLeft = ref(null);
  const doorRight = ref(null);
  const floorsButtons = ref([]);

  // Переменные
  const floorsQuantity = ref(2);
  const floorsArray = ref([2, 1]);
  const floorsQueue = ref([]);
  const currentFloor = ref(1);
  const floorHeight = ref(200);
  const firstFloorPosition = ref(0);
  const statusMovement = ref(null);
  const nextFloor = ref(1);
  const transition = ref(1);

  // Получить массив этажей из LocalStorage
  const floorsOnLocalStorage = localStorage.getItem("floors");
  if (floorsOnLocalStorage) {
    floorsArray.value = JSON.parse(floorsOnLocalStorage);
    floorsQuantity.value = floorsArray.value.length;
  }

  // Вернуть значения по-умолчанию
  function reset() {
    elevator.value = null;
    doorLeft.value = null;
    doorRight.value = null;
    floorsButtons.value = [];
    floorsQuantity.value = 2;
    floorsArray.value = [2, 1];
    floorsQueue.value = [];
    currentFloor.value = 1;
    firstFloorPosition.value = 0;
    statusMovement.value = null;
    nextFloor.value = 1;
    transition.value = 1;
  }

  // Добавить кнопку этажа в массив
  function addFloorButton(el) {
    floorsButtons.value.push(el);
  }

  // Добавить этажи
  function addFloors() {
    floorsButtons.value = [];
    firstFloorPosition.value = floorsQuantity.value * floorHeight.value + 50;

    floorsArray.value = [];

    for (let i = 1; i <= floorsQuantity.value; i++) {
      floorsArray.value.push(i);
    }

    floorsArray.value.reverse();

    localStorage.setItem("floors", JSON.stringify(floorsArray.value));
  }

  // Сортировка очереди вызова лифта
  function sortQueue() {
    let floorsAbove = [];
    let floorsBelow = [];

    for (let i = 0; i < floorsQueue.value.length; i++) {
      if (floorsQueue.value[i] > currentFloor.value) {
        floorsAbove.push(floorsQueue.value[i]);
      } else {
        floorsBelow.push(floorsQueue.value[i]);
      }
    }

    floorsAbove.sort((a, b) => a - b);
    floorsBelow.sort((a, b) => a - b).reverse();

    floorsQueue.value = [...floorsAbove, ...floorsBelow];
    console.log(floorsQueue.value);
  }

  function changeElevatorPosition(floor) {
    nextFloor.value = floor;
    transition.value = Math.abs(nextFloor.value - currentFloor.value) * 2;
  }

  return {
    elevator,
    doorLeft,
    doorRight,
    floorsButtons,
    floorsQuantity,
    floorsArray,
    floorsQueue,
    currentFloor,
    floorHeight,
    firstFloorPosition,
    statusMovement,
    nextFloor,
    transition,
    addFloorButton,
    reset,
    addFloors,
    sortQueue,
    changeElevatorPosition,
  };
});
