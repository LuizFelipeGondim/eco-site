import styled from 'styled-components'

export const Header = styled.header`
    width: 100%;
    height: 100px;
    top: 0;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    box-shadow: 0px 2px 8px rgba(8, 35, 48, 0.24);
    padding: 10px 20px;
    position: fixed;

    .top {
        width: 90%;
        max-width: 1220px;
        height: 20px;

    }

    hr {
        margin: 12px 0px 10px 0px;
        border: 1px solid var(--medium-gray);
        width: 90%;
        max-width: 1220px;
    }

    .navbar {
        width: 90%;
        max-width: 1200px;
        height: 42px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .menu {
            display: flex;
            justify-content: space-between;
            width: 35%;
            min-width: 500px;

            li {
                color: var(--dark);
                transition: .5s ease;
                cursor: pointer;
                padding: 20px;

                &:hover {
                    background-color: var(--gray);
                }

                button {
                    display: none;
                }
            }
        }

        .hamburguer {
            width: 30px;
            height: 30px;

            background-color: transparent;
            border-radius: 5px;
            border: 0;

            position: relative;
            cursor: pointer;
            display: none;

            &:after, &:before {
                content: "";

                position: absolute;
                top: 35%;
                left: 15%;

                width: 70%;
                height: 5%;
                background-color: var(--dark);
                border-radius: 5px;

            }

            &:before {
                top: 55%;
            }

        }

        

        button {
            background-color: #fff;
            color: var(--green);
            border: 1px solid var(--green);
            border-radius: 20px;
            height: 40px;
            width: 80px;

            &:hover {
                background-color: var(--green);
                color: #fff;
                opacity: 1;
            }
        }
        @media screen and (max-width: 980px){
            .hamburguer {
                display: block !important;
                z-index: 999;
                transition-delay: 0.1s !important;
                transition: 1s ease;

            }

            button {
                display: none;
            }

            .menu {
                position: fixed;
                top: 0;
                right: -100%;
                z-index: 998;

                padding: 100px 20px;
                height: 100vh;
                min-width: 250px !important;
                background-color: var(--gray);

                flex-direction: column;
                justify-content: flex-start !important;
                transition: .5s ease;

                &.active {
                    right: 0;
                }

                li {
                    button {
                        display: block;
                    }
                }
            }

        }
    }

`
