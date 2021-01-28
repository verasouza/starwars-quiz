import React, {useState} from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import {useRouter} from 'next/router';

import db from '../db.json';
import {Widget} from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import {Button} from '../src/components/Button';

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};

  
`

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
  margin: auto;
  padding: 15px;
  }
  `;

 
 
  
export default function Home() {
const router = useRouter();
const [name, setName] = useState('');
const notify = () => toast.warning('Preencha seu nome antes de jogar!!',{
  position: toast.POSITION.TOP_CENTER
})


function handleSubmit (e) {
  e.preventDefault();
  if(name.length === 0){
    return notify();
  }
  router.push(`quiz?name=${name}`);
  
}


  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Star Wars Quiz</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
        <Widget.Header>
        <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
          <p>{db.description}</p>
          <ToastContainer autoClose={3000} />
          <form>
            <input 
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Digite seu nome" />
            <Button type="submit" onClick={handleSubmit}>Bora jogar!</Button>
          </form>
          </Widget.Content>
          
        </Widget>
        <Widget>
        <Widget.Header>
        <h1>Quizes da galera</h1>
        </Widget.Header>
        <Widget.Content>
          
          <p>Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
     <GitHubCorner projectUrl="https://github.com/verasouza/"/>
    </QuizBackground>

  );
}
