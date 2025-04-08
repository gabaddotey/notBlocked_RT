import { parseConfigFileTextToJson } from 'typescript'
import { ref, reactive, type UnwrapNestedRefs, shallowRef } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core' 
import { type Ref, type UnwrapRef } from 'vue'

export type Answer = { 
  singleAnswer?: string
  multiAnswer?: string[]
}

export const usePrefStore = defineStore('preferences', {
  state: () => ({
    preferences: useLocalStorage('preferences', new Map<number, Answer>()).value
    //address
  }),
  hydrate(storeState, initState){
    storeState.preferences = useLocalStorage('preferences', new Map<number, Answer>()).value
  },
  getters: { },
  actions: {
    storeAnswer(questionId: number, answer: Answer) {
      console.log("storeAnswer function: q"+ questionId + " " + JSON.stringify(answer))
      this.preferences.set(questionId, answer)
      for(const [key, value] of this.preferences){
        console.log(key, "->" ,value)
      }
    },
    getAnswer(questionId: number): Answer | undefined {
      // console.log("this.pref return: "+this.preferences)
      console.log("getAnswer return: q"+questionId+ " " +JSON.stringify(this.preferences.get(questionId)))
      return this.preferences.get(questionId)
    },
    asJson(): string { 
      return JSON.stringify(this.preferences)
    }
  }
})

export type Preferences = Map<number, Answer>;

// export const prefStoreOld = reactive({
//   preferences : new Map<number, Answer>(),
//   // const preferences = ref<Preferences>{})
//   updatePreferences(pref: Preferences) {
//     this.preferences = pref
//   },
//   storeAnswer(questionId: number, answer: Answer) {
//     this.preferences.set(questionId, answer)
//   },
//   getAnswer(questionId: number): Answer | undefined {
//     return this.preferences.get(questionId)
//   },
//   asJson(): string { 
//     return JSON.stringify(this.preferences)
//   }
// })