<template>
  <form @submit.prevent="submitHandler">
    <div class="input-group mb-2">
      <label class="text-sm" for="email">Email:</label>
      <input id="email" v-model="email" class="text-sm" required type="email" />
    </div>
    <div class="input-group mb-8">
      <label class="text-sm" for="password">Password:</label>
      <input id="password" v-model="password" class="text-sm" required type="password" />
    </div>
    <button type="submit">Login</button>
  </form>
</template>

<script>
export default {
  name: 'AuthLoginForm',
  emits: ['submit'],
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    submitHandler() {
      this.$emit('submit', this.email, this.password)
    }
  }
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.input-group label {
  display: block;
}

.input-group input {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  display: inline-block;
  padding: 8px 16px;
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
