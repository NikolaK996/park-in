<template>
  <div class="landing-page">
    <div class="hero-section">
      <img alt="Electric Car" class="hero-image" src="/src/assets/electric-car.jpg" />
      <div class="hero-text">
        <h1 class="hero-title">Find Electric Car Chargers Near You</h1>
        <p class="hero-subtitle">
          Join our peer-to-peer platform for shared electric vehicle charging and sustainable
          development.
        </p>
        <button class="hero-button" @click="heroButtonHandler">
          {{ user ? 'Go to Map' : 'Get Started' }}
        </button>
      </div>
    </div>
    <div class="main-section">
      <div class="main-text">
        <h2 class="main-title">How It Works</h2>
        <p class="main-description">
          Our platform connects electric car owners with parking owners or land owners who have
          charging stations available for rent. Charger distributors can also list their chargers on
          our platform. Electric car owners can easily find and book charging stations, while
          parking and land owners can earn money by renting out their chargers when they're not in
          use. It's a win-win for everyone!
        </p>
      </div>
      <img alt="Charging Station" class="main-image" src="/src/assets/electric-charger.jpg" />
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth/auth'
import { useCurrentUser } from 'vuefire'
import { useRouter } from 'vue-router'

const router = useRouter()
const authStore = useAuthStore()
const user = useCurrentUser()

function heroButtonHandler() {
  if (user.value) {
    router.push('/map')
  } else {
    authStore.openLoginModal()
  }
}
</script>

<style>
.landing-page {
  .hero-section {
    position: relative;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    .hero-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(0.7);
      z-index: -1;
    }

    .hero-text {
      text-align: center;
      color: white;
      z-index: 1;

      .hero-title {
        font-size: 4rem;
        font-weight: bold;
        margin-bottom: 1rem;
      }

      .hero-subtitle {
        font-size: 1.5rem;
        margin-bottom: 2rem;
      }

      .hero-button {
        padding: 1rem 2rem;
        background-color: #42a5f5;
        color: white;
        font-size: 1.2rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
          background-color: #1e88e5;
        }
      }
    }
  }

  .main-section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;

    .main-text {
      max-width: 50rem;
      padding-right: 3rem;

      .main-title {
        font-size: 3rem;
        font-weight: bold;
        margin-bottom: 1rem;
      }

      .main-description {
        font-size: 1.2rem;
        line-height: 1.5;
      }
    }

    .main-image {
      max-width: 50rem;
      object-fit: cover;
      border-radius: 5px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    }
  }
}
</style>