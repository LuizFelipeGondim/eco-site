import styled from 'styled-components'

export const Input = styled.input`
    width: 100%;
    height: 50px;
    border-radius: 4px;
    border: 1px solid #E3E3E3;
    background-color: #fff; 
    padding: 0px 15px;
    transition: 1s box-shadow;

    &::placeholder {
        color: #A8A6A6
    }

    &:focus {
        box-shadow: 0px 8px 8px rgba(50, 50, 71, 0.08), 0px 8px 16px rgba(50, 50, 71, 0.06);
    }
`
