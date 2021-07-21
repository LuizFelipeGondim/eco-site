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



export const Content = styled.div`
    margin-top: -30px;
    flex: 1;
    padding: 25px;
    border-radius: 8px;
    font-size: 15px;
    display: flex;
    flex-direction: column;

    .doubt {
        width: 100% !important;
        padding: 10px;
        background-color: #fff;
        border-radius: 8px;
        margin-top: 10px;
        box-shadow: 0px 24px 64px rgba(0, 0, 0, 0.04);

        &:hover {
            box-shadow: 0px 24px 64px rgba(0, 0, 0, 0.08);
        }

        .doubt-footer {
            display: flex;
            width: 100%;
            justify-content: space-between;

            img:hover {
                opacity: 0.8;
                cursor: pointer;
            }

            & > div {
                margin-top: 10px;
                display: flex;
                align-items: center;

                span {
                    border: 1px solid var(--green);
                    font-weight: 500;
                    color: var(--green);
                    border-radius: 5px;
                    padding: 5px 8px;
                    margin-right: 8px;
                    cursor: pointer;

                    &:hover {
                        background-color: var(--green);
                        color: #fff;
                    }
                }
            }
        }


    }

`



