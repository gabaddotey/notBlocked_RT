import { reactive } from 'vue'
import { ref } from 'vue'

interface Question {
  id: number
  questionTitle: string
  questionOptions: string[]
  nextQuestion: string
}

const questionList: Question[] = [
  { id: 1, questionTitle: 'FIRST QUESTION', questionOptions: ["a","b","c"], nextQuestion: "q2" },
  { id: 2, questionTitle: 'SECOND QUESTION', questionOptions: ["2a","2b","2c"], nextQuestion: "q3" },
  { id: 3, questionTitle: 'THIRD QUESTION', questionOptions: ["3a","3b","3c"], nextQuestion: "q4" }
]

function getQuestion(id: number){
  console.log("ID: "+questionList[id].id+" title: "+questionList[id].questionTitle)
  return questionList[id]
}

export default getQuestion
