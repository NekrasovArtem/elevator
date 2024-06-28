<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router'
import { storeToRefs } from "pinia";
import { useElevatorStore } from "@/stores/elevator";

const router = useRouter();

const elevatorStore = useElevatorStore();
const { floorsQuantity, floorsArray } = storeToRefs(elevatorStore);
const { addFloors } = elevatorStore

const error = ref(false);

function startProject() {
  if (floorsQuantity.value < 2 || floorsQuantity.value > 20) {
    error.value = true;
  } else {
    error.value = false;
    addFloors()
    router.push("/shaft");
  }
}
</script>

<template>
  <section class="section section__settings">
    <div class="errors" v-if="error">
      <span class="error">Количество этажей должно быть от 2 до 20</span>
    </div>
    <div class="settings">
      <h2 class="settings__title">Выберите количество этажей</h2>
      <input
        class="settings__input"
        v-model="floorsQuantity"
        type="number"
        placeholder="0"
      />
      <button class="settings__button" @click="startProject()">
        Начать
      </button>
    </div>
  </section>
</template>
