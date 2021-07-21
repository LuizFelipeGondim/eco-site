import styled from 'styled-components'

export const FooterBox = styled.footer`
    bottom: 0;
    left: 0;
    height: 360px;

    .footer-top {
        min-height: 240px;
        background-color: var(--medium-gray);
        display: flex;
        justify-content: center;
        align-items: center;
        

        .content {
            display: flex;
            max-width: 1200px;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 90%;
            padding: 20px;

            ul {
                margin-right: 5%;

                h3 {
                    margin-bottom: 10px;
                }

                a {
                    color: rgba(51, 66, 56, 0.6);

                    &:hover {
                        color: #334238;
                    }
                }
            }

            form {
                display: flex;
                flex-direction: column;

                label {
                    margin: 10px 0px;
                }

                input {
                    margin-bottom: 10px;
                }
            }
        }
        @media (max-width: 1030px) {
            ul, form {
                margin-top: 15px;
            }
        }     
    }

    .footer-bottom {
        min-height: 120px;
        display: flex;
        justify-content: center;

        .content {
            display: flex;
            max-width: 1200px;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 20px;
            width: 90%;

            .author {
                display: flex;
                align-items: center;
                margin-right: 10px;

                img {
                    width: 60px;
                    margin-right: 10px;
                }
            }

            .contact {
                display: flex;
                flex-direction: column;
                align-items: flex-end;

                h3 {
                    margin-top: 10px;
                }

                span {
                    margin-left: 15px;
                }

                .social-medias {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 20px;
                    width: 150px;

                    img {
                        height: 40px;
                        width: 40px;
                        background-color: var(--dark-gray);
                        padding: 7px;
                        border-radius: 16px;
                        transition: 0.8s;

                        &:hover {
                            opacity: 0.7;
                        }
                    }
                }
            }
        }

        @media (max-width: 440px) {
            .content {
                justify-content: center;
            }
        }  
    }

`