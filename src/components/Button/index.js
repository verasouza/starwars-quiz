import React from 'react';
import styled from 'styled-components';

const PrimaryButton = styled.button`
width: 100%;
height: 36px;
margin-top: 10px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer ;
background: ${({ theme }) => theme.colors.primary};
border: none;
border-radius: 15px;
color: ${({ theme }) => theme.colors.contrastText};
transition: backgrounnd 0.2s;

&:hover{
    background: ${({ theme }) => theme.colors.secondary};
}
`

export function Button(props){
    const{children} = props;

    return<PrimaryButton {...props}>{children}</PrimaryButton>;
}