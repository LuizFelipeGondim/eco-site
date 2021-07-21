import styled from 'styled-components'

export const Main = styled.main`
    margin-top: 100px;
    min-height: calc(70vh);
    display: flex;
    justify-content: center;
`

export const Container = styled.div`

    display: flex;
    padding: 25px;
    max-width: 1400px;

    @media (max-width: 850px) {
        & {
            flex-direction: column;
            align-items: center;
            padding: 10px;
        }
    }
`



export const Form = styled.form`

    background-color: #fff;
    flex: 1;
    height: 300px;
    padding: 25px;
    border-radius: 8px;
    font-size: 15px;
    box-shadow: 0px 24px 64px rgba(0, 0, 0, 0.04);
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    button {
        margin-top: 15px;
    }

    div {
        width: 100%;
        
        hr {
            margin: 15px 0px 10px 0px;
            border: 1px solid var(--medium-gray)
        }
    }

    input, select {
        margin-top: 5px;
    }

    .line-1 {
        width: 100%;
        display: flex;
        justify-content: space-between;

        div {
            width: 47%;

            input {
                width: 100%;
            }
        }
    }

    .line-2 {
        margin-top: 20px;
        width: 100%;
        display: flex;
        justify-content: space-between;

        div {
            width: 30%;

            input, select {
                width: 100%;
            }
        }
    }

    @media (max-width: 850px) {
        & {
            margin-top: 25px;
            width: 100%;
        }
    }

    @media (max-width: 500px) {
        .line-1, .line-2{
            flex-direction: column;

            div{
                width: 100%;

                input, select {
                    margin-bottom: 10px;
                }
            }
        }
    }
`



