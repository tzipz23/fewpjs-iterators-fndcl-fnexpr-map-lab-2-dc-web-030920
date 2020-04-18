const questions = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'how can you implement a Blockchain Web API?',
  'what is Test Driven Development Workflow?',
  'What is NaN and how can we check for it?',
  'What is the difference between stopPropagation and preventDefault?',
  'should you use immutable state and pure functions?',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const capitalizeSentence = () => {
  return questions.map(function(sentence){
    let firstLetter = sentence[0]
    let restOfTheSentance = sentence.slice(1)
    return firstLetter.toUpperCase() + restOfTheSentance
  })
}

//alternative solution
// const capitalizeSentence = () => {
//   return questions.map(sentence => sentence[0].toUpperCase() + sentence.slice(1))
// }
