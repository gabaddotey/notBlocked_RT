import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export type Preferences = {
  question1?: string
  question2?: string
  question3?: number
}


export const usePreferenceStore = defineStore('preferences', () => {
  const preferences = ref<Preferences>({})
  function updatePreferences(pref: Preferences) {
    preferences.value = pref
  }

  return { preferences, updatePreferences }
})

