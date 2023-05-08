import { defineStore } from 'pinia'
import { useCurrentUser } from 'vuefire'

export const useUsersStore = defineStore('users', () => {
  const currentUser = useCurrentUser()

  return {
    currentUser
  }
})
