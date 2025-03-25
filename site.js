// import the utility functions "decodeHtml" and "shuffle"
import { decodeHtml, shuffle } from './utils.js'; 

// get the elements from the DOM
const questionElement = document.querySelector('#question');
const answersElement = document.querySelector('#answers');
const nextQuestionElement = document.querySelector('#nextQuestion');

// IIFE (so we can use async/await)
(async () => {

	
	const getNextQuestion = async () => {
		const url = 'https://opentdb.com/api.php?amount=1&category=21&difficulty=easy&type=multiple'
		const response = await fetch(url)
		const json = await response.json()
		const { question, correct_answer: correct, incorrect_answers: incorrect } = json.results[0]
		const answers = shuffle([ ...incorrect, correct ])
		return { question, answers, correct } 
	}

	
	const renderQuestion = ({ question, answers, correct }) => {
		
		questionElement.textContent = decodeHtml(question)

		
		answersElement.innerHTML = ''

		
		

			
			button.addEventListener('click', () => {
				
				if (answer === correct) {
					button.classList.add('correct')
					// Disable all answer buttons after answering
					answersElement.querySelectorAll('button').forEach(b => b.disabled = true)
					alert('Correct!')
				} else {
					button.disabled = true
					alert('Incorrect!')
				}
			})
		})
	

	// Event listener for the "nextQuestion" button
	nextQuestionElement.addEventListener('click', async () => {
		const question = await getNextQuestion()
		renderQuestion(question)
	})

	// Mimic a click on the "nextQuestion" button to show the first question
	nextQuestionElement.click()

})()
