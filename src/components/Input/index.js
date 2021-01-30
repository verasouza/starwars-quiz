import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputDefault = styled.input`
height: 36px;
width: 100%;
background: rgba(100,125,102,0.6);
border: 1px solid ${({ theme }) => theme.colors.primary};
border-radius: 15px;
outline: none;
color: ${({ theme }) => theme.colors.contrastText};
padding: 0 16px;
outline: 0
`;

export default function Input({onChange, placeholder}){

    return(
        <div>
            <InputDefault onChange={onChange}
            placeholder={placeholder} />
        </div>
    );

}


Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
}