<template>
  <form @submit.prevent="submitHandler">
    <div class="input-group mb-4">
      <label class="text-sm" for="email">Email:</label>
      <input id="email" v-model="email" class="text-sm" required type="email" />
    </div>
    <div class="input-group mb-4">
      <label class="text-sm" for="password">Password:</label>
      <input id="password" v-model="password" class="text-sm" required type="password" />
    </div>
    <div class="input-group mb-4">
      <label class="text-sm" for="user-type">User Type:</label>
      <select id="user-type" v-model="userType" class="text-sm" required>
        <option value="">Select User Type</option>
        <option value="private">Private Charging Spot</option>
        <option value="distributor">Electricity Distributor</option>
        <option value="public">Public Charging Spot</option>
      </select>
    </div>
    <div class="input-group mb-4">
      <label class="text-sm" for="name">Name:</label>
      <input id="name" v-model="name" class="text-sm" required type="text" />
    </div>
    <div class="flex items-enter justify-end">
      <button class="px-8 py-4" type="submit">Register</button>
    </div>
    <a
      class="block text-center cursor-pointer hover:text-primary underline text-sm mt-4"
      @click="switchToLoginModal"
    >
      Login
    </a>
  </form>
</template>

<script setup>
import { defineEmits, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const emits = defineEmits(['submit'])

const email = ref('')
const password = ref('')
const userType = ref('')
const name = ref('')

const switchToLoginModal = () => {
  authStore.closeRegistrationModal()
  authStore.openLoginModal()
}
const submitHandler = () => {
  emits('submit', email.value, password.value, userType.value, name.value)
}
</script>

<style scoped>
.register-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.input-group label {
  display: block;
}

.input-group input,
.input-group select {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  display: inline-block;
  padding: 8px 24px;
  background-color: #007bff;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #0056b3;
}
</style>