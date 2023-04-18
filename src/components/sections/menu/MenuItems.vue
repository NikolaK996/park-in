<template>
  <div class="menu">
    <button @click="toggleMenu">
      <IconsHamburger />
    </button>
    <div v-if="menuVisible" class="menu-items">
      <ul>
        <li><a href="/public">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <!-- Add more menu items here -->
      </ul>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
</script>

<style scoped>
.menu {
  position: relative;
}

.menu-items {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.menu-items ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.menu-items li {
  margin-bottom: 10px;
}

.menu-items li:last-child {
  margin-bottom: 0;
}

.menu-items a {
  text-decoration: none;
  color: #333;
}

.menu-items a:hover {
  color: #007bff;
}
</style>
