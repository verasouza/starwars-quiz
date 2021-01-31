import React from 'react';
import Link from '../src/components/Link';
import errorImage from '../public/404.jpg';
import QuizBackground from '../src/components/QuizBackground';
import {Widget} from '../src/components/Widget';
import styled from 'styled-components';



const Container = styled.div`
width: 100vw;
height: 100vh;
display:flex;
justify-content: center;
align-items:center

`;

const Wrapper = styled.div`
position: relative;
width: 100%;
max-width: 1100px;
height: 100%;
max-height: 600px;
display: flex;
align-items: flex-start;
flex-direction: column;
justify-content: space-between;

background: url(${errorImage}) no-repeat 80% center ;
`;

const WrapperLinks = styled.a`
position:absolute;
outline: 0;
text-decoration: none;
color: ${({ theme }) => theme.colors.contrastText};
background-color: ${({ theme }) => `${theme.colors.primary}`};
padding: 10px 15px;
margin-bottom: 8px;
cursor: pointer;
border-radius: ${({ theme }) => theme.borderRadius};
transition: .3s;
display: block;

&:hover,
&:focus {
  opacity: .5;
}
`;


export default function NotFound(){
    return(
			<Container>
			<Wrapper>
			<WrapperLinks as={Link} href={`/`}>Voltar para base</WrapperLinks>
			</Wrapper>
					
			</Container>
    )
}