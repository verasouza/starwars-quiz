import React, {useState} from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {motion} from 'framer-motion';

import db from '../db.json';
import {Widget} from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import {Button} from '../src/components/Button';
import Input from '../src/components/Input';
import QuizContainer from '../src/components/QuizContainer';
import Link from '../src/components/Link';

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


 
 
  
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

function handleOtherQuizes(e){
  e.preventDefault();
  if(name.length === 0){
    return notify();
  }
  router.push(`/quiz/${projectName}__${projectCreator}`)
}


  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget 
        as={motion.section}
        transition={{delay: 0.0, duration:0.5}}
        variants={{
            show:{opacity: 1, y:'0', scale: 1},
            hidden:{opacity: 0, y:'100%'}
          }}
          initial='hidden'
          animate="show"
        >
        <Widget.Header>
        <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
          <p>{db.description}</p>
          <ToastContainer autoClose={3000} />
          <form>
            <Input 
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Digite seu nome" />
            <Button type="submit" onClick={handleSubmit}>Bora jogar!</Button>
          </form>
          </Widget.Content>
          
        </Widget>
        <Widget 
        as={motion.section}
        transition={{delay: 0.3, duration:0.5}}
        variants={{
            show:{opacity: 1, y:'0', scale: 1},
            hidden:{opacity: 0, y:'100%'}
          }}
          initial='hidden'
          animate="show"
          >
        <Widget.Header>
        <h1>Ou escolha um dos quizes baixo</h1>
        </Widget.Header>
        <Widget.Content>
       <ul>
       {db.external.map((link, index) =>{
         const [projectName, projectCreator] = link.replace(/\//g, '')
         .replace('https:', '')
         .replace('.vercel.app', '')
         .split('.');
          return(
            <li key={index}>
            <Widget.Topic 
            as={Link}
            href={`/quiz/${projectName}__${projectCreator}`}
           
            >
              {projectName} criado por {projectCreator}
              </Widget.Topic>
          </li>
          )         
        })}
       </ul>
          </Widget.Content>
        </Widget>
        <Footer 
        as={motion.section}
        transition={{delay: 0.6, duration:0.5}}
        variants={{
            show:{opacity: 1, y:'0', scale: 1},
            hidden:{opacity: 0, y:'100%'}
          }}
          initial='hidden'
          animate="show" />
      </QuizContainer>
     <GitHubCorner projectUrl="https://github.com/verasouza/"/>
    </QuizBackground>

  );
}
