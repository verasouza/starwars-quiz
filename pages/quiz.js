import React,{useState, useEffect} from 'react';
import {FaRocket, FaSpinner} from "react-icons/fa"
import db from '../db.json';

import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuestionWidget from '../src/components/QuestionWidget';
import {Widget} from '../src/components/Widget';
import LoadingWidget from '../src/components/Loader';
import ResultWidget from '../src/components/Results';



export default function Quiz(){
	const screenStates = {
		QUIZ: 'QUIZ',
		LOADING:'LOADING',
		RESULT:'RESULT'
	}
const[screen, setScreen] = useState(screenStates.LOADING);
const totalQuestions = db.questions.length;
const [currentQuestion, setCurrentQuestion] = useState(0);
const questionIndex = currentQuestion;
const question = db.questions[questionIndex];
const [results, setResults] = useState([]);
const[loading, setLoading] = useState(true);

function handleSubmit(){
	const nextQuestion = questionIndex +1;
	if(nextQuestion < totalQuestions){
		
		setCurrentQuestion(nextQuestion);
		
	}else{
		setScreen(screenStates.RESULT);
	}

}

function addResult(result){
	setResults([
		...results,
		result,
	]);
}

useEffect(() => {
	
	setTimeout(() => {
		setScreen(screenStates.QUIZ);
	}, 3 * 1000);
// nasce === didMount
}, []);

	return (
		<QuizBackground backgroundImage={db.bg}>
			<QuizContainer>
				<QuizLogo />
				{screen === screenStates.QUIZ && (
					<QuestionWidget
						question={question}
						totalQuestions={totalQuestions}
						questionIndex={questionIndex}
						onSubmit={handleSubmit}
						addResult={addResult}
					/>
				)}
				{screen === screenStates.LOADING && 
				
				<LoadingWidget />
}
				
				{screen === screenStates.RESULT && <ResultWidget results={results} />}

			</QuizContainer>

		</QuizBackground>

	)
}