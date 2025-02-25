export interface Question {
  id: number
  questionTitle: string
  questionOptions: string[]
  nextQuestion: number
  type: "single" | "multi"
}

const questionList: Map<number, Question> = new Map<number, Question>([
  [1, { id: 1, questionTitle: 'FIRST QUESTION', questionOptions: ["a","b","c"], nextQuestion: 1, type: "multi"}],
  [2, { id: 2, questionTitle: 'SECOND QUESTION', questionOptions: ["2a","2b","2c"], nextQuestion: 2 , type: "multi"}],
  [3, { id: 3, questionTitle: 'THIRD QUESTION', questionOptions: ["3a","3b","3c"], nextQuestion: 3, type: "multi" }],
  [4, { id: 4, questionTitle: 'FOURTH (Single) QUESTION', questionOptions: ["4a","4b","4c"], nextQuestion: 4, type: "single" }]
])

function getQuestion(questionId: number): Question | undefined {
  const question = questionList.get(questionId)
  // console.log(`ID: ${question.id} title: ${question.questionTitle}`)
  return question
}

export { getQuestion }
