import React from 'react';
import styled, {keyframes} from 'styled-components';
import {Widget} from '../Widget';
import Lottie from 'react-lottie';
import bb8 from '../../../public/3010-bb8';

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

const defaulOptions = {
    loop: true,
    autoplay: true,
    animationData: bb8,
    rendererSettings:{
        preserveAspectioRatio:"xMidYMid slice"
    }

}

export default function LoadingWidget({name}){
    return(
        <Widget>
            <Widget.Header>
               <h2> Aguarde padawan {name}...</h2>
        </Widget.Header>
            <Widget.Content>
                <Lottie 
                options={defaulOptions}
                height={200}
                width={200}
                />
            </Widget.Content>
        </Widget>
    );
}