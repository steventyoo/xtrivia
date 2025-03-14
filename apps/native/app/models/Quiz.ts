/*
 * front-end models, not database schema
 * after fetching data from database, we need to convert and extract data to the following front-end models
 */

export enum HintType {
  length = "length",
  firstCharacter = "first_character",
  lastCharacter = "first_last_character",
  soft = "soft",
  strong = "strong"
}

export type Hint = {
  id?: string,
  type: string,
  text: string
}

export type Answer = {
  id?: string,
  answer: string,
  answer_index: number,
  sub_info_value?: string,
  hints: Hint[],

  image: string,
  fun_fact: string,
  description: string,  
}

export type Quiz = {
  id: string,
  title: string,
  description: string,
  sub_info_description?: string,
  answers: Answer[]
}

export const findHintForAnswer = (answer: Answer, hintType: string) => {
  return answer.hints.find(hint => hint.type === hintType)?.text ?? ""
}