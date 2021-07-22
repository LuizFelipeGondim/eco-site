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
    height: 300px;
    background-color: #fff;
    margin-right: 25px;
    border-radius: 8px;
    box-shadow: 0px 24px 64px rgba(0, 0, 0, 0.04);

    .top {
        background: linear-gradient(277.67deg, #08AEEA -5.11%, #11A68C 27.36%, #15A261 59.71%, #4BD648 94.41%);
        height: 95px !important;
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
            border-radius: 50%;
        }

        p {
            font-weight: 300;
        }
    }

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px 25px;
        color: var(--dark) !important;


        li {
            margin-top: 5px;
            text-align: center;
            padding: 15px;
            width: 100%;
            border-radius: 8px;
            font-size: 15px;

            &:hover {
                border: 2px solid var(--green);
            }

            a {
                color: var(--dark) !important;
            }

            span {
                cursor: pointer;
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

    button {
        margin-top: 15px;
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

export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;
  align-self: center;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  label {
    position: absolute;
    width: 28px;
    height: 28px;
    background: var(--blue);
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border: 0;
    cursor: pointer;
    transition: background-color 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      display: none;
    }

    svg {
      width: 15px;
      height: 15px;
      color: #ffffff;
    }

    &:hover {
      background: var(--dark);
    }
  }
`

