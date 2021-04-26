import styled from 'styled-components'

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

export const Card = styled.div`
    
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 280px;
    background-color: #fff;
    margin-right: 25px;
    border-radius: 8px;
    box-shadow: 0px 24px 64px rgba(0, 0, 0, 0.04);

    .top {
        background: linear-gradient(277.67deg, #08AEEA -5.11%, #11A68C 27.36%, #15A261 59.71%, #4BD648 94.41%);
        height: 75px;
        border-radius: 5px 5px 0px 0px;
    }

    .info {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: -40px;

        img {
            width: 75px;
            margin-bottom: 5px;
        }

        p {
            font-weight: 300;
        }
    }

    ul {
        display: flex;
        margin-top: 15px;
        justify-content: center;
        padding: 25px;

        li {

            text-align: center;
            padding: 0px 10px;

            & + li {
                border-left: 1px solid var(--medium-gray);
            }

            strong {
                display: block;
                font-size: 16px;
                color: #3d3d4d;
            }

            span {
                display: block;
                font-size: 15px;
                margin-top: 4px;
                color: var(--dark);
            }

        }
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
    display: flex;
    flex-direction: column;
    align-items: flex-end;

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

    .line-3 {
        margin-top: 20px;
        width: 100%;
        display: flex;

        div {
            width: 30%;
            
            & + div {
                display: flex;
                align-items: center;
            }

            input[type="checkbox"] {
                height: 20px;
                width: 20px;
                margin-right: 5px;
                cursor: pointer;
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
        .line-1, .line-2, .line-3 {
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
