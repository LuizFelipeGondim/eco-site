import styled from 'styled-components'

export const Sidebar = styled.div`
    height: 100%;
    width: 240px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    color: var(--dark);

    .sidebar-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-content: center;
        height: 90px;
        padding: 0rem 1rem;
    }

    .sidebar-menu {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        li {
            height: 50px;
            display: flex;
            align-content: center;
            border: 1px solid var(--medium-gray);
            border-right: none;

            a {
                color: var(--dark);
                display: flex;
                align-content: center;
                align-items: center;
            }

            img {
                padding: 0 0.5rem
            }

        }

        .active {
            border-left: 5px solid var(--dark);
            background-color: var(--light-green);
        }

    }

`
export const MainContent = styled.div`
    position: relative;
    margin-left: 240px;
    display: flex;
    flex-direction: column;
`
export const Header = styled.header`
    position: fixed;
    top: 0;
    z-index: 100;
    width: calc(100vw - 240px);
    background: #fff;
    height: 90px;
    padding: 0rem 2rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    hr {
        height: 40px;
        margin: 0rem 1.2rem;
    }

    p {
        margin: 0rem 0.5rem;
    }

`

export const Content = styled.main`
    margin-top: 90px;
    width: calc(100vw - 240px);
    height: calc(100vh - 90px);
    background-color: var(--gray);
`




