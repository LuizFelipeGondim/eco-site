import styled from 'styled-components'

export const Container = styled.div`

    display: flex;
    padding: 15px;
    max-width: 1400px;

    div {
        
        hr {
            margin: 15px 0px 10px 0px;
            border: 1px solid var(--medium-gray)
        }
    }

    @media (max-width: 850px) {
        & {
            flex-direction: column-reverse;
            align-items: center;
            padding: 10px;
        }
    }
`

export const SideOptions = styled.div`
    
    width: 250px;
    height: 280px;
    background-color: #fff;
    margin-left: 15px;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0px 24px 64px rgba(0, 0, 0, 0.04);

    .categories {
        overflow-y: scroll;
        max-height: 50px;
    }

    @media (max-width: 850px) {
        & {
            width: 100%;
            margin-right: 0px;
        }
    }

    @media (max-width: 850px) {
        & {
            width: 100%;
            margin-right: 0px;
        }
    }
`

export const Form = styled.form`

    background-color: #fff;
    flex: 1;
    padding: 25px;
    border-radius: 8px;
    font-size: 15px;
    box-shadow: 0px 24px 64px rgba(0, 0, 0, 0.04);

    @media (max-width: 850px) {
        & {
            margin-top: 25px;
            width: 100%;
        }
    }

`
