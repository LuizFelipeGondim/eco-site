import styled from 'styled-components'

export const Main = styled.main`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 100px;

    .overlay {
        z-index: 1;
        width: 100%;
        height: 400px;
        left: 0;
        top: 0;
        position: absolute;
        background: rgba(15, 15, 15, 0.5);
    }
`
export const Banner = styled.img.attrs(props => ({
    src: props.src,
}))`
    width: 100%;
    height: 400px;
    position: relative;
`

export const Content = styled.div`

`


