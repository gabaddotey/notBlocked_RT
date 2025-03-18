import { parseConfigFileTextToJson } from 'typescript'
import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export type Answer = { 
  singleAnswer?: string 
  multiAnswer?: string[]
}

export const usePrefStore = defineStore('preferences', {
  state: () => ({
    preferences : new Map<number, Answer>(),
    //address
  }),
  getters: {
    
  },

  actions: {
    storeAnswer(questionId: number, answer: Answer) {
      this.preferences.set(questionId, answer)
    },
    getAnswer(questionId: number): Answer | undefined {
      return this.preferences.get(questionId)
    },
    asJson(): string { 
      return JSON.stringify(this.preferences)
    }
  }
}
)

export type Preferences = Map<number, Answer>;

export const prefStoreOld = reactive({
  preferences : new Map<number, Answer>(),
  // const preferences = ref<Preferences>{})
  updatePreferences(pref: Preferences) {
    this.preferences = pref
  },
  storeAnswer(questionId: number, answer: Answer) {
    this.preferences.set(questionId, answer)
  },
  getAnswer(questionId: number): Answer | undefined {
    return this.preferences.get(questionId)
  },
  asJson(): string { 
    return JSON.stringify(this.preferences)
  }
})