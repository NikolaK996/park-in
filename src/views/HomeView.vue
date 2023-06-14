<template>
  <div class="landing-page">
    <section class="relative bg-white flex items-center justify-center h-screen overflow-hidden">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto">
        <div class="relative z-30">
          <h1
            class="mb-4 w-full text-4xl text-white font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl"
          >
            {{ $t('home.hero.title') }}
          </h1>
          <p class="mb-6 font-light text-gray-300 lg:mb-8 md:text-lg align-middle lg:text-xl">
            {{ $t('home.hero.description') }}
          </p>
          <a
            v-if="!usersStore.user"
            class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
            href="#"
            @click="authStore.openLoginModal()"
          >
            {{ $t('home.hero.button.loggedOut') }}
            <svg
              class="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            v-if="usersStore.user"
            class="inline-flex items-center text-white justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-400 rounded-lg hover:text-primary hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
            href="#"
            @click="$router.push('map')"
          >
            {{ $t('home.hero.button.loggedIn') }}
          </a>
        </div>
      </div>
      <img
        class="absolute z-0 w-auto min-w-full min-h-full object-cover"
        src="/src/assets/electric-car.jpg"
      />
    </section>

    <section class="bg-white">
      <div
        class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6"
      >
        <img alt="dashboard image" class="w-full" src="/src/assets/beach-car.png" />
        <img
          alt="dashboard image"
          class="w-full hidden"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
        />
        <div class="mt-4 md:mt-0">
          <h2
            class="mb-4 text-4xl hover:text-primary tracking-tight font-extrabold text-gray-900 dark:text-gray-900"
          >
            Join us in a Sustainable Future
          </h2>
          <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-900">
            Our platform is based on a shared economy model, promoting sustainability while
            providing a convenient solution for EV owners. By uniting EV owners, parking owners, and
            charger distributors, we're contributing to a sustainable development model that
            encourages resource sharing, reduces emissions, and benefits our community. We believe
            that everyone should have access to EV charging solutions. That's why we've targeted
            densely populated urban areas where finding parking and charging stations can be
            challenging. ParkIn democratizes the electric grid availability to individuals and
            enhances access in non-commercially viable locations.
          </p>
          <button
            v-if="!usersStore.user"
            class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
            @click="authStore.openLoginModal()"
          >
            {{ $t('home.hero.button.loggedOut') }}
            <svg
              class="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </section>

    <section class="bg-white">
      <div
        class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6"
      >
        <div class="font-light font-light text-gray-500 md:text-lg dark:text-gray-900">
          <h2 class="mb-4 text-4xl tracking-tight hover:text-primary font-extrabold text-gray-900">
            Join us in a Sustainable Future
          </h2>
          <p class="mb-4">
            Our platform is based on a shared economy model, promoting sustainability while
            providing a convenient solution for EV owners. By uniting EV owners, parking owners, and
            charger distributors, we're contributing to a sustainable development model that
            encourages resource sharing, reduces emissions, and benefits our community.
          </p>
          <p>
            We believe that everyone should have access to EV charging solutions. That's why we've
            targeted densely populated urban areas where finding parking and charging stations can
            be challenging. ParkIn democratizes the electric grid availability to individuals and
            enhances access in non-commercially viable locations.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
          <img
            alt="office content 1"
            class="w-full rounded-lg"
            src="/src/assets/electric-charger.jpg"
          />
          <img
            alt="office content 2"
            class="mt-4 w-full lg:mt-10 rounded-lg"
            src="/src/assets/electric-car.jpg"
          />
        </div>
      </div>
    </section>

    <section class="bg-white">
      <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div class="max-w-screen-md mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight hover:text-primary font-extrabold text-gray-900">
            Go Green, Go Smart with Our App
          </h2>
          <p class="font-light text-gray-500 md:text-lg dark:text-gray-900">
            Steer your way towards a sustainable future with our feature-rich app designed for the
            modern electric vehicle owner
          </p>
        </div>
        <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <div
              class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
            >
              <svg
                class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-bold hover:text-primary">Efficient Charging Management</h3>
            <p class="text-gray-500 dark:text-gray-900">
              Simplify your charging routine with real-time updates and smart scheduling features
            </p>
          </div>
          <div>
            <div
              class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
            >
              <svg
                class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
                ></path>
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-bold hover:text-primary">Eco-Friendly Navigation</h3>
            <p class="text-gray-500 dark:text-gray-900">
              Plan efficient routes with our eco-friendly navigation, which highlights charging
              points along your journey.
            </p>
          </div>
          <div>
            <div
              class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
            >
              <svg
                class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                  fill-rule="evenodd"
                ></path>
                <path
                  d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
                ></path>
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-bold hover:text-primary">Savings Calculator</h3>
            <p class="text-gray-900 dark:text-gray-900">
              See how much you're saving by driving electric with our intuitive savings calculator.
            </p>
          </div>
          <div>
            <div
              class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
            >
              <svg
                class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"
                ></path>
                <path
                  clip-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-bold hover:text-primary">Community</h3>
            <p class="text-gray-500 dark:text-gray-900">
              Join a network of fellow electric vehicle owners, share your experiences, and
              contribute to the growth of electric vehicle infrastructure.
            </p>
          </div>
          <div>
            <div
              class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
            >
              <svg
                class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
                ></path>
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-bold hover:text-primary">Eco Impact</h3>
            <p class="font-light text-gray-500 md:text-lg dark:text-gray-900">
              See your impact on the environment in real terms with our comprehensive reports
              detailing CO2 savings and more.
            </p>
          </div>
          <div>
            <div
              class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
            >
              <svg
                class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-bold hover:text-primary">Rewards Program</h3>
            <p class="font-light text-gray-500 md:text-lg hover:text-primary dark:text-gray-900">
              Earn points every time you charge your car, and redeem them for exclusive rewards and
              discounts from a variety of partners.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white">
      <div
        class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6"
      >
        <img alt="dashboard image" class="w-full dark:hidden" src="/src/assets/Screenshot.png" />
        <img
          alt="dashboard image"
          class="w-full hidden dark:block"
          src="/src/assets/Screenshot.png"
        />
        <div class="mt-4 md:mt-0">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-slate-950">
            Experience the Future of EV Charging Today
          </h2>
          <p class="mb-6 font-light text-gray-500 md:text-lg">
            There's no better time to join the EV revolution than now. Immerse yourself in the world
            of sustainable driving and superior convenience with the ParkIn app. Our platform is
            specially designed for the forward-thinking EV driver, offering unprecedented access to
            charging solutions, real-time information, and a supportive community.
          </p>
          <a
            v-if="!usersStore.user"
            class="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg bg-primary-400 hover:bg-primary-300 focus:ring-4 focus:ring-primary-300"
            href="#"
          >
            Get started
            <svg
              class="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>

    <home-footer />
  </div>
</template>

<script setup>
import HomeFooter from '@/components/sections/home/HomeFooter.vue'
import { useAuthStore } from '@/stores/auth/authStore'
import { useUsersStore } from '@/stores/users/usersStore'

const authStore = useAuthStore()
const usersStore = useUsersStore()
</script>

<style lang="scss">
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
