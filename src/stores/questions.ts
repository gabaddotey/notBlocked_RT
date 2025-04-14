import { usePrefStore } from '@/stores/preferences.ts'

export type QuestionOption = {
  value: string
  isChecked: boolean
}

export interface Question {
  id: number
  questionTitle: string
  questionOptions: QuestionOption[] //make type with checked property
  nextQuestion: number | null
  type: "single" | "multi" | "input"
}

function newQuestion(id: number, questionTitle: string, options: string[], nextQuestion: number|null, type: "single" | "multi" | "input"): Question {
  const questionOptions = options.map(option => ({ value: option, isChecked: false }))
  return { id, questionTitle, questionOptions, nextQuestion, type }
}

export const questionList: Map<number, Question> = new Map<number, Question>([
  [1, newQuestion(1, 'Which setting do you generally prefer for your activities?', ["Indoors", "Outdoors", "A Mix of Both Indoor and Outdoor", "No Strong Preference to Indoor and Outdoor"], 2, "single")],
  [2, newQuestion(2, 'What kind of pace do you prefer?', ["High Energy / Active", "Moderate Pace", "Relaxed / Low Key"], 3, "single")],
  [3, newQuestion(3, 'What types of indoor activities do you enjoy? (Select all that apply)', ["Movies / TV", "Reading", "Board Games / Puzzles", "Cooking / Baking", "Arts & Crafts", "Museums / Galleries", "Home Projects / DIY", "Video Games", "None"], 4, "multi")],
  [4, newQuestion(4, 'What types of outdoor activities do you enjoy? (Select all that apply)', ["Hiking / Nature Walks", "Cycling", "Water Activities (Swimming, Kayaking)", "Parks / Picnics", "Gardening", "Outdoor Sports", "Just Relaxing Outside", "None"], 5, "multi")],
  [5, newQuestion(5, 'What creative activities appeal to you? (Select all that apply)', ["Drawing / Painting", "Photography / Videography", "Creative Writing", "Music (Playing / Composing)", "Crafting / DIY", "Digital Design", "Performing Arts (Acting, Dance)", "None / Not Interested"], 6, "multi")],
  [6, newQuestion(6, 'Do you want activities for groups?', ["Large Groups", "Small Groups", "One-on-One / Partner", "Solo"], 7, "multi")],
  [7, newQuestion(7, 'What kind of entertainment experiences do you seek out? (Select all that apply)', ["Live Music / Concerts", "Cinema / Film Screenings", "Theatre / Live Shows", "Comedy Clubs", "Sporting Events", "Festivals / Fairs", "Quiet Evenings", "None"], 8, "multi")],
  [8, newQuestion(8, 'Are you interested in learning or skill-based activities? (Select all that apply)', ["Workshops / Classes", "Lectures / Talks", "Documentaries", "Educational Games / Apps", "Learning a New Hobby", "Visiting Historical Sites", "Not Currently Interested"], 9, "multi")],
  [9, newQuestion(9, 'When are you most often looking to do activities?', ["Weekday Mornings", "Weekday Afternoons", "Weekday Evenings", "Weekend Mornings", "Weekend Afternoons", "Weekend Evenings", "Anytime"], 10, "multi")],
  [10, newQuestion(10, 'Do your activity choices need to be kid-friendly?', ["Yes, Always", "Yes, Often", "Sometimes", "Rarely", "Never"], 11, "single")],
  [11, newQuestion(11, 'To find activities near you, please enter your zip code.', [], null, "input")]
])

function getQuestion(questionId: number): Question | undefined {
  const prefStore = usePrefStore()
  const question = questionList.get(questionId)
  // console.log(`ID: ${question.id} title: ${question.questionTitle}`)
  const answers = prefStore.getAnswer(questionId)
  if(answers){
    question?.questionOptions.forEach(option => {
      if(answers.multiAnswer?.includes(option.value) || answers.singleAnswer === option.value){
        option.isChecked = true
      }
    })

  }
  return question
}

export function getPreferencesForGemini(){
  console.log("getting prefs for Gemini")
  const prefArr = []
  const qList = questionList
  for(const question of qList.values()){
    const preference = prepareQuestionForGemini(question)
    if(preference !== undefined && !preference?.includes("zip code")){
      //console.log(preference)
      prefArr.push(preference)
    }
  }
  return prefArr
}

export function getZipcode(){
  const prefStore = usePrefStore()
  const answer = prefStore.getAnswer(11)
  if(answer === undefined || answer.inputAnswer === undefined){
    return "23059"
  }
  return answer.inputAnswer
}

function prepareQuestionForGemini(question: Question): string | undefined{
  const prefStore = usePrefStore()
  const answer = prefStore.getAnswer(question.id) 
  if(answer === undefined){
    return
  } 
  if(question.type == "multi"){
    return `${question.questionTitle}: ${answer.multiAnswer}`
  }
  if(question.type == "single") {
    return `${question.questionTitle}: ${answer.singleAnswer}`
  }
}

export { getQuestion }
