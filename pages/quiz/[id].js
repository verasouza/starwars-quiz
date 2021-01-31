import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Quiz from './index';
import Error from 'next/error';
import NotFound from '../404';

export default function QuizDaGaleraPage({dbExterno, error}){
    
    if (error) {
        return <NotFound  />
    }
else{
    return (
        <ThemeProvider theme={dbExterno.theme}>
            <Quiz
                questions={dbExterno.questions}
                bg={dbExterno.bg} />
        </ThemeProvider>
    )
}
    
}

export async function getServerSideProps(context){
const [projectName, projectCreator] = context.query.id.split('__');
const response = await fetch(`https://${projectName}.${projectCreator}.vercel.app/api/db`);
const error = response.ok ? false : response.status;
const dbExterno = response.ok ? await response.json() : false;


    return{
        props:{
            dbExterno: dbExterno,
            error
        }
    };
}