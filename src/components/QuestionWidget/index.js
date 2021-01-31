import React, {useState} from 'react';
import {Widget} from '../Widget';
import {Button} from '../Button';
import AlternativesForm from '../AlternativesForm';

export default function QuestionWidget(props){
const question = props.question;
const questionId = `question__${props.questionIndex}`;
const [selectedAlternative, setSelectedAlternative] = useState(undefined);
const[isQuestionSubmited, setIsQuestionSubmited] = useState(false);
const isCorrect = selectedAlternative === question.answer;
const hasAlternativeSelected = selectedAlternative !== undefined;




  return (
    <Widget>
      <Widget.Header>
       <h3>
          {`Pergunta ${props.questionIndex + 1} de ${props.totalQuestions}`}
        </h3>
      </Widget.Header>
      <img src={question.image}
        alt="descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover'
        }}
      />
      <Widget.Content>
        <h3>{question.title}</h3>
        <p>{question.description}</p>
      <AlternativesForm onSubmit={(e) => {
         e.preventDefault();
        setIsQuestionSubmited(true);
        setTimeout(() =>{
          props.addResult(isCorrect);
          props.onSubmit();
          setIsQuestionSubmited(false);
          setSelectedAlternative(undefined)
        }, 3 * 1000);
       
        
      } }>  
        
      {question.alternatives.map((alternativa, index) => {
        const alternativeId = `alternative_${index}`;
        const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
        const isSelected = selectedAlternative === index;
       
        return(
          <Widget.Topic
          key={index}
          as="label"
          htmlFor={alternativeId}
          data-selected={isSelected}
          data-status={isQuestionSubmited && alternativeStatus}
          
          >
            <input
             style={{ display: 'none' }}
              type="radio"
              name={questionId}
              id={alternativeId}
              onChange={() => setSelectedAlternative(index)}
              checked={isSelected}
            />
          {alternativa}
          </Widget.Topic>
        )
      } )}   

      
        <Button type="submit" disabled={!hasAlternativeSelected} >Confirmar</Button>
      </AlternativesForm>
      {isQuestionSubmited && isCorrect && <p>Você acertou!</p>}
      {isQuestionSubmited && !isCorrect && <p>Você errou!</p>}
        
      </Widget.Content>
    </Widget>
  );
}