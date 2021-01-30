import React from 'react';
import styled, {keyframes} from 'styled-components';
import {Widget} from '../Widget';

const spin = keyframes`
    0% { 
        transform: rotate(0deg); 
    }
  100% { 
      transform: rotate(360deg); 
    }
`;

const Loader = styled.div`
border: 5px solid #f3f3f3;
border-radius: 50%;
border-top: 5px solid #3498db;
width: 50px;
height: 50px;
-webkit-animation: ${spin} 2s linear infinite;; /* Safari */
animation: ${spin} 2s linear infinite;
j

`;


export default function LoadingWidget(){
    return(
        <Widget>
            <Widget.Header>
               <h2> Aguarde padawan...</h2>
        </Widget.Header>
            <Widget.Content>
                <Loader />
            </Widget.Content>
        </Widget>
    );
}