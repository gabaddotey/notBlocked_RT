import { usePrefStore } from '@/stores/preferences.ts'

export type QuestionOption = {
  value: string
  isChecked: boolean
}

export interface Question {
  id: number
  questionTitle: string
  questionOptions: QuestionOption[] //make type with checked property
  nextQuestion: number
  type: "single" | "multi"
}

function newQuestion(id: number, questionTitle: string, options: string[], nextQuestion: number, type: "single" | "multi"): Question {
  const questionOptions = options.map(option => ({ value: option, isChecked: false }))
  return { id, questionTitle, questionOptions, nextQuestion, type }
}

const questionList: Map<number, Question> = new Map<number, Question>([
  [1, newQuestion(1, 'FIRST QUESTION', ["1a","1b","1c"], 2, "multi")],
  [2, newQuestion(2, 'SECOND QUESTION', ["2a","2b","2c"], 3 , "multi")],
  [3, newQuestion(3, 'THIRD QUESTION', ["3a","3b","3c"], 4, "multi" )],
  [4, newQuestion(4, 'FOURTH (Single) QUESTION', ["4a","4b","4c"], 5, "single")],
 ])

function getQuestion(questionId: number): Question | undefined {
  const prefStore = usePrefStore()
  const question = questionList.get(questionId)
  // console.log(`ID: ${question.id} title: ${question.questionTitle}`)
  return question
}

export { getQuestion }
