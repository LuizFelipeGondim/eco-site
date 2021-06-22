import styled from 'styled-components'

export const Sidebar = styled.div`
    height: 100vh;
    width: 210px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    color: var(--dark);
    transition: 0.6s;

    &.active {
        width: 55px;
    }

    &.active h1,
    &.active p {
        display: none;
    }

    .sidebar-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-content: center;
        height: 90px;
        padding: 0rem 1.2rem;
    }

    .sidebar-menu {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: calc(100vh - 90px);

        li {
            .main-li {
                width: 100%;
                height: 50px;
                display: flex;
                align-content: center;
                align-items: center;
                border: 1px solid var(--medium-gray);
                border-right: none;
                color: var(--dark);
                transition: all 500ms;

                &:hover {
                    background-color: var(--light-green);
                }

            }

            .active-option {
                border-left: 5px solid var(--dark);
                background-color: var(--light-green);
            }

            img {
                padding: 0rem 0.8rem;
            }

            ul {
                display:none;
                flex-direction: column;
                border: 1px solid var(--medium-gray);
                border-right: none;

                li {
                    display: flex;
                    align-content: center;
                    align-items: center;
                    width: 100%;
                    height: 50px;
                }

                p {
                    margin-left: 45px;
                    color: var(--dark);
                }

                & li:hover {
                    background-color: var(--light-green);
                }
            }

            &:hover ul{
                display: flex;
            }

        }


    }

    @media (max-width: 900px) {

        .sidebar-menu, .sidebar-header h1 {
            display: none;
        }

        & {
            width: 50px;
            position: fixed;
        }

        &.active {
            width: 210px;
            background-color: #fff;
        }

        &.active .sidebar-menu, 
        &.active .sidebar-header h1 {
            display: flex;
        }

        &.active .sidebar-menu p {
            display: block;
        }
    }

`
export const MainContent = styled.div`
    position: relative;
    margin-left: 210px;
    transition: 0.5s;
    min-height: calc(100vh - 100px);
    height: calc(100vh - 100px);
    
    h1 {
        width: 100%;
        padding: 0px 20px;
    }

    &.active {
        margin-left: 55px;
    }

    @media (max-width: 900px) {

        & {
            margin-left: 0px !important;  
            width: 100%;     
        }

    }

`
export const Header = styled.header`
    position: fixed;
    top: 0;
    z-index: 100;
    width: calc(100vw - 210px);
    background: #fff;
    height: 90px;
    padding: 0rem 2rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    transition: width 0.5s;

    &.active {
        width: calc(100vw - 55px);
    }

    hr {
        height: 40px;
        margin: 0rem 1.2rem;
    }

    p {
        font-size: 14px;
        margin: 0rem 0.5rem;
    }
    
    a img {
        width: 20px;
    }

    @media (max-width: 900px) {

        & {
            width: 100% !important;
        }

    }

`

export const Content = styled.main`
    margin-top: 90px;
    margin-bottom: 0px;
    max-width: calc(100vw - 210px);
    height: 100%;
    background-color: var(--gray);
    transition: width 0.5s;
    padding: 20px 0px;

    &.active {
        max-width: calc(100vw - 55px);
    }

    @media (max-width: 900px) {

        & {
            width: 100%;
            max-width: 100%;
        }

        &.active {
            max-width: 100%;
            width: 100%;
        }

    }
`