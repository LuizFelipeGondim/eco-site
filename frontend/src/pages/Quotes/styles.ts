import styled from 'styled-components'

export const Main = styled.main`
    margin-top: 100px;
    min-height: calc(100vh);
    display: flex;
    justify-content: center;
    padding: 25px;
    width: 100%;
    background-color: var(--gray);
`

export const Content = styled.div`

    max-width: 1180px;
    width: 100%;
    border-radius: 8px;

    hr {
        margin: 10px 0px 20px 0px;
        border: 1px solid var(--medium-gray)
    }

    .cards-container {
        margin-bottom: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        h2 {
            color: var(--green);
        }
        hr {
            border: 1px solid var(--green);
        }

        .card {
            width: 360px;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            padding: 5px;

            iframe {
                border: none;
                height: 300px; 
                border-radius: 8px;
                margin-bottom: 15px;
                background-color: #e6e6e6;
            }
        }
    }

    @media screen and (max-width: 1130px){
        .cards-container{
            justify-content: center;
            .card {
                width: 98%;

                iframe {
                    min-width: 100px;
                }
            }
        }
    }
`