<template>
  <form @submit.prevent="submitHandler">
    <div class="input-group mb-4">
      <label class="text-sm" for="email">{{ $t('auth.email') }}:</label>
      <input id="email" v-model="email" class="text-sm" required type="email" />
    </div>
    <div class="input-group mb-4">
      <label class="text-sm" for="password">{{ $t('auth.password') }}:</label>
      <input id="password" v-model="password" class="text-sm" required type="password" />
    </div>
    <div class="input-group mb-4">
      <label class="text-sm" for="user-type">{{ $t('auth.registration.userTypes.title') }}:</label>
      <select id="user-type" v-model="userType" class="text-sm" required>
        <option value="">{{ $t('auth.registration.userTypes.placeholder') }}</option>
        <option value="private">{{ $t('auth.registration.userTypes.regular') }}</option>
        <option value="distributor">{{ $t('auth.registration.userTypes.distributor') }}</option>
        <option value="public">{{ $t('auth.registration.userTypes.parkingOwner') }}</option>
      </select>
    </div>
    <div class="input-group mb-4">
      <label class="text-sm" for="name">{{ $t('auth.registration.name') }}:</label>
      <input id="name" v-model="name" class="text-sm" required type="text" />
    </div>
    <div class="flex items-enter justify-end">
      <button class="px-8 py-4" type="submit">{{ $t('auth.registration.button') }}</button>
    </div>
    <a
      class="block text-center cursor-pointer hover:text-primary underline text-sm mt-4"
      @click="switchToLoginModal"
    >
      {{ $t('auth.registration.logIn') }}
    </a>
  </form>
</template>

<script setup>
import { defineEmits, ref } from 'vue'
import { useAuthStore } from '@/stores/auth/authStore'

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
  emits('submit', {
    email: email.value,
    password: password.value,
    userType: userType.value,
    name: name.value
  })
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