import { ref } from 'vue'

import { collection, doc, getDoc, setDoc } from 'firebase/firestore'
import { defineStore } from 'pinia'

import { db } from '@/services/firebase'

export const useUsersStore = defineStore('users', () => {
  const user = ref(null)
  const fetching = ref(false)

  async function fetchUser(id) {
    try {
      fetching.value = true

      const userDoc = await getDoc(doc(db, 'users', id))

      if (userDoc.exists()) {
        user.value = userDoc.data()
      }
    } catch (error) {
      console.warn(error)
    } finally {
      fetching.value = false
    }
  }

  async function createUser(id, data) {
    try {
      fetching.value = true
      const users = collection(db, 'users')

      await setDoc(doc(users, id), data)
      await fetchUser(id)
    } catch (error) {
      console.warn(error)
    } finally {
      fetching.value = false
    }
  }

  function reset() {
    user.value = null
  }

  return {
    user,
    fetchUser,
    createUser,
    reset
  }
})
