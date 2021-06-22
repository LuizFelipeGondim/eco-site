import styled from 'styled-components'

export const FormContainer = styled.div`

    background-color: #fff;
    max-width: 1000px;
    margin: 25px;
    padding: 25px;
    border-radius: 8px;
    font-size: 15px;
    box-shadow: 0px 24px 64px rgba(0, 0, 0, 0.04);
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    form {
        width: 100%;

        .error {
                display: block;
                width: 100% !important;
                background-color: var(--red);
                opacity: 0.9;
                color: #fff;
                padding: 5px;
                border-radius: 5px;
                margin-top: 5px;
            }
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
        margin-bottom: 25px;
        justify-content: space-between;

        div {
            width: 47%;

            input {
                width: 100%;
            }

            input[type="checkbox"] {
                height: 20px;
                width: 20px;
                margin-right: 5px;
                cursor: pointer;
            }
        }
    }

    .line-2 {
        margin-top: 20px;
        margin-bottom: 25px;
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

    @media (max-width: 900px) {
        .line-1, .line-2 {
            flex-direction: column;
            margin-bottom: 0;
            div{
                margin-bottom: 25px;
                width: 100%;
            }
        }
    }
`
