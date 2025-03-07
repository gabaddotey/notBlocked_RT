import { parseConfigFileTextToJson } from 'typescript'
import { ref, reactive } from 'vue'

export type Answer = { 
  singleAnswer?: string 
  multiAnswer?: string[]
}

// store.js

export const store = reactive({
  count: 0,
  increment() {
    this.count++
  }
})

export type Preferences = Map<number, Answer>;


export const prefStore = reactive({
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