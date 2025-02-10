import { reactive } from 'vue'
import { ref } from 'vue'

interface Question {
  id: number
  questionTitle: string
  questionOptions: string[]
  nextQuestion: number
}

const questionList: Question[] = [
  { id: 1, questionTitle: 'FIRST QUESTION', questionOptions: ["a","b","c"], nextQuestion: 1 },
  { id: 2, questionTitle: 'SECOND QUESTION', questionOptions: ["2a","2b","2c"], nextQuestion: 2 },
  { id: 3, questionTitle: 'THIRD QUESTION', questionOptions: ["3a","3b","3c"], nextQuestion: 3 },
  { id: 4, questionTitle: 'FOURTH QUESTION', questionOptions: ["4a","4b","4c"], nextQuestion: 4 }
]

function getQuestion(id: number){
  console.log("ID: "+questionList[id].id+" title: "+questionList[id].questionTitle)
  return questionList[id]
}

export default getQuestion